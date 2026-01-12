use serde::{Deserialize, Serialize};
use sqlx::FromRow;

#[derive(Debug, Serialize, FromRow)]
pub struct Trainer {
    pub id: i64,
    pub name: String,
    pub specialty: String,
    pub phone: i64,
    pub hire_date: String,
}
#[derive(Debug,Deserialize)]
pub struct CreateTrainer {
    pub name: String,
    pub specialty: String,
    pub phone: i64,
    pub hire_date: String,
}

#[derive(Debug, Deserialize)]
pub struct UpdateTrainer {
    pub name: Option<String>,
    pub specialty: Option<String>,
    pub phone: Option<i64>,
    pub hire_date: Option<String>,
}
