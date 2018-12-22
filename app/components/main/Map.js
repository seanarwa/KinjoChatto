import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Circle} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

 type Props = {};
 export default class Map extends Component<Props> {
	 
	constructor(props) {
		super(props);
		this.state = { region: {
						  latitude: 33.6404952,
						  longitude: -117.8442962,
						  latitudeDelta: 0.0300,
						  longitudeDelta: 0.0300,
						},
						circle: {
							latitude: 33.6404952, 
							longitude: -117.8442962
						}
					};
	}

	onRegionChange(newRegion) {
	  // this.setState({ region: newRegion });
	}
	
	componentDidMount() {
		
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
				console.warn("geolocation failure: " + error.message);
				this.setState({ error: error.message });
			},
			{ enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
		);
		
		// return navigator.geolocation.getCurrentPosition().then(position => {
		  // if (position) {
			// this.setState(previousState => ({
			  // region: {
				// latitude: position.coords.latitude,
				// longitude: position.coords.longitude,
				// latitudeDelta: previousState.region.latitudeDelta,
				// longitudeDelta: previousState.region.longitudeDelta,
			  // },
			// }));
		  // }
		// });
	}

	render() {
	  return (
		<View style={styles.container}>
			<MapView style={styles.map}
			  provider={PROVIDER_GOOGLE}
			  region={this.state.region}
			  onRegionChange={this.onRegionChange.bind(this)}
			  zoomEnabled={false}
			  scrollEnabled={false}
			  rotateEnabled={false}
			  showsMyLocationButton={true}
			  showsUserLocation={true} 
			  followsUserLocation={true}
			  loadingEnabled={true}
			>
				<Circle
					center={this.state.circle}
					radius={1000}
				/>
			</MapView>
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
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
