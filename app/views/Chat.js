import React from 'react';
import { View, Button } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

import { API, graphqlOperation } from 'aws-amplify';
import { listMessages } from '../../src/graphql/queries.js';
import { createMessage, deleteChatRoom } from '../../src/graphql/mutations.js';

export default class Chat extends React.Component {
      state = {
        messages: [],
        nextToken: null
      };

      componentDidMount() {
        this.fetchMessages();
      }

      getParams() {
        const { navigation } = this.props;
        const chatRoomId = navigation.getParam('chatRoomId', 'NO-ID');
        const title = navigation.getParam('title', 'NO-TITLE');
        return ({
          title,
          chatRoomId
        });
      }

      fetchMessages() {
        (async () => {
            const data = await API.graphql(graphqlOperation(listMessages, {
              filter: {
                chatRoomId: {
                  eq: this.getParams().chatRoomId
                }
              },
              limit: 20,
              nextToken: this.state.nextToken
            }));
            this.setState({
                messages: data.data.listMessages.items,
                nextToken: data.data.listMessages.nextToken
            });
        })();
      }

      sendMessage(message) {
        (async () => {
            API.graphql(graphqlOperation(createMessage, {
              input: {
                content: message,
                chatRoomId: this.getParams().chatRoomId
              }
            }));
        })();
      }

      loadMessages() {
        const messages = [];
        this.state.messages.forEach(message => {
          messages.push({
            _id: message.id,
            text: message.content,
            createdAt: message.createdAt,
            user: {
              _id: 1,
              name: 'React Native',
              avatar: 'https://placeimg.com/140/140/any'
            }
          });
        });
        return messages;
      }

      deleteChatRoom() {
        (async () => {
            API.graphql(graphqlOperation(deleteChatRoom, {
              input: {
                id: this.getParams().chatRoomId
              }
            })).then((data) => {
              if (data) {
                const { goBack } = this.props.navigation;
                goBack();
              }
            });
        })();
      }

      render() {
        const messages = this.loadMessages();

        return (
          <View style={{ flex: 1, justifyContent: 'flex-end' }}>
            <GiftedChat
              messages={messages}
              onSend={message => this.sendMessage(message[0].text)}
            />
            <View>
              <Button title="Refresh" onPress={this.fetchMessages.bind(this)} />
              <Button title="Delete" color='#FF3333' onPress={this.deleteChatRoom.bind(this)} />
            </View>
          </View>
        );
      }
    }
