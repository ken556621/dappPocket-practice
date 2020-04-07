import React, { Component } from 'react';
import AppContext from "../shared/appContext";

class Welcome extends Component {
    constructor(props){
        super(props);
    }

    handleClick = () => {
        const { history } = this.props;
        const value = this.context;
        value.changeIsLogin();
        history.push("/login");
    }

    render() { 
        return ( 
            <div>
                Welcome
                <button onClick={ this.handleClick }>Go</button>
            </div>
         );
    }
}

Welcome.contextType = AppContext;
 
export default Welcome;