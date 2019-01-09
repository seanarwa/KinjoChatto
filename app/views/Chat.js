import React from 'react';
import { View, Button } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

import { Auth, API, graphqlOperation } from 'aws-amplify';
import { getChatRoom } from '../../src/graphql/queries.js';
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
        const chatRoom = navigation.getParam('chatRoom', 'ERROR');
        return ({
          chatRoom
        });
      }

      fetchMessages() {
        (async () => {
            const data = await API.graphql(graphqlOperation(getChatRoom, {
              id: this.getParams().chatRoom.id
            }));
            this.setState({
                messages: data.data.getChatRoom.messages.items,
                nextToken: data.data.getChatRoom.messages.nextToken
            });
        })();
      }

      sendMessage(message) {
        (async () => {
          Auth.currentAuthenticatedUser()
          .then(user => {
            API.graphql(graphqlOperation(createMessage, {
              input: {
                content: message,
                messageChatRoomId: this.getParams().chatRoom.id,
                messageSenderId: user.attributes.sub
              }
            }));
          })
          .catch(err => console.log(err));
        })();
      }

      loadMessages() {
        const messages = [];
        console.log(this.state.messages);
        this.state.messages.forEach(message => {
          messages.push({
            _id: message.id,
            text: message.content,
            createdAt: message.createdAt,
            user: {
              _id: message.user.id,
              name: message.user.username,
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
                chatRoom: this.getParams().chatRoom
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
