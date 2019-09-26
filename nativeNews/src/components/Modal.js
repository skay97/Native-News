import React, {Component} from 'react';
import {Dimensions, Modal, Share} from 'react-native';
import {WebView} from 'react-native-webview';
import {
  Container,
  Header,
  Content,
  Body,
  Left,
  Icon,
  Right,
  Title,
  Button,
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
        transparent
        visible={showModal}
        onRequestClose={this.handleClose}>
        {/* Why can I not call the onClose prop directly? Why do I have to use a separate function? */}
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
              source={{uri: url}}
              style={{flex: 1}}
              onError={this.handleClose}
              startInLoadingState
              scalesPageToFit
            />
          </Content>
        </Container>
      </Modal>
    );
  }
}
export default ModalComponent;
