import { getRandomPlanetName } from "./planet-names"
import { PlanetInfo, PopRange, PopUnits } from "./planet-types"

export interface PlanetFeatures {
  name: string,
  type: string,
  population: string,
  exports: string,
  orbitalPeriod: string,
  rotationalPeriod: string,
  diameter: string
  established: string,
  gdp: string,
}

export const generatePlanetFeatures = (planetInfo: PlanetInfo) => {
  return {
    name: getRandomPlanetName(),
    type: planetInfo.title,
    rotationalPeriod: getRandomRotationalPeriod(),
    orbitalPeriod: getRandomizedOrbitalPeriod(),
    diameter: getRandomizedDiameter(),
    population: getRandomizedPopulation(planetInfo.popRange),
    exports: getRandomizedExports(planetInfo.exports),
    gdp: getRandomizedGDP(),
    established: getRandomizedYear(),
  }


}

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function coinFlip() {
  return (Math.floor(Math.random() * 2) === 0) ? 0 : 1;
}

const getRandomRotationalPeriod = () => {
  const value = getRandomInt(5, 100)
  return `${value.toLocaleString()} hours`
}

const getRandomizedOrbitalPeriod = () => {
  const tier = coinFlip() ? 'low' : 'high'
  const value = tier === 'low' ? getRandomInt(10, 2000) : getRandomInt(600, 10000)
  return `${value.toLocaleString()} days`
}

const getRandomizedDiameter = () => {
  const value = getRandomInt(2000, 200000)
  return `${value.toLocaleString()} km`
}

const getRandomizedPopulation = (popRange: PopRange) => {
  const { min, max, unit } = popRange
  const value = getRandomInt(min, max)
  return unit === PopUnits.B ? value + ',000,000,000' : value + ',000,000'
}

const getRandomizedExports = (exports: Array<string>): string => {

  let shuffled = exports
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

  console.log({ exports, shuffled })
  return shuffled.slice(0, 3).sort().join(", ")
}

const getRandomizedGDP = () => {
  const value = getRandomInt(1, 100)
  return '$' + value + ',000,000,000'
}

const getRandomizedYear = () => {
  const value = getRandomInt(3500, 4500)
  return value + ' CE'

}