# AWS Lambda
Lambda es un servicio de AWS completamente serverless, en este repositorio encontraras algunas indicaciones para crear tu primer backend utilizando el lenguaje node js version 8.10.

# Servicios de AWS a utilizar

  - IAM
  - Dynamo
  - API Getway
  - Lambda


### Intrucciones
- Crear un role para AWS Lambda, en este caso utilizaremos el servicio de Dynamo para almacenar información por lo que agregaremos una politica para que este servicio puede ser accesido desde nuestra función lambda.
    - Ingresar a la consola de AWS, buscar el servicio IAM.
    - Ingresar a la sección de roles y seleccionar: crear nuevo role
    - Marcar la opcion **AWS service**
    - En la lista de **Use case** seleccionar el servicio Lambda 
    - Presionar: siguiente
    - En la sección **Permissions policies** buscar: `AmazonDynamoDBFullAccess` y seleccionar la policy con ese nombre
    - Presionar: siguiente
    - Colocar nombre al role y presionar: **Create role**
- Luego se debera crear una tabla dentro del servicion de Dynamo, cuando se crea la tabla es requerido un valor o nombre para la clave principal, esta clave nos servira como llave primaria, para realizar busquedas.
    - Ingresar a la consola de AWS
    - Buscar el servicio de Dynamo
    - Seleccionar la opcion para crear nueva tabla, colocar un nombre para la tabla y para la clave primaria
    - Seleccinar el checkbox: Usar configuraciones default, y seleccionar la opcion crear.
- Crear una función lambda.
    - Ingresar a la consola de aws
    - Buscar el servivio de Lambda y seleccionarlo
    - Seleccionar: crear new lambda function
    - Seleccionar la opcion de blueprints o proyectos de AWS 
    - buscar el bluprint o proyecto: microservice-http-endpoint
    - llenar los campos correspondientes, tomando en cuenta lo siguiente:
        - Se debe seleccionar un role existente y deberia ser el que se creo en el primer paso
        - En la sección de API GATEWAY seleccionar la opcion: Create New API y en la parte de security seleccinar: Open
        - Copiar el codigo que se encuentra en el archivo index.js y pegarlo en la seccion de codigo de la función lambda.
        - Por ultimo seleccionar la opción de crear.
        - Cuando la función lambda este creada, ir a la sección de environment y agregar una variable con key: DYNAMO_TABLE y en Value deberan colocar el nombre de la tabla que se creo en Dynamo.
