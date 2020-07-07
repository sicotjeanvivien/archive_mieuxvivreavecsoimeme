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

//firebase 
// import base from './base';

class App extends React.Component {

    state = {
        message: 'patate'
    }

    // componentDidMount () {
    //   base.syncState('/message', {
    //     context: this,
    //     state: 'message'
    //   })
    // }

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
                            <button className='navbar-toggler border'  onClick={displayOn}>
                                <FontAwesomeIcon icon={faBars} size='xs' />
                            </button>
                        </nav>
                        <div className='inactive bg-white' id='navMobile'>
                            <Link to='/' className='nav-link border' onClick={displayOn}>Accueil</Link>
                            <Link to='/presentation' className="nav-link border" onClick={displayOn}>Qui suis-je?</Link>
                            <Link to='/contact' className="nav-link border" onClick={displayOn}>Contact</Link>
                        </div>
                    </div>
                    <div className='container align-items-end'>
                        <div className='row '>
                            <div className='col-12 mt-4 text-center' style={{ fontSize: 5 + 'em' }}>
                            NouvelVie-NouvelElan
                            </div>
                        </div>
                    </div>

                    <div className='container '>
                        <div className='row justify-content-end mt-2 mb-2'>
                            <div className="col-1">
                                <a href='https://www.instagram.com/angel.coachs/?hl=fr'>
                                    <FontAwesomeIcon icon={faInstagram} size='2x' />
                                </a>
                            </div>
                            <div className="col-1">
                                <a href='https://www.facebook.com/NouvelVie-Nouvel-ELAN-115166936880342/'>
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
                                    <Link to='/presentation' className="nav-link">Mon parcours</Link>
                                </li>
                                {/* <li className="nav-item">
                  <Link to='/blog/liste' className="nav-link">Blog</Link>
                </li> */}
                                <li className="nav-item">
                                    <Link to='/contact' className="nav-link">Contact</Link>
                                </li>
                            </ul>
                        </nav>
                    


                        <Route exact path='/' component={Accueil} />
                        <Route path='/presentation' component={Presentation} />
                        <Route path='/blog/liste' component={Blog} />
                        <Route path='/contact' component={Contact} />

                    </div>
                </Router>

                <Footer />
            </React.Fragment >
        );
    }

}

export default App;
