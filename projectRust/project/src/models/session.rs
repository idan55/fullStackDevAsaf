use serde::{Deserialize, Serialize};
use sqlx::FromRow;

#[derive(Debug, Deserialize, Serialize, FromRow)]
pub struct Session {
    pub id: i64,
    pub trainer_id: i64,
    pub client_id: i64,
    pub session_date: String,
    pub duration_minutes: i64,
}
#[derive(Deserialize, Serialize)]
pub struct CreateSession {
    pub trainer_id: i64,
    pub client_id: i64,
    pub session_date: String,
    pub duration_minutes: i64,
}

#[derive(Debug, Deserialize)]
pub struct UpdateSession {
    pub trainer_id: Option<i64>,
    pub client_id: Option<i64>,
    pub session_date: Option<String>,
    pub duration_minutes: Option<i64>,
}

#[derive(Debug, Deserialize, Serialize, FromRow)]
pub struct SessionWithNames{
    pub id: i64,
    pub session_date: String,
    pub duration_minutes: i64,


    pub trainer_id:i64,
    pub trainer_name: String,

    
    pub client_id:i64,
    pub client_name: String,
}
