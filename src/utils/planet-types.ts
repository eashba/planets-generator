import { Vector4 } from "three";

export const PopUnits = {
  B: 'B',
  M: 'M'
}

export interface PopRange {
  min: number,
  max: number,
  unit: string,
}

export interface PlanetInfo {
  title: string,
  type: string,
  popRange: PopRange,
  exports: Array<string>,
  hasClouds: boolean,
  cloudColor?: Vector4,
  colorPalette: Array<Vector4>,
}

const genericExports = [
  'General Research',
  'Alien Artifacts',
  'Consumer Goods',
  'Entertainment',
  'Heavy Industry',
  'Pharmaceuticals',
  'Oil',
  'Rare Metals',
  'Rare Minerals',
  'Robotics',
  'Soldiers',
  'Tax Haven',
  'Technology',
  'Natural Gas',
]

const defualtCloudColor = new Vector4(1.0, 1.0, 1.0, .7);

const getTemparatePlanetInfo = (): PlanetInfo => {
  return {
    title: 'Temparate Planet',
    type: 'TEMPERATE',
    exports: [...genericExports, 'Grain', 'Meat', 'Lumber', 'Fish'],
    hasClouds: true,
    cloudColor: defualtCloudColor,
    popRange: { min: 5, max: 50, unit: PopUnits.B },
    colorPalette: [
      new Vector4(0.75, 0.80, 0.46, 1.0),
      new Vector4(0.39, 0.67, 0.25, 1.0),
      new Vector4(0.18, 0.34, 0.33, 1.0),
      new Vector4(0.20, 0.28, 0.31, 1.0),
      new Vector4(0.20, 0.28, 0.31, 1.0),
    ]
  }
}

const getTropicalPlanetInfo = (): PlanetInfo => {
  return {
    title: 'Tropical Planet',
    type: 'TROPICAL',
    exports: [...genericExports, 'Unobtainium', 'Tourism', 'Rare Gases'],
    hasClouds: true,
    cloudColor: defualtCloudColor,
    popRange: { min: 5, max: 50, unit: PopUnits.B },
    colorPalette: [
      new Vector4(0.05, 0.18, 0.11, 1.0),
      new Vector4(0.11, 0.37, 0.23, 1.0),
      new Vector4(0.20, 0.50, 0.32, 1.0),
      new Vector4(0.71, 0.77, 0.59, 1.0),
      new Vector4(0.11, 0.30, 0.33, 1.0),
    ]
  }
}

const getSnowyPlanetInfo = (): PlanetInfo => {
  return {
    title: 'Arctic Planet',
    type: 'SNOWY',
    exports: [...genericExports, 'Cryogenic Research', 'Tourism'],
    hasClouds: true,
    cloudColor: defualtCloudColor,
    popRange: { min: 100, max: 999, unit: PopUnits.M },
    colorPalette: [
      new Vector4(0.98, 0.98, 0.98, 1.0),
      new Vector4(0.64, 0.83, 0.89, 1.0),
      new Vector4(0.46, 0.67, 0.74, 1.0),
      new Vector4(0.87, 0.88, 0.89, 1.0),
      new Vector4(0.87, 0.88, 0.89, 1.0),
    ]
  }
}

const getFrozenPlanetInfo = (): PlanetInfo => {
  return {
    title: 'Frozen Planet',
    type: 'FROZEN',
    exports: [...genericExports, 'Cryogenic Research', 'Tourism', 'Genetic Research', 'Top Secret Research'],
    hasClouds: false,
    popRange: { min: 10, max: 100, unit: PopUnits.M },
    colorPalette: [
      new Vector4(0.98, 0.98, 0.98, 1.0),
      new Vector4(0.87, 0.88, 0.89, 1.0),
      new Vector4(0.80, 0.82, 0.83, 1.0),
      new Vector4(0.98, 0.98, 0.98, 1.0),
      new Vector4(0.87, 0.88, 0.89, 1.0),
    ]
  }
}

const getSaltPlanetInfo = (): PlanetInfo => {
  return {
    title: 'Mineral Planet',
    type: 'SALT',
    exports: [...genericExports, 'Raw Earth Materials'],
    hasClouds: false,
    popRange: { min: 100, max: 999, unit: PopUnits.M },
    colorPalette: [
      new Vector4(0.80, 0.72, 0.72, 1.0),
      new Vector4(0.72, 0.34, 0.34, 1.0),
      new Vector4(0.51, 0.21, 0.21, 1.0),
      new Vector4(0.87, 0.88, 0.89, 1.0),
      new Vector4(0.87, 0.88, 0.89, 1.0),
    ]
  }
}

