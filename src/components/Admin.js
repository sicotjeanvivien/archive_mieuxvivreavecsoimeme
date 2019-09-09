import React from 'react';

//firebase
import base from '../base';

//Components
import AjouterArticle from './AjouterArticle';
import MajArticle from './MajArticle';

class Admin extends React.Component {

    state = {
        articles: {},
    };

    componentDidMount() {
        base.syncState('/blog', {
            context: this,
            state: 'articles'
        })
    };

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
        this.setState({articles})
    }

    render() {
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