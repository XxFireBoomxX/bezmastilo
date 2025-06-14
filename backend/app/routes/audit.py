from app.models import AuditLog
from app import db
import json

def log_audit(user_id, action, article_id=None, details=None):
    log = AuditLog(
        user_id=user_id,
        article_id=article_id,
        action=action,
        details=json.dumps(details) if details else None
    )
    db.session.add(log)
    db.session.commit()
