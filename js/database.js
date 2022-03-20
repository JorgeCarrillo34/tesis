var mysql = require('mysql');
const express = require('express');
const router = express.Router();

const mysqlConexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'Repositorios'
});

mysqlConexion.connect(function(error){
    if(error){
        console.log(error);
    }else{
        console.log('CONEXION ESTABLECIDA');
    }
})

module.exports = mysqlConexion;