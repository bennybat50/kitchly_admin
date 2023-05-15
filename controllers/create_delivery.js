const axios = require('axios');
const {Host, apiHost}=require('../config/configuration');

module.exports={
    getCreate:async (req,res,next)=>{
      
        res.render('create-delivery',{pagetitle:"Create Company", edit:false})
    },
    saveCompany:async (req,res,next)=>{
        
        let phones=[req.body.phone, req.body.phone2]
        let data={
            "name": req.body.name,
            "email": req.body.email,
            "phone":phones,
            "address": req.body.address
        }
        if(req.body.id!=null && req.body.id!=''){
           var ress= await axios.put(apiHost+"/companies/"+req.body.id,data)
           console.log(ress.data);
        }else{
            await axios.post(apiHost+"/companies",data)
        }
        
        res.redirect('/manage-companies');
    },

    editCompany:async (req,res,next)=>{
        let companies= await axios.get(apiHost+'/companies')
        companies=companies.data
        aCompany={};
        companies.forEach(com => {
            if(req.params.id==com.id){
                aCompany=com;
            }
        });
        res.render('create-delivery',{pagetitle:"Update Company", edit:true, aCompany:aCompany})
    },


}