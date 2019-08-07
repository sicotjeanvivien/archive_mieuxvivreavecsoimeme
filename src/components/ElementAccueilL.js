import React from 'react';

class ElemAccueilL extends React.Component {
    render() {

        const styleCSS = {
            paddingRight: 0 + 'px',
        };

        return (
            <div className='row elementPage'>

                <div className='col-6 '>
                    <h5>{this.props.titre}</h5>
                    <p>{this.props.content}</p>
                </div>
                <img className='col-6 img-fluid' alt='portrait' style={styleCSS} src={this.props.img}></img>

            </div>
        )
    }
}

export default ElemAccueilL;