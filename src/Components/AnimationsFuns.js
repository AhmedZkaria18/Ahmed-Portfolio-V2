export const handelHeadDelay = (sectionName) => {
    if( sectionName !== null &&  typeof window !== 'undefined' ){
      const trgHd = sectionName.firstChild;
    //   console.log(sectionName);
    // if( window.scrollY >= (sectionName.offsetTop - 200) ){ 
    if( window.scrollY >= (sectionName.offsetTop - 400) ){ 
      trgHd.style.animationName = 'sectionHead';
      setTimeout(() => {
        trgHd.style.opacity = '1';      
      }, 500);          
    } 
    }
}

export const handelHeroDelay = (sectionName) => {
if( sectionName !== null &&  typeof window !== 'undefined' ){
    const trgDesc = document.querySelector('#hero .hero__description');
    const trgLink1 = document.querySelectorAll('#hero .hero__description a')[0];
    const trgLink2 = document.querySelectorAll('#hero .hero__description a')[1];
    // trgLink3 related Github, disabled because account closed, untill make new by upload projects
    // const trgLink3 = document.querySelectorAll('#hero .hero__description a')[2];
    const trgImg1 = document.querySelector('#hero .hero__photo');
    const trgImg2 = document.querySelector('#hero .hero__description .hero__photo__small');
    
    trgDesc.style.animationName = 'heroDesc';
    setTimeout(() => {
        trgDesc.style.opacity = '1';      
        trgLink1.style.animationName = 'heroDescLink';
        setTimeout(() => {  trgLink1.style.opacity = '1';                    
            trgLink2.style.animationName = 'heroDescLink';
            setTimeout(() => {  trgLink2.style.opacity = '1';  
                // trgLink3 related Github, disabled because account closed, untill make new by upload projects                  
                // trgLink3.style.animationName = 'heroDescLink';
                // setTimeout(() => {  trgLink3.style.opacity = '1';
                // }, 400);
            }, 400);              
        }, 400);              
    }, 800);
    // trgImg1.style.animationName = 'heroAvatar';
    // trgImg2.style.animationName = 'heroAvatar';
    trgImg1.style.animationName = 'polygonAnmy';
    trgImg2.style.animationName = 'polygonAnmy';
    setTimeout(() => {
        trgImg1.style.opacity = '1';      trgImg2.style.opacity = '1';
    }, 1000);
}
}

export const handelSkillsDelay = () => {
if( typeof window !== 'undefined' ){
    const trgSkill = document.querySelectorAll('#skills .skills__container__item');
    for(let i = 0; i<trgSkill.length; i++){
    // if( window.scrollY >= (trgSkill[i].offsetTop - 200) ){ 
    if( window.scrollY >= (trgSkill[i].offsetTop - 400) ){ 
        trgSkill[i].style.animationName = 'skillAnmy';
        setTimeout(() => {
        trgSkill[i].style.opacity = '1';      
        }, 600);          
    }
    }
}
}

export const handelProjectsWrapperDelay = () => {
if( typeof window !== 'undefined' ){
    // const trgProj = document.querySelector('#projects .projects__wrapper');  
    const trgProjWrapper = document.querySelector('#projects');
    const trgProj = ( document.querySelector('#projects').classList.contains('projects-page') === false ) && document.querySelector('#projects .projects__wrapper');  
    // if( window.scrollY >= (trgProjWrapper.offsetTop - 112) ){ 
    if( window.scrollY >= (trgProjWrapper.offsetTop - 300) ){ 
        trgProj.style.animationName = 'projectsWrapper';
        setTimeout(() => {
        trgProj.style.opacity = '1';      
        }, 500);          
    }
}
}

export const handelCertDelay = () => {
if( typeof window !== 'undefined' ){
    const trgCert = ( document.querySelector('#projects').classList.contains('projects-page') === false ) && document.querySelector('#certificates .certificates__carousel');  
    // if( window.scrollY >= (trgCert.offsetTop - 150) ){ 
    if( window.scrollY >= (trgCert.offsetTop - 400) ){ 
        trgCert.style.animationName = 'certificatesAnmy';
        setTimeout(() => {
        trgCert.style.opacity = '1';      
        }, 400);          
    }
}
}

export const handelPensQuate = () => {
if( typeof window !== 'undefined' ){
    const trgQuate = ( document.querySelector('#projects').classList.contains('projects-page') === false ) && document.querySelector('#pens > p');  
    const trgPens = ( document.querySelector('#projects').classList.contains('projects-page') === false ) && document.querySelectorAll('#pens .pens__wrapper .pens__wrapper__item');  
    // if( window.scrollY >= (trgQuate.parentElement.offsetTop - 100) ){ 
    if( window.scrollY >= (trgQuate.parentElement.offsetTop - 400) ){ 
        trgQuate.style.animationName = 'pensQuate';
        setTimeout(() => {
        trgQuate.style.opacity = '1';      
        for(let i = 0; i < trgPens.length; i++){
            // if( window.scrollY >= (trgPens[i].offsetTop - 175) ){
            if( window.scrollY >= (trgPens[i].offsetTop - 400) ){
            trgPens[i].style.animationName = 'pensAnmy';
            setTimeout(() => {
            trgPens[i].style.opacity = '1';      
            }, 600);              
            }
        }              
        }, 500);          
    }
}
}


export const handelContactFormDelay = () => {
    if( typeof window !== 'undefined' ){
        const trgForm = ( document.querySelector('#feedback').classList.contains('projects-page') === false ) && document.querySelector('#feedback form');  
        // if( window.scrollY >= (trgCert.offsetTop - 150) ){ 
        if( window.scrollY >= (trgForm.offsetTop - 400) ){ 
            trgForm.style.animationName = 'contactFormAnmy';
            setTimeout(() => {
            trgForm.style.opacity = '1';      
            }, 400);          
        }
    }
}

export const handelProjectsDelayReset = () => {
    if( typeof window !== 'undefined' ){
      const trgProj = ( document.querySelector('#projects').classList.contains('projects-page') === true ) && document.querySelectorAll('.projects-page .projects__wrapper .projects__wrapper__item');
      for(let i = 0; i<trgProj.length; i++){
          trgProj[i].style.animationName = 'none';
          trgProj[i].style.opacity = '0';      
      }
      document.querySelector('#scroll_down').style.display = 'flex'
    }
}

export const handelProjectsDelay = () => {
    if( typeof window !== 'undefined' ){
      // const trgProj = document.querySelectorAll('.projects-page .projects__wrapper .projects__wrapper__item');
      const trgProj = ( document.querySelector('#projects').classList.contains('projects-page') === true ) && document.querySelectorAll('.projects-page .projects__wrapper .projects__wrapper__item');
      // const trgProjWrapper = document.querySelector('#projects');
      for(let i = 0; i<trgProj.length; i++){
        // if( window.scrollY >= (trgProj[i].offsetTop - 100) ){ 
        if( window.scrollY >= (trgProj[i].offsetTop - 600) ){ 
          trgProj[i].style.animationName = 'projectAnmy';
          setTimeout(() => {
            trgProj[i].style.opacity = '1';      
            if(i === 0){document.querySelector('#scroll_down').style.display = 'none'}
          }, 250);          
        }
      }
    }
}