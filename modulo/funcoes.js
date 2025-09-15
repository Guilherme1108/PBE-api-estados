/***************************************************************************************************************************
 * Objetivo: Arquivo de fuções para gerenciar a API de estados e cidades.
 * Data: 15/09/2025
 * Autor: Guilherme Moreira
 * Versão: 1.0
 ***************************************************************************************************************************/

const MESSAGE_ERRO = {status : false, status_code : 500, development : 'Guilherme Moreira'}
const dados = require('./estados_cidades.js')

//Retorna todos os estados
const getAllEstados = function(){
    let message = {status : true, status_code : 200, development : 'Guilherme Moreira', uf : []}

    dados.listaDeEstados.estados.forEach(function (item){
        message.uf.push(item.sigla)
    })
    message.quantidade = message.uf.length //escrevendo o message.quantidade ele já irá criar o atributo quantidade

    // Se o if tiver mais de 1 coisa na resposta é necessario usar as {} já se for somente 1 resposta não são obrigatórias
    if(message.uf.length > 0)
        return message //Verdadeira 200
    else
        return MESSAGE_ERRO //Falsa 500

}

//Retorna um estado pesquisando pela sigla
const getEstadoBySigla = function(sigla){

}

//Retorna a capital referente a um estado, pesquisando pela sigla
const getCapitalBySigla = function(sigla){

}

//Retorna uma lista de estados pesqusiando pela região
const getEstadosByRegiao = function(regiao){

}

//Retorna uma lista de estados referente as capitias do país
const getVerifyCapitaisDoPais = function(){

}

//Retorna uma lista de cidades pesquisando pela sigla do estado
const getCidadesBySigla = function(sigla){

}

// console.log(getAllEstados())

module.exports = {
    getAllEstados
}