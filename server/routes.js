var controller = require('./controllers');
var router = require('express').Router();

router.get('/users/:userName/:password', controller.logIn);

router.post('/users',controller.signUp);

router.get('/questions/:bool',controller.getAll);

router.post('/questions/answer', controller.answer);

router.post('/questions/ask', controller.ask);

//router.get('/questions',controller.add)

module.exports = router;