"use client";

import Searchbar from "@/components/Searchbar";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { weatherInterface } from "@/types/types";
import MainData from "@/components/MainData";
import MiddleData from "@/components/MiddleData";
import Forecasts from "@/components/Forecasts";
import Link from "next/link";
import Main from "@/components/Main";
import { setBack } from "./utils/setBack";

export default function Home() {
  const [weather, setWeather] = useState<weatherInterface | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [backImage, setBackImage] = useState({
    mobile: "bg-desktop",
    desktop: "bg-desktop",
  });

  useEffect(() => {
    if (weather?.current.condition.text){
      setBackImage(setBack(weather.current.condition.text))
    }
  }, [weather]);

  return (
    <div
      className={`h-screen w-full ${backImage.mobile} ${backImage.desktop} bg-center bg-cover flex flex-col justify-between`}
    >
      <div className="py-2 glassmorphism">
        <Image
          src="/another-weather-app-low-resolution-logo-white-on-transparent-background.svg"
          width={250}
          height={10}
          alt="logo"
          className="p-4 h-auto"
        />
      </div>
      <div className="flex flex-col items-center">
        <Searchbar setWeather={setWeather} setError={setError} />
        {!weather && <Main />}
        {weather && <MainData weather={weather} />}
        {weather && <MiddleData weather={weather} />}
        {weather && (
          <Forecasts
            forecastDay1={weather.forecast.forecastday[0].hour}
            forecastDay2={weather.forecast.forecastday[1].hour}
            localtime={weather.location.localtime}
          />
        )}
      </div>
      <footer>
        <p className="flex gap-x-4 text-white justify-center glassmorphism py-4">
          Powered by{" "}
          <Link href="https://www.weatherapi.com/" title="Free Weather API">
            WeatherAPI.com
          </Link>
          <Link href="https://www.weatherapi.com/" title="Free Weather API">
            <Image
              src="https://cdn.weatherapi.com/v4/images/weatherapi_logo.png"
              alt="Weather data by WeatherAPI.com"
              height={40}
              width={40}
              className="w-auto"
            />
          </Link>
        </p>
      </footer>
    </div>
  );
}
