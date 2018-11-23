import React from 'react';
import '../css/register.css'

class Register extends React.Component {
    constructor(props) {
        super(props) 
        this.setState = {

        }
    }

    render() {
        return (
            <div className="container register">
                <div className="row">
                    <div className="col-md-3 register-left">
                        <img src={require("../images/charEvo.jpg")} alt=""/>
                        <h3>Welcome</h3>
                        <p>Are you ready to be a Pokemon Master?</p>
                        <input type="submit" name="" value="Login"/><br/>
                    </div>
                    <div className="col-md-9 register-right">
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 className="register-heading">Register As a Trainer</h3>
                                <div className="row register-form">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="First Name *"  />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Last Name *"  />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control" placeholder="Password *"  />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control"  placeholder="Confirm Password *"  />
                                        </div>
                                        <div className="form-group">
                                            <div className="maxl">
                                                <label className="radio inline"> 
                                                    <input type="radio" name="gender" value="male" checked  />
                                                    <span> Male </span> 
                                                </label>
                                                <label className="radio inline"> 
                                                    <input type="radio" name="gender" value="female" />
                                                    <span>Female </span> 
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Your Email *" />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Confirm Email *"  />
                                        </div>
                                        <div className="form-group">
                                            <select className="form-control">
                                                <option className="hidden"  selected disabled>Please select your Security Question</option>
                                                <option>What is your Sqaas hiring date?</option>
                                                <option>What is your first pod?</option>
                                                <option>What is your Pokemon Name?</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Enter Your Answer *"  />
                                        </div>
                                        <input type="submit" className="btnRegister"  value="Register"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default Register;