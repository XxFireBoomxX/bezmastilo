from app import create_app, db
from app.models import User

app = create_app()

with app.app_context():
    username = "admin"
    email = "admin@gmail.com"
    password = "admin"   # смени го за истинска среда!
    avatar_url = None  # ако имаш

    # Проверка дали вече има такъв потребител
    user = User.query.filter_by(username=username).first()
    if not user:
        user = User(username=username, email=email, is_admin=True, avatar_url=avatar_url)
        user.set_password(password)
        db.session.add(user)
        db.session.commit()
        print(f"Admin user '{username}' е създаден успешно!")
    else:
        print(f"User '{username}' вече съществува.")
