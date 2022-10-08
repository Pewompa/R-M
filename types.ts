export interface GetCharacterResults {
  info: Info;
  results: Character[];
}

export interface GetLocationResults {
  info: Info;
  results: Result[];
}
export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: null;
}

export interface Character {
  id: number;
  name: string;
  status: Status;
  species: Species;
  type: string;
  gender: Gender;
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: Date;
}

export enum Gender {
  Female = 'Female',
  Male = 'Male',
  Unknown = 'unknown',
}

export interface Location {
  name: string;
  url: string;
}

export enum Species {
  Alien = 'Alien',
  Human = 'Human',
}

export enum Status {
  Alive = 'Alive',
  Dead = 'Dead',
  Unknown = 'unknown',
}

export interface Welcome {
  info: Info;
  results: Result[];
}

export interface Result {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: Date;
}
