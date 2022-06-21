import express from 'express'

import generationEngine from './engine'

const app = express()

const { start, stop, newDragon } = generationEngine()

start()

app.get('/dragon/new', (req, res) => {
  res.json({ dragon: newDragon() })
})

export default app
