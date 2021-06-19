
const MySQL = require('../database/MySQL');
const db = new MySQL();

// Queries
const {
    getAllRecordsQuery,
    getOrderByIdQuery,
    deleteOrderByIdQuery,
    updateStationQuery
} = require('../database/queries');


const getStations = (req, res) => {
    db.executeQuery(getAllRecordsQuery('Es'), (err, stations) => {
        if (err) {
            res.status(400).json({
                ok: false,
                error: {
                    message: 'Aún no se han agregado elementos al historial'
                }
            });
        } else {
            res.json(stations);
        }
    });
}

const getStationById = (req, res) => {

    const id = req.params.id;
    const cleanId = db.connection.escape(id);

    db.executeQuery(getOrderByIdQuery('Es', cleanId), (err, station) => {
        if (err) {
            res.status(400).json({
                error: {
                    message: 'Aún no se han agregado elementos a la tabla'
                }
            });
        } else {
            res.json(station);
        }
    });
}

const deleteStationById = (req, res) => {

    const id = req.params.id;
    const cleanId = db.connection.escape(id);

    db.executeQuery(deleteOrderByIdQuery('Es', cleanId), (err, station) => {
        if (err) {
            res.status(400).json({
                error: {
                    message: `No existe un registro con el id: ${id} `
                }
            });
        } else {
            res.json(station);
        }
    });
}

const insertStation = (req, res) => {
    const body = req.body;

    const data = {
        Estacion: db.connection.escape(body.Estacion),
        Correo: db.connection.escape(body.Correo),
        Encargado: db.connection.escape(body.Encargado),
        Telefono: db.connection.escape(body.Telefono),
        Nombre: db.connection.escape(body.Nombre),
        NombreEstacion: db.connection.escape(body.NombreEstacion),
        Direccion: db.connection.escape(body.Direccion),
    }

    db.executeQuery(insertStationQuery('Es', data), (err, station) => {
        if (err) {
            res.status(400).json({
                error: {
                    message: `Hubo un error al obtener los datos`
                }
            });
        } else {
            res.json(station);
        }
    });


}

const updateStation = (req, res) => {
    const body = req.body;

    const id = req.params.id;
    const cleanId = db.connection.escape(id);

    const data = {
        Estacion: db.connection.escape(body.Estacion),
        Correo: db.connection.escape(body.Correo),
        Encargado: db.connection.escape(body.Encargado),
        Telefono: db.connection.escape(body.Telefono),
        Nombre: db.connection.escape(body.Nombre),
        NombreEstacion: db.connection.escape(body.NombreEstacion),
        Direccion: db.connection.escape(body.Direccion),
    }

    db.executeQuery(updateStationQuery('Es', data, cleanId), (err, station) => {
        if (err) {
            res.status(400).json({
                error: {
                    message: `Hubo un error al obtener los datos`
                }
            });
        } else {
            res.json(station);
        }
    });


}


module.exports = {
    getStations,
    getStationById,
    deleteStationById,
    insertStation,
    updateStation
}


