import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div className='container-fluid footer'>
                <div className='container'>
                    <div className='row justify-content-md-center'>
                        <div className='col-4 border-right border-light'>
                            <h6 className='col-12 text-left'>Qui sommes-nous?</h6>
                            <p className='text-left'>Le coaching est une pratique de développement personnel, basée sur le profond respect de l’être humain et un accompagnement personnalisé, sur des échanges constructifs ente le coaché (vous) et le coach (moi).</p>
                        </div>
                        <div className='col-4'>
                            <h6 className='col-12'>Contact</h6>
                            <ul className="col-12 text-left">
                                <li className="">Tel: 06.62.97.21.29</li>
                                <li className="">Email: exemple@email.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;