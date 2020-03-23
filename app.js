require('marko/node-require').install();
require('marko/express');


var express = require('express');
var app = express();
app.use(express.static('./'));
var mysql = require('mysql');
var resultado;




app.get('/notas', function(req, resp){

	var con = mysql.createConnection({
	  host: "mysql669.umbler.com",
	  port: "41890",
	  user: "lulizao",
	  password: "zaninill1",
	  database: "notas_alunos"
	});


	var db = con.connect(function(err) {
		  if (err) throw err;
		  var db = con.query("SELECT * FROM alunos", function (err, result, fields) {
		    if (err) throw err;
		    resultado = result;

		    resp.marko(
    			require('./src/html/notas.marko'),{
    				alunos : resultado
    			});

		  });
	});
});



app.get('/', function(req, resp){
    resp.marko(
    			require('./src/html/modeloInterativo.marko')
    			   );
});
                                
var port = process.env.PORT || 3000;
app.listen(port, function () {

});