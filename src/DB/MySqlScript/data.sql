CREATE DATABASE IF NOT EXISTS dataBitFix 
    CHARACTER SET utf8mb4 
    COLLATE utf8mb4_spanish_ci;

USE dataBitFix;

CREATE TABLE IF NOT EXISTS perfil (
    id INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(15) NOT NULL,
    last_name VARCHAR(15) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    phone VARCHAR(8) UNIQUE NOT NULL,
    `address` VARCHAR(255)
) ENGINE = INNODB;

CREATE TABLE IF NOT EXISTS rol (
    id INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(20) NOT NULL,
    `description` VARCHAR(255),
    create_ad TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE = INNODB;

CREATE TABLE IF NOT EXISTS `user`  (
    id INT AUTO_INCREMENT PRIMARY KEY,
    perfil_id INT,
    rol_id INT,
    `user` VARCHAR(15) NOT NULL,
    `password` VARCHAR(50) NOT NULL,
    create_ad TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (perfil_id) REFERENCES perfil(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (rol_id) REFERENCES rol(id) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE = INNODB;


CREATE TABLE IF NOT EXISTS device  (
    id INT AUTO_INCREMENT PRIMARY KEY,
    branch VARCHAR(25) NOT NULL,
    model VARCHAR(25) NOT NULL,
    `type` VARCHAR(20) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = INNODB;

CREATE TABLE IF NOT EXISTS consultations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    transmiter INT NOT NULL,
    recivier INT NOT NULL,
    create_ad TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    mesaje VARCHAR (255),
    FOREIGN KEY (transmiter) REFERENCES user(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (recivier) REFERENCES user(id) ON DELETE CASCADE ON UPDATE CASCADE 
) ENGINE = INNODB; 

CREATE TABLE IF NOT EXISTS priorities (
    id INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(20) NOT NULL,
    create_ad TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `description` VARCHAR(255)
) ENGINE = INNODB; 

CREATE TABLE IF NOT EXISTS repairs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    device_id INT NOT NULL,
    total DECIMAL(10,2),
    create_ad TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    priority_id INT NOT NULL,
    FOREIGN KEY (device_id) REFERENCES device(id) ON DELETE CASCADE ON UPDATE CASCADE 
) ENGINE = INNODB;  

CREATE TABLE IF NOT EXISTS ticket (
    id INT AUTO_INCREMENT PRIMARY KEY,
    repair_id INT NOT NULL,
    solved VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (repair_id) REFERENCES repairs(id) ON DELETE CASCADE ON UPDATE CASCADE 
) ENGINE=InnoDB;


-- registros
-- Insertar datos en la tabla perfil
INSERT INTO perfil (`name`, last_name, email, phone, `address`) VALUES
('Juan', 'Pérez', 'juan.perez@email.com', '60000001', 'San José, Costa Rica'),
('Ana', 'Gómez', 'ana.gomez@email.com', '60000002', 'Alajuela, Costa Rica'),
('Carlos', 'Rodríguez', 'carlos.rod@email.com', '60000003', 'Heredia, Costa Rica'),
('María', 'Fernández', 'maria.fer@email.com', '60000004', 'Cartago, Costa Rica'),
('Luis', 'Hernández', 'luis.hern@email.com', '60000005', 'Puntarenas, Costa Rica'),
('Sofía', 'Jiménez', 'sofia.jim@email.com', '60000006', 'Limón, Costa Rica'),
('Diego', 'Ramírez', 'diego.ram@email.com', '60000007', 'Guanacaste, Costa Rica'),
('Elena', 'Torres', 'elena.tor@email.com', '60000008', 'San José, Costa Rica'),
('Daniel', 'Castro', 'daniel.cas@email.com', '60000009', 'Alajuela, Costa Rica'),
('Valeria', 'Vargas', 'valeria.var@email.com', '60000010', 'Heredia, Costa Rica');

-- Insertar datos en la tabla rol
INSERT INTO rol (`name`, `description`) VALUES
('Administrador', 'Acceso total al sistema'),
('Técnico', 'Encargado de reparaciones'),
('Atención al cliente', 'Responde consultas y gestiona tickets'),
('Soporte', 'Brinda asistencia técnica'),
('Gerente', 'Supervisa el sistema'),
('Vendedor', 'Realiza ventas y gestiona clientes'),
('Supervisor', 'Encargado de equipo de trabajo'),
('Analista', 'Analiza datos del sistema'),
('Desarrollador', 'Desarrolla mejoras en la plataforma'),
('Tester', 'Encargado de pruebas y calidad');

-- Insertar datos en la tabla user
INSERT INTO user (perfil_id, rol_id, `user`, `password`) VALUES
(1, 1, 'admin1', 'pass123'),
(2, 2, 'tech1', 'pass123'),
(3, 3, 'client1', 'pass123'),
(4, 4, 'support1', 'pass123'),
(5, 5, 'manager1', 'pass123'),
(6, 6, 'seller1', 'pass123'),
(7, 7, 'supervisor1', 'pass123'),
(8, 8, 'analyst1', 'pass123'),
(9, 9, 'dev1', 'pass123'),
(10, 10, 'tester1', 'pass123');

-- Insertar datos en la tabla device
INSERT INTO device (branch, model, `type`, `description`, user_id) VALUES
('Lenovo', 'ThinkPad T14', 'Laptop', 'Laptop de alto rendimiento', 1),
('HP', 'Pavilion 15', 'Laptop', 'Laptop para oficina', 2),
('Dell', 'XPS 13', 'Laptop', 'Ultrabook potente', 3),
('Asus', 'ROG Zephyrus', 'Laptop', 'Laptop gamer', 4),
('Apple', 'MacBook Pro', 'Laptop', 'Laptop para diseño gráfico', 5),
('Samsung', 'Galaxy Tab S8', 'Tablet', 'Tablet con S-Pen', 6),
('Xiaomi', 'Mi Pad 5', 'Tablet', 'Tablet económica y potente', 7),
('Microsoft', 'Surface Pro 8', 'Tablet', 'Híbrido entre laptop y tablet', 8),
('Acer', 'Aspire 5', 'Laptop', 'Laptop asequible', 9),
('Razer', 'Blade 15', 'Laptop', 'Laptop gamer premium', 10);

-- Insertar datos en la tabla consultations
INSERT INTO consultations (transmiter, recivier, mesaje) VALUES
(1, 2, 'Hola, ¿cómo estás?'),
(2, 3, 'Tengo un problema con el equipo, ¿puedes ayudarme?'),
(3, 4, '¿Cuándo estará listo mi dispositivo?'),
(4, 5, 'He enviado un reporte, por favor revisalo.'),
(5, 6, '¿Tienes alguna actualización sobre mi solicitud?'),
(6, 7, '¿Puedes enviarme los detalles del presupuesto?'),
(7, 8, 'Aún no tengo respuesta, ¿puedes contactar al soporte?'),
(8, 9, '¿Sabes si ya se solucionó el problema del servidor?'),
(9, 10, 'Por favor confirma que recibiste el mensaje de ayer.'),
(10, 1, 'Gracias por la asistencia, todo está funcionando bien ahora.');

-- Insertar datos en la tabla priorities
INSERT INTO priorities (`name`, `description`) VALUES
('Alta', 'Problema crítico, requiere atención inmediata'),
('Media', 'Problema importante, pero no urgente'),
('Baja', 'Problema menor, puede esperar'),
('Urgente', 'Debe resolverse en menos de 24 horas'),
('Programada', 'Mantenimiento rutinario'),
('Emergencia', 'Riesgo de fallo grave'),
('Crítica', 'Problema que afecta a múltiples usuarios'),
('Normal', 'Atención estándar'),
('Leve', 'No afecta funciones principales'),
('Baja Prioridad', 'Atención cuando sea posible');

-- Insertar datos en la tabla repairs
INSERT INTO repairs (device_id, total, priority_id) VALUES
(1, 25000, 1), (2, 15000, 2), (3, 30000, 3), (4, 50000, 4), (5, 75000, 5),
(6, 20000, 6), (7, 18000, 7), (8, 22000, 8), (9, 27000, 9), (10, 35000, 10);

-- Insertar datos en la tabla ticket
INSERT INTO ticket (repair_id, solved, `description`, price) VALUES
(1, 'Sí', 'Cambio de pantalla', 25000),
(2, 'Sí', 'Reemplazo de teclado', 15000),
(3, 'Sí', 'Reparación de batería', 30000),
(4, 'No', 'Pendiente diagnóstico', 0),
(5, 'Sí', 'Actualización de software', 75000),
(6, 'No', 'Esperando repuestos', 0),
(7, 'Sí', 'Limpieza interna', 18000),
(8, 'Sí', 'Cambio de disco duro', 22000),
(9, 'No', 'Pendiente revisión', 0),
(10, 'Sí', 'Reemplazo de motherboard', 35000);
