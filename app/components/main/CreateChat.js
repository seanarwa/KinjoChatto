import React, { Component } from 'react';
import {Text, Button, View, StyleSheet } from 'react-native';
import t from 'tcomb-form-native';

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

export default class CreateChat extends Component {
  //This will run when button is pressed
  //TODO: make the handle submit pass something to the map component
  handleSubmit = () => {
    const value = this._form.getValue(); // use that ref to get the form value
    console.log('value: ', value);
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
