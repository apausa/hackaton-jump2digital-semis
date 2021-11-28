export interface EventInterface {
  target: TargetInterface,
}

export interface TargetInterface {
  value: string,
}

export interface DataInterface {
  image?: string,
  price?: string,
}

export interface CountriesInterface {
  countries?: CountryInterface[],
}

export interface CountryInterface {
  name: string,
  unicodeFlag: string
}
