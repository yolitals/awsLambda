AWS Lambda
Lambda es un servicio de AWS completamente serverless, en este repositorio encontraras algunas indicaciones para crear tu primer backend utilizando el lenguaje node js version 8.10.

Servicios de AWS a utilizar
IAM
Dynamo
API Getway
Lambda
Intrucciones
Crear un role para AWS Lambda, en este caso utilizaremos el servicio de Dynamo para almacenar información por lo que agregaremos una politica para que este servicio puede ser accesido desde nuestra función lambda.
Luego se debera crear una tabla dentro del servicion de Dynamo, cuando se crea la tabla es requerido un valor o nombre para la clave principal, esta clave nos servira como llave primaria, para realizar busquedas.
Crear una función lambda, tomando en cuenta la siguiente información:
– Runtime: node js 8.10
– Handler: index.handler
– Se debe seleccionar un role existente, que deberia ser el que se creo en el primer paso.
Crear un recurso en API Getway, al que sera atachado la lambda creada previamente.
Copiar el codigo que se encuentra en el archivo index.js y pegarlo en el codigo de la función.