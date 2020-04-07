import React, { Component } from "react";

class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            ID: "",
            email: "",
            password: ""
        }
    }

    handleChange = (e) => {
        if(e.target.name === "ID"){
            this.setState({
                email: e.target.value
            })
        }else if(e.target.name === "email"){
            this.setState({
                password: e.target.value
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
        const { ID, email, password } = this.state;
        const { history } = this.props;
        const res = await fetch(url, {
            method:"POST",
            body:encodeURI(JSON.stringify({
                ID: ID,
                email: email,
                password: password
            })),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const result = await res.json();
        if(result){
            history.push("/verify");
        }
    }

    render() { 
        return ( 
            <div className="register-form-container">
                <div className="register-form-group">
                    <label>ID</label>
                    <input type="text" name="ID" placeholder="ID" onChange={ this.handleChange }></input>
                </div>
                <div className="register-form-group">
                    <label>Email</label>
                    <input type="email" name="email" placeholder="email" onChange={ this.handleChange }></input>
                </div>
                <div className="register-form-group">
                    <label>Password</label>
                    <input type="password" name="password" placeholder="password" onChange={ this.handleChange }></input>
                </div>
                <button onClick={ this.handleSubmit }>Send</button>
            </div>
        );
    }
}
 
export default Register;