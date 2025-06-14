from app import create_app
from .auth import auth_bp

app = create_app()

if __name__ == "__main__":
    app.register_blueprint(auth_bp)
    app.run(debug=True)
