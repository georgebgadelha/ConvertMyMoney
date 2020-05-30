const express = require('express')
const app = express()
const path = require('path')
const PORT = 3000

const conversion = require('./lib/conversion')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/fxrate', (req, res) => {
    const { fxrate, quantity } = req.query
    if (fxrate && quantity) {
        const exchange = conversion.convert(fxrate, quantity)
        res.render('fxrate', {
            error: false,
            fxrate: conversion.toMoney(fxrate, 2),
            quantity: conversion.toMoney(quantity, 2),
            exchange: conversion.toMoney(exchange, 2)
        })
    } else {
        res.render('fxrate', { error: 'Invalid parameters' })
    }

})

app.listen(PORT, err => {
    if (err) {
        console.log('Server not available. \n\nReason: ', err)
    } else {
        console.log(`ConvertMyMoney is online at port ${PORT}`)
    }
})