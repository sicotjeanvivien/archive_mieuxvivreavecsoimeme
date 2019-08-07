import React from 'react';
import { Route } from "react-router-dom";

class Article extends React.Component {
    render() {

        const article = this.props;

        function Child() {
            return (
                <React.Fragment>
                    <h3>{article.titre}</h3>
                    <p>{article.content}</p>
                    
                </React.Fragment>
            );
        }

        return (
                <Route path={'/blog/' + this.props.titre} component={Child} />
        )
    }
}

export default Article;

