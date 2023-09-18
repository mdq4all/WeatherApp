"use client";

import { weatherInterface } from "@/types/types";

interface Props {
  setWeather: (weatherData: weatherInterface | null) => void;
  setError: (error: string | null) => void;
}

export default function Searchbar({ setWeather, setError }: Props) {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const cityName = e.currentTarget.city.value.trim();
    const res = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${process.env.API_KEY}&q=${cityName}&aqi=no&days=2`
    );
    if (!res.ok) {
      setWeather(null);
      setError("Invalid city");
      return;
    }
    const weatherData = await res.json();
    setWeather(weatherData);
    setError(null);
  };

  return (
    <form
      className="flex items-center flex-wrap glassmorphism dark:bg-[#08182E] w-full mb-4 shadow-box dark:shadow-none sm:max-w-xl sm:rounded-lg"
      onSubmit={handleSubmit}
    >
      <div className="px-2"></div>
      <input
        type="search"
        name="city"
        placeholder="Search a city..."
        className="focus:outline-none flex-1 bg-transparent placeholder:text-white rounded-lg p-2 mr-2"
      />
      <button className="p-4 bg-sky-800 rounded-2xl text-white">Search</button>
    </form>
  );
}
