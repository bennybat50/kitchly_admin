const express=require('express');
const router=express.Router();
const homeController=require('../controllers/dashboard_ctrl');
const profileController=require('../controllers/profile_ctrl');
const createDeliveryCtrl=require('../controllers/create_delivery');
const ordersCtrl=require('../controllers/orders');
const priceListCtrl=require('../controllers/pricelist');
const createZoneCtrl=require('../controllers/create_zones'); 
const manageCompnayCtrl=require('../controllers/manage_company');
const findPriceCtrl=require('../controllers/find_price');
const chefsCtrl=require('../controllers/chefs');
const districtsCtrl=require('../controllers/districts');
const mailsCtrl=require('../controllers/sendmails');
router.all('/*', (req, res, next)=>{
    req.app.locals.layout='default';
    next();
})
router.get('/', homeController.getHome);
router.get('/profile', profileController.getProfile);
router.get('/chefs', chefsCtrl.getChefs);
router.get('/chefs/view-kitchen/:id', chefsCtrl.getKitchen);
router.get('/create-delivery', createDeliveryCtrl.getCreate);
router.post('/create-delivery', createDeliveryCtrl.saveCompany);
router.get('/create-zones', createZoneCtrl.getZones);
router.get('/orders', ordersCtrl.getOrders);
router.get('/price-list/:id', priceListCtrl.editPrice);
router.get('/find-price', findPriceCtrl.getPrice); 
router.get('/manage-companies', manageCompnayCtrl.getCompanies); 
router.get('/manage-companies/:id', createDeliveryCtrl.editCompany);
router.get('/send-mails', mailsCtrl.getSendMail);
router.post('/send-mails', mailsCtrl.postMail);
router.get('/districts', districtsCtrl.getDistricts);
router.get('/districts-kitchen/:id', districtsCtrl.getDistrictsKitchens);
router.get('/activate-kitchen/:id', chefsCtrl.activateKitchen);
router.get('/deactivate-kitchen/:id', chefsCtrl.deactivateKitchen);
router.get('/open-kitchen/:id', chefsCtrl.openKitchen);
router.get('/close-kitchen/:id', chefsCtrl.closeKitchen);




// /instructor/assign-school
module.exports=router;
