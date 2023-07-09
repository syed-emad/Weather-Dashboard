import { COLORS } from "../../constants";
import { classNames } from "../../util/Helpers";
interface Props {
  text: string;
  color?: string;
}
export const HeadingLarge = ({ text, color = COLORS.ThemeBlack }: Props) => {
  return (
    <h1 className={classNames("font-medium sm:text-5xl text-2xl", color)}>
      {text}
    </h1>
  );
};
