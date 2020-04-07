import React, { Component } from "react";
import AppContext from "./appContext";

class AppProvider extends Component {
    constructor(props){
        super(props);
        this.state = {
          isLogin: false,
          loginMode: true,
          changeIsLogin: this.changeIsLogin,
          changeLoginMode: this.changeLoginMode
        }
    }

    changeIsLogin = () => {
        this.setState({
          isLogin: !this.state.isLogin
        })
      }
    
    changeLoginMode = () => {
    this.setState({
        loginMode: !this.state.loginMode
    })
    }

    render() { 
        return ( 
            <AppContext.Provider value={ this.state }>
                { this.props.children }
            </AppContext.Provider>
        );
    }
}
 
export default AppProvider;
