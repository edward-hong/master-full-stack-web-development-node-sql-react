import generation from './generation'
import type { Traits } from './dragon'

const generationEngine = () => {
  let timer: NodeJS.Timeout
  let isStarted = false
  let generateNewDragon: () =>
    | { birthdate: Date; nickname: string; traits: Traits }
    | undefined

  const buildNewGeneration = () => {
    const { expiration, newDragon } = generation()

    generateNewDragon = newDragon

    console.log('new generation', { expiration })

    timer = setTimeout(buildNewGeneration, expiration.getTime() - Date.now())
  }

  const start = () => {
    if (!isStarted) {
      buildNewGeneration()
      isStarted = true
    }
  }

  const stop = () => {
    if (isStarted) {
      clearTimeout(timer)
      isStarted = false
    }
  }

  const newDragon = () => {
    return generateNewDragon()
  }

  return { start, stop, newDragon }
}

export default generationEngine
