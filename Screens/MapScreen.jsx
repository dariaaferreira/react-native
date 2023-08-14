import React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import { Header } from '../Components/Header';

const MapScreen = ({ route }) => {
  const navigation = useNavigation();
  const { geoLocation } = route.params.post;

  return (
    <View style={styles.container}>
      <Header
          pageTitle='Карта'
          showBackButton={true}
          onBackButtonPress={() => navigation.goBack()}
        />

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: geoLocation.latitude,
          longitude: geoLocation.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        mapType='standard'
      >
        <Marker coordinate={geoLocation} />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 829,
    paddingTop: 60,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default MapScreen;
