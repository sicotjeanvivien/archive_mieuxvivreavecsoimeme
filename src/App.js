import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//asset
import './App.css';
import font from './assets/headerFont.jpg';

//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';



//Component
import Accueil from './components/Accueil';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Presentation from './components/Presentation';
import Blog from './components/Blog';
import Admin from './components/Admin';

class App extends React.Component {


  render() {

    const styleFont = {
      backgroundImage: "url(" + font + ")",
      width: "100%",
      height: "400px",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',

      fontFamily: "'Lobster', cursive",
    }

    const displayOn = () => {
      let classNav = document.querySelector('#navMobile').classList;
      if (classNav.contains('active')) {
        classNav.replace('active', 'inactive')
      } else if (classNav.contains('inactive')) {
        classNav.replace('inactive', 'active')
      }

    }

    return (
      <React.Fragment>
        <Router>
          <div className='mobile container-fluid'>
            <nav className="bg-white navbar">
              <button className='navbar-toggler border' onClick={displayOn}>
                <FontAwesomeIcon icon={faBars} size='xs' />
              </button>
            </nav>
            <div className='inactive bg-white' id='navMobile'>
              <Link to='/' className='nav-link border' onClick={displayOn}>Accueil</Link>
              <Link to='/presentation' className="nav-link border" onClick={displayOn}>Qui suis-je?</Link>
              <Link to='/contact' className="nav-link border" onClick={displayOn}>Contact</Link>
            </div>
          </div>

          <div className='container-fluid align-items-end' style={styleFont}>
            <div className='row '>
              <div className='col-12 mt-4 text-center' style={{fontSize:5 +'em'}}>
                Mieux vivre avec soi même
              </div>
            </div>
            <div className='row mb-2 web align-self-end'>
              <div className="offset-11 col-1">
                <a href='#'>
                  <FontAwesomeIcon icon={faInstagram} size='2x' />
                </a>
              </div>
              <div className="offset-11 col-1">
                <a href='#'>
                  <FontAwesomeIcon icon={faFacebook} size='2x' />
                </a>
              </div>
            </div>
          </div>
         
          <div className='container ' >
            <nav className='bg-white web'>
              <ul className="nav justify-content-center">
                <li className="nav-item">
                  <Link to='/' className='nav-link'>Accueil</Link>
                </li>
                <li className="nav-item">
                  <Link to='/presentation' className="nav-link">Qui suis-je?</Link>
                </li>
                <li className="nav-item">
                  <Link to='/blog/liste' className="nav-link">Blog</Link>
                </li>
                <li className="nav-item">
                  <Link to='/contact' className="nav-link">Contact</Link>
                </li>
              </ul>
            </nav>


            <Route exact path='/' component={Accueil} />
            <Route path='/presentation' component={Presentation} />
            <Route path='/blog/liste' component={Blog} />
            <Route path='/contact' component={Contact} />
            <Route path='/admin' component={Admin} />

          </div>
        </Router>

        <Footer />
      </React.Fragment>
    );
  }

}

export default App;
