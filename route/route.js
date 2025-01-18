const express = require('express');
const router = express.Router();

const { createDataController,getAllcontroller, getbyIdcontroller,updatebyidcontroller,deletebyidcontroller } = require('../controller/admin.controller');



router.post('/create', createDataController);
router.get('/getall', getAllcontroller);
router.get('/:id', getbyIdcontroller);
router.put('/:id', updatebyidcontroller);
router.delete('/:id', deletebyidcontroller);




module.exports = router;