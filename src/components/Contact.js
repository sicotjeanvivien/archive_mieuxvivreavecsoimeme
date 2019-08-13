import React from 'react';
import axios from 'axios';

class Contact extends React.Component {

    state = {
        email: '',
        sujet: '',
        message: '',
        mailSent: false,
        error: null
    }

    handleFormSubmit = event => {
        event.preventDefault();
        axios({
            method: 'post',
            url: 'http://mieuxvivreavecsoimeme.fr/renvoieMail.php',
            headers: { 'contact-type': 'application/json' },
            data: JSON.stringify(this.state)
        })
            .then(response => {
                const mailSentR = (response.data.sent);
                this.setState({
                    mailSent: mailSentR,
                    email: '',
                    sujet: '',
                    message: '',
                });

            })
            .catch(error => this.setState({ error: error.message }));
    };

    render() {

        return (
            <div className='container main-bloc'>
                <div className='row contact'>
                    <div className='col-6'>
                        <div className='contact-titre'>Envoyer un message</div>
                        <form className='contact-form'>
                            <div className="form-group">
                                <label className='contact-label'>Adresse email</label>
                                <input type="email" name='email' className="form-control" id="email"
                                    placeholder="Enter votre email"
                                    value={this.state.email}
                                    onChange={e => this.setState({ email: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <label className='contact-label'>Sujet de votre message</label>
                                <input className="form-control" name='sujet' id="sujet"
                                    placeholder="Sujet..."
                                    value={this.state.sujet}
                                    onChange={e => this.setState({ sujet: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <label className='contact-label'>Votre message</label>
                                <textarea className="form-control" name='message' id="message" rows="5"
                                    value={this.state.message}
                                    onChange={e => this.setState({ message: e.target.value })}
                                ></textarea>
                            </div>
                            <div className="g-recaptcha" data-sitekey="6LdF47IUAAAAACcnds0S--wDXsjhaJ_jUjUNkVvD"></div>
                            <div>
                                <button type="button" value="Envoyer" onClick={e => this.handleFormSubmit(e)}>Envoyer</button>
                            </div>
                        </form>
                        <div>
                            {this.state.mailSent &&
                                <div>Merci de votre message</div> 
                            }
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='contact-titre mb-5'>Information</div>
                        <p><strong>Téléphone: </strong> 06.62.97.21.29</p>
                        <p><strong>Email: </strong> angel.coachaquitaine@gmail.com</p>
                    </div>
                </div>
            </div >
        )
    }
}

export default Contact;