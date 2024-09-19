const  axios = require('axios');
const { head } = require('../routes/dataOccidental.routes');
const {KEY} = require('../global/_var')

const controller = {}
const token = process.env.KEY

controller.getCiudad = async (req, res) => {
    try{
        data = req.body;

        const response = await axios.post(
            'http://10.10.109.49:8080/emision-web/resources/util/ciudades',
            data,
            {
                headers:{
                    'content-type': 'application/json'
                }
            }
        )

        return res.status(200).json(response.data.response)
    }catch(err){
        console.log('Error al conectar con la occidental',err);
        if(err.response){
            'Detalles del error',err.response
        }
    }
}

controller.getMunicipio = async (req,res) => {
    try{
        data = req.body;

        const response = await axios.post(
            'http://10.10.109.49:8080/emision-web/resources/util/municipios',
            data,
            {
                headers:{
                    'Content-Type': 'application/json'
                }
            }
        )
        return res.status(200).json(response.data.response)
    }catch (err) {
        console.log('Error al conectar con la occidental',err);
        if(err.response){
            'Detalles del error',err.response
        }
    }
}

controller.getParroquia = async (req,res) => {
    try {

        data = req.body;

        const response = await axios.post(
            'http://10.10.109.49:8080/emision-web/resources/util/urbanizaciones',
            data,
            {
                headers:{
                    'content-type': 'application/json'
                }
            }
        )
        return res.status(200).json(response.data.response)
    }catch (err) {
        console.log('Error al conectar con la occidental',err);
        if(err.response){
            'Detalles del error',err.response
        }
    }
}


controller.getMarcas = async (req,res) => {
    try{
        const data = req.body        
        const response = await axios.post(
            'http://10.10.109.49:8080/emision-web/resources/util/marcasAuto',
            data,
            {
                headers:{
                    'content-type': 'application/json'
                }
            }
        )        
        return res.status(200).json(response.data)
    }catch (err) {
        console.log('Error al conectar con la occidental',err);
        if(err.response){
            'Detalles del error',err.response
        }
    }
}

controller.getModelo = async (req,res) => {
    try{
        const data = req.body;

        const response = await axios.post(
            'http://10.10.109.49:8080/emision-web/resources/util/modelosAuto',
            data,
            {
                headers:{
                    'content-type': 'application/json'
                }
            }
        )
        return res.status(200).json(response.data)
    }catch(err){
        console.log('Error al conectar con la occidental',err);
        if(err.response){
            'Detalles del error',err.response
        }
    }
}

controller.getVersion = async (req,res) => {
    try{
        const data  = req.body;

        const response = await axios.post(
            'http://10.10.109.49:8080/emision-web/resources/util/versionesAuto',
            data,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        return res.status(200).json(response.data)

    }catch(err){
        console.log('Error al conectar con la occidental',err);
        if(err.response){
            'Detalles del error',err.response
        }
    }
}

controller.saveData = async (req,res) => {
    try{
        const data = req.body;
        const response = await axios.post(
            'http://10.10.109.49:8080/emision-web/resources/consultas/emitirAuto',data,
            {
                headers:{
                    'content-type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }
        )
    return res.status(200).json(response.data)
    }catch (err) {
        console.log('Error al conectar con la occidental',err);
        if(err.response){
            'Detalles del error',err.response
        }
    }
}


controller.verifyOtp = async (req,res) => {
    try{
    const data = req.body
    
    const response = await axios.post(
            'http://10.10.109.49:8080/emision-web/resources/pagos/requestMessageOTP',
            data,
            {
                headers:{
                    'content-type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }
        )
        
    return res.status(200).json(response.data)
    }catch (err) {
  console.log('Error al conectar con la occidental',err);
        if(err.response){
            'Detalles del error',err.response
        }
    }
}

controller.pagoOtp =  async (req,res) => {
    try{
        const data = req.body
  
        const response = await axios.post(
            'http://10.10.109.49:8080/emision-web/resources/pagos/transactionOTP',data,
            {
                headers:{
                    'content-type': 'application/json',
                     'Authorization': `Bearer ${token}`
                }
            }
        )
        return res.status(200).json(response.data)
    }catch (err) {
        console.log('Error al conectar con la occidental',err);
        if(err.response){
            'Detalles del error',err.response
        }
    }
}

controller.verifyPayment = async (req,res) => {
    try{
        const data = req.body
        
        const response = await axios.post(
            'http://10.10.109.49:8080/emision-web/resources/pagos/transactionID',
            data,
            {
                headers:{
                    'content-type': 'application/json'
                }
            }
        )
        
        return res.status(200).json(response.data)
        
    }catch (err) {
        console.log('Error al conectar con la occidental',err);
        if(err.response){
            'Detalles del error',err.response
        }
    }
}

controller.viewPoliza = async (req,res) => {
    try{
        const data = req.body
        console.log(req.body);
        
        const response = await axios.post(
            'http://10.10.109.49:8080/emision-web/resources/reportes/polizas',
            data,
            {
                headers:{
                    'content-type': 'application/json'
                }
            }
        )

        return res.status(200).json(response.data)

    }catch (err) {
        console.log('Error al conectar con la occidental',err);
        if(err.response){
            'Detalles del error',err.response
        }
    }
}

module.exports = controller