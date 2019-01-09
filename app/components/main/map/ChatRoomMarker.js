import React, { Component } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Marker } from 'react-native-maps';

 type Props = {};
 export default class ChatRoomMarker extends Component<Props> {

   state = {
     chatRoom: this.props.chatRoom,
     coordinate: {
                    latitude: parseFloat(this.props.chatRoom.latitude),
                    longitude: parseFloat(this.props.chatRoom.longitude)
                }
   }

	componentDidMount() {

	}

  onPress() {

  }

  onCalloutPress() {
    this.props.navigator.navigate('Chat',
      {
        chatRoom: this.props.chatRoom
      }
    );
  }

	render() {
    if (!isNaN(this.state.coordinate.latitude)
      && !isNaN(this.state.coordinate.longitude)) {
      return (
        <Marker
          coordinate={this.state.coordinate}
          title={this.state.chatRoom.name}
          onPress={this.onPress.bind(this)}
          onCalloutPress={this.onCalloutPress.bind(this)}
        />
      );
    }

    return <View />;
	}
 }
