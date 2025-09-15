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

//Retorna a porta do servidor atual ou colocamos uma porta local
const PORT = process.PORT || 8080

//Criando uma instancia de uma calsse do express
const app = express()

//Configuração de permissões
app.use((request, response, next) => {
    response.header('Acces-Control-Allow-Origin','*')    //Servidor de origem da API
    response.header('Acces-Control-Allow-Methods','GET') //verbos permitidos
    //carrega as configurações no cors da API 
    app.use(cors())
    next() // proximo, carregar os proximos endpoints
})

//ENDPOINTS
app.get('/v1/estdos', function(request, response){
    
})
