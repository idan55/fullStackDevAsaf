use actix_web::{web, App, HttpServer};
use sqlx::SqlitePool;


mod routes;

mod handlers;
mod models;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    // Use a path relative to the project root (where `cargo run` is executed).
    let database_url = "sqlite:src/databaseProjectFinalRust.db";

    let pool = SqlitePool::connect(database_url).await.expect("Failed to connect");


    HttpServer::new(move || {
        App::new()
            .app_data(web::Data::new(pool.clone()))
            .configure(routes::config)
    })
    .bind(("127.0.0.1", 8080))?
    .run()
    .await
}
