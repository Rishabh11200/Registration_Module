import React from 'react';
import WebView from 'react-native-webview';
import screenDetails from '../../../../constants/screenDetails';
import html from '../../../../assets/eg.html';

const Privacy = () => {
  const screen = screenDetails();

  if (screen.platform === 'android') {
    return (
      <WebView
        style={{flex: 1}}
        originWhitelist={['*']}
        source={{
          uri: 'file:///android_asset/eg.html',
        }}
        style={{marginTop: 20}}
      />
    );
  } else {
    return (
      <WebView
        style={{flex: 1}}
        originWhitelist={['*']}
        source={html}
        style={{marginTop: 20}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    );
  }
};

export default Privacy;
