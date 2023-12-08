import React from 'react';
import MainStack from './src/navigation/MainStack';
import {Provider} from 'react-redux';
import configureStore from './src/store/store';
import AuthContextProvider from './src/context/AuthContextProvider';

const Store = configureStore();
const App = () => {
  return (
    <Provider store={Store}>
      <AuthContextProvider>
        <MainStack />
      </AuthContextProvider>
    </Provider>
  );
};

export default App;
