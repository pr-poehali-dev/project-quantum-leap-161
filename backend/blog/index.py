import json
import os
import psycopg2

SCHEMA = "t_p87716929_project_quantum_leap"

def get_conn():
    return psycopg2.connect(os.environ["DATABASE_URL"])

def handler(event: dict, context) -> dict:
    """Возвращает список статей блога или одну статью по slug."""
    headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
        "Content-Type": "application/json",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": headers, "body": ""}

    params = event.get("queryStringParameters") or {}
    slug = params.get("slug")

    conn = get_conn()
    cur = conn.cursor()

    if slug:
        cur.execute(
            f"""SELECT id, title, slug, excerpt, content, category, read_time, created_at
                FROM {SCHEMA}.blog_posts
                WHERE slug = '{slug}' AND published = true""",
        )
        row = cur.fetchone()
        cur.close()
        conn.close()
        if not row:
            return {"statusCode": 404, "headers": headers, "body": json.dumps({"error": "Not found"})}
        post = {
            "id": row[0], "title": row[1], "slug": row[2],
            "excerpt": row[3], "content": row[4], "category": row[5],
            "read_time": row[6], "created_at": str(row[7]),
        }
        return {"statusCode": 200, "headers": headers, "body": json.dumps(post, ensure_ascii=False)}

    cur.execute(
        f"""SELECT id, title, slug, excerpt, category, read_time, created_at
            FROM {SCHEMA}.blog_posts
            WHERE published = true
            ORDER BY created_at DESC"""
    )
    rows = cur.fetchall()
    cur.close()
    conn.close()

    posts = [
        {
            "id": r[0], "title": r[1], "slug": r[2],
            "excerpt": r[3], "category": r[4],
            "read_time": r[5], "created_at": str(r[6]),
        }
        for r in rows
    ]
    return {"statusCode": 200, "headers": headers, "body": json.dumps(posts, ensure_ascii=False)}
