
1. Descargar proyecto y ejecutar npm  i

2. para ejecutar el proyecto usar npm start

# Rutas Disponibles

## get /api/orders => obtienes todos los pedidos
## get /api/orders/:id => obtienes el pedido por NumPedido
## delete /api/orders/:id => elimina el pedido por NumPedido
## post /api/orders/ => Creas un pedido enviando en el body(formulario) algo como esto:

    {
        "NumPedido": 1,
        "ES": 2247,
        "FechaProgramada": "2021-03-12T06:00:00.000Z",
        "HoraProgramada": "06:45:00",
        "CantidadSolicitada": 34447.87,
        "Tipo": "Premium",
        "PersonaRequiere": "Rosy",
        "PersonaAutoriza": "Rosy",
        "Entregado": "En"
    }

## put /api/orders/:id => Creas un pedido enviando en el body(formulario) algo como el siguiente objeto y en la ruta(url) el NumPedido.

    {
        "ES": 2247,
        "FechaProgramada": "2021-03-12T06:00:00.000Z",
        "HoraProgramada": "06:45:00",
        "CantidadSolicitada": 34447.87,
        "Tipo": "Premium",
        "PersonaRequiere": "Rosy",
        "PersonaAutoriza": "Rosy",
        "Entregado": "En"
    }


## get /api/delivery => obtienes todas las entregas
## get /api/delivery/:id => obtienes la entrega por NumPedido
## delete /api/delivery/:id => elimina la entrega por NumPedido
## post /api/delivery/ => Creas una entrega enviando en el body(formulario) algo como esto:

    {
        "NumPedido": 1,
        "ES": 2247,
        "FechaEntrega": "2021-03-12T06:00:00.000Z",
        "HoraEntrega": "06:45:00",
        "NombreOperador": "Mateo Vergara Vargas",
        "Cantidad Entregada (Netos)": 33678,
        "Tipo": "Premium",
        "Diferencia": "769.87",
        "Factura": "",
        "Nota": "credito",
        "Cumplido": "Si"
    }

## put /api/delivery/:id => Actualizas una entrega enviando en el body(formulario) algo como el siguiente objeto y en la ruta(url) el NumPedido.

    {
        "ES": 2247,
        "FechaEntrega": "2021-03-12T06:00:00.000Z",
        "HoraEntrega": "06:45:00",
        "NombreOperador": "Mateo Vergara Vargas",
        "Cantidad Entregada (Netos)": 33678,
        "Tipo": "Premium",
        "Diferencia": "769.87",
        "Factura": "",
        "Nota": "credito",
        "Cumplido": "Si"
    }


## get /api/delivery/sales => Obtienes el total de la venta separado por día

######

## get /api/station => obtienes todas las estaciones
## get /api/station/:id => obtienes la estacion(json) por Estacion(numero)
## delete /api/station/:id => elimina la estacion por Estacion(numero)
## post /api/station/ => Creas una estacion enviando en el body(formulario) algo como esto:

    {
        "Estacion": 2247,
        "Correo": "2247@yligas.com",
        "Encargado": "Marcelino",
        "Telefono": 528441226118,
        "Nombre": "Saltillo",
        "NombreEstacion": "Super Comercial Azteca S de RL de CV",
        "Direccion": "Blvd. Venustiano Carranza #4005, Colonia Villa Olimpica, Saltillo, Coahuila"
    }

## put /api/station/:id =>  Actualizas una estacion enviando en el body(formulario) algo como el objeto anterior y en la ruta(url) la Estacion.

    {
        "Estacion": 2247,
        "Correo": "2247@yligas.com",
        "Encargado": "Marcelino",
        "Telefono": 528441226118,
        "Nombre": "Saltillo",
        "NombreEstacion": "Super Comercial Azteca S de RL de CV",
        "Direccion": "Blvd. Venustiano Carranza #4005, Colonia Villa Olimpica, Saltillo, Coahuila"
    }   