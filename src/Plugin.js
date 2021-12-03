let menuFunSensor = true;  
export const menuFun = () => {
    if ( menuFunSensor ) {
        document.querySelector(".header__menu").style.display = "block";
        menuFunSensor = false;
    } else {
        document.querySelector(".header__menu").style.display = "none";
        menuFunSensor = true;
    }
}

let filterFunSensor = true;  
export const filterFun = () => {
    if ( filterFunSensor ) {
        document.querySelector(".projects__filtersWrapper").style.display = "block";
        document.querySelector(".projects__filter").style.animation = "rtg 1 5s linear";
        filterFunSensor = false;
    } else {
        document.querySelector(".projects__filtersWrapper").style.display = "none";
        document.querySelector(".projects__filter").style.animation = "rtg infinite 5s linear";
        filterFunSensor = true;
    }
}


let filterArr = [];
export const handelProjectsFilter = (e) => {
    if (e.target.checked) {        
      if(filterArr.indexOf(e.target.nextSibling.textContent) === -1){ filterArr.push(e.target.nextSibling.textContent); }
    } 

    const menuBtns = document.querySelectorAll('.projects__filtersWrapper .form-check input');
    for(let i=0; i<menuBtns.length; i++){
      if( menuBtns[i].checked ){  
        menuBtns[i].parentElement.classList.add('smmenuItemActive');
      }else{ menuBtns[i].parentElement.classList.remove('smmenuItemActive'); }
    }

    const allFilters = document.querySelectorAll('.projects__filtersWrapper .form-check');
    for( let i=0; i<allFilters.length; i++ ){
      if( allFilters[i].firstChild.checked === false && filterArr.indexOf( allFilters[i].lastChild.textContent ) !== -1){
          filterArr.splice( filterArr.indexOf( allFilters[i].lastChild.textContent ) , 1);
      }  
    }


    if(filterArr.length >= 1){
      console.log(filterArr, document.querySelectorAll(`.projects__wrapper__item.${filterArr.join(".")}`));
      const allProjects = document.querySelectorAll(`.projects__wrapper__item`);
      for( let i=0; i<allProjects.length; i++ ){
        allProjects[i].style.display = 'none';
      }
      const allProjectsTargeted = document.querySelectorAll(`.projects__wrapper__item.${filterArr.join(".")}`);
      for( let i=0; i<allProjectsTargeted.length; i++ ){
        allProjectsTargeted[i].style.display = 'block';
      }
    }else{ 
      console.log(filterArr, document.querySelectorAll(`.projects__wrapper__item`)); 
      const allProjects = document.querySelectorAll(`.projects__wrapper__item`);
      for( let i=0; i<allProjects.length; i++ ){
        allProjects[i].style.display = 'block';
      }
    }          
}


export  const colorMoodFun = (e) => {
    if( e.target === document.querySelector('.header__colorMoodWrapper__sun') ){      
        document.querySelector('.header__colorMoodWrapper__moon').style.display = "block";
        document.querySelector('.header__colorMoodWrapper__sun').style.display = "none";

        document.documentElement.style.setProperty("--backwallperColor", "#051e34");
        document.documentElement.style.setProperty("--backmenuColor", "#f6f7f9");
        document.documentElement.style.setProperty("--lightColor", "#051e34");
        document.documentElement.style.setProperty("--textColor", "#f6f7f9");
        document.documentElement.style.setProperty("--projectBrdColor", "#f6f7f9a8");   
        document.documentElement.style.setProperty("--projectItemBack", "#051e34cf");
        document.documentElement.style.setProperty("--formBtnBack", "rgb(246 247 249 / 60%)");
        document.documentElement.style.setProperty("--pensShadow", "rgb(70 74 77) 0px 1px 2px 0px, rgb(70 74 77) 0px 1px 3px 1px");         
        document.documentElement.style.setProperty("--footerPolygon", "polygon(100% 0%, 0% 100%, 100% 100%)");        
    }
    else{
        document.querySelector('.header__colorMoodWrapper__sun').style.display = "block";
        document.querySelector('.header__colorMoodWrapper__moon').style.display = "none";

        document.documentElement.style.setProperty("--backwallperColor", "#f6f7f9");
        document.documentElement.style.setProperty("--backmenuColor", "#333");
        document.documentElement.style.setProperty("--lightColor", "#f6f7f9");
        document.documentElement.style.setProperty("--textColor", "#051e34");
        document.documentElement.style.setProperty("--projectBrdColor", "#545b6261");
        document.documentElement.style.setProperty("--projectItemBack", "#f6f7f9cf");
        document.documentElement.style.setProperty("--formBtnBack", "rgb(5 30 52 / 60%)");
        document.documentElement.style.setProperty("--pensShadow", "rgb(60 64 67 / 30%) 0px 1px 2px 0px, rgb(60 64 67 / 15%) 0px 1px 3px 1px");   
        document.documentElement.style.setProperty("--footerPolygon", "polygon(0% 0%, 0% 100%, 100% 100%)");
    }
}