import React from 'react';
import { Carousel } from 'react-bootstrap'


import angelPortrait from '../assets/angel.jpg';
import workingProgress from '../assets/workingProgress.jpg';
import coaching from '../assets/coaching.jpg';
import coachingDiagram from '../assets/coachingdiagram.png';
import img01 from './../assets/img_carousel_01.jpg';
import img02 from './../assets/img_carousel_02.jpg';
import img03 from './../assets/img_carousel_03.jpg';
import testimonials from '../assets/testimonials.json';

import ElemAccueilR from './ElementAccueilR';
import ElemAccueilL from './ElementAccueilL';

const elementPage = [
    {
        titre: 'QU’EST-CE QUE LE COACHING ?',
        content: "Le coaching est une pratique de développement personnel, basée sur le profond respect de l’être humain. Le coaching est un accompagnement personnalisé, sur des échanges constructifs ente le coaché (vous) et le coach (moi).",
        img: workingProgress,
    },
    {
        titre: "QUELLE EST LA DIFFERENCE ENTRE UNE SEANCE DE DEVELOPPEMENT PERSONNELLE & UNE PSYCHOTHERAPIE ?",
        content: `Ce sont deux méthodes de développement personnel :
        Coaching : Comment j’investis mon présent pour construire mon avenir
        Psychothérapie : je cherche des éléments dans mon passé pour comprendre le présent que je vis aujourd’hui`,
        img: coaching,
    }
];

class Accueil extends React.Component {

    state = {
        elementPage: elementPage,
    };

    render() {

        const styleCSS = {
            paddingRight: 0 + 'px',
        };

        const liste = Object.keys(elementPage).map((key, i) => (
            i % 2 === 0 ?
                <ElemAccueilR
                    key={i}
                    titre={this.state.elementPage[key].titre}
                    content={this.state.elementPage[key].content}
                    img={this.state.elementPage[key].img}
                />
                :
                <ElemAccueilL
                    key={i}
                    titre={this.state.elementPage[key].titre}
                    content={this.state.elementPage[key].content}
                    img={this.state.elementPage[key].img}
                />

        ));

        return (
            <React.Fragment>
                <Carousel className='mt-5' >
                    <Carousel.Item>
                        <img className="img-fluid" src={img01} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="img-fluid" src={img02} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="img-fluid" src={img03} />
                    </Carousel.Item>
                </Carousel>
                <div className="row align-items-center en-tete">
                    <div className='col-8 accroche text-center'>"UNE JOURNEE PUISSANTE & INSPIRANTE basée sur des résultats immédiats"</div>
                    <img className='col-4 img-fluid' style={styleCSS} alt='portrait' src={angelPortrait}></img>
                </div>
                {/* <div> VIDEO</div> */}
                <div className="row align-items-center en-tete">
                    <img className='col-4 img-fluid' style={styleCSS} alt='portrait' src={coaching}></img>
                    <div className='col-8 accroche text-center'>"Il est temps de vivre la vie que tu t'es imaginée." - Henry James</div>
                </div>
                <Carousel indicators={false} className='mt-5' >
                    {
                        testimonials.map((elem, i) => {
                            console.log(elem);
                            return (
                                <Carousel.Item key={i}>
                                    <div className="row justify-content-center">
                                        <h3 className="col-8 text-right"> « {elem.title.toUpperCase()} »</h3>
                                        <p className="col-6 text-left"> <b>{elem.author}</b></p>
                                    </div>
                                </Carousel.Item>
                            )
                        })
                    }
                </Carousel>
                <div id="player"></div>
                <div className='row align-items-center en-tete'>
                    <img className='img-fluid' src={coachingDiagram} alt='shema coaching'></img>
                </div>
            </React.Fragment>
        )
    }
};

export default Accueil;
