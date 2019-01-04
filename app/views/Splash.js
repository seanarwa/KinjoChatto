import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';
import {Platform, View, Text, StyleSheet } from 'react-native';



export default class Splash extends Component<{}> {

	static navigationOptions = {
  		header:null
  	}

	componentWillMount()
	{
	  setTimeout(()=>{
	    this.props.navigation.navigate('Main');
	  },3000)
	}

  render() {

    return (
        <View style = {styles.container} >
        	<View>
         		<Text style = {styles.title}> Kinjo Chatto </Text>
         	</View>
        </View>
    );
  }
}

const styles = StyleSheet.create ({
   container: {
   		backgroundColor: '#ADD8E6',
   		flex: 1,
   		justifyContent: 'center',
   		alignItems: 'center'
   	},
   	title: {
   		color: 'white',
   		fontSize: 35,
   		fontWeight: 'bold'
   	},
})