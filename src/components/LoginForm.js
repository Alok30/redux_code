import React, { Component } from 'react';
import { login, getAuthToken, isLoggedIn } from '../services/auth';
import { Link } from 'react-router-dom'
import "../../src/index.css"
import timeswire1 from "./timeswire1.png"
import "../../node_modules/font-awesome/css/font-awesome.min.css"
 import './login.css';
import nineleaps from './nineleaps-logo.png';
import image_nine from './High_Performance.png';
import './login.css'
class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.emailInputRef = React.createRef();
        this.passwordInputRef = React.createRef();
    }
    login = (event) => {
        event.preventDefault();
        login(this.state)
            .then(data => this.props.history.push('/Home'))
            .catch(error => alert('Invalid credentials'));
    }
    updateCredentials = () => {
        this.setState({
            email: this.emailInputRef.current.value,
            password: this.passwordInputRef.current.value
        });
    }
    render() {
        return (
            <div className="container-fluid">
                               <nav class="navbar ">
                        <a class="navbar-brand">
                            <img className="logo" src={timeswire1} alt="" width="60" height="60" />
                        </a>
                        <a>  <h6>Don't have a account?</h6> </a>
                    </nav>
             <div className="container " style={{width: '61%',
                               paddingRight: '15px',
                                paddingLeft: '15px',
                                  marginRight: 'auto',
                               marginLeft: '347px',
                                 marginTop: '154px'}}>
                <div className="row conatiner_css">
                <div className="col-md-6">
                < form className="form-signin form"  onSubmit={this.login}>
                    <h6 className=" " style={{textAlign:'center'}}>Sign to Account</h6>
                    <div className="input-group mb-2">
                        <input type="email" id="inputEmail" className="form-control" placeholder="Username" required="" autofocus="" name="email" ref={this.emailInputRef} onChange={this.updateCredentials} />
                    </div>
                    <div className="input-group mb-2">
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required="" name="password" ref={this.passwordInputRef} onChange={this.updateCredentials} />
                    </div>
                    <div className="mb-2">
                    <Link className="float-left" to="#" >Forgot Password?</Link>
                    <button className="btn  btn-primary float-right" style={{color:' #342AA5'}} type="submit">Signin</button>
                    </div>
                   
                 
                  
                    
                </form>
                </div>
                <div className="col-md-6">
               
                <img className="css_for_image" src={image_nine}/>
                </div>
                </div>
               
                </div>
                
                <footer className="page-footer font-small fixed-bottom pt-4">
                    <div className="footer-copyright col-md-6">© 2018 Copyright:
                     <a href="https://mdbootstrap.com/education/bootstrap/"> NYT</a>
                     <a href="3">Alok</a>
                       </div>
                       <div className="col-md-6">
                       
                       </div>
                       
                    </footer>
            </div>
        );
    }
}
export default LoginForm;

