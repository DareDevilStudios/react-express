const express = require('express')
const app = express()
const port = 5000
// cors
const cors = require('cors')

app.use(cors())

app.get('/api', (req, res) => {

    const data = [
        {id: 1, name: 'John'},
        {id: 2, name: 'Sara'},
        {id: 3, name: 'Bob'}
    ]

    res.json(data)
})

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})