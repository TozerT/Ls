const express = require('express')
const logger = require('morgan')
const errorhandler = require('errorhandler')
const bodyParser = require('body-parser')

let stand = { nome:"CarroMania"}
stand.car = [] 
stand.car = [{marca: "BMW", modelo: "A3", anoFabrico: 2000, matricula: "12-DA-25", tipo: "SUB", precoCompra: 2000,dateCompra, restauro: 300,  precoVenda: 10000},{marca: "AUDI", modelo: "A3", anoFabrico: 2010, matricula: "16-FE-7U", tipo: "SUB", precoCompra: 5000,dateCompra, restauro: 2000,  precoVenda: 15000}]
