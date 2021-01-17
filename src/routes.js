const { Router } = require("express");
const router = Router();

// Routes

router.get('/',(req,res)=>{
    return res.render("index")
})

// Export

module.exports = router;