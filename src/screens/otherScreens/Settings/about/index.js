import React from 'react';
import WebView from 'react-native-webview';

const About = () => {
  return (
    <WebView
      source={{
        uri: 'https://rishabh11200.github.io/portfolio/',
      }}
      userAgent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.55 Safari/537.36 Edg/96.0.1054.34"
    />
  );
};

export default About;
