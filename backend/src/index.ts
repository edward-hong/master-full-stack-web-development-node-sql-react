import dragon from './dragon'

const fooey = dragon(new Date(), 'fooey')
const baloo = dragon(new Date(), 'baloo')
const mimar = dragon()

setTimeout(() => {
  const gooby = dragon()
  console.log('gooby', gooby)
}, 3000)

console.log('fooey', fooey)
console.log('baloo', baloo)
console.log('mimar', mimar)
