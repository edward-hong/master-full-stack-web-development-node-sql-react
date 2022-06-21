import generationEngine from './engine'

const { start, stop } = generationEngine()

start()

setTimeout(() => {
  stop()
}, 20000)
