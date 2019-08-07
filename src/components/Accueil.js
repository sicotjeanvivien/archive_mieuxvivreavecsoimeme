import React from 'react';

import angelPortrait from '../assets/angel.jpg';
import workingProgress from '../assets/workingProgress.jpg';
import coaching from '../assets/coaching.jpg';

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

                <div className="row align-items-center en-tete">
                    <div className='col-8 accroche'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultrices ipsum odio. Nam sit amet erat elementum, efficitur urna et."</div>
                    <img className='col-4 img-fluid' style={styleCSS} alt='portrait' src={angelPortrait}></img>
                </div>

                {liste}

            </React.Fragment>
        )
    }
};

export default Accueil;