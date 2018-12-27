import React from "react";
import { View, Text } from 'react-native';
import { GiftedChat } from "react-native-gifted-chat";

import { API, graphqlOperation } from 'aws-amplify';
import { getChatRoom } from '../../../../src/graphql/queries.js';

export default class MyChat extends React.Component {
      state = {
        messages: []
      };

      loadMessage(chatRoomId) {
        (async () => {
            const data = await API.graphql(graphqlOperation(getChatRoom(this.props.getParam('chatRoomId', 'NO-ID'))));
            this.setState({
                chatRoom: data.data.getChatRoom
            });
        })();
      }

      sendMessage() {

      }

      componentDidMount() {
        this.setState({
          messages: [
            {
              _id: 1,
              text: "I think we passed the first step of the tutorial. We will now need a Pusher account!",
              createdAt: new Date(),
              user: {
                _id: 1,
                name: "React Native",
                avatar: "https://placeimg.com/140/140/any"
              }
            }
          ]
        });
      }

      render() {
        return (
          <View>
            <Text>Name: {this.state.chatRoom.name}</Text>
          </View>
          // <GiftedChat messages={this.state.messages} />
        );
      }
    }
