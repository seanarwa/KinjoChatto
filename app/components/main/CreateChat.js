import React, { Component } from 'react';
import {Text, Button, View, StyleSheet } from 'react-native';
import t from 'tcomb-form-native';

import MapView, { PROVIDER_GOOGLE, Circle } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

import Amplify, { API, graphqlOperation } from "aws-amplify";
import * as mutations from '../../../src/graphql/mutations.js';

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
console.log("Class entered");


export default class CreateChat extends Component {

   //Current Postition of the user
   state = {
      longitude: null,
      latitude: null,
      error:null,
    };

  //handleSubmit will run when button is pressed to create a new chat
  //Get current lat/lng and get name of chat and push to database
  handleSubmit = async () => {

    console.log("handleSubmit entered");

    // use that ref to get the form value
    const value = this._form.getValue();

    // Get the current Position of the user
    navigator.geolocation.getCurrentPosition(
       (position) => {
         this.setState({
           longitude: position.coords.longitude,
           latitude: position.coords.latitude,
           error: null,
         });
       },
       (error) => this.setState({ error: error.message }),
       { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
     );

    //Mutation
    const createChat = {
      name: value.username,
      longitude: this.state.longitude,
      latitude: this.state.latitude,
    };

    console.log("values:", value);
    
    const createNewChatRoom = await API.graphql(graphqlOperation(mutations.createChatRoom, {input: createChat}));
    console.log("hello");
    console.log(createChat);
  }

  render() {
    return (
      <View style={styles.container}>
        <Form 
      		ref={c => this._form = c}
      		type={Chat}
      		options={options}
    		/> 
		    <Button
          title="Create Chat!"
          onPress={this.handleSubmit}
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
