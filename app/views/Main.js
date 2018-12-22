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
import Login from './Login.js';
import ChatMap from '../components/main/map/ChatMap.js';
import MyChat from '../components/main/chat/Chat.js';

export default class Main extends Component<{}> {
  render() {
    return (
        <ChatMap navigator={this.props.navigation} />
    );
  }
}
