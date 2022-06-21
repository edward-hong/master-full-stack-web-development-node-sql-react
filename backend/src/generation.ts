import dragon from './dragon'
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

  const expiration = calculateExpiration()

  const newDragon = () => {
    if (Date.now() > expiration.getTime()) {
      throw new Error(`This generation expired on ${expiration}`)
    }

    return dragon()
  }

  return { expiration, newDragon }
}

export default generation
