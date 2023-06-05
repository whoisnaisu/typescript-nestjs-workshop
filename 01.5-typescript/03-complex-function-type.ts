type DBDetail = {
    name: string
    host: string
    port: number
}

type DatabaseConnector = {}

export function connectDB(db_detail: DBDetail): DatabaseConnector {
    const db_name: string = db_detail.name
    const db_host: string = db_detail.host
    const db_port: number = db_detail.port

    return Connect(db_name, db_host, db_port) as DatabaseConnector
}

// const mysql = connectDB("ss")

const mysql = connectDB({name: 'mysql' , host: 'mysql://localhost', port: 8080})