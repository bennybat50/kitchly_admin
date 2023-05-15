const axios = require('axios');
const {Host, apiHost}=require('../config/configuration');

module.exports={
    getChefs:async (req,res,next)=>{
        let chefs= await axios.get(`https://kitchly.co/admin/v1/chefs?page=${req.query.page}`)
        currentPage=chefs.data.paginate.current
        let lastPage
        if(currentPage > 1){
            lastPage=currentPage-1
        }
        
        chefs=chefs.data.chefs
        res.render('chefs/chefs',{pagetitle:"Chef Registrations", chefs:chefs, pathChef:"chef", currentPage:currentPage+1,lastPage:lastPage})
    },
    getKitchen:async (req,res,next)=>{
        let kitchen= await axios.get(`https://kitchly.co/admin/v1/chefs/${req.params.id}/kitchen-details`)
        kitchen=kitchen.data

        let kitchenMore= await axios.post(`https://kitchly.co/api/v1/kitchens/details`,{"id":kitchen.kitchen_id } )
       
        kitchenMore=kitchenMore.data
        console.log(kitchenMore.delivery.self_delivery);
        if(kitchenMore.views){
            kitchenMore.views.one=kitchenMore.views["1"]
            kitchenMore.views.two=kitchenMore.views["2"]
            kitchenMore.views.three=kitchenMore.views["3"]
            kitchenMore.views.four=kitchenMore.views["4"]
        }
        res.render('chefs/view-kitchen',{pagetitle:`Kitchen Details`,kitchen:kitchen, kitchenMore:kitchenMore,  pathChef:"chef",})
    },
    activateKitchen:async (req,res,next)=>{

        await axios.post(`https://kitchly.co/api/v1/kitchens/activate`,{"kitchen_id":req.params.id } )
        res.redirect(`/chefs/view-kitchen/${req.query.chef_id}`)

    },
    deactivateKitchen:async (req,res,next)=>{
        await axios.post(`https://kitchly.co/api/v1/kitchens/deactivate`,{"kitchen_id":req.params.id } )
        res.redirect(`/chefs/view-kitchen/${req.query.chef_id}`)
    },
    openKitchen:async (req,res,next)=>{
        await axios.post(`https://kitchly.co/api/v1/kitchens/order/status`,{"kitchen_id": req.params.id, "status": true} )
        res.redirect(`/chefs/view-kitchen/${req.query.chef_id}`)
    },
    closeKitchen:async (req,res,next)=>{
        await axios.post(`https://kitchly.co/api/v1/kitchens/order/status`,{"kitchen_id": req.params.id, "status": false} )
        res.redirect(`/chefs/view-kitchen/${req.query.chef_id}`)
    },
}