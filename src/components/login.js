import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div className="container" id="login-container">
                <div className="App" id="login">
                    <div className="card">
                     <div className="card-body">
                        <h2 className="card-title">Login</h2>
                        <div>
                            <label htmlFor="" id="user-label">User Name</label>
                            <input type="text" />
                            <label htmlFor="" id="password-label">Password</label>
                            <input type="text"/>
                        </div>
                        <hr/>
                        <button href="#" className="card-link" id="sign-in-text">Sign In</button>
                        <button href="#" className="card-link" id="register-text">Register</button>
                     </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;