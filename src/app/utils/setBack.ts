export function setBack(text: string) {

  if (
    text.toLowerCase().includes("cloudy") ||
    text.toLowerCase().includes("overcast")
  )
    return {
      mobile: "bg-mobile-cloud",
      desktop: "sm:bg-desktop-cloud",
    };
  if (
    text.toLowerCase().includes("rain") ||
    text.toLowerCase().includes("drizzle")
  )
    return {
      mobile: "bg-mobile-rain",
      desktop: "sm:bg-desktop-rain",
    };
  if (text.toLowerCase().includes("fog") || text.toLowerCase().includes("mist"))
    return {
      mobile: "bg-mobile-fog",
      desktop: "sm:bg-desktop-fog",
    };
  if (
    text.toLowerCase().includes("snow") ||
    text.toLowerCase().includes("sleet") ||
    text.toLowerCase().includes("ice")
  )
    return {
      mobile: "bg-mobile-sow",
      desktop: "sm:bg-desktop-snow",
    };
  return {
    mobile: "bg-mobile",
    desktop: "sm:bg-desktop",
  };
}
