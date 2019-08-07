import React from 'react';

class Contact extends React.Component {
    render() {

        return (
            <div className='container main-bloc'>
                <div className='row contact'>
                    {/* <div className='col-6'>
                        <div className='contact-titre'>Envoyer un message</div>
                        <form action="http://mieuxvivreavecsoimeme.fr/renvoieMail.php" method="post" className='contact-form'>
                            <div className="form-group">
                                <label className='contact-label'>Adresse email</label>
                                <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter votre email" />
                            </div>
                            <div className="form-group">
                                <label className='contact-label'>Subjet de votre message</label>
                                <input className="form-control" name='sujet' id="exampleInputPassword1" placeholder="Subjet..." />
                            </div>
                            <div className="form-group">
                                <label className='contact-label'>Votre message</label>
                                <textarea className="form-control" name='message' id="exampleFormControlTextarea1" rows="5"></textarea>
                            </div>
                            <div>
                                <label></label>
                                <button type="submit" className="btn btn-light mb-2">Envoyer</button>
                            </div>
                        </form>
                    </div> */}
                    <div className='col-6'>
                        <div className='contact-titre mb-5'>Information</div>
                        <p><strong>Téléphone: </strong> 06.62.97.21.29</p>
                        <p><strong>Email: </strong> angel.coachaquitaine@gmail.com</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;