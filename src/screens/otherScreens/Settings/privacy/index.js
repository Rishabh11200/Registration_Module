import React, {useState} from 'react';
import WebView from 'react-native-webview';
import {ActivityIndicator, SafeAreaView, View} from 'react-native';
import screenDetails from '../../../../constants/screenDetails';
import html from '../../../../assets/eg.html';

const Privacy = () => {
  const screen = screenDetails();
  const [onLoad, setonLoad] = useState(false);

  if (screen.platform === 'android') {
    return (
      <SafeAreaView style={{flex: 1}}>
        <WebView
          style={{flex: 1}}
          originWhitelist={['*']}
          source={{
            uri: 'file:///android_asset/eg.html',
          }}
          style={{marginTop: 20}}
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
  } else {
    return (
      <SafeAreaView style={{flex: 1}}>
        <WebView
          style={{flex: 1}}
          originWhitelist={['*']}
          source={html}
          style={{marginTop: 20}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
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
  }
};

export default Privacy;
