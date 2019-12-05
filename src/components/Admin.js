import React from 'react';

//firebase
import base, { firebaseApp } from '../base';
import firebase from 'firebase/app';
import 'firebase/auth';

//Components
import AjouterArticle from './AjouterArticle';
import MajArticle from './MajArticle';
import Login from './Login';

class Admin extends React.Component {

    state = {
        articles: {},
        uid: null,
        localId: null,
    };

    componentDidMount() {
        base.syncState('/blog', {
            context: this,
            state: 'articles'
        })
    };

    handleAuth = async authData => {
        console.log(authData)
        // const box = await base.fetch(this.props.)
    }

    authenticate = () => {
        const authProvider = new firebase.auth.FacebookAuthProvider()
        firebaseApp
            .auth()
            .signInWithPopup(authProvider)
            .then(this.handleAuth)
    }

    ajouterArticle = article => {
        const articles = { ...this.state.articles }
        articles[`article-${Date.now()}`] = article
        this.setState({ articles })
    };

    majArticle = (key, majArticle) => {
        const articles = { ...this.state.articles }
        articles[key] = majArticle
        this.setState({ articles })
    };

    deleteArticle = (key) => {
        const articles = { ...this.state.artcicles }
        articles[key] = null
        this.setState({ articles })
    }

    render() {

        if (!this.state.uid) {
            return <Login
                authenticate={this.authenticate}
            ></Login>
        }

        return (
            <div>
                <h3>Administration Blog</h3>
                <AjouterArticle ajouterArticle={this.ajouterArticle} />
                {
                    Object.keys(this.state.articles)
                        .map(key => <MajArticle
                            key={key}
                            id={key}
                            majArticle={this.majArticle}
                            deleteArticle={this.deleteArticle}
                            articles={this.state.articles}
                            titre={this.state.articles[key].titre}
                        ></MajArticle>)
                }
            </div>

        )
    }
}

export default Admin;