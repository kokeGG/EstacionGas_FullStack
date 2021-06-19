const express = require('express');
const { deliveryControllers } = require('../controllers');
const validateFields = require('../middlewares/validate-fields');
const router = express();

const { check } = require('express-validator');



router.get('/', deliveryControllers.getOrders);
router.get('/sales', deliveryControllers.allTotalSales);
router.get('/:id', deliveryControllers.getOrderById);
router.delete('/:id', [
    check('id', 'El id no es válido').isInt().not().isEmpty(),
    validateFields
], deliveryControllers.deleteOrderById);
router.post('/', [
    check('NumPedido', 'El NumPedido no es valido').isInt({ min: 0, max: 9999 }),
    check('ES', 'El ES no es válido').isInt({ min: 0, max: 9999 }),
    check('FechaEntrega', 'La fecha programada no es válida').not().isEmpty(),
    check('HoraEntrega', 'La hora programada no es válida').not().isEmpty(),
    check('NombreOperador', 'NombreOperador no es válido'),
    check('CantidadEntregada', 'El CantidadEntregada no es válido o es menor a 0').not().isEmpty().isNumeric({ min: 0 }),
    check('Tipo', 'Tipo no es válido').not().isEmpty(),
    check('Diferencia', 'Diferencia no es válido').not().isEmpty().isNumeric(),
    check('Nota', 'Nota no es válido').not().isEmpty(),
    check('Cumplido', 'Cumplido no es válido').not().isEmpty(),
    validateFields,
], deliveryControllers.insertOrder);
router.put('/:id', [
    check('id', 'El id no es válido').isInt().not().isEmpty(),
    check('ES', 'El ES no es válido').isInt({ min: 0, max: 9999 }),
    check('FechaEntrega', 'La fecha programada no es válida').not().isEmpty(),
    check('HoraEntrega', 'La hora programada no es válida').not().isEmpty(),
    check('NombreOperador', 'NombreOperador no es válido'),
    check('CantidadEntregada', 'El CantidadEntregada no es válido o es menor a 0').not().isEmpty().isNumeric({ min: 0 }),
    check('Tipo', 'Tipo no es válido').not().isEmpty(),
    check('Diferencia', 'Diferencia no es válido').not().isEmpty().isNumeric(),
    check('Nota', 'Nota no es válido').not().isEmpty(),
    check('Cumplido', 'Cumplido no es válido').not().isEmpty(),
    validateFields,
], deliveryControllers.updateOrder);

module.exports = router;