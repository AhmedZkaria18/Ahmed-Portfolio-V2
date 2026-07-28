import React, { useEffect } from 'react';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link'
import IHtml from '../Assets/images/certificates/CHtml.jpg';
import ICss from '../Assets/images/certificates/CCss.jpg';
import IResponsive from '../Assets/images/certificates/CResponsive.jpg';
import IJs from '../Assets/images/certificates/CJavaScript.jpg';
import IJquery from '../Assets/images/certificates/CJquery.jpg';
import IReact from '../Assets/images/certificates/CReact.jpg';
import ISql from '../Assets/images/certificates/CSql.jpg';
import IJava from '../Assets/images/certificates/CJava.jpg';
import IFiti from '../Assets/images/certificates/CFiti.jpg';
import IWordpress from '../Assets/images/certificates/CWordpress.jpg';

import Ahmed from '../Assets/images/Ahmed.png';
import pen1 from '../Assets/images/codepen1.png';
import pen2 from '../Assets/images/codepen2.png';
import pen3 from '../Assets/images/codepen3.png';
import pen4 from '../Assets/images/codepen4.png';
import pen5 from '../Assets/images/codepen5.png';
import pen6 from '../Assets/images/codepen6.png';


import { LatestProjects } from './ProjectsData';
import { menuFun, colorMoodFun } from '../Plugin';
import Skill from './Skill';
import Project from './Project';
import Pen from './Pen';
import WriteTestimonial from './WriteTestimonial';

import { FaTrafficLight, FaLinkedinIn, FaCodepen, FaVuejs, FaJira, FaSlack } from 'react-icons/fa';
import { BsDatabaseGear, BsInputCursorText, BsSearch } from 'react-icons/bs';
import { SiHtml5, SiCss3, SiJavascript, SiJquery, SiSass, SiBootstrap, SiReact, SiWordpress, SiMicrosoftsqlserver, SiFigma, SiFirebase, SiRedux, SiTypescript, SiMui, SiI18Next, SiApollographql, SiBitbucket, SiNextdotjs, SiAdobexd, SiAdobephotoshop, SiPostman, SiTailwindcss, SiTrello, SiRoundcube, SiSwagger, SiNotion } from 'react-icons/si';
import { FiMenu, FiSun, FiMoon } from 'react-icons/fi';
import { GoBold } from 'react-icons/go';
import { GiFamilyTree, GiSkills } from 'react-icons/gi';
import { VscFeedback, VscAzureDevops } from 'react-icons/vsc';
import { DiGit, DiIllustrator, DiJava } from 'react-icons/di';
import cvFile from '../Assets/AhmedZakariaCV.pdf';
import { HiDownload } from 'react-icons/hi';
import { AiFillAppstore } from 'react-icons/ai';
import { GrCertificate, GrGraphQl } from 'react-icons/gr';
import { Link } from 'react-router-dom';

import { handelCertDelay, handelContactFormDelay, handelHeadDelay, handelHeroDelay, handelPensQuate, handelProjectsWrapperDelay, handelSkillsDelay } from './AnimationsFuns.js';
import { TbApi, TbIcons } from 'react-icons/tb';
import { LuComponent } from 'react-icons/lu';
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { PiRocketLaunchFill } from 'react-icons/pi';


