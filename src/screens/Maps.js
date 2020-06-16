import React, {useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

const Maps = () => {
  const [marker, setMarker] = useState(null);
  const arrMarker = [
    {latitude: -7.804129066590957, longitude: 108.33803169429302},
    {latitude: -6.804129066590957, longitude: 107.33803169429302},
  ];
  return (
    <View style={styles.view}>
      <MapView
        onPress={event => setMarker(event.nativeEvent.coordinate)}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: -6.238763317363304,
          longitude: 106.8228967487812,
          latitudeDelta: 0.3922,
          longitudeDelta: 0.3421,
        }}>
        {arrMarker.map((singleMarker, index) => (
          <Marker coordinate={singleMarker} key={index} />
        ))}
        {marker !== null ? <Marker coordinate={marker} /> : null}
      </MapView>
    </View>
  );
};

const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  view: {
    ...StyleSheet.absoluteFillObject,
    height,
    width,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Maps;
