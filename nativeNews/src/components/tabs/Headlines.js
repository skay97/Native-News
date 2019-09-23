import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  Body,
  Button,
  Container,
  Content,
  Header,
  List,
  ListItem,
  Left,
  Right,
  Tab,
  Tabs,
  Thumbnail,
  Title,
} from 'native-base';
import faker from 'faker';
import {Alert} from 'react-native';
import {getArticles} from "../../API/news"

const randomImage = faker.image.nature();
const randomName = faker.name.firstName();
const randomName2 = faker.name.firstName();
const randomName3 = faker.name.firstName();

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
    return (
      <Container>
        <Content>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{uri: randomImage}} />
              </Left>
              <Body>
                <Text>Salman</Text>
                <Text note numberOfLines={3}>
                  This is a test
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{uri: randomImage}} />
              </Left>
              <Body>
                <Text>{randomName}</Text>
                <Text note numberOfLines={3}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore dolor maxime voluptates quod ipsum. Provident
                  cupiditate magnam veritatis modi amet aspernatur sint
                  necessitatibus temporibus, ipsa distinctio officia repellat
                  omnis corrupti!
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{uri: randomImage}} />
              </Left>
              <Body>
                <Text>{randomName2}</Text>
                <Text note numberOfLines={3}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore dolor maxime voluptates quod ipsum. Provident
                  cupiditate magnam veritatis modi amet aspernatur sint
                  necessitatibus temporibus, ipsa distinctio officia repellat
                  omnis corrupti!
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{uri: randomImage}} />
              </Left>
              <Body>
                <Text>{randomName3}</Text>
                <Text note numberOfLines={3}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore dolor maxime voluptates quod ipsum. Provident
                  cupiditate magnam veritatis modi amet aspernatur sint
                  necessitatibus temporibus, ipsa distinctio officia repellat
                  omnis corrupti!
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
        </Content>
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
