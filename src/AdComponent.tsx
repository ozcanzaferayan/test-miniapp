import React from 'react';
import {Text, View} from 'react-native';
import {
  AdIconView,
  MediaView,
  AdChoicesView,
  TriggerableView,
  withNativeAd,
} from 'react-native-fbads';
class AdComponent extends React.Component {
  render() {
    return (
      <View>
        <View style={{width: 100, height: 100, backgroundColor: 'red'}}></View>
        <AdChoicesView style={{position: 'absolute', left: 0, top: 0}} />
        <AdIconView style={{width: 300, height: 50}} />
        <MediaView style={{width: 300, height: 200}} />
        <TriggerableView>
          <Text>{this.props.nativeAd.description}</Text>
        </TriggerableView>
      </View>
    );
  }
}

export default withNativeAd(AdComponent);
