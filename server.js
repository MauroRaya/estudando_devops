const express = require('express')
const cors    = require('cors')
require('dotenv').config()

app = express()

app.get('/', (req, res) => {
    res.json({ success: true, message: 'Hello, World!' })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))