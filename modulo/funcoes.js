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
    let message = { status: true, status_code: 200, development: 'Guilherme Moreira', regiao: regiao, estados: [] }

    dados.listaDeEstados.estados.forEach(estado => {
        if (estado.regiao === regiao) {
            message.estados.push({
                uf: estado.sigla,
                descricao: estado.nome
            })
        }
    })

    if (message.estados.length > 0) {
        return message
    } else {
        return MESSAGE_ERRO
    }
}
    //Retorna uma lista de estados referente as capitias do país
    const getVerifyCapitaisDoPais = function () {
        let message = { status: true, status_code: 200, development: 'Guilherme Moreira', capitais: [] }

        dados.listaDeEstados.estados.forEach(capital => {
            if (capital.capital_pais) {
                message.capitais.push({
                    capital_atual: capital.capital_pais.capital,
                    uf: capital.sigla,
                    descricao: capital.nome,
                    capital: capital.capital,
                    regiao: capital.regiao,
                    capital_pais_ano_inicio: capital.capital_pais.ano_inicio,
                    capital_pais_ano_termino: capital.capital_pais.ano_fim
                })
            }
        })

        if (message.capitais.length > 0) {
            return message
        } else {
            return MESSAGE_ERRO
        }
    }
    //Retorna uma lista de cidades pesquisando pela sigla do estado
    const getCidadesBySigla = function (sigla) {
        
        let siglaFormatada = String(sigla).toUpperCase()

        let message = { status: true, status_code: 200, development: 'Guilherme Moreira', estado: {} }
    
        const estadoEncontrado = dados.listaDeEstados.estados.find(item => item.sigla === siglaFormatada)
    
        if (estadoEncontrado) {
            message.estado = {
                uf: estadoEncontrado.sigla,
                descricao: estadoEncontrado.nome,
                quantidade: estadoEncontrado.cidades.length,
                cidades: [
                    dados.listaDeEstados
                ]
            }
            return message //Verdadeira 200
        } else {
            return MESSAGE_ERRO //Falsa 500
        }
    
    }

    // console.log(getAllEstados())

    module.exports = {
        getAllEstados,
        getEstadoBySigla,
        getCapitalBySigla,
        getEstadosByRegiao,
        getVerifyCapitaisDoPais
    }