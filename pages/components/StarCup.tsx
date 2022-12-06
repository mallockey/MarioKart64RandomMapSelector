import { AllMapsPaths, StarMapsImagePaths } from "../types";
import MapTitle from "./MapTitle";

interface Props {
  selectedMap: AllMapsPaths | "";
}

const StarCup = ({ selectedMap }: Props) => (
  <>
    <MapTitle
      mapName="Wario Stadium"
      isSelected={selectedMap === StarMapsImagePaths.WARIO_STADIUM}
    />
    <MapTitle
      mapName="Sherbert Land"
      isSelected={selectedMap === StarMapsImagePaths.SHERBERT_LAND}
    />
    <MapTitle
      mapName="Royal Raceway"
      isSelected={selectedMap === StarMapsImagePaths.ROYAL_RACEWAY}
    />
    <MapTitle
      mapName="Bowser's Castle"
      isSelected={selectedMap === StarMapsImagePaths.BOWSERS_CASTLE}
    />
  </>
);

export default StarCup;
