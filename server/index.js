const express = require('express')
const app = express()
const cors = require('cors')
const {seed, getCountries, getCities, createCity, deleteCity} = require('./controller.js')

app.use(express.json())
app.use(cors())

// DEV
app.post('/seed', seed)

// COUNTRIES
app.get('/countries', getCountries)

// CITIES
app.post('/cities', createCity)
app.get('/cities', getCities)
app.delete('/cities/:id', deleteCity)

const port = 4004

app.listen(port, () => console.log(`up on ${port}`))