import React, { Component, useContext } from 'react';
import AppContext from "../shared/appContext";

class Verify extends Component {
    constructor(props){
        super(props);
        this.state = {
            verifyNumber: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            verifyNumber: e.target.value
        })
    }

    handleSubmit = () => {
        const url = "https://community-open-weather-map.p.rapidapi.com/weather";
        this.postVerifyData(url);
    }

    postVerifyData = async (url) => {
        const value = this.context;
        const { verifyNumber } = this.state;
        const { history } = this.props;
        const res = await fetch(url, {
            method:"POST",
            body:encodeURI(JSON.stringify({
                verifyNumber
            })),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const result = await res.json();
        if(result){
            value.changeIsLogin();
            history.push("/welcome");
        }
    }

    render() { 
        return (
            <div className="form-group">
                <label>Your email verify number</label>
                <input type="number" name="verifyNumber" placeholder="verifyNumber" onChange={this.handleChange}></input>
                <button onClick={ this.handleSubmit }>Send</button>
            </div>
        );
    }
}
Verify.contextType = AppContext;

export default Verify;