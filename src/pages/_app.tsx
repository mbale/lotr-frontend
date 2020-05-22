import React from 'react';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
import 'app/global.css';
import LandingLayout from 'app/landing/layout';
import store from 'app/store';

const App = (appProps: any) => {
  const { Component, pageProps } = appProps;

  return (
    <>
      <Provider store={store}>
        <LandingLayout>
          <Component {...pageProps} />
        </LandingLayout>
      </Provider>
    </>
  );
};

export default App;
