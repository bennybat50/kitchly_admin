const axios = require('axios');
const {Host}=require('../config/configuration');

module.exports={
    getHome:async (req,res,next)=>{
        res.render('dashboard',{pagetitle:"Dashboard",pathHome:"home"})
    }
}