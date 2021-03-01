import React, {Component} from 'react';
import './LoginStyle.css'
import logo from '../../Images/logo512.png';

class LoginComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email : '',
            password : ''
        }
        this.emailHandler = this.emailHandler.bind(this)
        this.passwordHandler = this.passwordHandler.bind(this)
        this.continuerHanlder = this.continuerHanlder.bind(this)
    }

    continuerHanlder () {
        this.props.history.push("/home")
    }

    emailHandler (event ) {
        this.setState({email: event.target.value})
    }

    passwordHandler (event) {
        this.setState({password: event.target.value})
    }

    render() {
        return (
            <div className="login-container">
                <img src={logo} alt='logo' className='logo'/>
                <form className="form-cntrl">
                    <p>Connectez-vous à votre compte</p>

                    <div className="form-info">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" className="input-cntrl" value={this.state.email} onChange={this.emailHandler}/>
                    </div>
                    <div className="form-info">
                        <label htmlFor="password" >Mot de passe</label>
                        <input type="password" className="input-cntrl" value={this.state.password} onChange={this.passwordHandler}/>
                    </div>

                    <button className="btn-cont" onClick={this.continuerHanlder}>Continuer</button>
                    <button className="btn-forget">Mot de passe oublié ?</button>
                </form>
            </div>
        );
    }
}

export default LoginComponent;