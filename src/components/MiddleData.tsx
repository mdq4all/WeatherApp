import { weatherInterface } from "@/types/types";
import MiddleIcons from "./MiddleIcons";

interface MainDataProps {
  weather: weatherInterface;
}
export default function MiddleData({ weather }: MainDataProps) {
  return (
    <div className="grid grid-cols-2 justify-items-center glassmorphism py-4 gap-y-4 mb-4">
      <div>
        <MiddleIcons
          src="/icon8-water.png"
          alt="humidity icon"
          content={`${weather.current.humidity}%`}
        />
      </div>
      <div>
        <MiddleIcons
          src="/icons-cloud.png"
          alt="cloud icon"
          content={`${weather.current.cloud}%`}
        />
      </div>
      <div>
        <MiddleIcons
          src="/icons-wind.png"
          alt="wind icon"
          content={weather.current.wind_dir}
        />
      </div>
      <div>
        <MiddleIcons
          src="/icons-rain.png"
          alt="wind icon"
          content={`${weather.current.precip_mm} mm`}
        />
      </div>
    </div>
  );
}
