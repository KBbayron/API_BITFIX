<center><h1>API BiteFix</h1></center>

## Descripción:
Esta API permite comunicar con la base de datos de BiteFix en diferentes endpoints con la ruta base:
https://127.0.0.1:3000/api/v1/

## Diagrama de base de datos
https://drive.google.com/file/d/1ksgCxqgDz-ynll0Bds3gj7SgzT22qk77/view?usp=drive_link

## Instalación:
1. Clonar el repositorio
2. En una terminal en la dirección del repositorio clonado: 
    npm install
    para instalar dependencias y librerías.
3. digitar:
    nmp run dev 
    para levantar el servicio.

## Terminar el Servicio de la API:
Control + c


## Comandos de instalacion utilizaods
1. npm install bcrypt
2. npm install passport passport-local passport-jwt jsonwebtoken bcryptjs
3. npm install jsonwebtoken
4. npm install nodemailer

# Endpoints de la API
Headers para consulta en Postman en cada endpoint:<br>
| Key               | Value       |
|-----------------|-----------------|
| Accept | application/json |
| Content-Type | application/json |

url base: http://127.0.0.1:3000/api/ <br> <br>
Ejemplo: <br> 
get => http://127.0.0.1:3000/api/perfil/5 <br>
delete => http://127.0.0.1:3000/api/perfil

## **Perfil**
- GET /perfil - Obtener todos los perfiles
---
- GET /perfil/3- Obtener un perfil específico con id=3
---
- DELETE /perfil/1 - Eliminar un perfil con id=1
---
- POST /perfil - Crear un nuevo perfil

body ejemplo:

    body ejemplo:
    {
        "name": "name",
        "lastName": "lastname",
        "email": "name@gmail.com",
        "phone": "54548787",
        "address": "dbiubcd iabciuasbc"
    }
---
- PUT /perfil/8 - Actualizar un perfil con id=8

body ejemplo:

    {
        "name": "name",
        "lastName": "lastname",
        "email": "name@gmail.com",
        "phone": "54548787",
        "address": "dbiubcd iabciuasbc"
    }
---

## **User**
- GET /user - Obtener todos los usuarios
---
- GET /user/3- Obtener un usuario específico con id=3
---
- DELETE /user/1 - Eliminar un usuario con id=1
---
- POST /user - Crear un nuevo usuario

body ejemplo:

    body ejemplo:
    {
        "perfilId": 1,
        "rolId": 1,
        "user": "user postman",
        "password": "w654wev61v"
    }
---
- PUT /user/8 - Actualizar un usuario con id=8

body ejemplo:

    {
        "perfilId": 1,
        "rolId": 1,
        "user": "user postman",
        "password": "w654wev61v"
    }
---

## **Reparir**
- GET /repair - Obtener todos los reparaciones
---
- GET /repair/3- Obtener una reparación específico con id=3
---
- DELETE /repair/1 - Eliminar una reparación con id=1
---
- POST /repair - Crear una nueva reparación

body ejemplo:

    body ejemplo:
    {
        "name": "name",
        "lastName": "lastname",
        "email": "name@gmail.com",
        "phone": "54548787",
        "address": "dbiubcd iabciuasbc"
    }
---
- PUT /repair/8 - Actualizar una reparación con id=8

body ejemplo:

    {
        "name": "name",
        "lastName": "lastname",
        "email": "name@gmail.com",
        "phone": "54548787",
        "address": "dbiubcd iabciuasbc"
    }
---

## **Mensajeria**
- GET /consultations - Obtener todos los mensajes
---
- GET /consultations/3- Obtener un mensaje con id=3
---
- DELETE /consultations/1 - Eliminar un mensaje con id=1
---
- POST /consultations - Crear un nuevo mensaje

body ejemplo:

    body ejemplo:
    {
        "transmiter": 1,
        "recivier": 2,
        "messaje": "vibeiuqbviuebv qviuuqv qiv98vqwv "
    }
---
- PUT /consultations/8 - Actualizar un mensaje con id=8

body ejemplo:

    {
        "transmiter": 1,
        "recivier": 2,
        "messaje": "vibeiuqbviuebv qviuuqv qiv98vqwv "
    }
---

## **Dispositivos**
- GET /device - Obtener todos los dispositivos
---
- GET /device/3- Obtener un dispositivo con id=3
---
- DELETE /device/1 - Eliminar un dispositivo con id=1
---
- POST /device - Crear un nuevo dispositivo

body ejemplo:

    body ejemplo:
    {
        "branch": "MARCA",
        "model": "MODELOS",
        "type": "tipo",
        "description": "description",
        "userId": 1
    }
---
- PUT /device/8 - Actualizar un dispositivo con id=8

body ejemplo:

    {
        "branch": "MARCA",
        "model": "MODELOS",
        "type": "tipo",
        "description": "description",
        "userId": 1
    }
---

## **Roles**
- GET /rol - Obtener todos los roles
---
- GET /rol/3- Obtener un rol con id=3
---
- DELETE /rol/1 - Eliminar un rol con id=1
---
- POST /rol - Crear un nuevo rol

body ejemplo:

    body ejemplo:
    {
        "name": "rolPrueba",
        "description": "iuaybcabsuicasc"
    }
---
- PUT /rol/8 - Actualizar un rol con id=8

body ejemplo:

    {
        "name": "rolPrueba",
        "description": "iuaybcabsuicasc"
    }
---

## **Tickets**
- GET /ticket - Obtener todos los tickets
---
- GET /ticket/3- Obtener un ticket con id=3
---
- DELETE /ticket/1 - Eliminar un ticket con id=1
---
- POST /ticket - Crear un nuevo ticket

body ejemplo:

    body ejemplo:
    {
        "perfilId": 1,
        "rolId": 2,
        "user": "user postman 02",
        "password": "w654wev61v"
    }
---
- PUT /ticket/8 - Actualizar un ticket con id=8

body ejemplo:

    {
        "perfilId": 1,
        "rolId": 2,
        "user": "user postman 02",
        "password": "w654wev61v"
    }
---

## **Priority**
- GET /priority - Obtener todos los prioridades
---
- GET /priority/3- Obtener una prioridad con id=3
---
- DELETE /priority/1 - Eliminar una prioridad con id=1
---
- POST /priority - Crear una nueva prioridad

body ejemplo:

    body ejemplo:
    {
        "name": "rolPrueba",
        "description": "iuaybcabsuicasc"
    }
---
- PUT /priority/8 - Actualizar una prioridad con id=8

body ejemplo:

    {
        "name": "rolPrueba",
        "description": "iuaybcabsuicasc"
    }
---

## **Autentifición**

- POST /auth/login - Login de usuarios

body ejemplo:

    body ejemplo:
    {
        "username": "newuser51",
        "password": "Secure1953"
    }
---
- POST /auth/register - Registrarse como usuario

body ejemplo:

    body ejemplo:
    {
        "usuario": {
            "username": "newuser51",
            "password": "Secure1953",
            "rolId": 1
        },
        "perfil": {
            "name": "John Does155",
            "phone": 97668840,
            "email": "jjjj@example.com",
            "empresa": "MyCompany"
        }
    }
---