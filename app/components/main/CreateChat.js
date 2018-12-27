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

  /*
  //Default Location
  state = {
         region: {
           latitude: 33.6404952,
           longitude: -117.8442962,
           latitudeDelta: 0.0500,
           longitudeDelta: 0.0200,
         },
         circle: {
           latitude: 33.6404952,
           longitude: -117.8442962
         },
         chatRooms: [
         ]
       };*/

  //This will run when button is pressed
  handleSubmit = async () => {
    console.log("handleSubmit entered");
    // use that ref to get the form value
    const value = this._form.getValue();

    /*
    //Get the current position and set state
    Geolocation.getCurrentPosition(
      (position) => {
        this.setState(previousState => ({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: previousState.region.latitudeDelta,
            longitudeDelta: previousState.region.longitudeDelta,
          },
          circle: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          }
        }));
      },
      (error) => {
        console.warn('geolocation failure: ' + error.message);
        this.setState({ error: error.message });
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );

    */

    const todoDetails = {
      value: value,
    };

    console.log("values:", value);

    const newTodo = await API.graphql(graphqlOperation(mutations.createTodo, {input: todoDetails}));
    console.log("hello");
    console.log(newTodo);
    /*
    async () => {
        //Mutation -  used to create or update data with GraphQ
      const newTodo = await API.graphql(graphqlOperation(mutations.createTodo, {input: todoDetails}));
      console.log("hello");
      console.log(newTodo);
    };*/
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
