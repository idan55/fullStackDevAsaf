use actix_web::{delete, get, post, put, web, HttpResponse, Responder};
use sqlx::SqlitePool;

use crate::models::client::{Client, CreateClient, UpdateClient};

#[get("/clients")]
pub async fn list_clients(pool: web::Data<SqlitePool>) -> impl Responder {
    let rows = sqlx::query_as::<_, Client>(
        "SELECT id, name, age, membership_type, join_date FROM clients",
    )
        .fetch_all(pool.get_ref())
        .await;

    match rows {
        Ok(data) => HttpResponse::Ok().json(data),
        Err(e) => HttpResponse::InternalServerError().body(e.to_string()),
    }
}

#[get("/clients/{id}")]
pub async fn get_client(pool: web::Data<SqlitePool>, id: web::Path<i64>) -> impl Responder {
    let row = sqlx::query_as::<_, Client>(
        "SELECT id, name, age, membership_type, join_date FROM clients WHERE id = ?",
    )
    .bind(*id)
    .fetch_optional(pool.get_ref())
    .await;

    match row {
        Ok(Some(c)) => HttpResponse::Ok().json(c),
        Ok(None) => HttpResponse::NotFound().body("Client not found"),
        Err(e) => HttpResponse::InternalServerError().body(e.to_string()),
    }
}

#[post("/clients")]
pub async fn create_client(
    pool: web::Data<SqlitePool>,
    payload: web::Json<CreateClient>,
) -> impl Responder {
    let res = sqlx::query(
        "INSERT INTO clients (name, age, membership_type, join_date) VALUES (?, ?, ?, ?)",
    )
    .bind(&payload.name)
    .bind(payload.age)
    .bind(&payload.membership_type)
    .bind(&payload.join_date)
    .execute(pool.get_ref())
    .await;

    match res {
        Ok(r) => HttpResponse::Created().json(serde_json::json!({ "id": r.last_insert_rowid() })),
        Err(e) => HttpResponse::BadRequest().body(e.to_string()),
    }
}

#[put("/clients/{id}")]
pub async fn update_client(
    pool: web::Data<SqlitePool>,
    id: web::Path<i64>,
    payload: web::Json<UpdateClient>,
) -> impl Responder {
    let res = sqlx::query(
        "UPDATE clients SET
            name = COALESCE(?, name),
            age = COALESCE(?, age),
            membership_type = COALESCE(?, membership_type),
            join_date = COALESCE(?, join_date)
        WHERE id = ?",
    )
    .bind(&payload.name)
    .bind(payload.age)
    .bind(&payload.membership_type)
    .bind(&payload.join_date)
    .bind(*id)
    .execute(pool.get_ref())
    .await;

    match res {
        Ok(r) if r.rows_affected() == 0 => HttpResponse::NotFound().body("Client not found"),
        Ok(_) => HttpResponse::Ok().body("Updated"),
        Err(e) => HttpResponse::BadRequest().body(e.to_string()),
    }
}

#[delete("/clients/{id}")]
pub async fn delete_client(pool: web::Data<SqlitePool>, id: web::Path<i64>) -> impl Responder {
    let res = sqlx::query("DELETE FROM clients WHERE id = ?")
        .bind(*id)
        .execute(pool.get_ref())
        .await;

    match res {
        Ok(r) if r.rows_affected() == 0 => HttpResponse::NotFound().body("Client not found"),
        Ok(_) => HttpResponse::Ok().body("Deleted"),
        Err(e) => HttpResponse::BadRequest().body(e.to_string()),
    }
}
