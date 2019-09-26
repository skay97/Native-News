import React, {Component} from 'react';
import {Dimensions, Modal, Share} from 'react-native';
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

const webViewHeight = Dimensions.get('window').height - 56;
class ModalComponent extends Component {
  constructor(props) {
    super(props);
  }

  handleClose = () => {
    return this.props.onClose();
  };

  handleShare = () => {};

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
        <Container
          style={{margin: 15, marginBottom: 0, backgroundColor: '#fff'}}>
          <Header style={{backgroundColor: '#009387'}}>
            <Left>
              <Button onPress={this.handleClose} transparent>
                {/* Why Do I have an onRequestClose prop when I am closing via this button */}
                <Icon name="close" style={{color: 'white', fontSize: 40}} />
              </Button>
            </Left>
            <Body>
              <Title children={articleData.title} style={{color: '#fff'}} />
            </Body>
            <Right>
              <Button onPress={this.handleShare} transparent>
                <Icon name="share" style={{color: 'white', fontSize: 40}} />
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
export default ModalComponent;
