const axios = require('axios');
const {Host,apiHost}=require('../config/configuration');

module.exports={
    getZones:async (req,res,next)=>{
       let districts= await axios.post('https://kitchly.co/api/v1/q/districts', {"query":{ "state_id":"abuja" }})
       districts=districts.data
        res.render('create-zones',{pagetitle:"Create Zones",districts:districts, pathZone:"zone"})
    }
}