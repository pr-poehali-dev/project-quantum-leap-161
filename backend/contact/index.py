import json
import os
import psycopg2

SCHEMA = "t_p87716929_project_quantum_leap"

def get_conn():
    return psycopg2.connect(os.environ["DATABASE_URL"])

def handler(event: dict, context) -> dict:
    """Сохраняет сообщение из формы обратной связи."""
    headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
        "Content-Type": "application/json",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": headers, "body": ""}

    body = json.loads(event.get("body") or "{}")
    name = body.get("name", "").strip()
    email = body.get("email", "").strip()
    message = body.get("message", "").strip()

    if not name or not email or not message:
        return {
            "statusCode": 400,
            "headers": headers,
            "body": json.dumps({"error": "Заполните все поля"}, ensure_ascii=False),
        }

    conn = get_conn()
    cur = conn.cursor()
    name_esc = name.replace("'", "''")
    email_esc = email.replace("'", "''")
    message_esc = message.replace("'", "''")
    cur.execute(
        f"""INSERT INTO {SCHEMA}.contact_messages (name, email, message)
            VALUES ('{name_esc}', '{email_esc}', '{message_esc}')"""
    )
    conn.commit()
    cur.close()
    conn.close()

    return {
        "statusCode": 200,
        "headers": headers,
        "body": json.dumps({"success": True, "message": "Сообщение отправлено!"}, ensure_ascii=False),
    }
