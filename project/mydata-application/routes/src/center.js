const router = require('express').Router();
const did_crypto_call = require('./utils')['did_crypto_call']

module.exports = {
    routers,
}


function routers(){
    router.post('/schema/organization', (req,res)=>{
        const Organization = req.app.get('db_model_list')['organization'];

        const new_org = new Organization({
            org_did: req.body.org_did,
            org_name: req.body.org_name,
            org_domain: req.body.org_domain,
          })

        

        res.send({message})
    })

    router.post('/schema/api', (req,res)=>{
        const Api = req.app.get('db_model_list')['api'];
        
        // api_schema_id: String,
        // org_did: String,
        // details: String,
        // url: String,
        // data_type: String,
        // http_method: String,
        // header: String,
        // parameter: String,
        // body: String,
        // org_sig: String,

        const new_api = new Api({

          })

        res.send({message})
    })

    router.post('/schema/consent', (req,res)=>{
        const Consent = req.app.get('db_model_list')['consent'];

        const new_consent = new Consent({
            org_did: req.body.org_did,
            org_name: req.body.org_name,
            org_domain: req.body.org_domain,
          })

        res.send({message})
    })

    return router
}
