const cool = require('cool-ascii-faces')
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
var mysql = require('mysql');
var sql;
var con = mysql.createPool({
  connectionLimit : 100, //important
  host: "us-cdbr-iron-east-04.cleardb.net",
  user: "b4a0c25955550e",
  password: "7e427aa6",
  database: "heroku_9473040638a9d16",
  debug    :  false
});

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/list_pets', function (req, res) {   

    if (req.query.id!=null){
        sql="SELECT * FROM `heroku_9473040638a9d16`.`pet` where id="+req.query.id;
    }
    else{
        sql="SELECT * FROM `heroku_9473040638a9d16`.`pet`";
    }

    con.getConnection(function(err,connection){
      if (err) {
        res.json({"code" : 100, "status" : "Error in connection database"});
        return;
      } 

      connection.query(sql, function (err, result, fields) {
        // connection.release();
        if (!err) {
          console.log(result);
          res.send(result);
          }
       
      });

      connection.on('error', function(err) {    res.json({"code" : 100, "status" : "Error in connection database"});
        return;     
  });

    });

  
 })
 .get('/process_get', function (req, res) {
  // Prepare output in JSON format
   sql="INSERT INTO `heroku_9473040638a9d16`.`pet` (`name`,`type`,`breed`,`location`,`lat`,`longi`)VALUES('"+req.query.name+"','"+req.query.type+"','"+req.query.breed+"','"+req.query.location+"','"+req.query.latitude+"','"+req.query.longitude+"');  ";
   con.getConnection(function(err,connection){
    if (err) {      res.json({"code" : 100, "status" : "Error in connection database"});
      return;
    }
  
  
    connection.query(sql, function (err, result, fields) {
    // connection.release();
    if (!err) {
      console.log(result);
      res.send(result);
      }
      else{
        res.send("not sucessfuly added");
      }
    
  });

  connection.on('error', function(err) {   res.json({"code" : 100, "status" : "Error in connection database"});
    return;     
    });

   });
  
})
.listen(PORT, () => console.log(`Listening on0 ${ PORT }`))




