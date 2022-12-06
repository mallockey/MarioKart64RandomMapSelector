import { AllMapsPaths, FlowerMapsImagePaths } from "../types";
import MapTitle from "./MapTitle";

interface Props {
  selectedMap: AllMapsPaths | "";
}

const FlowerCup = ({ selectedMap }: Props) => (
  <>
    <MapTitle
      mapName="Toad's Turnpike"
      isSelected={selectedMap === FlowerMapsImagePaths.TOADS_TURNPIKE}
    />
    <MapTitle
      mapName="Frappe Snowland"
      isSelected={selectedMap === FlowerMapsImagePaths.FRAPPE_SNOWLAND}
    />
    <MapTitle
      mapName="Choco Mountain"
      isSelected={selectedMap === FlowerMapsImagePaths.CHOCO_MOUNTAIN}
    />
    <MapTitle
      mapName="Mario Raceway"
      isSelected={selectedMap === FlowerMapsImagePaths.MARIO_RACEWAY}
    />
  </>
);

export default FlowerCup;
