import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Home/Home";
import AboutMe from "../Component/AbouteMe/AboutMe";
import Skills from "../Component/Skills/Skills";

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
      },
      {
        path:'/skill',
        element:<Skills></Skills>
      }
    ]
  },
]);
export default router;
