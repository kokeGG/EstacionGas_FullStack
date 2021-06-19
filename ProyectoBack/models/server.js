const express = require('express');
const cors = require('cors');

orderRoutes = require('../routes/order')
deliveryRoutes = require('../routes/delivery');
stationRoutes = require('../routes/station');

class Server {

    apiPaths = {
        orders: '/api/orders',
        delivery: '/api/delivery',
        station: '/api/station',
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3000';

        this.middlewares();
        this.routes();
    }

    listen() {
        this.app.listen(this.port, () => console.log('Escuchando en puerto: ' + this.port));
    }

    routes() {
        this.app.use(this.apiPaths.orders, orderRoutes);
        this.app.use(this.apiPaths.delivery, deliveryRoutes);
        this.app.use(this.apiPaths.station, stationRoutes);
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

}

module.exports = Server