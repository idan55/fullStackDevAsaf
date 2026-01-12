use actix_web::{get, post, put, delete, web, HttpResponse, Responder};
use sqlx::SqlitePool;

use crate::models::trainer::{CreateTrainer, Trainer, UpdateTrainer};

#[get("/trainers")]
pub async fn list_trainers(pool:web::Data<SqlitePool>)->impl Responder{
    let rows = sqlx::query_as::<_, Trainer>(
        "SELECT id, name, specialty, phone, hire_date FROM trainers",
    )
    .fetch_all(pool.get_ref())
    .await;
match rows {
    Ok(data) => HttpResponse::Ok().json(data),
    Err(e) => HttpResponse::InternalServerError().body(e.to_string()),
}
}

#[get("/trainers/{id}")]
pub async fn get_trainer(pool: web::Data<SqlitePool>, id: web::Path<i64>) -> impl Responder {
    let row = sqlx::query_as::<_, Trainer>(
        "SELECT id, name, specialty, phone, hire_date FROM trainers WHERE id = ?",
    )
    .bind(*id)
    .fetch_optional(pool.get_ref())
    .await;

    match row {
        Ok(Some(t)) => HttpResponse::Ok().json(t),
        Ok(None) => HttpResponse::NotFound().body("Trainer not found"),
        Err(e) => HttpResponse::InternalServerError().body(e.to_string()),
    }
}

#[post("/trainers")]
pub async fn create_trainer(
    pool: web::Data<SqlitePool>,
    payload: web::Json<CreateTrainer>,
) -> impl Responder {
    let res = sqlx::query(
        "INSERT INTO trainers (name, specialty, phone, hire_date) VALUES (?, ?, ?, ?)",
    )
    .bind(&payload.name)
    .bind(&payload.specialty)
    .bind(&payload.phone)
    .bind(&payload.hire_date)
    .execute(pool.get_ref())
    .await;

    match res {
        Ok(r) => HttpResponse::Created().json(serde_json::json!({ "id": r.last_insert_rowid() })),
        Err(e) => HttpResponse::BadRequest().body(e.to_string()),
    }
}

#[put("/trainers/{id}")]
pub async fn update_trainer(
    pool: web::Data<SqlitePool>,
    id: web::Path<i64>,
    payload: web::Json<UpdateTrainer>,
) -> impl Responder {
    let res = sqlx::query(
        "UPDATE trainers SET
            name = COALESCE(?, name),
            specialty = COALESCE(?, specialty),
            phone = COALESCE(?, phone),
            hire_date = COALESCE(?, hire_date)
        WHERE id = ?",
    )
    .bind(&payload.name)
    .bind(&payload.specialty)
    .bind(&payload.phone)
    .bind(&payload.hire_date)
    .bind(*id)
    .execute(pool.get_ref())
    .await;

    match res {
        Ok(r) if r.rows_affected() == 0 => HttpResponse::NotFound().body("Trainer not found"),
        Ok(_) => HttpResponse::Ok().body("Updated"),
        Err(e) => HttpResponse::BadRequest().body(e.to_string()),
    }
}

#[delete("/trainers/{id}")]
pub async fn delete_trainer(pool: web::Data<SqlitePool>, id: web::Path<i64>) -> impl Responder {
    let res = sqlx::query("DELETE FROM trainers WHERE id = ?")
        .bind(*id)
        .execute(pool.get_ref())
        .await;

    match res {
        Ok(r) if r.rows_affected() == 0 => HttpResponse::NotFound().body("Trainer not found"),
        Ok(_) => HttpResponse::Ok().body("Deleted"),
        Err(e) => HttpResponse::BadRequest().body(e.to_string()),
    }
}
