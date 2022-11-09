import generate from './'
import type { Traits } from '../dragon'

const generationEngine = () => {
  let timer: NodeJS.Timeout
  let isStarted = false
  let generateNewDragon: () =>
    | { birthdate: Date; nickname: string; traits: Traits }
    | undefined
  let currentExpiration: any

  const buildNewGeneration = () => {
    const { expiration, newDragon } = generate()

    generateNewDragon = newDragon
    currentExpiration = expiration

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

  const generation = () => {
    return { expiration: currentExpiration }
  }

  return { start, stop, newDragon, generation }
}

export default generationEngine
