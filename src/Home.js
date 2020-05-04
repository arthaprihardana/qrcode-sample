/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  Button,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Actions} from 'react-native-router-flux';

import {Colors} from 'react-native/Libraries/NewAppScreen';

class Home extends Component {
  // state = {
  //   data: null,
  // };

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   if (this.props.data !== prevProps.data) {
  //     return this.props.data;
  //   }
  //   return null;
  // }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   if (snapshot !== null) {
  //     this.state({data: snapshot});
  //   }
  // }

  render() {
    console.log('data ==> ', this.props.data);
    return (
      <>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={{flex: 1}}>
          {/* <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}> */}
          <View style={styles.body}>
            <Text>QR code Demo</Text>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 16,
                width: '100%',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => Actions.push('qrcode')}
                style={{alignItems: 'center'}}>
                <Image
                  source={require('./button.png')}
                  style={{width: 100, height: 100}}
                />
                <Text>Scan here</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => Actions.push('generate')}
                style={{alignItems: 'center'}}>
                <Image
                  source={require('./button.png')}
                  style={{width: 100, height: 100}}
                />
                <Text>Generate here</Text>
              </TouchableOpacity>
            </View>

            {this.props.data && (
              <View
                style={{position: 'relative', marginTop: 64, width: '100%'}}>
                <Text style={{fontWeight: 'bold'}}>Data Dari QRCode </Text>
                <Text>{this.props.data}</Text>
              </View>
            )}

            <View style={styles.footer}>
              <Text style={{fontSize: 10}}>Copyright 2020</Text>
            </View>
          </View>
          {/* </ScrollView> */}
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: Colors.white,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 50,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
});

export default Home;
