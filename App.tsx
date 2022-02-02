import React from 'react';
import {Text, View, Button} from 'react-native';
// import {NativeAdsManager} from 'react-native-fbads';
import AdComponent from './src/AdComponent';

class App extends React.Component {
  // adsManager = new NativeAdsManager('2122084034714087_2122088321380325');
  a = undefined;
  render() {
    return (
      <View>
        {/* @ts-ignore */}
        {/* <AdComponent adsManager={this.adsManager} /> */}
        <AdComponent />
        <Button title="Crash" onPress={() => this.a.asdasd} />
      </View>
    );
  }
}
export default App;
