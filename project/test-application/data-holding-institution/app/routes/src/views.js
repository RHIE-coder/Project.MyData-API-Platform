const router = require('express').Router()

module.exports = {
    routers,
}

function routers(){
    router.get('/', (req,res)=>{
        res.render('index')
    })

    return router
}
