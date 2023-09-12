import { weatherInterface } from "@/types/types";
import Image from "next/image";

interface MainDataProps {
  weather: weatherInterface;
}

export default function MainData({ weather }: MainDataProps) {
  return (
    <div>
      <h2 className="italic text-right px-4 font-bold mb-2 text-white">
        {weather.location.name}, {weather.location.country}
      </h2>
      <div className="flex items-center p-3 gap-x-4 glassmorphism my-4 text-white">
        <Image
          src={`https:${weather.current.condition.icon}`}
          height={90}
          width={90}
          alt={`icon of ${weather.current.condition.text}`}
        />
        <article className="text-5xl font-bold">
          {weather.current.temp_c}°
        </article>
        <div className="">
          <article className="text-white font">
            {weather.current.condition.text}
          </article>
          <article>
            <span>feels like: </span>
            {weather.current.feelslike_c}°
          </article>
        </div>
      </div>
    </div>
  );
}
