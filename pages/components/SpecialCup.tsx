import { AllMapsPaths, SpecialMapsImagePaths } from "../types";
import MapTitle from "./MapTitle";

interface Props {
  selectedMap: AllMapsPaths | "";
}

const SpecialCup = ({ selectedMap }: Props) => (
  <>
    <MapTitle
      mapName="DK's Jungle Parkway"
      isSelected={selectedMap === SpecialMapsImagePaths.DK_JUNGLE}
    />
    <MapTitle
      mapName="Yoshi Valley"
      isSelected={selectedMap === SpecialMapsImagePaths.YOSHI_VALLEY}
    />
    <MapTitle
      mapName="Banshee Boardwalk"
      isSelected={selectedMap === SpecialMapsImagePaths.BANSHEE_BOARDWALK}
    />
    <MapTitle
      mapName="Rainbow Road"
      isSelected={selectedMap === SpecialMapsImagePaths.RAINBOW_ROAD}
    />
  </>
);

export default SpecialCup;
