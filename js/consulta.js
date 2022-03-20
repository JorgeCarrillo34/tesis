
const mysqlConexion = require('./database');


mysqlConexion.query('SHOW TABLES from repos', (err,rows)=>{
    if(!err){
        
        res.json(rows[0]);
    }
    else{
        console.log(err);
    }
})
