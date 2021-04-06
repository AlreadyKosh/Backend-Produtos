const express = require('express');
const produtosController = require ('../controllers/produtosController.js');
const router = express.Router();
 
router.post('/produtos', produtosController.Insert);
router.get('/produtos', produtosController.SelectAll);
router.get('/produtos/:id', produtosController.SelectDetail)
 
module.exports = router;


 