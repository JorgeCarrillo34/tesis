create database tesisdb;

use tesisdb;

Create table master(
id int(11) not null auto_increment,
nombre_repositorio varchar(50) default null,
categoria varchar(30) default null,
link long default null,
tipo_grafica varchar(15) default null,
primary key(id)
);

Create table campos_repositorios(
id int(11) not null auto_increment,
nombre_campo varchar(30) default null,
idMaster int(11) not null,
CONSTRAINT ts_master FOREIGN KEY (idMaster) REFERENCES master (id),
primary key(id)
);

Create table catalogo(
id int(11) not null auto_increment,
nombre_catalogo varchar(30) default null,
idCampo int(11) not null,
CONSTRAINT ts_campos FOREIGN KEY (idCampo) REFERENCES campos_repositorios (id),
primary key(id)
);

drop table campos_repositorios;
drop table catalogo;
drop table master;

describe master;
describe catalogo;
describe campos_repositorios;

insert into master values(1,'CENTRO DE LOS RECURSOS NATURALES','Trabajo','https://www.datos.gov.co/resource/vv8g-8u9u.json','Radial');
insert into master values(2,'Inventario de Activos de Información - SENA','Trabajo','https://www.datos.gov.co/resource/jqrx-z7h4.json','Radial');
insert into campos_repositorios values(2,'modalidad_formacion','1');
insert into campos_repositorios values(1,'nombre_municipio_curso','1');
insert into catalogo values(1,'LA ESTRELLA','1');
insert into catalogo values(2,'CALDAS','1');
insert into catalogo values(3,'ITAGUI','1');
insert into catalogo values(4,'MEDELLIN','1');
insert into catalogo values(5,'BELLO','1');

select * from campos_repositorios;
select * from master;
select * from catalogo;

delete from master
 where id=2;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '052300$';
flush privileges;

ALTER TABLE `tesisdb`.`master` 
DROP COLUMN `tipo_grafica`;


ALTER TABLE `tesisdb`.`master` 
CHANGE COLUMN `nombre_repositorio` `nombre_repositorio` VARCHAR(100) NULL DEFAULT NULL ;


insert into tesisdb.master values('3','Mesas Sectoriales SENA Base de Datos','Trabajo','https://www.datos.gov.co/resource/2fn4-ai3h.json');

insert into tesisdb.master values('4','Registro de Activos de Información Colpensiones','Trabajo','https://www.datos.gov.co/resource/8dbv-wsjq.json');

insert into tesisdb.master values('5','Mesas Sectoriales SENA','Trabajo','https://www.datos.gov.co/resource/yd42-ttr4.json');

insert into tesisdb.master values('6','Total Nacional inscritos en la agencia pública de empleo SENA','Trabajo','https://www.datos.gov.co/resource/8pqf-rmzr.json');

insert into tesisdb.master values('7','DESERCION DE LA FORMACIÓN PROFESIONAL INTEGRAL','Trabajo','https://www.datos.gov.co/resource/u4ze-bi7k.json');

insert into tesisdb.master values('8','Disparidad Salarial Hombres Mujeres','Trabajo','https://www.datos.gov.co/resource/hf6d-emrx.json');

insert into tesisdb.master values('9','PROGRAMACIÓN ESPECÍFICA DE CURSOS LARGOS, ESPECIALES Y EVENTOS POR REGIONAL Y CENTRO','Trabajo','https://www.datos.gov.co/resource/vv8g-8u9u.json');

insert into tesisdb.master values('10','Población NINI Entre 18 Y 28 Años','Trabajo','https://www.datos.gov.co/resource/yix6-7yeh.json');

insert into tesisdb.master values('3','Mesas Sectoriales SENA Base de Datos','Trabajo','https://www.datos.gov.co/resource/2fn4-ai3h.json');

insert into tesisdb.master values('4','Registro de Activos de Información Colpensiones','Trabajo','https://www.datos.gov.co/resource/8dbv-wsjq.json');

insert into tesisdb.master values('5','Mesas Sectoriales SENA','Trabajo','https://www.datos.gov.co/resource/yd42-ttr4.json');

insert into tesisdb.master values('6','Total Nacional inscritos en la agencia pública de empleo SENA','Trabajo','https://www.datos.gov.co/resource/8pqf-rmzr.json');

insert into tesisdb.master values('7','DESERCION DE LA FORMACIÓN PROFESIONAL INTEGRAL','Trabajo','https://www.datos.gov.co/resource/u4ze-bi7k.json');

insert into tesisdb.master values('8','Disparidad Salarial Hombres Mujeres','Trabajo','https://www.datos.gov.co/resource/hf6d-emrx.json');

insert into tesisdb.master values('9','PROGRAMACIÓN ESPECÍFICA DE CURSOS LARGOS, ESPECIALES Y EVENTOS POR REGIONAL Y CENTRO','Trabajo','https://www.datos.gov.co/resource/vv8g-8u9u.json');

insert into tesisdb.master values('10','Población NINI Entre 18 Y 28 Años','Trabajo','https://www.datos.gov.co/resource/yix6-7yeh.json');

insert into tesisdb.master values('11','CERTIFICACIÓN DE LA FORMACIÓN PROFESIONAL INTEGRAL','Trabajo','https://www.datos.gov.co/resource/28vu-5tx7.json');

insert into tesisdb.master values('12','CUPOS EN FORMACIÓN PROFESIONAL INTEGRAL POR TIPO DE POBLACIÓN','Trabajo','https://www.datos.gov.co/resource/2c7k-9iru.json');

insert into tesisdb.master values('13','Entidades Acreditadas','Trabajo','https://www.datos.gov.co/resource/tv9x-wfg5.json');

insert into tesisdb.master values('14','Entidades acreditadas Cundinamarca','Trabajo','https://www.datos.gov.co/resource/mh58-z29c.json');

insert into tesisdb.master values('15','Entidades Acreditadas Organizaciones Solidarias','Trabajo','https://www.datos.gov.co/resource/e88h-vxzi.json');

insert into tesisdb.master values('16','Entidades Acreditadas SIIA','Trabajo','https://www.datos.gov.co/resource/fr8e-58py.json');

insert into tesisdb.master values('17','Georeferenciación Centros de Aprendizaje SENA','Trabajo','https://www.datos.gov.co/resource/8cnh-7asj.json');

insert into tesisdb.master values('18','Indice de Informacion Clasificada y Reservada SENA','Trabajo','https://www.datos.gov.co/resource/gpmw-54pr.json');