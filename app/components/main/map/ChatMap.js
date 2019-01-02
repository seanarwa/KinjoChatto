import React, { Component } from 'react';
import { StyleSheet, Alert } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Circle } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import Permissions from 'react-native-permissions';
import ChatRoomMarker from './ChatRoomMarker.js';
import { name as appName } from '../../../../app.json';

import { API, graphqlOperation } from 'aws-amplify';
import { listChatRooms } from '../../../../src/graphql/queries.js';

 type Props = {};
 export default class ChatMap extends Component<Props> {

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
    chatRooms: []
  };

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
				console.warn('geolocation failure: ' + error.message);
				this.setState({ error: error.message });
			},
			{ enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
		);
    this.fetchData();
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

  fetchData() {
    (async () => {
        const data = await API.graphql(graphqlOperation(listChatRooms));
        this.setState({
            chatRooms: data.data.listChatRooms.items
        });
    })();
  }

	render() {
    const ChatRoomMarkers = this.state.chatRooms.map((chatRoom) =>
      <ChatRoomMarker key={chatRoom.id} navigator={this.props.navigator} chatRoom={chatRoom} />
    );

    return (
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        region={this.state.region}
        initialRegion={this.state.region}
        rotateEnabled={false}
        zoomEnabled
        scrollEnabled
        moveOnMarkerPress
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
