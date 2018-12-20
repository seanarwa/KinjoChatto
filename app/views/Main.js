/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Emoji from '../components/main/chat/Emoji.js';
import Map from '../components/main/Map.js';

export default class Main extends Component<{}> {
  render() {
    return (
      <View>
        <Map />
      </View>
    );
  }
}
