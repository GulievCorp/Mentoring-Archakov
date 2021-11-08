import React from 'react';
import MainDrawwer from './Components/Blog-Redux/Main';
import { Provider } from 'react-redux';
import store from './Components/Blog-Redux/store';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <MainDrawwer />
      </Provider>
    </>
  );
}
