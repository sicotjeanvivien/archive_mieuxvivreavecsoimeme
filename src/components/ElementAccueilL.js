import React from 'react';

class ElemAccueilL extends React.Component {
    render() {

        const styleCSS = {
            paddingRight: 0 + 'px',
        };

        return (
            <div className='row elementPage'>

                <div className='col-md-6 col-sm-12 p-5'>
                    <h5 className=''>{this.props.titre}</h5>
                    <p>{this.props.content}</p>
                </div>
                <img className='col-md-6 col-sm-12 p-0 img-fluid' alt='portrait' style={styleCSS} src={this.props.img}></img>

            </div>
        )
    }
}

export default ElemAccueilL;