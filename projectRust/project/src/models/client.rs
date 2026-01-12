use serde::{Deserialize, Serialize};
use sqlx::FromRow;

#[derive(Debug, Serialize, FromRow)]
pub struct Client {
    pub id: i64,
    pub name: String,
    pub age: i64,
    pub membership_type: String,
    pub join_date: String,
}

#[derive(Debug, Deserialize)]
pub struct CreateClient {
    pub name: String,
    pub age: i64,
    pub membership_type: String,
    pub join_date: String,
}

#[derive(Debug, Deserialize)]
pub struct UpdateClient {
    pub name: Option<String>,
    pub age: Option<i64>,
    pub membership_type: Option<String>,
    pub join_date: Option<String>,
}
