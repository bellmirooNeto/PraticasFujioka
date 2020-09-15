var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Mostrar' );
});

router.post('/', function(req, res, next) {
  res.send('Cadastrar ' );
});

router.put('/', function(req, res, next) {
  res.send('Atualizar ' );
}); 

router.delete('/', function(req, res, next) {
  res.send('Apagar ' );
});

module.exports = router;
