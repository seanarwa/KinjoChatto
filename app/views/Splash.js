import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';
import {Platform, View, Text, StyleSheet } from 'react-native';

import { StackActions, NavigationActions } from 'react-navigation';

export default class Splash extends Component<{}> {

	static navigationOptions = {
  		header:null
  	}

	componentWillMount()
	{
	  setTimeout(()=>{
	    //this.props.navigation.navigate('Main');
	    const resetAction = StackActions.reset({
	      index: 0,
	      actions: [NavigationActions.navigate({ routeName: 'Main' })],
	    });
	    this.props.navigation.dispatch(resetAction);
	    
	    const { navigate } = this.props.navigation;
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