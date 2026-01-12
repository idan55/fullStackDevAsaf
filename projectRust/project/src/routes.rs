use actix_web::web;

use crate::handlers::{clients, sessions, trainers};

pub fn config(cfg: &mut web::ServiceConfig) {
    cfg
        .service(trainers::list_trainers)
        .service(trainers::get_trainer)
        .service(trainers::create_trainer)
        .service(trainers::update_trainer)
        .service(trainers::delete_trainer)

        .service(clients::list_clients)
        .service(clients::get_client)
        .service(clients::create_client)
        .service(clients::update_client)
        .service(clients::delete_client)

        .service(sessions::list_sessions)
        .service(sessions::list_sessions_with_names)
        .service(sessions::get_session)
        .service(sessions::create_session)
        .service(sessions::update_session)
        .service(sessions::delete_session);
}