const getDesertPlanetInfo = (): PlanetInfo => {
  return {
    title: 'Desert Planet',
    type: 'DESERT',
    exports: [...genericExports, 'Spice Melange', 'Livestock', 'Raw Earth Materials'],
    hasClouds: true,
    cloudColor: new Vector4(0.94, 0.80, 0.67, 0.7),
    popRange: { min: 100, max: 999, unit: PopUnits.M },
    colorPalette: [
      new Vector4(0.82, 0.58, 0.39, 1.0),
      new Vector4(0.67, 0.36, 0.23, 1.0),
      new Vector4(0.44, 0.22, 0.12, 1.0),
      new Vector4(0.84, 0.68, 0.52, 1.0),
      new Vector4(0.84, 0.68, 0.52, 1.0),
    ]
  }
}

const getToxicPlanetInfo = (): PlanetInfo => {
  return {
    title: 'Toxic Planet',
    type: 'TOXIC',
    exports: [...genericExports, 'Top Secret Research', 'Raw Earth Materials'],
    hasClouds: true,
    cloudColor: new Vector4(0.16, 0.01, 0.08, 0.4),
    popRange: { min: 10, max: 100, unit: PopUnits.M },
    colorPalette: [
      new Vector4(0.17, 0.24, 0.16, 1.0),
      new Vector4(0.22, 0.31, 0.21, 1.0),
      new Vector4(0.36, 0.18, 0.26, 1.0),
      new Vector4(0.36, 0.18, 0.26, 1.0),
      new Vector4(0.32, 0.13, 0.21, 1.0),
    ]
  }
}

const getSwampPlanetInfo = (): PlanetInfo => {
  return {
    title: 'Swamp Planet',
    type: 'SWAMP',
    exports: [...genericExports, 'Fish', 'Lumber', 'Meat', 'Livestock', 'Rare Gases'],
    hasClouds: true,
    cloudColor: defualtCloudColor,
    popRange: { min: 5, max: 30, unit: PopUnits.B },
    colorPalette: [
      new Vector4(0.18, 0.24, 0.27, 1.0),
      new Vector4(0.21, 0.31, 0.32, 1.0),
      new Vector4(0.32, 0.47, 0.44, 1.0),
      new Vector4(0.52, 0.66, 0.55, 1.0),
      new Vector4(0.18, 0.24, 0.27, 1.0),
    ]
  }
}

const getOceanPlanetInfo = (): PlanetInfo => {
  return {
    title: 'Ocean Planet',
    type: 'OCEAN',
    exports: [...genericExports, 'Fish', 'Meat', 'Livestock'],
    hasClouds: true,
    cloudColor: defualtCloudColor,
    popRange: { min: 5, max: 50, unit: PopUnits.B },
    colorPalette: [
      new Vector4(0.03, 0.34, 0.39, 1.0),
      new Vector4(0.03, 0.30, 0.35, 1.0),
      new Vector4(0.97, 0.98, 0.87, 1.0),
      new Vector4(0.36, 0.72, 0.49, 1.0),
      new Vector4(0.03, 0.30, 0.35, 1.0),
    ]
  }
}

const getRedPlanetInfo = (): PlanetInfo => {
  return {
    title: 'Volcanic Planet',
    type: 'RED',
    exports: [...genericExports, 'Raw Earth Materials'],
    hasClouds: true,
    cloudColor: new Vector4(0.07, 0.01, 0.01, 0.6),
    popRange: { min: 10, max: 100, unit: PopUnits.M },
    colorPalette: [
      new Vector4(0.88, 0.62, 0.28, 1.0),
      new Vector4(0.72, 0.34, 0.19, 1.0),
      new Vector4(0.39, 0.14, 0.13, 1.0),
      new Vector4(0.13, 0.04, 0.00, 1.0),
      new Vector4(0.33, 0.10, 0.09, 1.0),
    ]
  }
}

const getMoonPlanetInfo = (): PlanetInfo => {
  return {
    title: 'Barren',
    type: 'MOON',
    exports: [...genericExports, 'Cheese', 'Top Secret Research'],
    hasClouds: false,
    popRange: { min: 1, max: 10, unit: PopUnits.M },
    colorPalette: [
      new Vector4(0.54, 0.55, 0.57, 1.0),
      new Vector4(0.25, 0.25, 0.27, 1.0),
      new Vector4(0.36, 0.37, 0.39, 1.0),
      new Vector4(0.46, 0.47, 0.49, 1.0),
      new Vector4(0.46, 0.47, 0.49, 1.0),
    ]
  }
}


export const PLANET_INFO_PROVIDERS = {
  TEMPERATE: getTemparatePlanetInfo,
  TROPICAL: getTropicalPlanetInfo,
  SNOWY: getSnowyPlanetInfo,
  FROZEN: getFrozenPlanetInfo,
  SALT: getSaltPlanetInfo,
  DESERT: getDesertPlanetInfo,
  TOXIC: getToxicPlanetInfo,
  SWAMP: getSwampPlanetInfo,
  OCEAN: getOceanPlanetInfo,
  RED: getRedPlanetInfo,
  MOON: getMoonPlanetInfo,
}