function Landing() {
    const certificatesImages = [ IFiti, IHtml, ICss, IResponsive, IJs, IJquery, IReact, IWordpress, ISql, IJava ];    
    // const latestPojs = projectsData.filter( (item, i) => i >= (projectsData.length - 6) );    
    const latestPojs = LatestProjects;
    
    if( typeof window !== 'undefined' ){
      document.addEventListener('scroll', () => {
          const ht2 = ( document.querySelector('#projects').classList.contains('projects-page') === false ) && document.querySelector('#hero'),
          ht3 = ( document.querySelector('#projects').classList.contains('projects-page') === false ) && document.querySelector('#skills'),
          ht4 = ( document.querySelector('#projects').classList.contains('projects-page') === false ) && document.querySelector('#projects'),
          ht5 = ( document.querySelector('#projects').classList.contains('projects-page') === false ) && document.querySelector('#certificates'),
          ht6 = ( document.querySelector('#projects').classList.contains('projects-page') === false ) && document.querySelector('#pens'),
          ht7 = ( document.querySelector('#projects').classList.contains('projects-page') === false ) && document.querySelector('#feedback');
          handelHeadDelay(ht2);      handelHeadDelay(ht3);
          handelHeadDelay(ht4);      handelHeadDelay(ht5);
          handelHeadDelay(ht6);      handelHeadDelay(ht7);
          handelSkillsDelay();          
          if (document.querySelector('#projects').classList.contains('projects-page') === false){ 
            handelProjectsWrapperDelay();
            handelCertDelay();
            handelPensQuate();
            handelContactFormDelay();
          }          
          // handelCertDelay();
          // handelPensQuate();
      });
    }

    useEffect(() => {
      const ht2 = document.querySelector('#hero');
      handelHeroDelay(ht2);    
      if( typeof window !== 'undefined' ){
        document.addEventListener('scroll', () => {
            const ht2 = ( document.querySelector('#projects').classList.contains('projects-page') === false ) && document.querySelector('#hero'),
            ht3 = ( document.querySelector('#projects').classList.contains('projects-page') === false ) && document.querySelector('#skills'),
            ht4 = ( document.querySelector('#projects').classList.contains('projects-page') === false ) && document.querySelector('#projects:not(.projects-page)'),
            ht5 = ( document.querySelector('#projects').classList.contains('projects-page') === false ) && document.querySelector('#certificates'),
            ht6 = ( document.querySelector('#projects').classList.contains('projects-page') === false ) && document.querySelector('#pens'),
            ht7 = ( document.querySelector('#projects').classList.contains('projects-page') === false ) && document.querySelector('#feedback');
            handelHeadDelay(ht2);      handelHeadDelay(ht3);
            handelHeadDelay(ht4);      handelHeadDelay(ht5);
            handelHeadDelay(ht6);      handelHeadDelay(ht7);
            handelSkillsDelay();
            if (document.querySelector('#projects').classList.contains('projects-page') === false){ 
              handelProjectsWrapperDelay();
              handelCertDelay();
              handelPensQuate();
              handelContactFormDelay();
            }          
            // handelCertDelay();
            // handelPensQuate();
        });
      }  
    }, []);    

    return (
      <>
        <header>
          <h1> <strong>Ahmed</strong> Zakaria</h1>
          <div className={'header__menuBtn'} onClick={ menuFun }>
            <FiMenu />
          </div>
          <div className={'header__colorMoodWrapper'}>
            <FiSun className={'header__colorMoodWrapper__sun'} onClick={colorMoodFun}/>
            <FiMoon className={'header__colorMoodWrapper__moon'} onClick={colorMoodFun}/>
          </div>
  
          <div className={'header__menu'}>
            <HashLink to="/#hero"> About </HashLink>
            <HashLink to="/#skills"> Skills </HashLink>
            <HashLink to="/#projects"> Projects </HashLink>
            <HashLink to="/#certificates"> Certificates </HashLink>
            <HashLink to="/#pens"> Pens </HashLink>
          </div>
        </header>        
  
        <Container id="hero">
          <Row>
          <Col lg={7} md={7} sm={12}>
              <div className={'hero__description'}>              
                <h3>Hello, <br/>I am Ahmed Zakaria</h3>
                {/* <p> Junior Front end developer </p> */}
                <p> Front end developer </p>
                <div className={'hero__photo__small'}>
                  <img src={Ahmed}  alt='img'/>
                </div>
                <p>
                  {/* Iam a front-end developer,  seeking a job opportunity to increase my experience, skills and passion
                  , excited to work with team, I have built a lot of projects that have increased my experience
                  , I am a fast learner and always love to develop myself */}
                  {/* Iam a junior front end developer seeking a job opportunity to increase my experience, skills and passion
                  , excited to work and coordinate with team, have two years experience in react.js and built a lot of projects to increase experience 
                  , I am a fast learner and always love to develop myself. */}
                  Iam a front end developer seeking a job opportunity to increase my experience, skills and passion, 
                  excited to work and coordinate with team, have more three years experience in react.js and knowledge in vue.js 
                  built a lot of components, projects and self projects to increase experience, I am a fast learner and 
                  always love to develop myself.
                </p>
                <Button href='https://www.linkedin.com/in/ahmed-zakaria-a554a4183' target='_blank'
                ><FaLinkedinIn/></Button>
                {/* Github disabled because account closed, untill make new by upload projects */}
                {/* <Button href='https://github.com/AhmedZkaria22' target='_blank'
                ><FaGithub/></Button> */}
                {/* <a href={cvFile}  className='btn'  download data-aos='fade-down' data-aos-delay='1000' data-aos-duration='1100'>  Resume  <HiDownload /> </a> */}
                <a href={cvFile}  className='btn'  download>  Resume  <HiDownload /> </a>
              </div>
            </Col>
  
            <Col lg={5} md={5} sm={8}>
              <div className={'hero__photo'}>
                <img src={Ahmed}  alt='img'/>
              </div>
            </Col>
          </Row>        
        </Container>    
  
        <section id="skills">        
          {/* <h2> SKILLS / </h2> */}
          <h2> <GiSkills /> SKILLS </h2>
          {/* <div className={'skills__container'}>
            <Skill SkillIcon={SiHtml5} SkillName='Html / Html5'/>
            <Skill SkillIcon={SiCss3} SkillName='Css / Css3'/>
            <Skill SkillIcon={SiJavascript} SkillName='Js : basic, dom, bom, oop'/>
            <Skill SkillIcon={SiJquery} SkillName='jQuery'/>
            <Skill SkillIcon={SiSass} SkillName='Sass / Scss'/>
            <Skill SkillIcon={SiBootstrap} SkillName='Bootstrap'/>
            <Skill SkillIcon={SiJavascript} SkillName='Ecma'/>
            <Skill SkillIcon={SiReact} SkillName={`React & Redux & Route`}/>
            <Skill SkillIcon={SiReact} SkillIcon2={GoBold} SkillName={`React Bootstrap`}/>
            <Skill SkillIcon={SiMui} SkillName='Matrial UI'/>
            <Skill SkillIcon={SiTailwindcss} SkillName='Tailwind Css'/>
            <Skill SkillIcon={SiRedux} SkillName='ٌRedux Thunk'/>
            <Skill SkillIcon={SiRedux} SkillIcon2={SiFirebase} SkillName='Redux Firebase'/>
            <Skill SkillIcon={BsInputCursorText} SkillName='Formik'/>
            <Skill SkillIcon={SiI18Next} SkillName='React-i18next'/>
            <Skill SkillIcon={SiTypescript} SkillName='ٌTypescript'/>
            <Skill SkillIcon={SiNextdotjs} SkillName='Next.js'/>
            <Skill SkillIcon={GrGraphQl} SkillName='GraphQl'/>
            <Skill SkillIcon={SiApollographql} SkillName='Apollo Client'/>
            <Skill SkillIcon={DiGit} SkillName='Git / Github'/>
            <Skill SkillIcon={SiBitbucket} SkillName='Bitbucket'/>


          </div> */}
  
          {/* <h2>  Knowlage </h2>
          <div className={'skills__container'}>
            <Skill SkillIcon={DiGit} SkillName='Git / Github'/>
            <Skill SkillIcon={VscJson} SkillName='Api'/>
            <Skill SkillIcon={SiFirebase} SkillName='FireBase'/>
            <Skill SkillIcon={FaTrafficLight} SkillName='Ui Ux'/>          
            <Skill SkillIcon={BsSearch} SkillName='Seo'/>          
          </div>
  
          <h2>  Fundimental </h2>
          <div className={'skills__container'}>
            <Skill SkillIcon={GiFamilyTree} SkillName={`Data Structure & Algorithm`}/>
            <Skill SkillIcon={SiJava} SkillName='Java'/>
            <Skill SkillIcon={SiMicrosoftsqlserver} SkillName='Sql'/>
            <Skill SkillIcon={SiMysql} SkillName='MySQL'/>
          </div> */}
          {/* <h2>  Fundimental </h2>
          <div className={'skills__container'}>            
            <Skill SkillIcon={SiFirebase} SkillName='FireBase'/>
            <Skill SkillIcon={VscJson} SkillName='Api'/>            
            <Skill SkillIcon={FaTrafficLight} SkillName='Ui Ux'/>          
            <Skill SkillIcon={BsSearch} SkillName='Seo'/>      
            <Skill SkillIcon={SiWordpress} SkillName='Wordpress'/>
            <Skill SkillIcon={DiJava} SkillName='Java'/>
            <Skill SkillIcon={SiMicrosoftsqlserver} SkillName='Sql'/>
            <Skill SkillIcon={SiMysql} SkillName='MySQL'/>
            <Skill SkillIcon={GiFamilyTree} SkillName={`Data Structure & Algorithm`}/>
          </div> */}
  
          {/* <h2>  FAMILIAR </h2>
          <div className={'skills__container'}>
            <Skill SkillIcon={SiFigma} SkillName='Figma'/>
            <Skill SkillIcon={SiAdobephotoshop} SkillName='Photoshop'/>
            <Skill SkillIcon={SiAdobexd} SkillName='XD'/>
            <Skill SkillIcon={SiPostman} SkillName='Postman'/>
          </div>         */}


          {/* frontend dev */}
          <div className={'skills__container'}>
            <Skill SkillIcon={SiHtml5} SkillName='Html / Html5'/>
            <Skill SkillIcon={SiCss3} SkillName='Css / Css3'/>
            <Skill SkillIcon={SiJavascript} SkillName='Js : basic, dom, bom, oop'/>
            <Skill SkillIcon={SiJquery} SkillName='jQuery'/>
            <Skill SkillIcon={SiSass} SkillName='Sass / Scss'/>
            <Skill SkillIcon={SiBootstrap} SkillName='Bootstrap'/>
            <Skill SkillIcon={SiJavascript} SkillName='Ecma'/>
            <Skill SkillIcon={SiReact} SkillName={`React & Route`}/>
            <Skill SkillIcon={SiRedux} SkillName={`Redux - ٌRedux Thunk - Redux Firebase`}/>
            <Skill SkillIcon={SiReact} SkillIcon2={GoBold} SkillName={`React Bootstrap`}/>
            <Skill SkillIcon={SiMui} SkillName='Matrial UI'/>
            <Skill SkillIcon={TbIcons} SkillName='Matrial UI Icons & React Icons'/>
            <Skill SkillIcon={SiTailwindcss} SkillName='Tailwind Css'/>
            <Skill SkillIcon={BsInputCursorText} SkillName='Formik'/>
            <Skill SkillIcon={SiI18Next} SkillName='React-i18next'/>
            <Skill SkillIcon={SiTypescript} SkillName='ٌTypescript'/>
            <Skill SkillIcon={SiNextdotjs} SkillName='Next.js'/>            
            <Skill SkillIcon={SiApollographql} SkillName='Apollo Client'/>
            <Skill SkillIcon={FaVuejs} SkillName='Vue.js'/>
            <Skill SkillIcon={BsDatabaseGear} SkillName='Vuex'/>
            <Skill SkillIcon={FaVuejs} SkillIcon2={SiI18Next} SkillName='Vue-I18n'/>
            <Skill SkillIcon={FaVuejs} SkillIcon2={LuComponent} SkillName='Element-UI'/>
          </div>
          <h2>  Version control - Task manager </h2>
          <div className={'skills__container'}>
            <Skill SkillIcon={DiGit} SkillName='Git / Github'/>
            <Skill SkillIcon={SiBitbucket} SkillName='Bitbucket'/>
            <Skill SkillIcon={VscAzureDevops} SkillName='Azure'/>
            <Skill SkillIcon={SiTrello} SkillName='Trello'/>
            <Skill SkillIcon={FaJira} SkillName='Jira'/>
            <Skill SkillIcon={MdOutlineDashboardCustomize} SkillName='CRM-System'/>
            <Skill SkillIcon={SiRoundcube} SkillName='Roundcube Webmail'/>
            <Skill SkillIcon={FaSlack} SkillName='Slack'/>
            <Skill SkillIcon={SiNotion} SkillName='Notion'/>
          </div>
          <h2>  Fundimental </h2>
          <div className={'skills__container'}>            
            <Skill SkillIcon={FaTrafficLight} SkillName='Ui Ux'/>          
            <Skill SkillIcon={BsSearch} SkillName='Seo'/>      
            <Skill SkillIcon={SiWordpress} SkillName='Wordpress'/>
            <Skill SkillIcon={DiJava} SkillName='Java'/>
            <Skill SkillIcon={SiMicrosoftsqlserver} SkillName='Sql'/>
            <Skill SkillIcon={GiFamilyTree} SkillName={`Data Structure & Algorithm`}/>
          </div>
          <h2>  Design </h2>
          <div className={'skills__container'}>
            <Skill SkillIcon={SiAdobephotoshop} SkillName='Photoshop'/>
            <Skill SkillIcon={DiIllustrator} SkillName='Illustrator'/>
            <Skill SkillIcon={SiAdobexd} SkillName='XD'/>
            <Skill SkillIcon={SiFigma} SkillName='Figma'/>
            <Skill SkillIcon={PiRocketLaunchFill} SkillName='Zeplin'/>
          </div>        
          <h2>  Integration </h2>
          <div className={'skills__container'}>
            <Skill SkillIcon={SiFirebase} SkillName='FireBase'/>
            <Skill SkillIcon={TbApi} SkillName='REST-APIs'/>
            <Skill SkillIcon={GrGraphQl} SkillName='GraphQl'/>
            <Skill SkillIcon={SiSwagger} SkillName='Swagger'/>
            <Skill SkillIcon={SiPostman} SkillName='Postman'/>
          </div>        
        </section>
  
        <section id="projects">
        <h2> <AiFillAppstore /> Latest Projects </h2>          
          <div className={'projects__wrapper'}> 
            {
                latestPojs.map( (prj, i) => { return(
                      <Project key={i} preload={[prj.PrjTitle, prj.PrjImg, prj.PrjTechs, prj.PrjPreview, prj.PrjGithub]}/>
                ) } )
            }
          </div>
          
          <Link to="/Projects">See all projects</Link> 
        </section>
  
        <section id="certificates">     
        <h2> <GrCertificate /> certificates </h2>
          <Carousel interval={2000} className={"certificates__carousel"}>
            {
              certificatesImages.map( (certImg, index) => {
                return(
                <Carousel.Item key={index}>
                  <img className="d-block w-100"  src={`${certImg}`}   alt={`${index+1} slide`} />
                </Carousel.Item>
                );
              })
            }
          </Carousel>
        </section>
  
        <section id="pens">
          <h2> <FaCodepen /> codepen pens </h2>
          <p>
            some of pens you can see more in profile </p>
          <div className={'pens__wrapper'}>  
            <Pen preload={[pen1, 'React Apexcharts Bar Chart', 'https://codepen.io/ahmedzkaria22/pen/gbYjmzx']}/>
            <Pen preload={[pen2, 'Raect drag drop', 'https://codepen.io/ahmedzkaria22/pen/gOQQeKZ']}/>
            <Pen preload={[pen3, 'Dynamic react scss cards', 'https://codepen.io/ahmedzkaria22/pen/WNzKzON']}/>
            <Pen preload={[pen4, 'React color palettes feature', 'https://codepen.io/ahmedzkaria22/pen/Poemyeo']}/>
            <Pen preload={[pen5, 'Facts counter number using setInterval', 'https://codepen.io/ahmedzkaria22/pen/vYXLmdX']}/>
            <Pen preload={[pen6, 'polygons using border-radius , clip-path-polygon', 'https://codepen.io/ahmedzkaria22/pen/poEJNvQ']}/>
          </div>
        </section>
  
        <section id='feedback'>
          <h2> <VscFeedback /> Awesome Vision </h2>
          <WriteTestimonial />
        </section>  
      </>
    );
  }

export default Landing
