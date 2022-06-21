import generation from './generation'

const generationEngine = () => {
  let timer: NodeJS.Timeout
  let isStarted = false

  const buildNewGeneration = () => {
    const { expiration } = generation()

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

  return { start, stop }
}

export default generationEngine
