import React, {Component} from 'react';
import {
  ListItem,
  Left,
  Right,
  Thumbnail,
  Body,
  View,
  Text,
  Button,
} from 'native-base';
import {StyleSheet} from 'react-native';
import Time from './Time';

export default class NewsItem extends Component {
  constructor(props) {
    super(props);
    this.newsInfo = props.newsInfo;
  }

  handlePress = () => {
    const {url, title} = this.newsInfo;
    this.props.onPress({url, title});
  };
  render() {
    return (
      // Implement <TouchableHighlight onPress={this.handlePress}> in v2
      <ListItem thumbnail>
        <Left>
          <Thumbnail
            square
            source={{
              uri:
                this.newsInfo.urlToImage != null
                  ? this.newsInfo.urlToImage
                  : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEXMzMyWlpajo6PFxcW3t7ecnJyqqqq+vr6xsbGXmO98AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABPUlEQVRoge3Tv0/CQBjG8YcWaMcebymOENLI2MZoHMHEvVUKjq1K4lhM2Kvxx7/tUUiamDhc6GSez8INzbf3HleAiIiIiIiIiIiIiNozAGzvuJYTW2reXmso7bX8YN96HUR1a7RZ6+VVOgU+p4LuZGrSkqK0PWfwfl+3ht/hcpdvPkJ0g0fBYpYZtS7HttfPMatbAbZzJ1kjjnqVK1ihNzdpdX3b65S4qVsjXbG9EtuoEzliC/RbDFoIL7wY2NZrQayPzw1VpH/FUUqNjVrx0+9W8Rzrlt7yMMvMWq7fzHhoCTp6Rr0vw0uiH8+as69bov/AyNqf/Rms3Ky1aO7EYV93X2nlBIXg7WVSmrWs5q4eWrvVdYLbpR4/PTeZ8S9O82mdzMr7SVstV6mqrRaKh9ZSRERERERERET0n/wAZwMqI9kyPcoAAAAASUVORK5CYII=',
            }}
          />
        </Left>
        <Body>
          <Text numberOfLines={3}>{this.newsInfo.title}</Text>
          <Text note numberOfLines={2}>
            {this.newsInfo.description}
          </Text>
          <View style={styles.published}>
            <Text note style={styles.textStyles}>
              {this.newsInfo.source.name}
            </Text>
          </View>
          <View style={styles.published}>
            <Time published={this.newsInfo.publishedAt}></Time>
          </View>
        </Body>
        <Right>
          <Button transparent onPress={this.handlePress}>
            <Text>View</Text>
          </Button>
        </Right>
      </ListItem>
      // {/* </TouchableHighlight> */}
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
  textStyles: {
    color: '#808080',
    fontSize: 14,
  },
  published: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 8,
    marginLeft: 0,
    color: 'red',
  },
});
