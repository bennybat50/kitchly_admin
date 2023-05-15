const axios = require('axios');
const {Host, apiHost}=require('../config/configuration');

module.exports={
    getCompanies:async (req,res,next)=>{
        let companies= await axios.get(apiHost+'/companies')
        companies=companies.data
        res.render('delivery-companies',{pagetitle:"Delivery Companies", companies:companies , pathCompany:"company"})
    },

    
}