import React, { Component } from 'react';
import AppContext from "../shared/appContext";

class Home extends Component {
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
            <>
                This is home page, login success.
                <button onClick={this.handleClick}>Login again</button>
            </>
        );
    }
}

Home.contextType = AppContext;
 
export default Home;