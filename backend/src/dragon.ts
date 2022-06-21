const DEFAULT_PROPERTIES = {
  get birthdate() {
    return new Date()
  },
  nickname: 'unnamed',
}

const dragon = (
  birthdate: Date = DEFAULT_PROPERTIES.birthdate,
  nickname: string = DEFAULT_PROPERTIES.nickname
) => {
  return { birthdate, nickname }
}

export default dragon
