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
                    ANGEL Sarah  est  thérapeute et guérisseuse  des Âmes  depuis 25 ans, coach en spycologie positive et en Neuro-changement, accompagnatrice de l’être humain vers l’épanouissement et la réussite personnels.
                    Depuis 2000, mon parcours de vie et mes différentes rencontres avec des experts de la communication , de la relation humaine, de la résilience ainsi que la P.N.L. m’ont  plongé au cœur de la relation d’aide.
                    Après une séparation puis un période du Deuil, je continue mon chemin à l’éducation de mes enfants tout en m’intéressant aux outils du développent personnel et à la gestion des émotions.
                </p>
                <img className='offset-3 col-6 p-3 img-fluid' src={chemin} alt='chemin'></img>
                <p className='col-12'>
                    La lecture de nombreux ouvrages ont contribué à l’apprentissage de mon savoir faire tout en menant une pratique de thérapeute auprès de mon entourage et de mes amis.
                </p>
                <p className='col-12'>
                    La rencontre avec Monsieur Roger LANNOY coach international aux changement durables et immédiats vers le succès  m’a enseigné la constance d’un  travail bien fait, l’importance de l’enthousiasme et de   la motivation  dans la vie de tous les jours, surtout de ne jamais abandonner ses rêves(séminaire à Paris JANVIER 2019). Un grand merci à mon mentor.
                </p>
                <img className='offset-3 col-6 p-3 img-fluid' src={rogerLannoy} alt='roger Lannoy'></img>
                <p className='col-12'>
                    Actuellement, je continue à me former avec Mme Florence Servan Schreiber à la spycologie positive puis avec Monsieur Jean Summer, coach vocal, prise de la parole en public.
                </p>
                <p className='col-12'>
                    A présent, lorsque je regarde en arrière, je vois la lumière de ce passé que ses petites périodes d’adversité dont j’ai traversée, ont été  les plus profitables. Ce n’étaient que des bénédictions déguisées afin de me pousser à poursuivre le chemin de la vie.
                </p>
                <p className='col-12'>
                    Ce chemin vallonné m’a permis l’opportunité de me rendre plus utile au monde que je ne l’aurais rêvé dans la réalisation du <strong>BUT DE MA VIE</strong>.
                </p>
                <p className='col-12'>
                    J’ai à cœur aujourd’hui de vous accompagner dans la joie de vivre, dans l’enthousiasme et la réalisation positive de votre vie.
                </p>

            </div>
        )
    };
};

export default Presentation;