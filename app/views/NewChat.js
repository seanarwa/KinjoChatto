import React, { Component } from 'react';
import { Text, Button, View, StyleSheet, Alert } from 'react-native';
import t from 'tcomb-form-native';

import MapView, { PROVIDER_GOOGLE, Circle } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

import Amplify, { API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../../src/graphql/mutations.js';

const Form = t.form.Form;

const Chat = t.struct({
  username: t.String,
});

const options = {
  fields: {
    username: {
      label: 'Chat Name',
      error: 'Cannot leave this field blank'
    },
  },
};

export default class NewChat extends Component {

   //Current Postition of the user
   state = {
      longitude: null,
      latitude: null,
      error: null,
    };

    showLocationError() {
      Alert.alert(
        'Location Error',
        'Please enable your location service then try again',
        [{ text: 'OK' }],
        { cancelable: true }
      );
    }

    showServerError() {
      Alert.alert(
        'Server Error',
        'Please check your internet connection then try again',
        [{ text: 'OK' }],
        { cancelable: true }
      );
    }

  //handleSubmit will run when button is pressed to create a new chat
  //Get current lat/lng and get name of chat and push to database
  handleSubmit() {
    (async () => {
      // use that ref to get the form value
      const value = this.chatRoomNameForm.getValue();

      // Get the current Position of the user
      await Geolocation.getCurrentPosition(
         (position) => {
           this.setState({
             longitude: position.coords.longitude,
             latitude: position.coords.latitude,
             error: null,
           });
         },
         (error) => {
           if (error) {
             this.showLocationError();
             this.setState({ error: error.message });
           }
         },
         { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
       );

       if ((this.state.longitude === null
          && this.state.latitude === null)
          && this.state.error !== '') {
           this.showLocationError();
           this.setState({ error: '' });
           return;
         }


      //Mutation
      const createChat = {
        name: value.username,
        longitude: this.state.longitude,
        latitude: this.state.latitude,
      };

      API.graphql(
        graphqlOperation(
          mutations.createChatRoom,
          { input: createChat }
        )
      ).then((data) => {
        if (!data) {
          this.showServerError();
          return;
        }

        const { navigate, goBack } = this.props.navigation;
        goBack();
        navigate('Chat',
          {
            title: data.data.createChatRoom.name,
            chatRoomId: data.data.createChatRoom.id
          }
        );
      });
    })();
  }

  render() {
    return (
      <View style={styles.container}>
        <Form
          ref={c => this.chatRoomNameForm = c}
          type={Chat}
          options={options}
        />
        <Button
          title="Create Chat!"
          onPress={this.handleSubmit.bind(this)}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});
