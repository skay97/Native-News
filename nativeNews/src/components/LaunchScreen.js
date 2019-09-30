import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
// import Logo from '../../ios/nativeNews/Images.xcassets/Image-1.imageset/nativeNewsImg.png';

export default class LaunchScreen extends React.Component {
  render() {
    return (
      <View>
        <Image
          style={{width: 150, height: 150}}
          source={require('../../ios/nativeNews/Images.xcassets/Image-1.imageset/nativeNewsImg.png')}
        />
      </View>
    );
  }
}
