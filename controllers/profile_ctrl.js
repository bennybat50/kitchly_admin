const axios = require('axios');
const {Host}=require('../config/configuration');

module.exports={
    getProfile:async (req,res,next)=>{
        res.render('profile',{pagetitle:"Student Profile",})
    }
}