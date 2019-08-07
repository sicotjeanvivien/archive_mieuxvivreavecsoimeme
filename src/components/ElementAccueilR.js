import React from 'react';

class ElemAccueilR extends React.Component {
    render() {

        const styleCSS = {
            paddingLeft: 0 + 'px',
        };

        return (
            <div className='row elementPage'>

                <img className='col-6 img-fluid' alt='portrait' style={styleCSS} src={this.props.img}></img>
                <div className='col-6 '>
                    <h5>{this.props.titre}</h5>
                    <p>{this.props.content}</p>
                </div>

            </div>
        )
    }
}

export default ElemAccueilR;