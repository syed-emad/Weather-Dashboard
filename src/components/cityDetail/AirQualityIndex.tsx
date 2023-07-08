import { IMAGES } from "../../constants";
import { Heading } from "../titles/Heading";
import { Paragraph } from "../titles/Paragraph";
import { IAirQualityListDetails } from "../../states/redux-store/storeTypes";
import { AirQualityStat } from "./AirQualityStat";
interface Props {
  data: Array<IAirQualityListDetails>;
}
export const AirQualityIndex = ({ data }: Props) => {
  const [{ main = {}, components = {} } = {}] = data || [];
  return (
    <>
      <div className="w-2/4 shadow-sm bg-white rounded-lg p-6 space-y-3">
        <div className="flex space-x-3 ">
          <img src={IMAGES.wind} className="w-14 h-14" alt="wind" />
          <div className="flex flex-col">
            <Heading text="Good" />
            <Paragraph text="A good day to walk!" />
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
