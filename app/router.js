const router = require('express').Router();

router.get('/health',(_req,res,_next)=>{
    console.log();
    res.status(200).json({"message":"healthy"})
});
router.get('/',(_req,res,_next)=>{
    console.log();
   // throw new Error('hellodddddddd')
    res.send('hello');
});
module.exports=router;