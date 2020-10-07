require('dotenv').config()

const express = require('express')
const cors = require('cors')
const router = require('./routes')
const errHandler = require('./middlewares/errHandler')

const app = express()
const port = 3000

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())

app.use(router)
app.use(errHandler)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})