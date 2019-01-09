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
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { getUser } from '../../src/graphql/queries.js';
import { createUser } from '../../src/graphql/mutations.js';

export default class Main extends Component<{}> {

  componentDidMount() {
    this.checkNewUser();
  }

  //check if current user is in DB, if not, then push this user to DB
  checkNewUser() {
    (async () => {
      Auth.currentAuthenticatedUser()
      .then(user => {
        API.graphql(
          graphqlOperation(
            getUser,
            { id: user.attributes.sub }
          )
        )
        .then(data => {
            if (data.data.getUser === null) { //current user not in DB case
              API.graphql(graphqlOperation(createUser, {
                  input: {
                    id: user.attributes.sub,
                    username: user.username,
                    email: user.attributes.email,
                    emailVerified: user.attributes.email_verified,
                    phoneNumber: user.attributes.phone_number,
                    phoneNumberVerified: user.attributes.phone_number_verified
                  }
                }));
            }
          })
        .catch(error => console.log(error));
      })
      .catch(err => console.log(err));
    })();
  }

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
