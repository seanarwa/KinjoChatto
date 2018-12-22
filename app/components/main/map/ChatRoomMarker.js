import React, { Component } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Marker } from 'react-native-maps';

 type Props = {};
 export default class ChatRoomMarker extends Component<Props> {

	constructor(props) {
		super(props);
		this.state = {
            show: false
					};
	}

	componentDidMount() {

	}

  onPress() {

  }

  onCalloutPress() {
    this.props.navigator.navigate('Chat');
  }

	render() {
    return (
      <Marker
        coordinate={this.props.chatRoom.coordinate}
        title={this.props.chatRoom.title}
        description={this.props.chatRoom.description}
        onPress={this.onPress.bind(this)}
        onCalloutPress={this.onCalloutPress.bind(this)}
      />
    );
	}
 }
