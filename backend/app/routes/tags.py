from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from app.models import Tag, User
from app import db

tags_bp = Blueprint('tags', __name__, url_prefix='/api/tags')

# Листва всички тагове (публично)
@tags_bp.route("/", methods=["GET"])
def list_tags():
    tags = Tag.query.all()
    return jsonify([
        {"id": t.id, "name": t.name, "slug": t.slug}
        for t in tags
    ]), 200

# Създава нов таг (само admin)
@tags_bp.route("/", methods=["POST"])
@jwt_required()
def create_tag():
    user_id = get_jwt_identity()
    user = User.query.get(int(user_id))
    if not user or not user.is_admin:
        return jsonify({"error": "Admin only"}), 403
    data = request.get_json()
    name = data.get("name")
    slug = data.get("slug")
    if not name or not slug:
        return jsonify({"error": "Missing name or slug"}), 400
    tag = Tag(name=name, slug=slug)
    db.session.add(tag)
    db.session.commit()
    return jsonify({"id": tag.id, "name": tag.name, "slug": tag.slug}), 201

# Триене на таг (само admin)
@tags_bp.route("/<int:tag_id>", methods=["DELETE"])
@jwt_required()
def delete_tag(tag_id):
    user_id = get_jwt_identity()
    user = User.query.get(int(user_id))
    if not user or not user.is_admin:
        return jsonify({"error": "Admin only"}), 403
    tag = Tag.query.get_or_404(tag_id)
    db.session.delete(tag)
    db.session.commit()
    return jsonify({"message": "Tag deleted"}), 200
