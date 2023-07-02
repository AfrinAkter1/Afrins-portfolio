import { createBrowserRouter } from "react-router-dom";
import Home from "./Home/Home";
import Section from "./Section";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Projects from "./Project/Projects";


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
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
        {
          path: '/projects',
          element: <Projects></Projects>
        }
      ]
    },
  ]);
  export default router