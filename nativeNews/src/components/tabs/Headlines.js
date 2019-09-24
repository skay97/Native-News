import React, {Component} from 'react';
import {Alert, ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {
  Container,
  Content,
  List,
  ListItem,
} from 'native-base';
// import faker from 'faker';
import {getArticles} from '../../API/news';
import NewsItem from '../NewsItem';

export default class Headlines extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      data: null,
    };
  }

  componentDidMount() {
    getArticles().then(
      data => {
        this.setState({
          isLoading: false,
          data: data,
        });
      },
      error => {
        Alert.alert('Error', 'something went wrong');
      },
    );
  }

  render() {
    console.log(this.state.data);

    let ifIsLoading = this.state.isLoading ? (
      <View style={styles.container}>
        <ActivityIndicator
          animating={this.state.isLoading}
          size="large"
          color="#0000ff"
        />
        <Text style={{marginTop: 10}} children="Please Wait.." />
      </View>
    ) : (
      <List
        dataArray={this.state.data}
        renderRow={news => {
          return <NewsItem newsInfo={news} />;
        }}
      />
    );

    return (
      <Container>
        <Content>{ifIsLoading}</Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
