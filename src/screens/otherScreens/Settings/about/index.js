import React, {useState} from 'react';
import {ActivityIndicator, SafeAreaView, View} from 'react-native';
import WebView from 'react-native-webview';

const About = () => {
  const [onLoad, setonLoad] = useState(false);
  return (
    <SafeAreaView style={{flex: 1}}>
      {onLoad ? (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            margin: 100,
            flex: 1,
          }}>
          <ActivityIndicator size="large" />
        </View>
      ) : null}
      <WebView
        source={{
          uri: 'https://rishabh11200.github.io/portfolio/',
        }}
        onLoadStart={() => setonLoad(true)}
        onLoadEnd={() => setonLoad(false)}
      />
    </SafeAreaView>
  );
};

export default About;
