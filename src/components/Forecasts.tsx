import { Hour } from "@/types/types";
import { dayWeek } from "@/constants/constants";
import GenerateForecast from "./GenerateForecast";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

interface Props {
  forecastDay1: Hour[];
  forecastDay2: Hour[];
  localtime: string;
}
//Obtiene el arreglo del dia actual y el arreglo del proximo dia
export default function Forecasts({
  forecastDay1,
  forecastDay2,
  localtime,
}: Props) {
  //Filtra las horas del dia del primer arreglo que ya pasaron
  const filteredHours = forecastDay1.filter((hour) => {
    const updatedHour = new Date(localtime);
    const hourObject = new Date(hour.time);
    return hourObject >= updatedHour;
  });
  //Obtiene el dia del segundo del arreglo para mostrarlo en la union de arreglos
  const day = new Date(forecastDay2[0].time);
  //Manejo del scroll con botones en modo desktop
  const scrollContent = useRef<HTMLDivElement | null>(null);
  const [isAtStart, setIsAtStart] = useState<boolean>(true);
  const [isAtEnd, setIsAtEnd] = useState<boolean>(false);

  const scrollLeft = () => {
    if (scrollContent.current) {
      setIsAtEnd(false)
      scrollContent.current.scrollLeft -= 300;
      if (scrollContent.current.scrollLeft === 0) setIsAtStart(true);
    }
  };
  const scrollRight = () => {
    if (scrollContent.current) {
      scrollContent.current.scrollLeft += 300;
      setIsAtStart(false)
      setIsAtEnd(
        scrollContent.current.scrollLeft ===
          scrollContent.current.scrollWidth - scrollContent.current.clientWidth
      );
    }
  };
 
  return (
    <div className="sm:relative w-full sm:flex sm:justify-center">
      <button className="hidden sm:inline" onClick={scrollLeft}>
        <Image
          src="left-arrow.svg"
          width={35}
          height={35}
          alt="left arrow"
          className={`hover:w-10 duration-300 rounded-full hover:backdrop-blur-md ${
            isAtStart ? "opacity-0" : "inline"
          }`}
        />
      </button>
      <div
        className="flex overflow-x-scroll sm:overflow-hidden p-4 glassmorphism text-white sm:max-w-xl w-full sm:rounded-lg"
        ref={scrollContent}
      >
        <GenerateForecast forecastDay={filteredHours} />
        <div className="px-2 border-r-2 border-black border-opacity-25 text-center flex flex-col justify-center">
          <article>{dayWeek[day.getDay()]}</article>
          <article className="text-4xl">{day.getDate()}</article>
        </div>
        <GenerateForecast forecastDay={forecastDay2} />
      </div>
      <button className="hidden sm:inline" onClick={scrollRight}>
        <Image
          src="left-arrow.svg"
          width={35}
          height={35}
          alt="left arrow"
          className={`hover:w-10 duration-300 rounded-full hover:backdrop-blur-md rotate-180 ${
            isAtEnd ? "opacity-0" : "inline"}`}
        />
      </button>
    </div>
  );
}
