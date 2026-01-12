use actix_web::{delete, get, post, put, web, HttpResponse, Responder};
use sqlx::SqlitePool;

use crate::models::session::{CreateSession, Session, SessionWithNames, UpdateSession};

#[get("/sessions")]
pub async fn list_sessions(pool: web::Data<SqlitePool>) -> impl Responder {
    let rows = sqlx::query_as::<_, Session>(
        "SELECT id, trainer_id, client_id, session_date, duration_minutes
         FROM sessions",
    )
    .fetch_all(pool.get_ref())
    .await;

    match rows {
        Ok(data) => HttpResponse::Ok().json(data),
        Err(e) => HttpResponse::InternalServerError().body(e.to_string()),
    }
}

#[get("/sessions/{id}")]
pub async fn get_session(pool: web::Data<SqlitePool>, id: web::Path<i64>) -> impl Responder {
    let row = sqlx::query_as::<_, Session>(
        "SELECT id, trainer_id, client_id, session_date, duration_minutes
         FROM sessions
         WHERE id = ?",
    )
    .bind(*id)
    .fetch_optional(pool.get_ref())
    .await;

    match row {
        Ok(Some(session)) => HttpResponse::Ok().json(session),
        Ok(None) => HttpResponse::NotFound().body("Session not found"),
        Err(e) => HttpResponse::InternalServerError().body(e.to_string()),
    }
}

#[post("/sessions")]
pub async fn create_session(
    pool: web::Data<SqlitePool>,
    payload: web::Json<CreateSession>,
) -> impl Responder {
    let res = sqlx::query(
        "INSERT INTO sessions
         (trainer_id, client_id, session_date, duration_minutes)
         VALUES (?, ?, ?, ?)",
    )
    .bind(payload.trainer_id)
    .bind(payload.client_id)
    .bind(&payload.session_date)
    .bind(payload.duration_minutes)
    .execute(pool.get_ref())
    .await;

    match res {
        Ok(r) => HttpResponse::Created().json(serde_json::json!({ "id": r.last_insert_rowid() })),
        Err(e) => HttpResponse::BadRequest().body(e.to_string()),
    }
}

#[put("/sessions/{id}")]
pub async fn update_session(
    pool: web::Data<SqlitePool>,
    id: web::Path<i64>,
    payload: web::Json<UpdateSession>,
) -> impl Responder {
    let res = sqlx::query(
        "
        UPDATE sessions SET
            trainer_id = COALESCE(?, trainer_id),
            client_id = COALESCE(?, client_id),
            session_date = COALESCE(?, session_date),
            duration_minutes = COALESCE(?, duration_minutes)
        WHERE id = ?
        ",
    )
    .bind(payload.trainer_id)
    .bind(payload.client_id)
    .bind(&payload.session_date)
    .bind(payload.duration_minutes)
    .bind(*id)
    .execute(pool.get_ref())
    .await;

    match res {
        Ok(r) if r.rows_affected() == 0 => HttpResponse::NotFound().body("Session not found"),
        Ok(_) => HttpResponse::Ok().body("Session updated"),
        Err(e) => HttpResponse::BadRequest().body(e.to_string()),
    }
}

#[delete("/sessions/{id}")]
pub async fn delete_session(pool: web::Data<SqlitePool>, id: web::Path<i64>) -> impl Responder {
    let res = sqlx::query("DELETE FROM sessions WHERE id = ?")
        .bind(*id)
        .execute(pool.get_ref())
        .await;

    match res {
        Ok(r) if r.rows_affected() == 0 => HttpResponse::NotFound().body("Session not found"),
        Ok(_) => HttpResponse::Ok().body("Session deleted"),
        Err(e) => HttpResponse::BadRequest().body(e.to_string()),
    }
}

#[get("/sessions/with-names")]
pub async fn list_sessions_with_names(pool: web::Data<SqlitePool>) -> impl Responder {
    let sql = r#"
        SELECT
            s.id,
            s.session_date,
            s.duration_minutes,
            s.trainer_id,
            t.name AS trainer_name,
            s.client_id,
            c.name AS client_name
        FROM sessions s
        JOIN trainers t ON t.id = s.trainer_id
        JOIN clients  c ON c.id = s.client_id
        ORDER BY s.session_date
    "#;

    let rows = sqlx::query_as::<_, SessionWithNames>(sql)
        .fetch_all(pool.get_ref())
        .await;

    match rows {
        Ok(data) => HttpResponse::Ok().json(data),
        Err(e) => HttpResponse::InternalServerError().body(e.to_string()),
    }
}
