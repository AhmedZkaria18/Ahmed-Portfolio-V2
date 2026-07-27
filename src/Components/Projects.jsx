import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Project from './Project';
import { projectsData } from './ProjectsData';
import { IoIosArrowRoundBack, IoIosClose } from 'react-icons/io';
import { colorMoodFun, handelProjectsFilter } from '../Plugin';
import { FiSun, FiMoon } from 'react-icons/fi';
import { BiCodeCurly } from 'react-icons/bi';
import { FiGithub, FiMonitor } from 'react-icons/fi';
import { BsGear } from 'react-icons/bs';
import { Form } from 'react-bootstrap';
import { handelProjectsDelay, handelProjectsDelayReset } from './AnimationsFuns';
import { SlMouse } from "react-icons/sl";

function Projects() {
    // Wordpress projects disabled untill connect with new host
    // const projectsFilter = ['All', 'Bootstrap', 'Responsive', 'jQuery', 'React', 'Validation', 'Animation', 'Api', 'Firebase', 'NextJs', 'Wordpress'];
    // const projectsFilter = ['All', 'Bootstrap', 'Responsive', 'jQuery', 'React', 'Validation', 'Animation', 'Api', 'Firebase', 'NextJs'];
    const projectsFilter = ['All', 'Bootstrap', 'Responsive', 'jQuery', 'React', 'Validation', 'Animation', 'Versioning', 'Api', 'Firebase', 'NextJs', 'Vue'];
    const [projSt, setProjSt] = useState(projectsData);
    // console.log('projectsData' , projectsData.length)


    if( window !== 'undefined'){ window.scrollTo(0,0); }

    const handelSmMenu = () => {
      if( window !== 'undefined'){
        const smmenu = document.querySelector('.smprojs_menu');
        smmenu.style.display = 'flex';
      }
    }
    const handelSmMenuClose = () => {
      if( window !== 'undefined'){
        const smmenu = document.querySelector('.smprojs_menu');
        smmenu.style.display = 'none';
      }
      // document.querySelector('#scroll_down').style.display = 'flex';
    }


    const handelMenuItem = (e, String, wrapcls) => {
      const btnVal = String;      
      const menuBtns = document.querySelectorAll(`.${wrapcls} button`);
      for(let i=0; i<menuBtns.length; i++){
        if( menuBtns[i] === e.target ){  
          e.target.classList.add('menuItemActive');
        }else{ menuBtns[i].classList.remove('menuItemActive'); }
      }
      if( btnVal !== 'All' ){
        setProjSt( projectsData.filter( (item) => item.PrjTechs.indexOf(btnVal) !== -1 ) );
        // setProjSt( projectsData.filter( (item) => item.PrjTechs.filter( (nestedItem) => nestedItem.indexOf(btnVal) !== -1 ) ) );
        // setProjSt( projectsData.filter( (item) =>{
          // return item.PrjTechs.indexOf(btnVal) !== -1 || 
          // item.PrjTechs.filter( (nestedItem) => nestedItem.indexOf(btnVal) !== -1 ) 
        // }
        // )
        // ) 
        handelProjectsDelayReset();
      }else{ setProjSt( projectsData );   handelProjectsDelayReset(); }   
      
      document.querySelectorAll(".projects__wrapper__item__imgWrapper__langs").forEach(item => item.setAttribute("style", "opacity: 0;"))
    }  

    if( typeof window !== 'undefined' ){
      document.addEventListener('scroll', () => {
          // if (document.querySelector('#projects').classList.contains('projects-page') === true){ 
            handelProjectsDelay();
          // }              
          // handelProjectsDelay();
      });
    }

    useEffect(() => {
      if( typeof window !== 'undefined' ){
        document.addEventListener('scroll', () => {
            // if (document.querySelector('#projects').classList.contains('projects-page') === true){ 
              handelProjectsDelay();
            // }              
            // handelProjectsDelay();  
        });
      }  
    }, []);
    return (
      <>
        <header>
          <h1> <strong>Ahmed</strong> Zakaria</h1>
          <div className={'header__colorMoodWrapper'} style={{marginRight: '1.5rem'}}>
            <FiSun className={'header__colorMoodWrapper__sun'} onClick={colorMoodFun}/>
            <FiMoon className={'header__colorMoodWrapper__moon'} onClick={colorMoodFun}/>
          </div>
        </header>

        <section id="projects" className='projects-page'>
          <h2> projects 
            <Link to="/"> <IoIosArrowRoundBack /> </Link>
          </h2>      

          <div className='projects_icons'>
            <p> <FiMonitor /> Preview Link </p>
            <p> <BiCodeCurly />  Show Technologes </p>
            {/* Github disabled because account closed, untill make new by upload projects */}
            {/* <p> <FiGithub /> Github Repo Link</p> */}
            <BsGear className='smprojs_menu-ic' onClick={handelSmMenu}/>
          </div>

          <div className={'projects_menu'}>{
            projectsFilter.map( (proj, i) => {  return(
              (i === 0) 
              ? <button key={i} className='menuItemActive' onClick={(e) => handelMenuItem(e, `${proj}`, 'projects_menu')} >{proj}</button>  
              : <button key={i} onClick={(e) => handelMenuItem(e, `${proj}`, 'projects_menu')} >{proj}</button>
            ) 
          } )
          }</div>

          <div id="scroll_down">
            <SlMouse />
            Scroll Down
          </div>

          <div className='smprojs_menu'>
            <div className={'smprojs_menu_wrapper'}>
            <IoIosClose className='smprojs_menu_wrapper_close' onClick={handelSmMenuClose}/>
              <div className={'projects__filtersWrapper'}> 
                {
                  projectsFilter.map( (projLabel, index) => {
                    return(
                      (index > 0) &&
                      <Form.Group controlId={`formBasicCheckbox${index+1}`} key={index}>
                        <Form.Check type="checkbox" label={projLabel} onClick={ handelProjectsFilter }/>
                      </Form.Group>
                    );
                  })
                }
              </div>
            </div>
          </div>

          <div>            
            <div className={'projects__wrapper'}>{
              projSt.map( (prj, i) => { return(
                    <Project key={i} preload={[prj.PrjTitle, prj.PrjImg, prj.PrjTechs, prj.PrjPreview, prj.PrjGithub]}/>
              ) } )
            }</div>
          </div>
        </section>
      </>
    )
}

export default Projects
