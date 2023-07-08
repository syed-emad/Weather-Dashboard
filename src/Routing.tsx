import { Routes, Route } from "react-router-dom";
import { Cities } from "./pages/Cities";
import { CityDetail } from "./pages/CityDetail";

interface RouteType {
  path: string;
  component: React.ReactNode;
}

export const ApplicationRoutes = () => {
  return (
    <>
      <Routes>
        {RouteList.map((route: RouteType, index) => (
          <Route path={route.path} key={index} element={route.component} />
        ))}
      </Routes>
    </>
  );
};
const RouteList: Array<RouteType> = [
  {
    path: "/",
    component: <Cities />,
  },
  {
    path: "/cities",
    component: <Cities />,
  },
  {
    path: "/city/detail",
    component: <CityDetail />,
  },
];
