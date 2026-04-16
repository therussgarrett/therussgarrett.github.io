import { useState } from 'react'
import Burger from './Burger.jsx'

export default function NavBar({ activeSection, setActiveSection }) {

const [isOpen, setIsOpen] = useState(false);

const Burg = Burger;

// 2. Toggle function
const toggleMenu = () => {
  setIsOpen(!isOpen);
};

  return (
    <>
      <nav className = "bg-gray-800 text-white sticky top-0 z-10" >
        <div className="flex flex-col justify-self-end">
        <button onClick={toggleMenu} className="md:hidden cursor-pointer py-4 px-10 z-10">
          {isOpen ? 'X' : Burg()}
        </button>
      </div>
      <ul className = {`${isOpen ? 'block' : 'hidden'}
        md:flex-row justify-center absolute w-full bg-gray-800 md:relative md:top-0 md:flex md:w-auto`}>
        {['about', 'projects', 'services', 'contact'].map(sec => (
        <li onClick={toggleMenu} className = "py-4 px-8 justify-self-end" key = {sec}>
          <button className = {
          activeSection === sec ? 'active' : 'cursor-pointer'
        }
        onClick = {
          () => setActiveSection(sec)}>
        {
          sec.charAt(0).toUpperCase() + sec.slice(1)
        }
      </button>
        </li>
      ))
    }
    </ul>
  </nav>
  </>)
}
