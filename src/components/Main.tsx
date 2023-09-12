import Image from "next/image";
import Link from "next/link";

export default function Main() {
  return (
    <div className="flex items-center flex-col text-white glassmorphism py-4 gap-y-6">
      <Image src="/another-weather-app-low-resolution-logo-white-on-transparent-background.svg" width={400} height={30} alt="logo" />
      <p className="text-xl">Powered by</p>
      <Link href="https://www.weatherapi.com/" title="Free Weather API">
            <Image
              src="https://cdn.weatherapi.com/v4/images/weatherapi_logo.png"
              alt="Weather data by WeatherAPI.com"
              height={150}
              width={150}
            />
          </Link>
    </div>
  )
}
