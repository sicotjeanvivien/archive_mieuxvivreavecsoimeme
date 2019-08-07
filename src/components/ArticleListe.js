import React from 'react';
import { Link } from "react-router-dom";

class ArticleListe extends React.Component {
    render() {
        return (
            <div className='border-bottom border-dark pb-3'>
                <Link to={'/blog/' + this.props.titre}>
                    <h4>{this.props.titre}</h4>
                    <p>{this.props.content.substr(0,200)}...</p>
                </Link>
            </div>
        )
    }
}

export default ArticleListe;