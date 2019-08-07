import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//asset
import './App.css';
import font from './assets/headerFont.jpg';

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
      fontSize: '5em',
      fontFamily: "'Lobster', cursive",
    }

    const styleMin = {
      minHeight: '600px'
    }

    return (
      <React.Fragment>

        <div className='container-fluid' style={styleFont}>
          <div className='row align-items-center'>
            <div className='col-12 text-center'>
              Mieux vivre avec soi même
          </div>
          </div>
        </div>
        <Router>
          <div className='container' style={styleMin}>
            <div className='bg-white'>
              <ul className="nav justify-content-center">
                <li className="nav-item">
                  <Link to='/' className='nav-link'>Accueil</Link>
                </li>
                <li className="nav-item">
                  <Link to='/presentation' className="nav-link">Qui suis-je?</Link>
                </li>
                {/* <li className="nav-item">
                  <Link to='/blog/liste' className="nav-link">Blog</Link>
                </li> */}
                <li className="nav-item">
                  <Link to='/contact' className="nav-link">Contact</Link>
                </li>
              </ul>
            </div>
            <Route exact path='/' component={Accueil} />
            <Route path='/presentation' component={Presentation} />
            <Route path='/blog/liste' component={Blog} />
            <Route path='/contact' component={Contact} />

          </div>
        </Router>

        <Footer />
      </React.Fragment>
    );
  }

}

export default App;
