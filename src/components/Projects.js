import React from 'react'
import textUtils from "../img/TextUtils.png";
import calculator from '../img/react_calculator.png';
import ems from "../img/ems.png";
import cwm from "../img/creative-web-mall.png";
import pac from "../img/pac.png";
import ChatApp from "../img/ChattingApp2.png";


function Projects() {
  return (
    <div>
      <section className='Project-Div' id='Projects'>
        
        <div className='Project-Card'>
          <img className='Project-Img' src={ChatApp} alt=''></img>
          <h1 className='Project-Title'>Chatting Webapp</h1>
          <p className='Project-Description'>We used ExpressJs,NodeJS,JavaScript to build this app. </p>
          <a href='https://my-chat-app-avvf.onrender.com/' className="project-link" target='_Blank' rel="noopener noreferrer" >Open Project</a>
        </div>
        <div className='Project-Card'>
          <img className='Project-Img' src={textUtils} alt='Text Utils'></img>
          <h1 className='Project-Title'>Text Utils App</h1>
          <p className='Project-Description'>We used React Js to build this app. </p>
          <a href='https://teja-munikrishna-geddam.github.io/text-utils/' className="project-link" target='_Blank' rel="noopener noreferrer" >Open Project</a>
        </div>
        <div className='Project-Card'>
          <img className='Project-Img' src={calculator} alt=''></img>
          <h1 className='Project-Title'>React Calculator App</h1>
          <p className='Project-Description'>We used React Js to build this app. </p>
          <a href='https://teja-munikrishna-geddam.github.io/react-calculator/' className="project-link" target='_Blank' rel="noopener noreferrer" >Open Project</a>
        </div>
        <div className='Project-Card'>
          <img className='Project-Img' src={ems} alt=''></img>
          <h1 className='Project-Title'>Employee Management System App</h1>
          <p className='Project-Description'>We used React Js to build this app. </p>
          <a href='https://teja-munikrishna-geddam.github.io/employee-management-system/' className="project-link" target='_Blank' rel="noopener noreferrer" >Open Project</a>
        </div>
        <div className='Project-Card'>
          <img className='Project-Img' src={cwm} alt=''></img>
          <h1 className='Project-Title'>Creative Web Mall Clone site</h1>
          <p className='Project-Description'>We used React Js to build this app. </p>
          <a href='https://teja-munikrishna-geddam.github.io/creative.github.io/' className="project-link" target='_Blank' rel="noopener noreferrer" >Open Project</a>
        </div>
        <div className='Project-Card'>
          <img className='Project-Img' src={pac} alt=''></img>
          <h1 className='Project-Title'>Playstore Clone Webapp</h1>
          <p className='Project-Description'>We used React Js to build this app. </p>
          <a href='https://teja-munikrishna-geddam.github.io/apps-store-clone/' className="project-link" target='_Blank' rel="noopener noreferrer" >Open Project</a>
        </div>
      </section>
    </div>
  )
}

export default Projects