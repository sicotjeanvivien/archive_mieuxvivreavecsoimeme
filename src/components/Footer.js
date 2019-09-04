import React from 'react';

//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

class Footer extends React.Component {
    render() {
        return (
            <div className='container-fluid footer'>
                <div className='containe' style={{ fontSize: 0.7 + 'em' }}>
                    {/* <div className='row border-bottom' style={{ fontSize: 0.6 + 'em' }}>
                    <div className="col-6">Tel: 06.62.97.21.29</div>
                    <div className="col-6">Email: angel.coachaquitaine@gmail.com</div>
                </div> */}
                    <div className='row'>
                        <div className='col-4 border-right border-light'>
                            <h6 className='col-12 text-left'>Qui sommes-nous?</h6>
                            <p className='text-left' >
                                Le coaching est une pratique de développement personnel, basée sur le profond respect de l’être humain et un accompagnement personnalisé, sur des échanges constructifs ente le coaché (vous) et
                                le coach (moi).
                            </p>
                        </div>
                        <div className='col-4 border-right border-light'>
                            <h6 className='col-12'>Partenaire</h6>
                        </div>
                        <div className='col-4 text-left'>
                            <div className='col-12 row mb-3'>
                                <h6 className='col-12'>Contact</h6>
                                <div className="col-12"><FontAwesomeIcon icon={faPhone} size='xs' />: 06.62.97.21.29</div>
                                <div className="col-12">@: angel.coachaquitaine@gmail.com</div>
                            </div>
                            <div className='col-12 row'>
                                <h6 className='col-12'>Suivre notre actualité</h6>

                                <div className="col-3">
                                    <a href='#'>
                                        <FontAwesomeIcon icon={faInstagram} size='2x' />
                                    </a>
                                </div>
                                <div className="col-3">
                                    <a href='#'>
                                        <FontAwesomeIcon icon={faFacebook} size='2x' />
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div >
        )
    }
}

export default Footer;