import React, { Component } from 'react';
import { StyleSheet, Alert } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Circle } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import Permissions from 'react-native-permissions';
import ChatRoomMarker from './ChatRoomMarker.js';
import { name as appName } from '../../../../app.json';

 type Props = {};
 export default class ChatMap extends Component<Props> {

	constructor(props) {
		super(props);
		this.state = {
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
              {
                title: 'WEST CHATROOM',
                description: 'this is where luke \nshits on his face',
                coordinate: { latitude: 33.603317, longitude: -117.705430 }
              },
              {
                title: 'NORTHEAST CHATROOM',
                description: 'this is where luke \nshits on his face again',
                coordinate: { latitude: 33.614468, longitude: -117.687907 }
              },
              {
                title: 'SOUTHEAST CHATROOM',
                description: 'this is where luke shits on \nhis face like the tenth time',
                coordinate: { latitude: 33.599876, longitude: -117.688979 }
              }
            ]
					};
	}

	componentDidMount() {
    this.checkPermissions();
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
				console.warn(`geolocation failure: ${error.message}`);
				this.setState({ error: error.message });
			},
			{ enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
		);
	}

  setChatRoomMarkers(chatRooms) {
    this.setState({ chatRooms });
  }

  checkPermissions() {
    try {
      Permissions.check('location').then(response => {
        this.setState({
          locationPermission: response
        });
        if (response !== 'authorized') {
          Permissions.request('location').then(requestResponse => {
            if (requestResponse !== 'authorized') {
              Alert.alert(
                'Unable to Display Chat Map',
                `${appName} needs location permissions to function properly`,
                [{ text: 'OK' }],
                { cancelable: true }
              );
            }
            this.setState({ locationPermission: requestResponse });
          });
        }
      });
    } catch (err) {
      console.warn(err);
    }
  }

	render() {
    const ChatRoomMarkers = this.state.chatRooms.map((chatRoom, key) =>
      <ChatRoomMarker key={key} navigator={this.props.navigator} chatRoom={chatRoom} />
    );

    return (
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        region={this.state.region}
        initialRegion={this.state.region}
        zoomEnabled={false}
        scrollEnabled={false}
        rotateEnabled={false}
        moveOnMarkerPress={false}
        showsUserLocation
        followsUserLocation
        loadingEnabled
      >
        <Circle
          center={this.state.circle}
          radius={1000}
        />
        { ChatRoomMarkers }
      </MapView>
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
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
