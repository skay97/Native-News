import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'native-base';
import moment from 'moment';

const Time = props => {
  const {published} = props;
  const time = moment(published || moment.now()).fromNow();

  return <Text style={styles.textStyles}>Published: {time}</Text>;
};

const styles = StyleSheet.create({
  textStyles: {
    color: '#808080',
    fontSize: 14,
  },
});

export default Time;
