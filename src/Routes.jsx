import { createBrowserRouter } from "react-router-dom";
import Home from "./Home/Home";
import Section from "./Section";
import About from "./About";
import Skills from "./Skills";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children:[
        {
            path:'/',
            element:<Section></Section>
        },
        {
            path:'/about',
            element:<About></About>
        },
        {
          path: '/skills',
          element:<Skills></Skills>
        }
      ]
    },
  ]);
  export default router