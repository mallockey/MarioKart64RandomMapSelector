import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import CupSelect from "../components/CupSelect";
import DefaultCup from "../components/DefaultCup";
import FlowerCup from "../components/FlowerCup";
import MushroomCup from "../components/MushroomCup";
import SpecialCup from "../components/SpecialCup";
import StarCup from "../components/StarCup";
import {
  AllCups,
  AllMapsPaths,
  Cup,
  flowerMaps,
  mushroomMaps,
  MushroomMapsImagePaths,
  specialMaps,
  starMaps,
} from "../types";

const getRandomInt = (max: number) => Math.floor(Math.random() * max);

const getRandomCup = () => AllCups[getRandomInt(4)];

const getRandomMapByCup = (cup: Cup) => {
  const randomNumber = getRandomInt(4);
  switch (cup) {
    case Cup.MUSHROOM:
      return mushroomMaps[randomNumber];
    case Cup.FLOWER:
      return flowerMaps[randomNumber];
    case Cup.STAR:
      return starMaps[randomNumber];
    case Cup.SPECIAL:
      return specialMaps[randomNumber];
    default:
      return mushroomMaps[randomNumber];
  }
};

export default function Home() {
  const [cup, setCup] = useState<Cup | null>(null);

  const [selectedMap, setSelectedMap] = useState<AllMapsPaths | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  const [allCupsIsLoading, setAllCupsIsLoading] = useState(false);

  useEffect(() => {
    if (!cup) return;

    setIsLoading(true);
    setSelectedMap(getRandomMapByCup(cup));
    setTimeout(() => {
      setSelectedMap(getRandomMapByCup(cup));
      setTimeout(() => {
        setSelectedMap(getRandomMapByCup(cup));
        setTimeout(() => {
          setSelectedMap(getRandomMapByCup(cup));
          setTimeout(() => {
            setSelectedMap(getRandomMapByCup(cup));
            setTimeout(() => {
              setSelectedMap(getRandomMapByCup(cup));
              setTimeout(() => {
                setSelectedMap(getRandomMapByCup(cup));
                setTimeout(() => {
                  setSelectedMap(getRandomMapByCup(cup));
                  setTimeout(() => {
                    setSelectedMap(getRandomMapByCup(cup));
                    setIsLoading(false);
                    setAllCupsIsLoading(false);
                  }, 150);
                }, 150);
              }, 100);
            }, 100);
          }, 75);
        }, 75);
      }, 50);
    }, 50);
  }, [cup]);

  return (
    <main className="bg-white bg-background-kart min-h-full bg-cover flex flex-col flex-1">
      <Head>
        <title>Mario Kart 64 random map</title>
      </Head>
      <div className="w-full flex justify-center flex-col items-center mb-8 ">
        <Image
          className="mt-8 mb-8 pr-8 pl-8 md:pr-0 md:pl-0"
          src="/mapselect.png"
          height={800}
          width={800}
          alt="mapselect"
        />
        <CupSelect
          cupTitle="All Cups"
          imagePath="/special.png"
          imageHeight={100}
          imageWidth={100}
          onClick={() => {
            setCup((prevCup) => {
              setAllCupsIsLoading(true);
              if (prevCup === cup) {
                setTimeout(() => setCup(getRandomCup()), 0);
                return null;
              }
              return getRandomCup();
            });
          }}
          isSelected={cup === Cup.ALL}
          isLoading={allCupsIsLoading}
        />
      </div>
      <div className="flex w-full justify-center flex-wrap">
        <CupSelect
          cupTitle="Mushroom Cup"
          imagePath="/mushroom.png"
          imageHeight={78}
          imageWidth={78}
          onClick={() => {
            setCup((prevCup) => {
              if (prevCup === Cup.MUSHROOM) {
                setTimeout(() => setCup(Cup.MUSHROOM), 0);
                return null;
              }
              return Cup.MUSHROOM;
            });
          }}
          isSelected={cup === Cup.MUSHROOM}
          isLoading={isLoading && cup === Cup.MUSHROOM}
        />
        <CupSelect
          cupTitle="Flower Cup"
          imagePath="/flower.webp"
          imageHeight={78}
          imageWidth={78}
          onClick={() => {
            setCup((prevCup) => {
              if (prevCup === Cup.FLOWER) {
                setTimeout(() => setCup(Cup.FLOWER), 0);
                return null;
              }
              return Cup.FLOWER;
            });
          }}
          isSelected={cup === Cup.FLOWER}
          isLoading={isLoading && cup === Cup.FLOWER}
        />
        <CupSelect
          cupTitle="Star Cup"
          imagePath="/star.png"
          imageHeight={90}
          imageWidth={90}
          onClick={() => {
            setCup((prevCup) => {
              if (prevCup === Cup.STAR) {
                setTimeout(() => setCup(Cup.STAR), 0);
                return null;
              }
              return Cup.STAR;
            });
          }}
          isSelected={cup === Cup.STAR}
          isLoading={isLoading && cup === Cup.STAR}
        />
        <CupSelect
          cupTitle="Special Cup"
          imagePath="/special.png"
          imageHeight={78}
          imageWidth={78}
          onClick={() => {
            setCup((prevCup) => {
              if (prevCup === Cup.SPECIAL) {
                setTimeout(() => setCup(Cup.SPECIAL), 0);
                return null;
              }
              return Cup.SPECIAL;
            });
          }}
          isSelected={cup === Cup.SPECIAL}
          isLoading={isLoading && cup === Cup.SPECIAL}
        />
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center mt-12 w-full">
        <div>
          <Image
            className="border-4 border-black mb-4 sm:mb-0 w-72 md:w-96"
            height={400}
            width={400}
            src={selectedMap || MushroomMapsImagePaths.LUIGI_RACEWAY}
            alt="selectedCup"
          />
        </div>
        <div className="p-2 hidden md:flex md:w-2/6 md:flex-wrap ">
          {!cup && !selectedMap && <DefaultCup />}
          {cup === Cup.MUSHROOM && selectedMap && (
            <MushroomCup selectedMap={selectedMap} />
          )}
          {cup === Cup.FLOWER && selectedMap && (
            <FlowerCup selectedMap={selectedMap} />
          )}
          {cup === Cup.STAR && selectedMap && (
            <StarCup selectedMap={selectedMap} />
          )}
          {cup === Cup.SPECIAL && selectedMap && (
            <SpecialCup selectedMap={selectedMap} />
          )}
        </div>
      </div>
    </main>
  );
}
