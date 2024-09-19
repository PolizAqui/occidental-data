require('dotenv').config();

const PORT = process.env.PORT


/******** DATABASE ******/

const PG_USER = process.env._USER
const PG_NAME = process.env._NAME
const PG_PASS = process.env._PASS
const PG_HOST = process.env._HOST

/******** ROUTES ********/

const DATACIUDAD = process.env.DATACIUDAD
const DATAMUNICIPIO = process.env.DATAMUNICIPIO
const PARROQUIA = process.env.PARROQUIA
const MARCAS = process.env.MARCAS
const MODELO = process.env.MODELO
const VERSION = process.env.VERSION
const SAVE = process.env.SAVE
const KEY = process.env.KEY
const OTP = process.env.OTP
const PAYMENT = process.env.PAYMENT
const VERIFYPAGO = process.env.VERIFYPAGO
const VIEW = process.env.VIEW

module.exports = {
    PORT,
    PG_USER,
    PG_NAME,
    PG_PASS,
    PG_HOST,
    DATACIUDAD,
    DATAMUNICIPIO,
    PARROQUIA,
    MARCAS,
    MODELO,VERSION,
    SAVE,
    KEY,
    OTP,
    PAYMENT,
    VERIFYPAGO,
    VIEW
}