"use client";

import Searchbar from "@/components/Searchbar";
import Image from "next/image";
import React, { useState } from "react";
import { weatherInterface } from "@/types/types";
import MainData from "@/components/MainData";
import MiddleData from "@/components/MiddleData";
import Forecasts from "@/components/Forecasts";
import Link from "next/link";

export default function Home() {
  const [weather, setWeather] = useState<weatherInterface | null>(null);
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="h-screen bg-mobile bg-center bg-cover flex flex-col justify-between">
      <div className="pt-4">
        <Image
          src="/another-weather-app-low-resolution-logo-white-on-transparent-background.svg"
          width={250}
          height={10}
          alt="logo"
          className="p-4"
        />
        <Searchbar setWeather={setWeather} setError={setError} />
      </div>
      {weather && <MainData weather={weather} />}
      {weather && <MiddleData weather={weather} />}
      {weather && (
        <Forecasts
          forecastDay1={weather.forecast.forecastday[0].hour}
          forecastDay2={weather.forecast.forecastday[1].hour}
          localtime={weather.location.localtime}
        />
      )}
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
            />
          </Link>
        </p>
      </footer>
    </div>
  );
}
