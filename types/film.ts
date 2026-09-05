export interface Film {
  id: string
  title: string
  director: string
  country: string
  year: number
  duration: number // in minutes
  category: FilmCategory
  poster: string
  synopsis: {
    pt: string
    en: string
    fr: string
  }
  screeningDate?: string
  screeningTime?: string
  venue?: string
  genre?: string
}

export type FilmCategory =
  | "OPENING" // Opening Film
  | "CLOSING" // Closing Film
  | "OCF" // Official Competition Feature Fiction
  | "OCD" // Official Competition Feature Documentary
  | "OCSF" // Official Competition Short Fiction
  | "OCSD" // Official Competition Short Documentary
  | "CCC" // Contemporary Cinema of the Continent
  | "CCN" // Contemporary Cinema National
  | "KAFUKINHA" // Children's Films

export interface FilmCategoryInfo {
  code: FilmCategory
  name: {
    pt: string
    en: string
    fr: string
  }
  description: {
    pt: string
    en: string
    fr: string
  }
}
