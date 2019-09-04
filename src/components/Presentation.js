import React from 'react';

//asset
import chemin from '../assets/chemin.jpg';
import rogerLannoy from '../assets/rogerLannoy.jpg';


class Presentation extends React.Component {
    render() {

        const styleText = {
            fontSize: '1.2em'
        };

        return (
            <div className='row mt-5' style={styleText}>
                {/* <h2 className='col-12'>Qui suis-je?</h2> */}
                <p className='col-12'>
                    ANGEL Sarah est thérapeute et guérisseuse des Âmes depuis 25 ans, coach en psychologie positive et en N’euro-Changement (méthodologie du changement)  accompagnatrice de l’Être Humain vers l’épanouissement et la
                    réussite personnelle.
                </p>
                <p className='col-12'>
                    Après une séparation puis une période de  recherche de moi-même, je continue mon parcours à l’éducation de mes 3 enfants  tout en m’intéressant aux outils du développement personnel, aux processus de changement
                    comportement et à la gestion des émotions.
                </p>
                <img className='offset-md-2 col-md-8 col-sm-12 p-3 img-fluid' src={chemin} alt='chemin'></img>
                <p className='col-12'>
                    Depuis 2000, mon parcours de vie et mes différentes rencontres avec des experts de la communication,aux processus de changement comportemental, à  la résilience ainsi que la P.N.L. m’ont plongé au cœur de la
                    relation humaine.
                    La lecture de nombreux ouvrages ont contribué à l’apprentissage de mon savoir faire tout en menant en parallèle une activité de thérapeute en thérapies brèves et holistiques auprès de mon entourage et de ma
                    Famille.
                </p>
                <p className='col-12'>
                    Puis en 2012, par le hasard d’un chemin, la connaissance de Monsieur Roger LANNOY, Coach international aux changement durables et immédiats vers le succès.
                    Il m’enseigne comment dépasser ses limites, comment atteindre ses objectifs, l’importance de l’enthousiasme chaque jour, la motivation dans la vie dans son quotidien,
                    mais surtout de ne jamais abandonner ses rêves car ils sont pour tous à votre portée de mains. (séminaire à Paris JANVIER 2019). Un grand merci à Monsieur LANNOY Roger.
                </p>
                <img className='offset-md-2 col-md-8 col-sm-12 img-fluid' src={rogerLannoy} alt='roger Lannoy'></img>
                <p className='col-12'>
                    A présent, lorsque je regarde en arrière, je vois la lumière de ce passé que ses petites périodes d’adversité dont j’ai traversées, ont été les plus profitable. Ce n’étaient que des bénédictions déguisées afin de
                    me pousser à poursuivre le chemin de vie. Ce chemin vallonné m’a permis l’opportunité de me rendre plus utile au monde que je ne l’aurais rêvé vers la réalisation du <strong>BUT DE MA VIE</strong>.
                </p>
                <p className='col-12'>
                    Actuellement, je continue à suivre Roger Lannoy, mon mentor, à me former avec Mme Florence Servan Scheiiber à la psychologie positive puis avec Monsieur Jean Summer, coach vocal, à la prise de la parole en
                     public.
                </p>
                <p className='col-12'>
                    Aujourd’hui, j’ai à cœur de vous accompagner dans la joie de vivre, dans l’enthousiasme et dans la réalisation de vos projets dans votre vie.
                </p>

            </div>
        )
    };
};

export default Presentation;