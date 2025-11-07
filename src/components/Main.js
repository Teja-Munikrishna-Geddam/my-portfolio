import React from 'react'
import Hero from './Hero'
import AboutMe from './AboutMe'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'

function Main() {
  return (
    <div className='Main-Box' id='Main-Id'>
        <Hero/>
        <AboutMe/>
        <Skills/>
        <Projects/>
        <Contact/>
    </div>
  )
}

export default Main