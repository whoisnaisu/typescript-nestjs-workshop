function connectDB(db_detail) {
    const db_name = db_detail.name
    const db_host = db_detail.host
    const db_port = db_detail.port

    return Connect(db_name, db_host, db_port)
}

const mysql = connectDB("ss")