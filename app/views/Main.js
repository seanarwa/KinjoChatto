/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import Emoji from '../components/main/chat/Emoji.js';
import Login from './Login.js';
import ChatMap from '../components/main/map/ChatMap.js';
import MyChat from '../components/main/chat/Chat.js';


export default class Main extends Component<{}> {

  render() {

    const { navigate } = this.props.navigation;

    return (
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <ChatMap
            ref='chatMap'
            navigator={this.props.navigation}
          />
          <View>
            <Button
              title='Refresh Map'
              onPress={() => this.refs.chatMap.refresh()}
            />
            <View style={{height: 10}} />
            <Button
              title='Create Chat'
              onPress={() => navigate('NewChat')}
            />
          </View>
        </View>
    );
  }
}
