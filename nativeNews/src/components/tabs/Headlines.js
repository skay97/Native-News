import React, {Component} from 'react';
import {Alert, ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {Container, Content, List, ListItem} from 'native-base';
import {getArticles} from '../../API/news';
import NewsItem from '../NewsItem';
import Modal from '../Modal';

export default class Headlines extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      data: null,
      setModalVisible: false,
      modalArticleData: {},
    };
  }

  handleModalDataOnPress = articleData => {
    this.setState({
      setModalVisible: true,
      modalArticleData: articleData,
    });
  };

  handleModalClose = () => {
    this.setState({
      setModalVisible: false,
      modalArticleData: {},
    });
  };

  componentDidMount() {
    getArticles().then(
      data => {
        this.setState({
          isLoading: false,
          data: data,
        });
      },
      error => {
        Alert.alert('Error', 'Something went wrong!');
      },
    );
  }

  render() {
    let ifIsLoading = this.state.isLoading ? (
      <View style={styles.container}>
        <ActivityIndicator
          animating={this.state.isLoading}
          size="large"
          color="#0000ff"
        />
        <Text style={{marginTop: 10}} children="loading..." />
      </View>
    ) : (
      <List
        dataArray={this.state.data}
        keyExtractor={this.state.data.title}
        renderRow={news => {
          return (
            <NewsItem onPress={this.handleModalDataOnPress} newsInfo={news} keyExtractor={news => news.title}/>
          );
        }}
      />
    );

    return (
      <Container>
        <Content>{ifIsLoading}</Content>
        <Modal
          showModal={this.state.setModalVisible}
          articleData={this.state.modalArticleData}
          onClose={this.handleModalClose}
        />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
