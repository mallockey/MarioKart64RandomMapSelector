import { AllMapsPaths, MushroomMapsImagePaths } from "../types";
import MapTitle from "./MapTitle";

interface Props {
  selectedMap: AllMapsPaths | "";
}

const MushroomCup = ({ selectedMap }: Props) => (
  <>
    <MapTitle
      isSelected={selectedMap === MushroomMapsImagePaths.LUIGI_RACEWAY}
      mapName="Luigi Raceway"
    />
    <MapTitle
      mapName="Moo Moo Farm"
      isSelected={selectedMap === MushroomMapsImagePaths.MOO_MOO_FARM}
    />
    <MapTitle
      mapName="Koopa Troopa Beach"
      isSelected={selectedMap === MushroomMapsImagePaths.KOOPA_TROOPA_BEACH}
    />
    <MapTitle
      mapName="Kalimari Desert"
      isSelected={selectedMap === MushroomMapsImagePaths.KALIMARI_DESERT}
    />
  </>
);

export default MushroomCup;
