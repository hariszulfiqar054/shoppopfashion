import React from 'react';
// import { Provider } from "react-redux";
// import cfgStore, { persistor } from "./src/reduxprovider/store";
// import { PersistGate } from "redux-persist/integration/react";
import NetworkProvider from './src/NetworkProvider';
import AppRoot from './src';
import {Provider} from 'react-redux';
import {STORE, PERSISTOR} from './src/reduxprovider/store';
import {PersistGate} from 'redux-persist/integration/react';
// const store = cfgStore();

const RNRedux = () => {
  return (
    <Provider store={STORE}>
      <PersistGate persistor={PERSISTOR}>
        <NetworkProvider>
          <AppRoot />
        </NetworkProvider>
      </PersistGate>
    </Provider>
  );
};

export default RNRedux;
