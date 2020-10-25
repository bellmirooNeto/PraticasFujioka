module.exports = app => {
    app.get('/noticias', (req,res) =>{
        res.send('Mostrando as noticias')
    });

    app.post('/noticias',(req,res)=>{
        console.log(req.body);
    });
    
    app.put('/noticias', (req, res) => {
        res.send('Atualização das noticias');
    })
    
    app.delete('/noticias', (req, res) => {
        res.send('Removendo as noticias');
    });
  
}