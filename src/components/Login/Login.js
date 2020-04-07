import React, { Component } from 'react';
import AppContext from "../shared/appContext";

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    handleChange = (e) => {
        if(e.target.name === "email"){
            this.setState({
                email: e.target.value
            })
        }else if(e.target.name === "password"){
            this.setState({
                password: e.target.value
            })
        }
    }

    handleSubmit = () => {
        const url = "https://community-open-weather-map.p.rapidapi.com/weather";
        this.postUserData(url);
    }

    postUserData = async (url) => {
        const { email, password } = this.state;
        const { history } = this.props;
        const value = this.context;
        const res = await fetch(url, {
            method:"POST",
            body:encodeURI(JSON.stringify({
                email,
                password
            })),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const result = await res.json();
        if(result){
            value.changeIsLogin();
            history.push("/");
        }
    }

    render() { 
        return ( 
            <div className="login-form-container">
                <div className="login-form-group">
                    <label>Email</label>
                    <input type="email" name="email" placeholder="email" onChange={ this.handleChange }></input>
                </div>
                <div className="login-form-group">
                    <label>Password</label>
                    <input type="password" name="password" placeholder="password" onChange={ this.handleChange }></input>
                </div>
                <button onClick={ this.handleSubmit }>Send</button>
            </div>
        );
    }
}

Login.contextType = AppContext;
 
export default Login;