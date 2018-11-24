import React from 'react';
import '../css/register.css'
import { validate, addUser } from '../services/register'

class Register extends React.Component {
    constructor(props) {
        super(props) 
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){

    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(event.target.username.value);
        let user = event.target.username.value;
        let pass = event.target.password.value;
        let cpass = event.target.cPassword.value;
        let isValidate = validate({user, pass, cpass})
        let data = {
            username: user,
            password: pass
        }
        isValidate ? addUser(data) : alert("Please fill from correctly")   
    }

    render() {
        return (
            <div className="container register">
                <div className="row">
                    <div className="col-md-3 register-left">
                        <img src={require("../images/charEvo.jpg")} alt=""/>
                        <h3>Welcome</h3>  
                        <p>Are you ready to be a Pokemon Master?</p>
                        
                    </div>
                    <div className="col-md-9 register-right">
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 className="register-heading">Register As a Trainer</h3>
                                <form onSubmit={this.handleSubmit}>
                                    <div className="register-form">
                                        <div className="form-group ">
                                            <input type="text" className="form-control" placeholder="Username * (Must be at least 4 characters"  name="username"/>
                                        </div> 
                                        <div className="form-group ">
                                            <input type="password" className="form-control" placeholder="Password * (Must be longer than 8 charcters)"  name="password"/>
                                        </div>
                                        <div className="form-group ">
                                            <input type="password" className="form-control"  placeholder="Confirm Password *"  name="cPassword"/>
                                        </div>   
                                        <label>Are you already a trainer?</label>
                                        <a href="/"> Login</a>  
                                        <input type="submit" className="btnRegister"  value="Register"/>                         
                                    </div>
                                </form> 
                            </div>
                        </div>
                        
                    </div>
                </div>

            </div>
        )
    }
}
export default Register;