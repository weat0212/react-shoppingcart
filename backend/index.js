const express = require('express')
const cors = require('cors');
const morgan  = require('morgan');
const app = express().use(cors()).use(morgan('combined'));
const port = 3005

app.post('/login', (req, res) => {
    res.json(
        { success: true, user: {name: "Jessie"}, loginTime: new Date()})
})

app.post('/fail', (req, res) => {
    res.json(
        { success: false, loginTime: new Date()})
})

app.listen(port, () => {
    console.log(`Shopping cart backend server listening on port ${port}`)
})