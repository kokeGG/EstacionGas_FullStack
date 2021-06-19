const express = require('express');
const { stationControllers } = require('../controllers');
const validateFields = require('../middlewares/validate-fields');
const router = express();

const { check } = require('express-validator');

router.get('/', stationControllers.getStations);
router.get('/:id', stationControllers.getStationById);
router.delete('/:id', [
    check('id', 'El id no es válido').isInt().not().isEmpty(),
    validateFields
], stationControllers.deleteStationById);
router.post('/', [
    check('Estacion', 'El NumPedido no es valido').isInt({ min: 0, max: 9999 }),
    check('Correo', 'La fecha email no es válido').isEmail(),
    check('Encargado', 'El encargado no es válido').not().isEmpty(),
    check('Telefono', 'Teléfono no es válido').isInt(),
    check('Nombre', 'NombreEstacion no es válido').not().isEmpty(),
    check('NombreEstacion', 'NombreEstacion no es válido').not().isEmpty(),
    check('Direccion', 'Direccion no es válido').not().isEmpty(),
    validateFields,
], stationControllers.insertStation);
router.put('/:id', [
    check('id', 'El id no es válido').isInt().not().isEmpty(),
    check('Estacion', 'El NumPedido no es valido').isInt({ min: 0, max: 9999 }),
    check('Correo', 'La fecha email no es válido').isEmail(),
    check('Encargado', 'El encargado no es válido').not().isEmpty(),
    check('Telefono', 'Teléfono no es válido').isInt(),
    check('Nombre', 'NombreEstacion no es válido').not().isEmpty(),
    check('NombreEstacion', 'NombreEstacion no es válido').not().isEmpty(),
    check('Direccion', 'Direccion no es válido').not().isEmpty(),
    validateFields,
], stationControllers.updateStation);

module.exports = router;