module.exports = app => {
    app.get('/anime', (req,res) =>{
        res.send('Mostrando o anime')
    });

    app.post('/anime',(req,res)=>{
        console.log(req.body);
    });
    
    app.put('/anime', (req, res) => {
        res.send('Atualizando o anime');
    })
    
    app.delete('/anime', (req, res) => {
        res.send('Removendo o anime');
    });
  
}