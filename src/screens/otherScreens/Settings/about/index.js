import React, {useState} from 'react';
import {ActivityIndicator, SafeAreaView, View} from 'react-native';
import WebView from 'react-native-webview';

const About = () => {
  const [onLoad, setonLoad] = useState(false);
  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView
        source={{uri: 'https://rishabh11200.github.io/portfolio/'}}
        onLoadStart={() => {
          setonLoad(true);
        }}
        onLoadEnd={() => {
          setonLoad(false);
        }}
      />
      {onLoad && (
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <ActivityIndicator color="#009688" size="large" />
        </View>
      )}
    </SafeAreaView>
  );
};

export default About;
