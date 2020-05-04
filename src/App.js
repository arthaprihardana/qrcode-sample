/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import {StackViewStyleInterpolator} from 'react-navigation-stack';
import {
  Scene,
  Router,
  Actions,
  ActionConst,
  Overlay,
  Tabs,
  Modal,
  Drawer,
  Stack,
  Lightbox,
} from 'react-native-router-flux';
import Home from './Home';
import Camera from './Camera';
import Generator from './Generator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scene: {
    backgroundColor: '#ffffff',
    shadowOpacity: 1,
    shadowRadius: 3,
  },
  tabBarStyle: {
    backgroundColor: '#eee',
  },
  tabBarSelectedItemStyle: {
    backgroundColor: '#ddd',
  },
});

const stateHandler = (prevState, newState, action) => {
  console.log('onStateChange: ACTION:', action);
};

const transitionConfig = () => ({
  screenInterpolator: StackViewStyleInterpolator.forFadeFromBottomAndroid,
});

const App = () => {
  return (
    <Router onStateChange={stateHandler} sceneStyle={styles.scene}>
      <Overlay key="overlay">
        <Modal key="modal" hideNavBar transitionConfig={transitionConfig}>
          <Lightbox key="lightbox">
            <Stack key="root">
              <Scene
                initial
                key="home"
                component={Home}
                title="Home"
                hideNavBar
                hideTabBar
              />
              <Scene
                key="qrcode"
                component={Camera}
                title=""
                hideNavBar
                hideTabBar
              />
              <Scene
                key="generate"
                component={Generator}
                title=""
                hideNavBar
                hideTabBar
              />
              {/* <Scene key="result" component={Home} /> */}
            </Stack>
          </Lightbox>
        </Modal>
      </Overlay>
    </Router>
  );
};

export default App;
