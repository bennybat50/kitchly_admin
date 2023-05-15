const axios = require('axios');
const {Host, apiHost}=require('../config/configuration');

module.exports={
    getDistricts:async (req,res,next)=>{
        let districts= await axios.post('https://kitchly.co/api/v1/q/districts', {"query":{ "state_id":"abuja" }})
       districts=districts.data       
        res.render('districts/districts',{pagetitle:"Abuja Districts",districts:districts, pathDistricts:"districts"})
    },

    getDistrictsKitchens:async (req,res,next)=>{
        let kitchens= await axios.get(`https://kitchly.co/admin/v1/kitchens/locations/${req.params.id.toLowerCase()}`)
        kitchens=kitchens.data.kitchens
        res.render('districts/view-kitchens',{pagetitle:`Kitchens Under ${req.params.id}`,kitchens:kitchens, pathDistricts:"districts"})
    },

    
}