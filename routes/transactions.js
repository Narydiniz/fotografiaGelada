const express = require ('express')
const router = express.Router()
const transactionsController = require('../controllers/transactionsController');

router.get('/',transactionsController.getAlltransactions);

router.post('/',transactionsController.addTransaction);

router.put('/:id', transactionsController.updateTrasactionPut);

router.patch('/:id', transactionsController.updateTrasactionPatch);

router.delete('/:id', transactionsController.deleteTransactions);

module.exports = router;
