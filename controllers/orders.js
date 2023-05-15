const axios = require('axios');
const {Host, apiHost}=require('../config/configuration');

module.exports={
    getOrders:async (req,res,next)=>{
        let districts= await axios.post('https://kitchly.co/api/v1/q/districts', {"query":{ "state_id":"abuja" }})
       districts=districts.data

        let companies= await axios.get(apiHost+'/companies')
        companies=companies.data
        res.render('orders',{pagetitle:"Kitchen Orders",companies:companies, districts:districts, pathOrder:"home"})
    },

    
}