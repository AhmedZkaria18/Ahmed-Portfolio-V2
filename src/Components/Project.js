import React, { useRef } from 'react'
import { Figure, NavLink } from 'react-bootstrap';
// import {FaDesktop} from 'react-icons/fa';
// import {AiOutlineEye} from 'react-icons/ai';
import {BiCodeCurly} from 'react-icons/bi';
import {FiGithub, FiMonitor} from 'react-icons/fi';
function Project(props) {
    const trgRef = useRef(null);
    const handelTechs = () => {
        // ( trgRef.current.style.display === 'none' ) 
        // ? trgRef.current.style.display = 'block'
        // : trgRef.current.style.display = 'none'
        ( trgRef.current.style.opacity == 0 ) 
        ? trgRef.current.style.opacity = 1
        : trgRef.current.style.opacity = 0
    }
    const {preload} = props;

        return(
        <Figure className={`projects__wrapper__item ${preload[2].toString().replace(/,/g, " ")}`}>
            <div className={'projects__wrapper__item__imgWrapper'}>
                <img src={`${preload[1]}`} alt={`${preload[1]}`} />  
                <div className={'projects__wrapper__item__imgWrapper__langs'} ref={trgRef}>
                    <p>Technologies</p>{
                    preload[2].map( (lang, i) => { return(
                        <span key={i}>{lang}</span>
                    )} )
                }</div>
            </div>
            <h5>{preload[0]}</h5>
            
            <div className={'projects__wrapper__item__controlls'}>
                <NavLink href={preload[3]}  target='_blank'> <FiMonitor /> </NavLink>
                <BiCodeCurly onClick={handelTechs}/>
                {
                    (preload[4]) && 
                        <NavLink href={preload[4]}  target='_blank'> <FiGithub /> </NavLink>                    
                }
            </div>
        </Figure>    
    )
}

export default Project
