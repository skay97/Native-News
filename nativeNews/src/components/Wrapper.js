import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Body, Container, Header, Tab, Tabs, Title} from 'native-base';
import Headlines from './tabs/Headlines';
import Tech from './tabs/Tech';
import Business from './tabs/Business';

export default class TabsExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: !this.state.loading,
      });
    }, 1000);
  }

  render() {
    if (this.state.loading) {
      return (
        <Container>
          <Header style={styles.headerStyles} hasTabs>
            <Body>
              <Title style={styles.textStyles}>Native News App</Title>
            </Body>
          </Header>
          <Tabs tabBarUnderlineStyle={{backgroundColor: 'white'}}>
            <Tab
              activeTabStyle={styles.tabStyles}
              activeTextStyle={styles.textStyles}
              tabStyle={styles.tabStyles}
              heading="Headlines"
              textStyle={styles.textStyles}>
              <Headlines />
            </Tab>
            <Tab
              activeTextStyle={styles.textStyles}
              activeTabStyle={styles.tabStyles}
              heading="Tech"
              tabStyle={styles.tabStyles}
              textStyle={styles.textStyles}>
              <Tech />
            </Tab>
            <Tab
              activeTextStyle={styles.textStyles}
              activeTabStyle={styles.tabStyles}
              heading="Business"
              tabStyle={styles.tabStyles}
              textStyle={styles.textStyles}>
              <Business />
            </Tab>
          </Tabs>
        </Container>
      );
    } else {
      return (
        <View style={styles.containerStyles}>
          <Image
            style={styles.imageStyles}
            source={require('../../ios/nativeNews/Images.xcassets/Image-1.imageset/nativeNewsImg.png')}
          />
          <Text style={styles.LaunchScreenHeaderStyles}>Native News</Text>
          <Text style={styles.LaunchScreenSubHeaderStyles}>
            Created By Salman Karim With React Native
          </Text>
          <Text style={styles.LaunchScreenSubHeaderStyles}>@SKAY97</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  containerStyles: {
    backgroundColor: '#3f4d50',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  LaunchScreenHeaderStyles: {
    color: '#87CDCD',
    fontSize: 36,
    fontWeight: '600',
  },
  LaunchScreenSubHeaderStyles: {
    color: '#87CDCD',
    fontSize: 15,
    fontWeight: '600',
  },
  headerStyles: {
    backgroundColor: '#3f4d50',
  },
  textStyles: {
    color: '#ffff',
  },
  tabStyles: {
    backgroundColor: '#3f4d50',
  },
  imageStyles: {
    maxWidth: 150,
    maxHeight: 150,
  }
});
