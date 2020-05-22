import React from 'react';
import 'antd/dist/antd.css';
import 'app/global.css';
import LandingLayout from 'app/landing/layout';

const App = (appProps: any) => {
  const { Component, pageProps } = appProps;

  return (
    <>
      <LandingLayout>
        <Component {...pageProps} />
      </LandingLayout>
    </>
  );
};

export default App;
