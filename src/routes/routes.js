const express = require('express');
const produtosController = require ('../controllers/produtosController.js');
const router = express.Router();
 
router.post('/produtos', produtosController.Insert);
 
module.exports = router;