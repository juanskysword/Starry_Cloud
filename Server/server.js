const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('public'))


app.get('/' , (req,res) => {
    res.sendFile(path.join(__dirname, '../public/overworld.html'))
})
const port = process.env.PORT || 25688

app.listen(port, () => console.log(`server running on ${port}`))