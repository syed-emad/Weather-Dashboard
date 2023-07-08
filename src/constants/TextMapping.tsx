export const AirQualityValue: ITextMap = {
  1: "Good",
  2: "Fair",
  3: "Moderate",
  4: "Poor",
  5: "Very Poor",
};
export const AirQualitySuggestion: ITextMap = {
  1: "A good day to walk!",
  2: "A Fair day to walk!",
  3: "A moderate day to walk.",
  4: "A poor day to walk :/",
  5: "A very poor day to walk :(",
};

interface ITextMap {
  [key: number]: string;
}
