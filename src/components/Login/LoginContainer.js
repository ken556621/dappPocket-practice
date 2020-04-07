import React, { Component } from 'react';
import AppContext from "../shared/appContext";

import Login from "./Login";
import Register from "./Register";

class LoginContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoginMode: true,
        }
    }


    render() { 
        const { history } = this.props;
        return ( 
            <div>
                <AppContext.Consumer>
                    { ({loginMode, changeLoginMode, changeIsLogin}) => (
                        <div>
                            { loginMode ? <Login history={history}/> : <Register history={history}/> }
                            <button onClick={ changeLoginMode }>{ loginMode ? "Register" : "Login" }</button>
                        </div>
                    ) }
                </AppContext.Consumer>
            </div>
        );
    }
}
 
export default LoginContainer;