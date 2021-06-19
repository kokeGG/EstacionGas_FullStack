const mysql = require('mysql');

let _instance = null;
class MySQL {
    connection;
    conectado = false;

    config = {
        host: 'sql5.freemysqlhosting.net',
        port: 3306,
        user: 'sql5414103',
        password: 'xxPmv2AG8H',
        database: 'sql5414103',
    }

    constructor() {
        this.createConnection();
    }

    createConnection() {
        if (!_instance) {
            this.connection = mysql.createConnection(this.config);
            // singleton
            _instance = this;
            this.connectDB();
        } else {
            this.connection = mysql.createConnection(this.config);
            return _instance;
        }
    }


    executeQuery(query, callback) {
        // Crear una instancia forzosamente para ejecutar la sentencia
        this.connection.query(query, (err, results, fields) => {
            if (err) {
                console.log('Error en query');
                console.log(err);
                return callback(err);
            }

            if (results.length === 0) {
                callback('El registro solicitado no existe');
            } else {
                callback(undefined, results);
            }
        });
    }

    connectDB() {
        this.connection.connect((err) => {
            if (err) {
                console.log('error when connecting to db:', err);
                setTimeout(this.createConnection, 2000); // We introduce a delay before attempting to reconnect,
            }
            this.conectado = true;
            console.log('Base de datos online');
        });
        this.connection.on('error', (err) => {
            console.log('db error', err);
            if (err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
                _instance = null;
                this.createConnection(); // lost due to either server restart, or a
            } else { // connnection idle timeout (the wait_timeout
                throw err; // server variable configures this)
            }
        });
    }

}




module.exports = MySQL;

