
const MySQL = require('../database/MySQL');
const db = new MySQL();

// Queries
const {
    getAllRecordsQuery,
    getOrderByIdQuery,
    deleteOrderByIdQuery,
    insertOrderQuery,
    updateOrderQuery
} = require('../database/queries');


const getOrders = (req, res) => {
    db.executeQuery(getAllRecordsQuery('Pedidos'), (err, Orders) => {
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

    db.executeQuery(getOrderByIdQuery('Pedidos', cleanId), (err, Orders) => {
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

    db.executeQuery(deleteOrderByIdQuery('Pedidos', cleanId), (err, order) => {
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
        FechaProgramada: db.connection.escape(body.FechaProgramada),
        HoraProgramada: db.connection.escape(body.HoraProgramada),
        CantidadSolicitada: db.connection.escape(body.CantidadSolicitada),
        Tipo: db.connection.escape(body.Tipo),
        PersonaRequiere: db.connection.escape(body.PersonaRequiere),
        PersonaAutoriza: db.connection.escape(body.PersonaAutoriza),
        Entregado: db.connection.escape(body.Entregado)
    }

    db.executeQuery(insertOrderQuery('Pedidos', data), (err, order) => {
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

    const id = req.params.id;
    const cleanId = db.connection.escape(id);

    const body = req.body;

    const data = {
        NumPedido: db.connection.escape(body.NumPedido),
        ES: db.connection.escape(body.ES),
        FechaProgramada: db.connection.escape(body.FechaProgramada),
        HoraProgramada: db.connection.escape(body.HoraProgramada),
        CantidadSolicitada: db.connection.escape(body.CantidadSolicitada),
        Tipo: db.connection.escape(body.Tipo),
        PersonaRequiere: db.connection.escape(body.PersonaRequiere),
        PersonaAutoriza: db.connection.escape(body.PersonaAutoriza),
        Entregado: db.connection.escape(body.Entregado)
    }

    db.executeQuery(updateOrderQuery('Pedidos', data, cleanId), (err, order) => {
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
    updateOrder,
    insertOrder
}


