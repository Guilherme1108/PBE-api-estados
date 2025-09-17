/***************************************************************************************************************************
 * Objetivo: EndPoints referente a API de estados e cidades.
 * Data: 15/09/2025
 * Autor: Guilherme Moreira
 * Versão: 1.0
 * 
 * Observações: Instalação do Express, Cors, Body-Parser
 * npm install express     --save
 * npm install cors        --save
 * npm install body-parser --save
 ***************************************************************************************************************************/

//Import das dependencias da API
const express    = require('express')     //Responsavel pela API
const cors       = require('cors')        //Responsavel pelas permissões da API
const bodyParser = require('body-parser') //Respnsavel por gerenciar a chegada dos dados da API com o front

//Import do arquivo de funções
const dados      = require('./modulo/funcoes.js')

//Retorna a porta do servidor atual ou colocamos uma porta local
const PORT = process.PORT || 8080

//Criando uma instancia de uma calsse do express
const app = express()

//Configuração de permissões
app.use((request, response, next) => {
    response.header('Acces-Control-Allow-Origin','*')    //Servidor de origem da API
    response.header('Acces-Control-Allow-Methods','GET') //verbos permitidos / para adicionar mais métodos separar por , dentro da mesma aspas
    //carrega as configurações no cors da API 
    app.use(cors())
    next() // proximo, carregar os proximos endpoints
})

//request  -> chegada de dados na API
//response -> retorno de dados na API

//ENDPOINTS
app.get('/v1/estados', function(request, response){
    //Pesquisa na função de estados  
    let estados = dados.getAllEstados()

    //Retrna o status code
    response.status(estados.status_code)
    
    //Retorna o JSON
    response.json(estados)
})

app.get('/v1/estado/:uf', function(request, response){
    let sigla = request.params.uf
    let estado = dados.getEstadoBySigla(sigla)

        //Retrna o status code
        response.status(estado.status_code)
    
        //Retorna o JSON
        response.json(estado)
})

app.get('/v1/estado/regiao/:uf'), function (request, response){
    let sigla = request.params.uf
    let estado = dados.getCapitalBySigla(sigla)

            //Retrna o status code
            response.status(estado.status_code)
    
            //Retorna o JSON
            response.json(estado)
}




app.get('/v1/estados/regiao', function (request, response){
    let sigla = request.query.uf
    console.log(sigla)
})




//Start na API
app.listen(PORT, function(){
    console.log('API aguardando requisições ....')
})
