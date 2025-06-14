from .auth import auth_bp
from .articles import articles_bp
from .categories import categories_bp
from .tags import tags_bp
from .admin_articles import admin_articles_bp

def init_routes(app):
    app.register_blueprint(auth_bp)
    app.register_blueprint(articles_bp)
    app.register_blueprint(categories_bp)
    app.register_blueprint(tags_bp)
    app.register_blueprint(admin_articles_bp)