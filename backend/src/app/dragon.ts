import TRAITS from '../data/traits.json'

type TraitType = 'backgroundColor' | 'pattern' | 'build' | 'size'

type BackgroundColorValue = 'black' | 'white' | 'green' | 'blue'
type PatternValue = 'plain' | 'striped' | 'spotted' | 'patchy'
type BuildValue = 'slender' | 'stocky' | 'sporty' | 'skinny'
type SizeValue = 'small' | 'medium' | 'large' | 'enormous'

type TraitValue = BackgroundColorValue | PatternValue | BuildValue | SizeValue

interface Trait {
  traitType: TraitType
  traitValue: TraitValue
}

export interface Traits extends Array<Trait> {}

const getRandomFromArr = (arr: any[]) => {
  return arr[Math.floor(Math.random() * arr.length)]
}

const DEFAULT_PROPERTIES = {
  get birthdate() {
    return new Date()
  },
  nickname: 'unnamed',
  get randomTraits() {
    return TRAITS.reduce<Traits>(
      (acc, { type, values }) => [
        ...acc,
        {
          traitType: type as TraitType,
          traitValue: getRandomFromArr(values),
        },
      ],
      []
    )
  },
}

const dragon = (
  birthdate: Date = DEFAULT_PROPERTIES.birthdate,
  nickname: string = DEFAULT_PROPERTIES.nickname,
  traits: Traits = DEFAULT_PROPERTIES.randomTraits
) => {
  return { birthdate, nickname, traits }
}

export default dragon
