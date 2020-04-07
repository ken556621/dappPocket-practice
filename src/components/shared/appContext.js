import React from 'react';

const AppContext = React.createContext({
    isLogin: false,
    loginMode: true,
    changeIsLogin: () => {},
    changeLoginMode: () => {}
  });

export default AppContext;
