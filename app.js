require('marko/node-require').install();
require('marko/express');


var express = require('express');
var app = express();
app.use(express.static('./'));


app.get('/', function(req, resp){
    resp.marko(
    				require('./modeloInterativo.marko'),
    			   );
});
                                
var port = process.env.PORT || 3000;
app.listen(port, function () {

});