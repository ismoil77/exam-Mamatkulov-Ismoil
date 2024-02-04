import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import IndexPage from "./pages/IndexPage/IndexPage";
import Kakpokupat from "./pages/kakPokupat/Kakpokupat";
import Rasprodasha from "./pages/Rasprodasha/Rasprodasha";
import Prices from "./pages/Prices/Prices";
import Help from "./pages/Help/Help";
import Bonus from "./pages/Bonus.jsx/Bonus";
import Blog from "./pages/Blog/Blog";
import Market from "./pages/Market/Market";
import PartProg from "./pages/partProg/PartProg";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <IndexPage />,
      },
      {
        path: "/kakPokupat",
        element: <Kakpokupat />,
      },
      {
        path: "/rasprodashi",
        element: <Rasprodasha />,
      },
      {
        path: "/prices",
        element: <Prices />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/bonuses",
        element: <Bonus />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/market",
        element: <Market />,
      },
      {
        path: "/partProg",
        element: <PartProg />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
