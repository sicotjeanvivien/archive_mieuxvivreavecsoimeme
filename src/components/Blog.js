import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//asset
// import image from '../assets/image.png'

//component
import ArticleListe from './ArticleListe';
import Article from './Article';

//firebase
import base from '../base';

class Blog extends React.Component {

    state = {
        articles: {},
    };

   
    componentDidMount() {
        this.ref = base.syncState('/blog', {
            context: this,
            state: 'articles'
        })
    }

    render() {

        const listeArticle = Object.keys(this.state.articles).map((key, i) => (
            <ArticleListe
                key={i}
                titre={this.state.articles[key] ? this.state.articles[key].titre : ''}
                content={this.state.articles[key] ? this.state.articles[key].content : ''}
                img={this.state.articles[key] ? this.state.articles[key].img : ''}
            />
        ));

        const article = Object.keys(this.state.articles).map((key, i) => (
            <Article
                key={i}
                titre={this.state.articles[key] ? this.state.articles[key].titre : ''}
                content={this.state.articles[key] ? this.state.articles[key].content : ''}
                img={this.state.articles[key] ? this.state.articles[key].img : ''}
            />
        ));

        function listeArticlesBlog() {
            return (
                <div>
                    {listeArticle}
                </div>
            )
        }

        return (
            <React.Fragment>
                
                <Router>
                    <div className='row m-5'>
                        {/* <h2 className='col-12'>Blog</h2> */}
                        <div className='col-2'>
                            <Link to="/blog/liste" className='btn btn-light'>liste des articles</Link>
                        </div>
                        <div className='col-10'>

                            <Route path='/blog/liste' component={listeArticlesBlog} />
                            {article}
                        </div>
                    </div>
                </Router>
            </React.Fragment>
        )
    }
}

export default Blog;