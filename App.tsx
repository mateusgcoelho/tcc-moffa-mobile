import React from 'react';
import {StatusBar} from 'react-native';

import {WebView} from 'react-native-webview';

const App = () => {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <WebView source={{uri: 'https://peaceful-agnesi-92a241.netlify.app'}} />
    </>
  );
};

export default App;
