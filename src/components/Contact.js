import React from 'react';

class Contact extends React.Component {
    render() {
        return (
            <div className='container main-bloc'>
                <div className='row contact'>
                    <div className='col-6'>
                        <div className='contact-titre'>Envoyer un message</div>
                        <form action="" method="post" className='contact-form'>
                            <div className="form-group">
                                <label className='contact-label'>Adresse email</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter votre email" />
                            </div>
                            <div className="form-group">
                                <label className='contact-label'>Subjet de votre message</label>
                                <input className="form-control" id="exampleInputPassword1" placeholder="Subjet..." />
                            </div>
                            <div className="form-group">
                                <label className='contact-label'>Votre message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                            </div>
                            <div>
                                <label></label>
                                <button type="submit" className="btn btn-light mb-2">Envoyer</button>
                            </div>
                        </form>
                    </div>
                    <div className='col-6'>
                        <div className='contact-titre'>Information</div>
                        <p><strong>Téléphone: </strong> 06.62.97.21.29</p>
                        <p><strong>Email: </strong> exemple@email.com</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;