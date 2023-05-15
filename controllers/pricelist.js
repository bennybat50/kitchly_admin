

    const axios = require('axios');
const {Host, apiHost}=require('../config/configuration');

module.exports={
    editPrice:async (req,res,next)=>{
        res.render('manage-prices',{pagetitle:"Manage Price List", company_id:req.params.id, })
    },

    
}