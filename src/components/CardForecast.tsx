import { Hour } from "@/types/types";
import Image from "next/image";

interface Props {
  urlIcon: string;
  temperature: number;
  forecastHour: number;
}
export default function CardForecast({
  urlIcon,
  temperature,
  forecastHour,
}: Props) {
  return (
    <div className="flex flex-col items-center justify-between gap-y-2 px-4 border-r-2 border-black border-opacity-25 min-w-[90px] min-h-[160px">
      <Image
        src={`https:${urlIcon}`}
        height={70}
        width={70}
        alt="icon weather"
      />
      <article className="font-bold text-lg mb-2">{temperature}°</article>
      <article className="border-t-2 border-opacity-25">
        {forecastHour}:00
      </article>
    </div>
  );
}
