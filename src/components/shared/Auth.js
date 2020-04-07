import React, { Component } from "react";
import AppContext from "./appContext";
import LoginContainer from "../Login/LoginContainer";


export default ComposedClass => {
    class Auth extends Component {
        render() {
            const { history } = this.props;
            return (
                <AppContext.Consumer>
                    { ({ isLogin }) => isLogin ? <ComposedClass history={history}/> : <LoginContainer history={history}/> }
                </AppContext.Consumer>
            )
        }
    }
    return Auth;
}