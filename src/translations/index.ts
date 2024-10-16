import dist from './translations.json'

type Lang = {
  greeting: string
}

type Data = {
  en: Lang
  ru: Lang
}

const data: Data = dist

export default data
