import Image from "next/image";
import ReactLoading from "react-loading";

interface Props {
  cupTitle: string;
  imagePath: string;
  imageHeight: number;
  imageWidth: number;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  isSelected: boolean;
  isLoading: boolean;
}

const CupSelect = ({
  cupTitle,
  imagePath,
  imageHeight,
  imageWidth,
  onClick,
  isSelected,
  isLoading,
}: Props) => {
  const buttonStyle = isSelected
    ? "bg-slate-300 mt-2 mb-2 w-32 p-2 md:w-72 md:h-36 w-72 text-3xl text-purple-500 font-extrabold flex flex-col items-center justify-center uppercase ml-4 mr-4 border-black  border-4 cursor-pointer"
    : "bg-black  mt-2 mb-2 w-32 p-2 break-normal overflow-clip md:w-72 md:h-36    text-3xl text-purple-500 font-extrabold flex flex-col items-center justify-center uppercase ml-4 mr-4 cursor-pointer";
  return (
    <button onClick={onClick} className={buttonStyle}>
      {isLoading ? (
        <ReactLoading
          type="spin"
          color="rgba(59, 130, 246)"
          height={100}
          width={100}
        />
      ) : (
        <>
          <Image
            height={imageHeight}
            width={imageWidth}
            src={imagePath}
            alt="cupselect"
          />
          <span>{cupTitle}</span>
        </>
      )}
    </button>
  );
};

export default CupSelect;
