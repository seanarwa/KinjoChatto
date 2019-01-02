import React, { Component } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Marker } from 'react-native-maps';

 type Props = {};
 export default class ChatRoomMarker extends Component<Props> {

   state = {
     createdAt: this.props.chatRoom.createdAt,
     id: this.props.chatRoom.id,
     title: this.props.chatRoom.name,
     coordinate:  {
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
        title: this.props.chatRoom.name,
        chatRoomId: this.props.chatRoom.id
      }
    );
  }

	render() {
    if (!isNaN(this.state.coordinate.latitude)
      && !isNaN(this.state.coordinate.longitude)) {
      return (
        <Marker
          coordinate={this.state.coordinate}
          title={this.state.title}
          onPress={this.onPress.bind(this)}
          onCalloutPress={this.onCalloutPress.bind(this)}
        />
      );
    }

    return <View />;
	}
 }
