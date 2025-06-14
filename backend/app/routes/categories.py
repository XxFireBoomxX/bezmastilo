from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from app.models import Category, User
from app import db

categories_bp = Blueprint('categories', __name__, url_prefix='/api/categories')

# Листва всички категории (публично)
@categories_bp.route("/", methods=["GET"])
def list_categories():
    categories = Category.query.all()
    return jsonify([
        {"id": c.id, "name": c.name, "slug": c.slug}
        for c in categories
    ]), 200

# Създава нова категория (само admin)
@categories_bp.route("/", methods=["POST"])
@jwt_required()
def create_category():
    user_id = get_jwt_identity()
    user = User.query.get(int(user_id))
    if not user or not user.is_admin:
        return jsonify({"error": "Admin only"}), 403
    data = request.get_json()
    name = data.get("name")
    slug = data.get("slug")
    if not name or not slug:
        return jsonify({"error": "Missing name or slug"}), 400
    category = Category(name=name, slug=slug)
    db.session.add(category)
    db.session.commit()
    return jsonify({"id": category.id, "name": category.name, "slug": category.slug}), 201

# Триене на категория (само admin)
@categories_bp.route("/<int:cat_id>", methods=["DELETE"])
@jwt_required()
def delete_category(cat_id):
    user_id = get_jwt_identity()
    user = User.query.get(int(user_id))
    if not user or not user.is_admin:
        return jsonify({"error": "Admin only"}), 403
    category = Category.query.get_or_404(cat_id)
    db.session.delete(category)
    db.session.commit()
    return jsonify({"message": "Category deleted"}), 200
