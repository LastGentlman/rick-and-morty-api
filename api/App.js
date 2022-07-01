const express = require('express')
const cors = require('cors')
const axios = require('axios')

const app = express()

app.use(cors())

app.get('/', async (req, res) => {
    const {query} = req.query
    // console.log('query: ',{query})

    const {data} = await axios.get('https://rickandmortyapi.com/api/character')
    // console.log('data: ',data.results)
    if (query) {
        let filterCharacter = data.results.filter((character) => {
            return character?.name.toLowerCase().includes(query.toLocaleLowerCase())
        })
        res.json({characters: filterCharacter})
    } else {
        res.json({characters: data?.results})
    }
})

app.listen(3001, () => console.log('listenin in localhost:3001'))