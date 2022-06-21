import express from 'express'

import generationEngine from './engine'

const app = express()

const { start, stop, newDragon } = generationEngine()

start()

app.get('/dragon/new', (req, res) => {
  res.json({ dragon: newDragon() })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`listening on port ${PORT}`))
