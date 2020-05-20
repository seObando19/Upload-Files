const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
//Permitir subir fichero
const multiplart = require('connect-multiparty');

//initialization
const app = express();

const PORT = process.env.PORT || 3000;

//middlewars
app.use(cors());
const multiPartMiddleware = multiplart({
    uploadDir : './subidas'
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

//routes
app.get('/', (req, res) =>{
    res.send('Welcome');
});

//EndPoint upload
app.post('/api/subir', multiPartMiddleware, (req, res)=>{
    res.json({
        'message':'Fichero subido correctamente'
    });
});

app.listen(PORT, () => {console.log('Server on port ' + PORT)});