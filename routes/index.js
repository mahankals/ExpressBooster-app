const router = require('express').Router();

router.get('/home',(req, res)=>{
	res.send('Welcome to home!');
})

router.get('/about',(req, res)=>{
	res.send('Welcome to abour!');
})

module.exports = router;