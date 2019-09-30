import React, {Component} from 'react';
import {Dimensions, Modal, StyleSheet, Share} from 'react-native';
import {WebView} from 'react-native-webview';
import {
  Body,
  Button,
  Container,
  Content,
  Header,
  Icon,
  Left,
  Right,
  Title,
} from 'native-base';

const webViewHeight = Dimensions.get('window').height;
class ModalComponent extends Component {
  constructor(props) {
    super(props);
  }

  handleClose = () => {
    return this.props.onClose();
  };

  handleShare = () => {
    const {url, title} = this.props.articleData;
    message= `${title}\n\nRead More at ${url}\n\nShared via Native News - Created by your friendly neighborhood developer`;
    return Share.share(
        {title, message, url: message},
        {dialogTitle:`Share ${title}`}
    )
  };

  render() {
    const {showModal, articleData} = this.props;
    const {url} = articleData;
    return (
      <Modal
        animationType="slide"
        onRequestClose={this.handleClose}
        // Why can I not call the onClose prop directly? Why do I have to use a separate function?
        transparent
        visible={showModal}>
        <Container style={styles.containerStyles}>
          <Header style={styles.headerStyles}>
            <Left>
              <Button onPress={this.handleClose} transparent>
                {/* Why Do I have an onRequestClose prop when I am closing via this button */}
                <Icon name="close" style={styles.iconStyles} />
              </Button>
            </Left>
            <Body>
              <Title children={articleData.title} style={styles.titleStyles} />
            </Body>
            <Right>
              <Button onPress={this.handleShare} transparent>
                <Icon name="share" style={styles.iconStyles} />
              </Button>
            </Right>
          </Header>
          <Content contentContainerStyle={{height: webViewHeight}}>
            <WebView
              onError={this.handleClose}
              scalesPageToFit
              source={{uri: url}}
              startInLoadingState
              style={{flex: 1}}
            />
          </Content>
        </Container>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  containerStyles: {
    margin: 15,
    marginBottom: 0,
    backgroundColor: '#fff',
  },
  headerStyles: {
    backgroundColor: '#3f4d50',
  },
  iconStyles: {
    color: '#fff',
    fontSize: 35,
  },
  titleStyles: {
    color: '#fff',
  },
});

export default ModalComponent;
