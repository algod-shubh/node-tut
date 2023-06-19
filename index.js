const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')


app.get('/', (req, res) => {
    res.json({
        message: "sample api"
    })
})

app.post('/signup', (req, res) => {
    const user = {
        id: 1,
        user_name: "adwefw",
        email: "ergfmiqf@gmail.com"
    }

    var token = jwt.sign(user,"Zm52aGthYnZqYnZqbGJzYQ==")
    res.json({ token : token}) 
})



const port = 3000;

app.listen(port, () => {
    console.log(`app running on ${port}`)
})