import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Home/Home";
import AboutMe from "../Component/AbouteMe/AboutMe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/aboutMe',
        element:<AboutMe></AboutMe>
      }
    ]
  },
]);
export default router;
