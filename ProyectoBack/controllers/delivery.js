
const MySQL = require('../database/MySQL');
const db = new MySQL();

// Queries
const {
    getAllRecordsQuery,
    getOrderByIdQuery,
    deleteOrderByIdQuery,
    insertDeliveryQuery,
    getallTotalSalesQuery,
    updateDeliveryQuery
} = require('../database/queries');


const getOrders = (req, res) => {
    db.executeQuery(getAllRecordsQuery('Entrega'), (err, Orders) => {
        if (err) {
            res.status(400).json({
                ok: false,
                error: {
                    message: 'Aún no se han agregado elementos al historial'
                }
            });
        } else {
            res.json(Orders);
        }
    });
}

const getOrderById = (req, res) => {

    const id = req.params.id;
    const cleanId = db.connection.escape(id);

    db.executeQuery(getOrderByIdQuery('Entrega', cleanId), (err, Orders) => {
        if (err) {
            res.status(400).json({
                error: {
                    message: 'Aún no se han agregado elementos a la tabla'
                }
            });
        } else {
            res.json(Orders);
        }
    });
}

const deleteOrderById = (req, res) => {

    const id = req.params.id;
    const cleanId = db.connection.escape(id);

    db.executeQuery(deleteOrderByIdQuery('Entrega', cleanId), (err, order) => {
        if (err) {
            res.status(400).json({
                error: {
                    message: `No existe un registro con el id: ${id} `
                }
            });
        } else {
            res.json(order);
        }
    });
}

const insertOrder = (req, res) => {
    const body = req.body;

    const data = {
        NumPedido: db.connection.escape(body.NumPedido),
        ES: db.connection.escape(body.ES),
        FechaEntrega: db.connection.escape(body.FechaEntrega),
        HoraEntrega: db.connection.escape(body.HoraEntrega),
        NombreOperador: db.connection.escape(body.NombreOperador),
        'CantidadEntregada': db.connection.escape(body['CantidadEntregada']),
        Tipo: db.connection.escape(body.Tipo),
        Diferencia: db.connection.escape(body.Diferencia),
        Nota: db.connection.escape(body.Nota),
        Cumplido: db.connection.escape(body.Cumplido)
    }

    db.executeQuery(insertDeliveryQuery('Entrega', data), (err, order) => {
        if (err) {
            res.status(400).json({
                error: {
                    message: `Hubo un error al obtener los datos`
                }
            });
        } else {
            res.json(order);
        }
    });


}

const updateOrder = (req, res) => {

    const body = req.body;

    const id = req.params.id;
    const cleanId = db.connection.escape(id);

    const data = {
        ES: db.connection.escape(body.ES),
        FechaEntrega: db.connection.escape(body.FechaEntrega),
        HoraEntrega: db.connection.escape(body.HoraEntrega),
        NombreOperador: db.connection.escape(body.NombreOperador),
        'CantidadEntregada': db.connection.escape(body['CantidadEntregada']),
        Tipo: db.connection.escape(body.Tipo),
        Diferencia: db.connection.escape(body.Diferencia),
        Nota: db.connection.escape(body.Nota),
        Cumplido: db.connection.escape(body.Cumplido)
    }

    db.executeQuery(updateDeliveryQuery('Entrega', data, cleanId), (err, order) => {
        if (err) {
            res.status(400).json({
                error: {
                    message: `Hubo un error al obtener los datos`
                }
            });
        } else {
            res.json(order);
        }
    });


}

const allTotalSales = (req, res) => {
    db.executeQuery(getallTotalSalesQuery('Entrega'), (err, order) => {
        if (err) {
            res.status(400).json({
                error: {
                    message: `Hubo un error al obtener los datos`
                }
            });
        } else {
            res.json(order);
        }
    });
}



module.exports = {
    getOrders,
    getOrderById,
    deleteOrderById,
    insertOrder,
    updateOrder,
    allTotalSales
}


