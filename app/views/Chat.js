import React from "react";
import { View, Text } from 'react-native';
import { GiftedChat } from "react-native-gifted-chat";

import { API, graphqlOperation } from 'aws-amplify';
import { listMessages } from '../../src/graphql/queries.js';
import { createMessage } from '../../src/graphql/mutations.js';

export default class Chat extends React.Component {
      state = {
        messages: [],
        nextToken: null
      };

      fetchMessages() {
        (async () => {
            const data = await API.graphql(graphqlOperation(listMessages, {
              filter: {
                chatRoomId: {
                  eq: this.getParams().chatRoomId
                }
              },
              limit: 10,
              // nextToken: this.state.nextToken
            }));
            this.setState({
                messages: data.data.listMessages.items,
                // nextToken: data.data.listMessages.nextToken
            });
        })();
      }

      sendMessage(message) {
        (async () => {
            const data = await API.graphql(graphqlOperation(createMessage, {
              input: {
                content: message,
                chatRoomId: this.getParams().chatRoomId
              }
            }));
        })();
      }

      getParams() {
        params = {}
        const { navigation } = this.props;
        const chatRoomId = navigation.getParam('chatRoomId', 'NO-ID');
        const title = navigation.getParam('title', 'NO-TITLE');
        return ({
          title,
          chatRoomId
        });
      }

      loadMessages() {
        const messages = [];
        this.state.messages.forEach( (message) => {
          messages.push({
            _id: message.id,
            text: message.content,
            createdAt: message.createdAt,
            user: {
              _id: 1,
              name: "React Native",
              avatar: "https://placeimg.com/140/140/any"
            }
          });
        });
        return messages;
      }

      componentDidMount() {
        this.fetchMessages();
      }

      render() {

        const messages = this.loadMessages();

        return (
          <GiftedChat
            loadEarlier
            messages={messages}
            onSend={messages => this.sendMessage(messages[0].text)}
            onLoadEarlier={this.fetchMessages()}
          />
        );
      }
    }
