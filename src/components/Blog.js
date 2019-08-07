import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//asset
import image from '../assets/image.png'

//component
import ArticleListe from './ArticleListe';
import Article from './Article';

//firebase
// import base from '../base';

const articles = [
    {
        titre: 'titre du premier article',
        content: 'Sit Lorem consectetur qui tempor ut laboris ea aute. Eu pariatur aliqua commodo ex est. Ut eu minim occaecat do irure excepteur est incididunt magna aliquip duis sit.Tempor officia ex quis laboris aliqua exercitation eiusmod dolor dolore qui ut. Sunt mollit elit ea duis fugiat elit pariatur aliquip fugiat. Aliquip magna veniam sunt reprehenderit culpa voluptate. Anim id magna ea non in ea incididunt ad id proident anim id ea. Magna irure sit adipisicing ullamco pariatur minim laboris velit tempor.',
        img: image
    },
    {
        titre: 'titre du deuxieme article',
        content: 'Sit Lorem consectetur qui tempor ut laboris ea aute. Eu pariatur aliqua commodo ex est. Ut eu minim occaecat do irure excepteur est incididunt magna aliquip duis sit.Tempor officia ex quis laboris aliqua exercitation eiusmod dolor dolore qui ut. Sunt mollit elit ea duis fugiat elit pariatur aliquip fugiat. Aliquip magna veniam sunt reprehenderit culpa voluptate. Anim id magna ea non in ea incididunt ad id proident anim id ea. Magna irure sit adipisicing ullamco pariatur minim laboris velit tempor.',
        img: image
    }
]

class Blog extends React.Component {

    state = {
        articles: articles,
    };

    // componentDidMount () {
    //     base.syncState('/blog', {
    //         context: this,
    //         state: 'articles'
    //     })
    // }

    render() {

        const listeArticle = Object.keys(articles).map((key, i) => (
            <ArticleListe
                key={i}
                titre={this.state.articles[key].titre}
                content={this.state.articles[key].content}
                img={this.state.articles[key].img}
            />
        ));

        const article = Object.keys(articles).map((key, i) => (
            <Article
                key={i}
                titre={this.state.articles[key].titre}
                content={this.state.articles[key].content}
                img={this.state.articles[key].img}
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
        )
    }
}

export default Blog;