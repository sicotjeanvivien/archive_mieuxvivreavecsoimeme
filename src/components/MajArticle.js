import React from 'react';

class MajArticle extends React.Component {
    state = {
        key: this.props.id
    }

    handleChange = (event, key) => {
        const { name, value } = event.target
        const article = this.props.articles[this.props.id]
        article[name] = value
        this.props.majArticle(key,article)
    }

    render() {
        const article = this.props.articles[this.state.key]
        return (
            <div>
                <form className='' >
                    <div className="form-group">
                        <label>Titre de l'article</label>
                        <input value={article.titre} onChange={e => this.handleChange(e, this.state.key)} name='titre' type="text" className="form-control" placeholder="titre..." />
                    </div>
                    <div className="form-group">
                        <label>URL de l'image</label>
                        <input value={article.img} onChange={e => this.handleChange(e, this.state.key)} name='img' type="text" className="form-control" placeholder="http//www.imge.com" />
                    </div>
                    <div className="form-group">
                        <label >Example textarea</label>
                        <textarea value={article.content} onChange={e => this.handleChange(e, this.state.key)} name='content' className="form-control" rows="10"></textarea>
                    </div>
                    <button onClick={()=>this.props.deleteArticle(this.props.id)} type="submit" className="btn btn-primary">supprimer</button>
                </form>
            </div>
        )
    }
}

export default MajArticle;