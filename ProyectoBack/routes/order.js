const express = require('express');
const { orderControllers } = require('../controllers');
const validateFields = require('../middlewares/validate-fields');
const router = express();

const { check } = require('express-validator');



router.get('/', orderControllers.getOrders);
router.get('/:id', orderControllers.getOrderById);
router.delete('/:id', [
    check('id', 'El id no es válido').isInt().not().isEmpty(),
    validateFields
], orderControllers.deleteOrderById);
router.post('/', [
    check('NumPedido', 'El NumPedido no es valido').isInt({ min: 0, max: 9999 }),
    check('ES', 'El ES no es válido').isInt({ min: 0, max: 9999 }),
    check('FechaProgramada', 'La fecha programada no es válida').not().isEmpty(),
    check('HoraProgramada', 'La hora programada no es válida').not().isEmpty(),
    check('CantidadSolicitada', 'La cantidad no es válida').isInt(),
    check('Tipo', 'El tipo no es válido').not().isEmpty(),
    check('PersonaRequiere', 'PersonaRequiere no es válido').not().isEmpty(),
    check('PersonaAutoriza', 'PersonaAutoriza no es válido').not().isEmpty(),
    check('Entregado', 'Entregado no es válido').not().isEmpty(),
    validateFields,
], orderControllers.insertOrder);
router.put('/:id', [
    check('id', 'El id no es válido').isInt().not().isEmpty(),
    check('ES', 'El ES no es válido').isInt({ min: 0, max: 9999 }),
    check('FechaProgramada', 'La fecha programada no es válida').not().isEmpty(),
    check('HoraProgramada', 'La hora programada no es válida').not().isEmpty(),
    check('CantidadSolicitada', 'La cantidad no es válida').isInt(),
    check('Tipo', 'El tipo no es válido').not().isEmpty(),
    check('PersonaRequiere', 'PersonaRequiere no es válido').not().isEmpty(),
    check('PersonaAutoriza', 'PersonaAutoriza no es válido').not().isEmpty(),
    check('Entregado', 'Entregado no es válido').not().isEmpty(),
    validateFields,
], orderControllers.updateOrder);


module.exports = router;