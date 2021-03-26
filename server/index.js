const express = require('express')

const app = express()

app.get('/', (req, res) => {
    console.log('get on /')
    res.send('Sent from localhost')
})

app.listen(8000, () => {
    console.log('Server is listening on port 8000...')
})
