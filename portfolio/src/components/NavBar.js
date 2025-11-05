// import React,{useState} from 'react'
//import light from "../img/light.png";
//import dark from "../img/dark.png";

function NavBar() {
  // State to track the current mode
 /* const [mode, setMode] = useState("light");

  // Function to toggle the mode
  const toggleMode = () => {
    // Toggle between light and dark mode
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };*/
  return (
    <div>
      <nav>
        <ul className='NavBar-Ul'>
          <li className='NavList' ><a href='#AboutMe'>AboutMe</a></li>
          <li className='NavList' ><a href='#Skills'>Skills</a></li>
          <li className='NavList' ><a href='#Projects'>Projects</a></li>
          <li className='NavList' ><a href='#Contact'>Contact</a></li>
          {/*<button type='button' className='mode-button' onClick={toggleMode}><img className='mode' src={mode === "light" ? light : dark} alt="mode icon" /></button>*/}
        </ul>
      </nav>
    </div>
  )
}

export default NavBar