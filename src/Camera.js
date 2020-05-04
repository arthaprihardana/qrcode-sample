import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  Linking,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Actions} from 'react-native-router-flux';

class Camera extends Component {
  takePicture = async () => {
    try {
      const data = await this.camera.takePictureAsync();
      console.log('Path to image: ' + data.uri);
    } catch (err) {
      // console.log('err: ', err);
    }
  };

  isLink = async (url) => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}
          onBarCodeRead={(res) => {
            let reg = /http|https/g;
            if (res.data) {
              if (reg.test(res.data)) {
                this.isLink(res.data);
              } else {
                Actions.popTo('home');
                Actions.refresh({data: res.data});
              }
            }
          }}>
          <View style={styles.template}>
            <Image
              source={require('./template1.png')}
              style={{width: 400, height: 400}}
            />
          </View>
          {/* <View style={styles.captureContainer}>
            <TouchableOpacity style={styles.capture} onPress={this.takePicture}>
              <Text>Take Photo</Text>
            </TouchableOpacity>
          </View> */}
        </RNCamera>

        {/* <View style={styles.space} /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  preview: {
    height: '100%',
  },
  captureContainer: {
    position: 'absolute',
    width: '100%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
  },
  capture: {
    backgroundColor: Colors.white,
    padding: 16,
  },
  qrcodeBlock: {
    borderWidth: 10,
    borderColor: Colors.white,
    width: 220,
    height: 220,
    borderRadius: 10,
  },
  template: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Camera;
