import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Body, Container, Header, Tab, Tabs, Title} from 'native-base';
import Headlines from './tabs/Headlines';
import Tech from './tabs/Tech';
import Business from './tabs/Business';

export default class TabsExample extends Component {
  render() {
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
  }
}

const styles = StyleSheet.create({
  headerStyles: {
    backgroundColor: '#009387',
  },
  textStyles: {
    color: '#ffff',
  },
  tabStyles: {
    backgroundColor: '#009387',
  },
});
