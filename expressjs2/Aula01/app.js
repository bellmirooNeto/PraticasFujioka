const express = require ('express');
const app = express();
const port = 3000;

app.get('/aula', (req,resp)=>{
    resp.send('Aula Express');
})

app.put('/aula1', (req,resp)=>{
    resp.send('Usando o put');
})

app.delete('/aula2', (req,resp)=>{
    resp.send('Usando o delete');
})

app.post('/aula3', (req,resp)=>{
    resp.send('Usando o post ');
})

app.listen(port, () => {console.log('Server online porta ' + port)})