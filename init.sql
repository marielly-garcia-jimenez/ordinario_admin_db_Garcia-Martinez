-- Set character set to UTF-8
SET NAMES 'utf8mb4';
SET CHARACTER SET utf8mb4;

-- Create the tables
CREATE TABLE `estudiantes` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `nombre` VARCHAR(150) NOT NULL,
  `apellidos` VARCHAR(200) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `matricula` VARCHAR(100) NOT NULL,
  `edad` INT NOT NULL,
  `semestre` VARCHAR(255) NOT NULL,
  `usuario_creacion` VARCHAR(100) NOT NULL,
  `fecha_creacion` DATETIME NOT NULL
);

CREATE TABLE `maestros` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `nombre` VARCHAR(255) NOT NULL,
  `edad` INT NOT NULL,
  `telefono` BIGINT NOT NULL,
  `correo` VARCHAR(255) NOT NULL,
  `usuario_creacion` VARCHAR(100) NOT NULL,
  `fecha_creacion` DATETIME NOT NULL
);

CREATE TABLE `materias` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `nombre` VARCHAR(255) NOT NULL,
  `profesor_id` INT NOT NULL,
  `create_user` VARCHAR(100) NOT NULL,
  `create_date` DATETIME NOT NULL
);

CREATE TABLE `calificaciones` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `estudiante_id` INT NOT NULL,
  `maestro_id` INT NOT NULL,
  `materia_id` INT NOT NULL,
  `create_user` VARCHAR(100) NOT NULL,
  `create_date` DATETIME NOT NULL
);

ALTER TABLE `calificaciones` ADD CONSTRAINT `fk_estudiante` FOREIGN KEY (`estudiante_id`) REFERENCES `estudiantes` (`id`);

ALTER TABLE `calificaciones` ADD CONSTRAINT `fk_maestro` FOREIGN KEY (`maestro_id`) REFERENCES `maestros` (`id`);

ALTER TABLE `calificaciones` ADD CONSTRAINT `fk_materia` FOREIGN KEY (`materia_id`) REFERENCES `materias` (`id`);

ALTER TABLE `materias` ADD CONSTRAINT `fk_profesor` FOREIGN KEY (`profesor_id`) REFERENCES `maestros` (`id`);

-- Insert sample data into estudiantes
INSERT INTO `estudiantes` (`nombre`, `apellidos`, `email`, `matricula`, `edad`, `semestre`, `usuario_creacion`, `fecha_creacion`)
VALUES
('Juan Pérez', 'González', 'juan.perez@example.com', 'MAT001', 20, '4th Semester', 'admin', NOW()),
('Ana López', 'Martínez', 'ana.lopez@example.com', 'MAT002', 21, '5th Semester', 'admin', NOW()),
('Carlos García', 'Hernández', 'carlos.garcia@example.com', 'MAT003', 19, '3rd Semester', 'admin', NOW());

-- Insert sample data into maestros
INSERT INTO `maestros` (`nombre`, `edad`, `telefono`, `correo`, `usuario_creacion`, `fecha_creacion`)
VALUES
('Dr. Juan Ramírez', 45, 1234567890, 'juan.ramirez@example.com', 'admin', NOW()),
('Lic. María Sánchez', 38, 9876543210, 'maria.sanchez@example.com', 'admin', NOW());

-- Insert sample data into materias
INSERT INTO `materias` (`nombre`, `profesor_id`, `create_user`, `create_date`)
VALUES
('Mathematics', 1, 'admin', NOW()),
('Physics', 2, 'admin', NOW()),
('Chemistry', 1, 'admin', NOW());

-- Insert sample data into calificaciones
INSERT INTO `calificaciones` (`estudiante_id`, `maestro_id`, `materia_id`, `create_user`, `create_date`)
VALUES
(1, 1, 1, 'admin', NOW()),
(2, 2, 2, 'admin', NOW()),
(3, 1, 3, 'admin', NOW()),
(1, 2, 3, 'admin', NOW());
