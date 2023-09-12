import { Hour } from "@/types/types";
import CardForecast from "./CardForecast";

interface GenerateForecastProps {
  forecastDay: Hour[];
}

export default function GenerateForecast({ forecastDay }: GenerateForecastProps) {
  return (
    <div className="flex">
      {forecastDay.map((forecastHour, index) => {
        const hour = new Date(forecastHour.time);
        return (
          <CardForecast
            key={index}
            urlIcon={forecastHour.condition.icon}
            temperature={forecastHour.temp_c}
            forecastHour={hour.getHours()}
          />
        );
      })}
    </div>
  );
}
