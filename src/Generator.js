import React, {Component} from 'react';
import QRCode from 'react-native-qrcode-svg';
import {StyleSheet, View, TextInput} from 'react-native';

class Generator extends Component {
  state = {
    text: '',
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({text: text})}
          value={this.state.text}
          placeholder="Enter text to generate QRCode"
        />
        <View style={styles.qrcode}>
          {this.state.text !== '' && (
            <QRCode
              value={this.state.text}
              color={'black'}
              backgroundColor={'white'}
              size={300}
              logoMargin={2}
              logoSize={20}
              logoBorderRadius={10}
              logoBackgroundColor={'transparent'}
            />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 16,
    paddingHorizontal: 16,
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
    padding: 5,
  },
  qrcode: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
  },
});

export default Generator;
