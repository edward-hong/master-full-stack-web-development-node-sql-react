import express from 'express'

import generationEngine from './generation/engine'
import dragonRouter from './api/dragon'
import generationRouter from './api/generation'

const app = express()

const engine = generationEngine()

app.locals.engine = engine

engine.start()

app.use('/dragon', dragonRouter)
app.use('/generation', generationRouter)

export default app
