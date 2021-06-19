


const getAllRecordsQuery = (tableName) => `SELECT * FROM ${tableName}`;

const getOrderByIdQuery = (tableName, id) => `SELECT * FROM ${tableName} WHERE NumPedido = ${id}`;

const deleteOrderByIdQuery = (tableName, id) => `DELETE FROM ${tableName} WHERE NumPedido = ${id}`;

const insertOrderQuery = (tableName, { NumPedido, ES, FechaProgramada, HoraProgramada, CantidadSolicitada, Tipo, PersonaRequiere, PersonaAutoriza, Entregado }) => `INSERT INTO ${tableName} (NumPedido, ES, FechaProgramada, HoraProgramada, CantidadSolicitada, Tipo, PersonaRequiere, PersonaAutoriza, Entregado) VALUES (${NumPedido}, ${ES}, ${FechaProgramada}, ${HoraProgramada}, ${CantidadSolicitada}, ${Tipo}, ${PersonaRequiere}, ${PersonaAutoriza}, ${Entregado})`;

const updateOrderQuery = (tableName, { NumPedido, ES, FechaProgramada, HoraProgramada, CantidadSolicitada, Tipo, PersonaRequiere, PersonaAutoriza, Entregado }, id) => `UPDATE ${tableName} SET ES = ${ES}, FechaProgramada = ${FechaProgramada}, HoraProgramada = ${HoraProgramada}, CantidadSolicitada = ${CantidadSolicitada}, Tipo = ${Tipo}, PersonaRequiere = ${PersonaRequiere}, PersonaAutoriza = ${PersonaAutoriza}, Entregado = ${Entregado} WHERE NumPedido = ${id}`;

const insertDeliveryQuery = (tableName, { NumPedido, ES, FechaEntrega, HoraEntrega, NombreOperador, 'Cantidad Entregada (Netos)': amount, Tipo, Diferencia, Nota, Cumplido }) => `INSERT INTO ${tableName} (NumPedido,ES,FechaEntrega,HoraEntrega,NombreOperador,\`CantidadEntregada\`,Tipo,Diferencia,Nota,Cumplido) VALUES (${NumPedido},${ES},${FechaEntrega},${HoraEntrega},${NombreOperador},${amount},${Tipo},${Diferencia},${Nota},${Cumplido})`;

const updateDeliveryQuery = (tableName, { NumPedido, ES, FechaEntrega, HoraEntrega, NombreOperador, 'CantidadEntregada': amount, Tipo, Diferencia, Nota, Cumplido }, id) => `UPDATE ${tableName} SET ES = ${ES}, FechaEntrega = ${FechaEntrega}, HoraEntrega = ${HoraEntrega},NombreOperador = ${NombreOperador},\`CantidadEntregada\` = ${amount}, Tipo = ${Tipo}, Diferencia = ${Diferencia},Nota = ${Nota},Cumplido = ${Cumplido} WHERE NumPedido = ${id}`;

const getallTotalSalesQuery = (tableName) => `SELECT SUM(\`CantidadEntregada\`) as total, FechaEntrega FROM ${tableName} WHERE FechaEntrega in(SELECT DISTINCT FechaEntrega FROM ${tableName}) GROUP BY FechaEntrega`

const insertStationQuery = (tableName, { Estacion, Correo, Encargado, Telefono, Nombre, NombreEstacion, Direccion }) => `INSERT INTO ${tableName} (Estacion, Correo, Encargado, Telefono, Nombre, NombreEstacion, Direccion) VALUES (${Estacion},${Correo},${Encargado},${Telefono},${Nombre},${NombreEstacion},${Direccion})`;

const updateStationQuery = (tableName, { Estacion, Correo, Encargado, Telefono, Nombre, NombreEstacion, Direccion }, id) => `UPDATE ${tableName} SET Correo = ${Correo}, Encargado = ${Encargado}, Telefono = ${Telefono}, Nombre = ${Nombre}, NombreEstacion = ${NombreEstacion}, Direccion = ${Direccion} WHERE Estacion = ${id}`;

module.exports = {
    getAllRecordsQuery,
    getOrderByIdQuery,
    deleteOrderByIdQuery,
    insertOrderQuery,
    updateOrderQuery,
    insertDeliveryQuery,
    updateDeliveryQuery,
    getallTotalSalesQuery,
    insertStationQuery,
    updateStationQuery
}