const mysql = require('mysql');
const environment = "development";
const config = require("../config/config.js")[environment];

const con = mysql.createConnection({
    host: config.database.host,// O host do banco ex: localhost
    user: config.database.user, // Um usuário do banco
    password: config.database.password, // A senha do usuário ex user123
    database: config.database.database// o banco de dados a qual a aplicação irá se conectar, 
});

    con.connect((err) =>{
        if(err){
            console.log('Erro ao conectar', err)
            return
        }
        console.log('Connection Realizada')
    })

    con.query('select * from agendamento', (err,rows) => {
        if(err) throw err
    
        rows.forEach(row => {
            console.log(`${row.nome}`+ " - " +`${row.email}`);
        })
    })
    const agendamento = {nome:'Heitor', email: 'heitor@gmail.com', ativo:0 }
  /*  con.query('INSERT INTO agendamento SET ? ', agendamento, (err,rows) => {
    if(err) throw err
    console.log("Registro salvo com sucesso");
})*/
   /* con.query('UPDATE agendamento SET nome = ? where ID = ? ', ['Tiago','3'], (err,rows) => {
    if(err) throw err
    console.log("Registro atualizado com sucesso");    
}) */
con.query('DELETE FROM agendamento where ID = ? ', ['1'], (err,resultado) => {
    if(err) throw err
    console.log(`Foram excluida(s) ${resultado.affectedRows} linha(s)`);

})
     con.end((err) => {
         if (err){
             console.log('Erro ao finalizar conexão...', err)
             return
         }
         console.log('Conexão encerrada...')
     })