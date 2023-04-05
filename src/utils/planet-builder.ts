import { createBasePlanet } from "../elements/base-planet";
import { createClouds } from "../elements/clouds";
import { createLandmass } from "../elements/landmass";
import { createSpace } from "../elements/space";
import { PLANET_INFO_PROVIDERS, PlanetInfo } from "./planet-types";

export const addNewPlanetAndSpaceToScene = (scene: THREE.Scene) => {

  const randomPlanetTypeIndex = Math.floor(Math.random() * (Object.keys(PLANET_INFO_PROVIDERS).length));
  const key = Object.keys(PLANET_INFO_PROVIDERS)[randomPlanetTypeIndex]

  // @ts-ignore: key warning
  const planetInfo: PlanetInfo = PLANET_INFO_PROVIDERS[key]();

  return { planetInfo, ...addPlanetAndSpaceToScene(planetInfo, scene) }

}


export const addPlanetAndSpaceToScene = (info: PlanetInfo, scene: THREE.Scene) => {
  const { colorPalette, hasClouds, cloudColor } = info;

  const space = createSpace()
  const basePlanet = createBasePlanet(colorPalette)
  const landmass = createLandmass(colorPalette)
  
  landmass.renderOrder = 1.0
  scene.add(space)
  scene.add(basePlanet)
  scene.add(landmass)

  let clouds: THREE.Mesh

  if (hasClouds && cloudColor) {
    clouds = createClouds(cloudColor)
    clouds.renderOrder = 2.0
    scene.add(clouds)
  }

  return {
    cleanupSceneFn: () => {
      basePlanet.removeFromParent()
      landmass.removeFromParent()
      space.removeFromParent()
      clouds?.removeFromParent()
    },
    planetAnimationFn: () => {
      basePlanet.rotation.y += .0004
      landmass.rotation.y += .0004
      if (hasClouds) {
        clouds.rotation.y += .0002
      }
    }
  }

}
