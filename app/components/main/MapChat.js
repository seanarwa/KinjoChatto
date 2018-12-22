import React, {Component} from 'react';
import {Platform, AppRegistry, StyleSheet, Text, View} from 'react-native';
import MapView from 'react-native-maps';

export default class MapChat extends Component {
    render() {
        return (
        	<View>
        		
	            <MapView style = {styles.container}
			    initialRegion={{
			      latitude: 37.78825,
			      longitude: -122.4324,
			      latitudeDelta: 0.0922,
			      longitudeDelta: 0.0421,
	    			}}
	  			/>
  			</View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 300,
  },
});

/*
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});*/