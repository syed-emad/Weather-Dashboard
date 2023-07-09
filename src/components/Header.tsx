import { useNavigate } from "react-router-dom";
import { IMAGES } from "../constants";
import { Heading } from "./titles/Heading";

export const Header = () => {
  const navigate = useNavigate();
  const handleLogoAreaClick = () => {
    navigate("/");
  };
  return (
    <div className="h-20 items-center bg-white">
      <div className="max-w-full mx-auto px-4 sm:px-8 py-4">
        <div
          className="flex space-x-2 items-center cursor-pointer"
          onClick={handleLogoAreaClick}
        >
          <img src={IMAGES.main_logo} className="w-10 h-10" alt="main-logo" />
          <div className="flex flex-col space-y-0">
            <Heading text="Weatherly" />
          </div>
        </div>
      </div>
    </div>
  );
};
