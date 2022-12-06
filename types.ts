export enum MushroomMapsImagePaths {
  LUIGI_RACEWAY = "/mushroomcup/luigiraceway.webp",
  MOO_MOO_FARM = "/mushroomcup/mooMooFarm.webp",
  KOOPA_TROOPA_BEACH = "/mushroomcup/koopaTroopaBeach.webp",
  KALIMARI_DESERT = "/mushroomcup/kalimariDesert.webp",
}

export enum FlowerMapsImagePaths {
  TOADS_TURNPIKE = "/flowercup/toadsTurnpike.webp",
  FRAPPE_SNOWLAND = "/flowercup/frappeSnowland.webp",
  CHOCO_MOUNTAIN = "/flowercup/chocoMountain.webp",
  MARIO_RACEWAY = "/flowercup/marioRaceway.webp",
}

export enum StarMapsImagePaths {
  WARIO_STADIUM = "/starcup/warioStadium.webp",
  SHERBERT_LAND = "/starcup/sherbertLand.webp",
  ROYAL_RACEWAY = "/starcup/royalRaceway.webp",
  BOWSERS_CASTLE = "/starcup/bowsersCastle.webp",
}

export enum SpecialMapsImagePaths {
  DK_JUNGLE = "/specialcup/dkJungle.webp",
  YOSHI_VALLEY = "/specialcup/yoshiValley.webp",
  BANSHEE_BOARDWALK = "/specialcup/bansheeBoardwalk.webp",
  RAINBOW_ROAD = "/specialcup/rainbowRoad.webp",
}

export enum Cup {
  MUSHROOM = "MUSHROOM",
  FLOWER = "FLOWER",
  STAR = "STAR",
  SPECIAL = "SPECIAL",
  ALL = "ALL",
}

export const mushroomMaps: MushroomMapsImagePaths[] = [
  MushroomMapsImagePaths.LUIGI_RACEWAY,
  MushroomMapsImagePaths.MOO_MOO_FARM,
  MushroomMapsImagePaths.KOOPA_TROOPA_BEACH,
  MushroomMapsImagePaths.KALIMARI_DESERT,
];

export const flowerMaps: FlowerMapsImagePaths[] = [
  FlowerMapsImagePaths.TOADS_TURNPIKE,
  FlowerMapsImagePaths.FRAPPE_SNOWLAND,
  FlowerMapsImagePaths.CHOCO_MOUNTAIN,
  FlowerMapsImagePaths.MARIO_RACEWAY,
];

export const starMaps: StarMapsImagePaths[] = [
  StarMapsImagePaths.WARIO_STADIUM,
  StarMapsImagePaths.SHERBERT_LAND,
  StarMapsImagePaths.ROYAL_RACEWAY,
  StarMapsImagePaths.BOWSERS_CASTLE,
];

export const specialMaps: SpecialMapsImagePaths[] = [
  SpecialMapsImagePaths.DK_JUNGLE,
  SpecialMapsImagePaths.YOSHI_VALLEY,
  SpecialMapsImagePaths.BANSHEE_BOARDWALK,
  SpecialMapsImagePaths.RAINBOW_ROAD,
];

export const AllMaps = [
  ...mushroomMaps,
  ...flowerMaps,
  ...starMaps,
  ...specialMaps,
];

export const AllCups = [Cup.MUSHROOM, Cup.FLOWER, Cup.STAR, Cup.SPECIAL];

export type AllMapsPaths =
  | MushroomMapsImagePaths
  | FlowerMapsImagePaths
  | StarMapsImagePaths
  | SpecialMapsImagePaths;
