/***************************************************************************************************************************
 * Objetivo: Arquivo de fuções para gerenciar a API de estados e cidades.
 * Data: 15/09/2025
 * Autor: Guilherme Moreira
 * Versão: 1.0
 ***************************************************************************************************************************/

const MESSAGE_ERRO = { status: false, status_code: 500, development: 'Guilherme Moreira' }
//Import do arquivode estados e cidades
const dados = require('./estados_cidades.js')

//Retorna todos os estados
const getAllEstados = function () {
    //Variavel de base para o cabeçalho da API
    let message = { status: true, status_code: 200, development: 'Guilherme Moreira', uf: [] }

    //Loop
    dados.listaDeEstados.estados.forEach(function (item) {
        message.uf.push(item.sigla)
    })
    //Para adiciona um elemento novo no json
    message.quantidade = message.uf.length //escrevendo o message.quantidade ele já irá criar o atributo quantidade

    // //Para remover um atributo do JSON
    // delete message.status

    // Se o if tiver mais de 1 coisa na resposta é necessario usar as {} já se for somente 1 resposta não são obrigatórias
    if (message.uf.length > 0)
        return message //Verdadeira 200
    else
        return MESSAGE_ERRO //Falsa 500

}

//Retorna um estado pesquisando pela sigla
const getEstadoBySigla = function (sigla) {
    let siglaFormatada = String(sigla).toUpperCase()

    let message = { status: true, status_code: 200, development: 'Guilherme Moreira', estado: {} }

    const estadoEncontrado = dados.listaDeEstados.estados.find(item => item.sigla === siglaFormatada)

    if (estadoEncontrado) {
        message.estado = {
            uf: estadoEncontrado.sigla,
            descricao: estadoEncontrado.nome,
            capital: estadoEncontrado.capital,
            regiao: estadoEncontrado.regiao
        }
        return message //Verdadeira 200
    } else {
        return MESSAGE_ERRO //Falsa 500
    }

}

//Retorna a capital referente a um estado, pesquisando pela sigla
const getCapitalBySigla = function (sigla) {

    let siglaFormatada = String(sigla).toUpperCase()

    let message = { status: true, status_code: 200, development: 'Guilherme Moreira', capital: {} }

    const estadoEncontrado = dados.listaDeEstados.estados.find(item => item.sigla === siglaFormatada)

    if (estadoEncontrado) {
        message.capital = {
            uf: estadoEncontrado.sigla,
            descricao: estadoEncontrado.nome,
            capital: estadoEncontrado.capital
        }
        return message //Verdadeira 200
    } else {
        return MESSAGE_ERRO //Falsa 500
    }
    
}

//Retorna uma lista de estados pesqusiando pela região
const getEstadosByRegiao = function (regiao) {

}

//Retorna uma lista de estados referente as capitias do país
const getVerifyCapitaisDoPais = function () {

}

//Retorna uma lista de cidades pesquisando pela sigla do estado
const getCidadesBySigla = function (sigla) {

}

// console.log(getAllEstados())

module.exports = {
    getAllEstados,
    getEstadoBySigla,
    getCapitalBySigla
}