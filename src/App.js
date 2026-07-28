import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/Portfolio.css';
import Landing from './Components/Landing';
import Projects from './Components/Projects';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { FaChevronUp, FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterest, FaCodepen } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

function App0() {    
  if( typeof window !== 'undefined' ){
    window.addEventListener( 'scroll', () => {
      const btnTop = document.getElementById('btnTop');
      if( window.scrollY >= 300 ){ btnTop.style.display = 'block';
      }else{ btnTop.style.display = 'none'; }
    } )
  }
  return (
    <Router basename="/">
      <div className={'App'}>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/Projects" component={Projects} />                
        </Switch>
        <footer className={'text-center'}>
          <h3> Ahmed Zakaria </h3>
          <div className={'footer__socialWrapper'}>
            <a href='https://www.facebook.com/profile.php?id=100009428856148' target='_blank' rel="noreferrer"><FaFacebookF /></a>
            <a href='https://twitter.com/AhmedZkaria15' target='_blank' rel="noreferrer"><FaTwitter /></a>
            <a href='https://www.linkedin.com/in/ahmed-zakaria-a554a4183' target='_blank' rel="noreferrer"><FaLinkedinIn /></a>                
            {/* Github disabled because account closed, untill make new by upload projects */}
            {/* <a href='https://github.com/AhmedZkaria22' target='_blank' rel="noreferrer"><FaGithub /></a> */}
            <a href='https://codepen.io/ahmedzkaria22' target='_blank' rel="noreferrer"><FaCodepen /></a>
            <a href='https://www.pinterest.com/zikoser/_saved/' target='_blank' rel="noreferrer"><FaPinterest /></a>
            <a href='mailto:ahmedzkaria372017@gmail.com' target='_blank' rel="noreferrer"><SiGmail /></a>
          </div>
          <p>© 2021 copyright all right reserved</p>
          <p>made with <span>♥</span> </p>
        </footer>
      </div>
      <FaChevronUp  id='btnTop' onClick={() => {
        // window.scrollTo(0,0);
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }} />
    </Router>
  );
}

export default App0;