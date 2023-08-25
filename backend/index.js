const express = require('express')
const app = express()
const port = 3005

app.post('/login', (req, res) => {
    res.json(
        { success: true, user: {name: "Jessie"}, loginTime: new Date()})
})

app.listen(port, () => {
    console.log(`Shopping cart backend server listening on port ${port}`)
})