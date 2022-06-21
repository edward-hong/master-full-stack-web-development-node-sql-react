import { REFREST_RATE, SECONDS } from './config'

const refreshRate = REFREST_RATE * SECONDS

const generation = () => {
  const calculateExpiration = () => {
    const expirationPeriod = Math.floor(Math.random() * (refreshRate / 2))

    const msUntilExpiration =
      Math.random() < 0.5
        ? refreshRate - expirationPeriod
        : refreshRate + expirationPeriod

    return new Date(Date.now() + msUntilExpiration)
  }
}

export default generation
