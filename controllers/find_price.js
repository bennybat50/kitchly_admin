const axios = require('axios');
const allZones=require('../public/zones.json');
const companiesZones=require('../public/companieZones.json');
const allCompanies=require('../public/companies.json');
const {Host}=require('../config/configuration');

module.exports={
    getPrice:async (req,res,next)=>{
        let allPrices=[];
        if(req.query.pickup!=null && req.query.dropoff!=null){
            let pickup=req.query.pickup;
        let dropoff=req.query.dropoff;
        let pickupZone_id,dropoffZone_id;
        
        allZones.forEach(zone => {
            if(zone.location==pickup){
                pickupZone_id=zone.zone_id
            }
            if(zone.location==dropoff){
                dropoffZone_id=zone.zone_id
            }
            
        });

        companiesZones.forEach(company=>{
            let aPrice={"name":"", "price":0}
            allCompanies.forEach(aCompany=>{
                if(aCompany.id==company.company_id){
                    aPrice.name=aCompany.name;
                }
            })
            company.zones.forEach(zone=>{
                if(zone.pickup_zone_id==pickupZone_id && zone.dropoff_zone_id==dropoffZone_id ){
                    aPrice.price=zone.price;
                }else if(zone.pickup_zone_id==dropoffZone_id && zone.dropoff_zone_id==pickupZone_id){
                    aPrice.price=zone.price;
                }
            })
            allPrices.push(aPrice);

        })
        }
        

        res.render('find-price',{pagetitle:"Get Delivery Price", allPrices:allPrices})
    }
}