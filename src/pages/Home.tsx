import { Banner } from "../components/home/Banner";
import { Detail } from "../components/home/Detail";

export const Home = () => {
  return (
    <div className="h-screen flex ">
      <Detail />
      <Banner />
    </div>
  );
};
