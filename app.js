/*	--------------------------------------------------------------------------/
 *	author		: 
 *	module		：jsansible model
 *											COPYRIGHT 
 *	-------------------------------------------------------------------------*/


/*	--------------------------------------------------------------------------/
 *	app
 *	-------------------------------------------------------------------------*/	
const express = require('express');
const app = express();
const port = 8080;

let mysql = require("mysql");
const con = mysql.createConnection({
	host:	"localhost",
	user:	"root",
	password:	"mysql",
	database:	"demo",
	timezone : 'Asia/Tokyo'
});
con.connect();

let mysqltorest = require("mysql-to-rest");
let api = mysqltorest(app,con);

let server = app.listen(port, function () {
  console.log(`mysql to rest  app listening on port ${port}!`);
});


/*	--------------------------------------------------------------------------/
 *	model
 *	-------------------------------------------------------------------------*/

