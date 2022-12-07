interface Props {
  mapName: string;
  isSelected?: boolean;
}

const MapTitle = ({ mapName, isSelected }: Props) => {
  const mapStyle = isSelected
    ? "bg-slate-300 h-28 md:h-16 w-full mb-4  p-4 text-2xl flex items-center justify-center  uppercase text-center border-4 border-green-400 text-black font-bold"
    : " w-full mb-4 h-28 md:h-16 p-4 text-2xl flex items-center justify-center bg-black uppercase text-center text-white font-bold";
  return (
    <>
      <div className={mapStyle}>{mapName}</div>
    </>
  );
};

export default MapTitle;
