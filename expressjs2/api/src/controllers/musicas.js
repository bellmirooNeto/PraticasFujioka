module.exports = app => {
    app.get('/musicas', (req,res) =>{
        res.send('Mostrando as playList')
    });

    app.post('/musicas',(req,res)=>{
        console.log(req.body);
    });
    
    app.put('/musicas', (req, res) => {
        res.send('Atualização da playList');
    })
    
    app.delete('/musicas', (req, res) => {
        res.send('Removendo a playList');
    });
  
}