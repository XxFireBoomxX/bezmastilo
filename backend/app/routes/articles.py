from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from app.models import Article, User, Category, Tag, AuditLog
from app import db
from datetime import datetime
import json
from sqlalchemy import or_

articles_bp = Blueprint('articles', __name__, url_prefix='/api/articles')

# --- Audit Log Helper ---
def log_audit(user_id, action, article_id=None, details=None):
    log = AuditLog(
        user_id=user_id,
        article_id=article_id,
        action=action,
        details=json.dumps(details) if details else None
    )
    db.session.add(log)
    db.session.commit()

def serialize_article(article):
    return {
        "id": article.id,
        "title": article.title,
        "slug": article.slug,
        "link": article.link,
        "date": article.date.isoformat() if article.date else None,
        "image_url": article.image_url,
        "content": article.content,
        "post_images": json.loads(article.post_images) if article.post_images else [],
        "post_links": json.loads(article.post_links) if article.post_links else [],
        "status": article.status,
        "author_id": article.author_id,
        "created_at": article.created_at.isoformat() if article.created_at else None,
        "updated_at": article.updated_at.isoformat() if article.updated_at else None,
        "meta_description": article.meta_description,
        "meta_image": article.meta_image,
        "category": {
            "id": article.category.id,
            "name": article.category.name,
            "slug": article.category.slug
        } if article.category else None,
        "tags": [
            {"id": tag.id, "name": tag.name, "slug": tag.slug}
            for tag in article.tags
        ]
    }

@articles_bp.route("/", methods=["GET"])
def list_articles():
    articles = Article.query.filter_by(status="published").order_by(Article.date.desc()).all()
    return jsonify([serialize_article(a) for a in articles]), 200

@articles_bp.route("/<slug>", methods=["GET"])
def get_article(slug):
    article = Article.query.filter_by(slug=slug, status="published").first()
    if not article:
        return jsonify({"error": "Article not found"}), 404
    return jsonify(serialize_article(article)), 200

@articles_bp.route("/", methods=["POST"])
@jwt_required()
def create_article():
    data = request.get_json()
    user_id = get_jwt_identity()
    user = User.query.get(int(user_id))
    if not user or not user.is_admin:
        return jsonify({"error": "Admin only"}), 403

    # Изваждаме category_id и tag_ids (ако ги има)
    category_id = data.get("category_id")
    tag_ids = data.get("tag_ids", [])

    article = Article(
        title=data.get("title"),
        slug=data.get("slug"),
        link=data.get("link"),
        date=datetime.fromisoformat(data.get("date")) if data.get("date") else datetime.now(),
        image_url=data.get("image_url"),
        content=data.get("content"),
        post_images=json.dumps(data.get("post_images", [])),
        post_links=json.dumps(data.get("post_links", [])),
        status=data.get("status", "draft"),
        author_id=user.id,
        category_id=category_id,
        created_at=datetime.now(),
        updated_at=datetime.now(),
        meta_description=data.get("meta_description"),
        meta_image=data.get("meta_image")
    )
    db.session.add(article)
    db.session.commit()

    # Асоциирай таговете, ако има
    if tag_ids:
        tags = Tag.query.filter(Tag.id.in_(tag_ids)).all()
        article.tags = tags
        db.session.commit()

    # --- Audit Log ---
    log_audit(user.id, "created", article.id, {"title": article.title})

    return jsonify(serialize_article(article)), 201

@articles_bp.route("/<int:article_id>", methods=["PUT"])
@jwt_required()
def update_article(article_id):
    user_id = get_jwt_identity()
    user = User.query.get(int(user_id))
    if not user or not user.is_admin:
        return jsonify({"error": "Admin only"}), 403

    article = Article.query.get_or_404(article_id)
    data = request.get_json()
    article.title = data.get("title", article.title)
    article.slug = data.get("slug", article.slug)
    article.link = data.get("link", article.link)
    article.date = datetime.fromisoformat(data.get("date")) if data.get("date") else article.date
    article.image_url = data.get("image_url", article.image_url)
    article.content = data.get("content", article.content)
    article.post_images = json.dumps(data.get("post_images", json.loads(article.post_images) if article.post_images else []))
    article.post_links = json.dumps(data.get("post_links", json.loads(article.post_links) if article.post_links else []))
    article.status = data.get("status", article.status)
    article.meta_description = data.get("meta_description", article.meta_description)
    article.meta_image = data.get("meta_image", article.meta_image)
    article.updated_at = datetime.now()

    # Update category/тагове, ако са подадени
    if "category_id" in data:
        article.category_id = data["category_id"]
    if "tag_ids" in data:
        tags = Tag.query.filter(Tag.id.in_(data["tag_ids"])).all()
        article.tags = tags

    db.session.commit()

    # --- Audit Log ---
    log_audit(user.id, "edited", article.id, {"title": article.title})

    return jsonify(serialize_article(article)), 200

@articles_bp.route("/<int:article_id>", methods=["DELETE"])
@jwt_required()
def delete_article(article_id):
    user_id = get_jwt_identity()
    user = User.query.get(int(user_id))
    if not user or not user.is_admin:
        return jsonify({"error": "Admin only"}), 403

    article = Article.query.get_or_404(article_id)
    db.session.delete(article)
    db.session.commit()

    # --- Audit Log ---
    log_audit(user.id, "deleted", article.id, {"title": article.title})

    return jsonify({"message": "Article deleted"}), 200

@articles_bp.route("/search", methods=["GET"])
def search_articles():
    q = request.args.get("q", "")
    category_id = request.args.get("category_id")
    tag_id = request.args.get("tag_id")
    page = request.args.get("page", 1, type=int)
    per_page = request.args.get("per_page", 10, type=int)

    query = Article.query.filter(Article.status == "published")

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
