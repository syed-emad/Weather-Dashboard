import { IMAGES } from "../../constants";
import { Heading } from "../titles/Heading";
import { Paragraph } from "../titles/Paragraph";
import {
  IAirQualityListDetails,
  IAirQualityMain,
} from "../../states/redux-store/storeTypes";
import { AirQualityStat } from "./AirQualityStat";
import {
  AirQualitySuggestion,
  AirQualityValue,
} from "../../constants/TextMapping";
interface Props {
  data: Array<IAirQualityListDetails>;
}
export const AirQualityIndex = ({ data }: Props) => {
  // const [{ main = {}, components = {} } = {}] = data || [] as Array<IAirQualityListDetails>;
  const components = (data as Array<IAirQualityListDetails>)
    ? data[0]?.components
    : {};
  const main = (data as Array<IAirQualityListDetails>)
    ? data[0]?.main
    : ({} as IAirQualityMain);
  return (
    <>
      <div className="w-2/4 shadow-sm bg-white rounded-lg p-6 space-y-3">
        <div className="flex space-x-3 ">
          <img src={IMAGES.wind} className="w-14 h-14" alt="wind" />
          <div className="flex flex-col">
            <Heading text={AirQualityValue[main?.aqi]} />
            <Paragraph text={AirQualitySuggestion[main?.aqi]} />
          </div>
        </div>

        <div className="flex space-x-5">
          {Object.entries(components).map(([key, value], index) => (
            <AirQualityStat
              value={value?.toString() ?? ""}
              unit={key}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};
