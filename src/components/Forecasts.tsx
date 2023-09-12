import { Hour } from "@/types/types";
import { dayWeek } from "@/constants/constants";
import GenerateForecast from "./GenerateForecast";

interface Props {
  forecastDay1: Hour[];
  forecastDay2: Hour[];
  localtime: string
}

export default function Forecasts({ forecastDay1, forecastDay2, localtime }: Props) {

  const updatedHour = new Date(localtime);
  const filteredHours = forecastDay1.filter((hour) => {
    const hourObject = new Date(hour.time);
    return hourObject >= updatedHour;
  });

  const day = new Date(forecastDay2[0].time);
  return (
    <div className="flex overflow-scroll p-4 glassmorphism text-white">
      <GenerateForecast forecastDay={filteredHours} />
      <div className="px-2 border-r-2 border-black border-opacity-25 text-center flex flex-col justify-center">
        <article>{dayWeek[day.getDay()]}</article>
        <article className="text-4xl">{day.getDate()}</article>
      </div>
      <GenerateForecast forecastDay={forecastDay2} />
    </div>
  );
}
