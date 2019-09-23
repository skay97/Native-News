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

const randomImage = faker.image.nature();

export default class Business extends Component {
  render() {
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
