const { Router } = require('express');

const router = new Router();

const {getApplication, addApplication, deleteApplication, updateApplication} = require ('../controllers/ApplicationController')

router.get('/get-application', getApplication);
router.post('/add-application', addApplication);
router.post('/delete-application',deleteApplication);
router.post('/update-application', updateApplication);


module.exports = router;