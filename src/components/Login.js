import React from 'react';

class Login extends React.Component {
    render() {
        return (
            <div className=''>
                <h2>connection</h2>

                <form onSubmit={this.onSubmit}>
                    <input
                        name="email"
                        value=''
                        onChange={this.onChange}
                        type="text"
                        placeholder="Email Address"
                    />
                    <input
                        name="password"
                        value=''
                        onChange={this.onChange}
                        type="password"
                        placeholder="Password"
                    />
                    <button type="submit">
                        Sign In
        </button>

                </form>

                <button onClick={this.props.authenticate} className=''> via faceBook</button>
            </div>
        )
    }
}

export default Login;