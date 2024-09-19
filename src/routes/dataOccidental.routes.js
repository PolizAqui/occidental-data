const {DATACIUDAD,DATAMUNICIPIO, PARROQUIA ,MARCAS, MODELO ,VERSION, SAVE ,OTP,PAYMENT, VERIFYPAGO, VIEW} = require('../global/_var')
const express = require('express');
const router = express.Router();


/********* controlador ******/

const getInfoController = require('../controllers/getInfo.Controller');

/********* ROUTES **********/

router.post(DATACIUDAD,getInfoController.getCiudad)
router.post(DATAMUNICIPIO,getInfoController.getMunicipio)
router.post(PARROQUIA,getInfoController.getParroquia)
router.post(MARCAS, getInfoController.getMarcas)
router.post(MODELO,getInfoController.getModelo)
router.post(VERSION,getInfoController.getVersion)
router.post(SAVE, getInfoController.saveData)
router.post(OTP,getInfoController.verifyOtp)
router.post(PAYMENT, getInfoController.pagoOtp)
router.post(VERIFYPAGO, getInfoController.verifyPayment)
router.post(VIEW, getInfoController.viewPoliza)

module.exports = router;