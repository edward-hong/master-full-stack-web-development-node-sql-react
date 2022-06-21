import generation from './generation'

const { expiration, newDragon } = generation()

const gooby = newDragon()

console.log('gooby', gooby)

setTimeout(() => {
  const mimar = newDragon()
  console.log('mimar', mimar)
}, 15000)
