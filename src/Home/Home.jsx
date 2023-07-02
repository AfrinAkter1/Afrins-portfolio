import { NavLink, Outlet } from "react-router-dom";
import {BiCode, BiSolidHomeHeart, BiUser} from "react-icons/bi"
import {GiSkills} from "react-icons/gi"
import {MdContactPage} from "react-icons/md"
import  { useState } from 'react'
import DayNightToggle from 'react-day-and-night-toggle'
import './home.css'

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    const newColorScheme = e.matches ? 'dark' : 'light'

    setIsDarkMode(newColorScheme === 'dark' ? true : false)
    localStorage.setItem('data-theme', newColorScheme)
    document.body.setAttribute('data-theme', localStorage.getItem('data-theme'))
  })

  const handleChangeTheme = () => {
    setIsDarkMode(!isDarkMode)
    if(!isDarkMode) {
      localStorage.setItem('data-theme', 'dark')
      document.body.setAttribute('data-theme', 'dark')
    } else {
      localStorage.setItem('data-theme', 'light')
      document.body.setAttribute('data-theme', 'light')
    }
  }

    return (
        <div>
           
            <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4  h-full bg-purple-800 bg-opacity-20 text-white">
      {/* Sidebar content here */}
      <DayNightToggle className="my-5" size={30} onChange={handleChangeTheme} checked={isDarkMode} />
      <li className="font-bold"><NavLink  to='/' className={({ isActive}) =>
                      isActive
                        && "bg-orange-800"
                       
                    }><BiSolidHomeHeart size={23}></BiSolidHomeHeart>Home</NavLink></li>
      <li className="font-bold"><NavLink  to='/about' className={({ isActive}) =>
                      isActive
                        && "bg-orange-800"
                        
                    }><BiUser size={23}></BiUser>About</NavLink></li>
      <li className="font-bold"><NavLink  to='/skills' className={({ isActive }) =>
                      isActive
                        && "bg-orange-800"
                        
                    }><GiSkills size={23}></GiSkills>Skills</NavLink></li>
      <li className="font-bold"><NavLink to='/projects' className={({ isActive}) =>
                      isActive
                        && "bg-orange-800"
                       
                    }><BiCode size={23}></BiCode>Projects</NavLink></li>
      <li className="font-bold"><NavLink  to='/contact' className={({ isActive, }) =>
                      isActive
                        && "bg-orange-800"
                       
                    }><MdContactPage size={23}></MdContactPage>Contact me</NavLink></li>
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default Home;