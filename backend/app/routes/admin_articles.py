from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from sqlalchemy import or_
from app.models import Article, User, Tag, AuditLog
from app.routes.articles import serialize_article
from app import db
import json

admin_articles_bp = Blueprint('admin_articles', __name__, url_prefix='/api/articles/admin')

@admin_articles_bp.route("/all", methods=["GET"])
@jwt_required()
def admin_list_all_articles():
    user_id = get_jwt_identity()
    user = User.query.get(int(user_id))
    if not user or not user.is_admin:
        return jsonify({"error": "Admin only"}), 403
    articles = Article.query.order_by(Article.date.desc()).all()
    return jsonify([serialize_article(a) for a in articles]), 200

@admin_articles_bp.route("/drafts", methods=["GET"])
@jwt_required()
def admin_list_draft_articles():
    user_id = get_jwt_identity()
    user = User.query.get(int(user_id))
    if not user or not user.is_admin:
        return jsonify({"error": "Admin only"}), 403
    articles = Article.query.filter_by(status="draft").order_by(Article.date.desc()).all()
    return jsonify([serialize_article(a) for a in articles]), 200

@admin_articles_bp.route("/search", methods=["GET"])
@jwt_required()
def admin_search_articles():
    user_id = get_jwt_identity()
    user = User.query.get(int(user_id))
    if not user or not user.is_admin:
        return jsonify({"error": "Admin only"}), 403

    q = request.args.get("q", "")
    category_id = request.args.get("category_id")
    tag_id = request.args.get("tag_id")
    page = request.args.get("page", 1, type=int)
    per_page = request.args.get("per_page", 10, type=int)

    query = Article.query

    if q:
        query = query.filter(
            or_(
                Article.title.ilike(f"%{q}%"),
                Article.content.ilike(f"%{q}%"),
                Article.slug.ilike(f"%{q}%")
            )
        )
    if category_id:
        query = query.filter(Article.category_id == category_id)
    if tag_id:
        query = query.join(Article.tags).filter(Tag.id == tag_id)

    pagination = query.order_by(Article.date.desc()).paginate(page=page, per_page=per_page, error_out=False)
    articles = pagination.items

    return jsonify({
        "page": page,
        "per_page": per_page,
        "total": pagination.total,
        "pages": pagination.pages,
        "results": [serialize_article(a) for a in articles]
    }), 200

# --- AUDIT LOG: виж последните действия на ruler-a! ---

@admin_articles_bp.route("/audit", methods=["GET"])
@jwt_required()
def admin_audit_logs():
    user_id = get_jwt_identity()
    user = User.query.get(int(user_id))
    if not user or not user.is_admin:
        return jsonify({"error": "Admin only"}), 403
    logs = AuditLog.query.order_by(AuditLog.timestamp.desc()).limit(100).all()
    return jsonify([
        {
            "id": log.id,
            "user_id": log.user_id,
            "article_id": log.article_id,
            "action": log.action,
            "timestamp": log.timestamp.isoformat(),
            "details": json.loads(log.details) if log.details else None
        }
        for log in logs
    ]), 200

# --- Функция за записване на лог (ползваш я в articles.py за create/edit/delete) ---
def log_audit(user_id, action, article_id=None, details=None):
    log = AuditLog(
        user_id=user_id,
        article_id=article_id,
        action=action,
        details=json.dumps(details) if details else None
    )
    db.session.add(log)
    db.session.commit()
