import React from 'react';

//asset
import chemin from '../assets/cheminArt.jpg';
import rogerLannoy from '../assets/rogerLannoy.jpg';
import arbre from '../assets/arbre.jpg';


class Presentation extends React.Component {
    render() {

        const styleText = {
            fontSize: '1.2em'
        };

        return (
            <div className='row mt-5' style={styleText}>
                {/* <h2 className='col-12'>Qui suis-je?</h2> */}
                <p className='col-12'>
                    ANGEL Sarah est thérapeute et guérisseuse des Âmes depuis 25 ans, coach en psychologie positive et en N’euro-Changement (méthodologie du changement) accompagnatrice de l’Être Humain vers son
                    épanouissement et sa réussite personnelle. Mon histoire difficile m’ a permis de développer ma résilience nécessaire pour bâtir la vie dont je rêvais. j’ai mis un point d’honneur de bien
                    accompagné le parcours et l’éducation de mes 3 enfants.  A la découverte de mon Don vers une phycologie humaine, j’accompagne chaque personne vers son épanouissement et vers  son instinct de
                    créativité en balayant leurs peurs (les croyances limitantes) pour se découvrir et se réaliser dans le bonheur.
                </p>
                <img className='offset-md-2 col-md-8 col-sm-12 p-3 img-fluid' src={arbre} alt='chemin'></img>
                <p className='col-12'>
                    Depuis 2000, mon parcours de vie et mes différentes rencontres avec des experts de la communication,aux processus de changement comportemental,à la gestion des émotions, à la résilience ainsi
                    que la P.N.L. m’ont plongé au cœur de la relation humaine. La lecture de nombreux ouvrages ont contribué à l’apprentissage de mon savoir faire tout en menant en parallèle une activité de
                    thérapeute en thérapies brèves et holistiques auprès de mon entourage et de ma Famille.
                </p>
                <p className='col-12'>
                    Puis en 2014, par le hasard d’un chemin, j’ai fait la connaissance de <strong> Roger LANNOY </strong>, Coach international aux changement durables et immédiat vers le succès. Il m’enseigne comment dépasser
                ses limites, comment atteindre ses objectifs, l’importance de l’enthousiasme chaque jour, la motivation dans la vie dans son quotidien, mais surtout de ne jamais abandonner ses rêves car ils
                sont pour tous à votre portée de mains. (séminaire à Paris janvier 2019). GRATITUDE à ROGER.
                </p>
                <p className='col-12'>
                    A présent, lorsque je regarde en arrière, je vois la lumière de ce passé que ses petites périodes d’adversité que j’ai traversées, ont été les plus profitables. Ce n’étaient que des bénédictions déguisées
                afin de me pousser à poursuivre mon chemin de vie. Ce chemin vallonné m’a permis l’opportunité de me rendre plus utile au monde que je ne l’aurais rêvé vers <strong>MA MISSION DE  VIE</strong>.
                </p>
                <img className='offset-md-2 col-md-8 col-sm-12 img-fluid' src={rogerLannoy} alt='roger Lannoy'></img>
                <p className='col-12'>
                    Ma recette pour réussir est tout simplement de croire en soi surtout quand personne ne croit en vous. Aujourd'hui, Je partage avec tous ceux qui le souhaitent  ses outils de réussite et  d’épanouissement.
                </p>
                <p className='col-12'>
                    Lorsque nous voulons changer de vie, nous voyons ce changement parsemé de montagnes qui nous semblent insurmontable. Le chemin de la réussite se trouve dans la simplicité de ses décisions, dans la sincérité
                    et l'authenticité de son engagement à soi-même.
                </p>
                <p className='col-12'>
                    A cet instant présent,  j’ai à cœur de vous accompagner AVEC CONVICTION pour la réalisation de vos projets de vie et votre succès personnel.
                </p>
                <p className='col-12'>
                    N’abandonnez jamais vos rêves !!! Engagez-vous de faire de votre vie, votre victoire contre l’adversité.
                </p>
            </div>
        )
    };
};

export default Presentation;