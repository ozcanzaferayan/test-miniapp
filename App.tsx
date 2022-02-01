import React from 'react';
import {View} from 'react-native';
import {NativeAdsManager} from 'react-native-fbads';
import AdComponent from './src/AdComponent';

class App extends React.Component {
  adsManager = new NativeAdsManager('2122084034714087_2122088321380325');

  render() {
    return (
      <View>
        {/* @ts-ignore */}
        <AdComponent adsManager={this.adsManager} />
      </View>
    );
  }
}
export default App;
