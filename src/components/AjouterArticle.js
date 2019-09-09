import React from 'react';

//asset
import image from '../assets/image.png'

const articlesExemple = {
    article1:
        {
            titre: 'titre du premier article',
            content: 'Sit Lorem consectetur qui tempor ut laboris ea aute. Eu pariatur aliqua commodo ex est. Ut eu minim occaecat do irure excepteur est incididunt magna aliquip duis sit.Tempor officia ex quis laboris aliqua exercitation eiusmod dolor dolore qui ut. Sunt mollit elit ea duis fugiat elit pariatur aliquip fugiat. Aliquip magna veniam sunt reprehenderit culpa voluptate. Anim id magna ea non in ea incididunt ad id proident anim id ea. Magna irure sit adipisicing ullamco pariatur minim laboris velit tempor.',
            img: image
        },
    article2:
        {
            titre: 'titre du deuxieme article',
            content: 'Sit Lorem consectetur qui tempor ut laboris ea aute. Eu pariatur aliqua commodo ex est. Ut eu minim occaecat do irure excepteur est incididunt magna aliquip duis sit.Tempor officia ex quis laboris aliqua exercitation eiusmod dolor dolore qui ut. Sunt mollit elit ea duis fugiat elit pariatur aliquip fugiat. Aliquip magna veniam sunt reprehenderit culpa voluptate. Anim id magna ea non in ea incididunt ad id proident anim id ea. Magna irure sit adipisicing ullamco pariatur minim laboris velit tempor.',
            img: image
        },
}

class AjouterArticle extends React.Component {

    state = {
        titre: "",
        content: "",
        img: "",
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleSubmit = event => {
        event.preventDefault()
        const article =  {...this.state}
        this.props.ajouterArticle(article)
    }

    chargerExemple = () => this.setState({ articlesExemple });

    render() {
        return (
            <div>
                <h5>Ajouter Article</h5>
                <button type="button" className="btn btn-primary" onClick={this.chargerExemple}>Remplir</button>
                <form className='' onSubmit={this.handleSubmit} >
                    <div className="form-group">
                        <label>Titre de l'article</label>
                        <input value={this.state.nom} onChange={this.handleChange} name='titre' type="text" className="form-control" placeholder="titre..." />
                    </div>
                    <div className="form-group">
                        <label>URL de l'image</label>
                        <input value={this.state.img} onChange={this.handleChange} name='img' type="text" className="form-control" placeholder="http//www.imge.com" />
                    </div>
                    <div className="form-group">
                        <label >Example textarea</label>
                        <textarea value={this.state.content} onChange={this.handleChange} name='content' className="form-control" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Editer l'article</button>
                </form>
            </div>
        )
    };
};

export default AjouterArticle;