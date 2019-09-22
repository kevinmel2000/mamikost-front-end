import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux'
import { Platform, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import geolocation from '@react-native-community/geolocation';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';


// const propsLatitude= navigation.getParam('propsLatitude')

const ViewMaps = (props) => {
  
  const dataMarker = props.dataMarker
  const city = props.city
  const propsLatitude = props.latitude
  const propsLongitude = props.longitude

  const initialState = {
    latitude: propsLatitude,
    longitude: propsLongitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0423
  }
  
  let myMap
  const [curentPosition, setCurentPosition] = useState(initialState)

  useEffect(() => {
    geolocation.getCurrentPosition(position => {
      //alert (JSON.stringify(position))
      const { longitude, latitude } = position.coords
      setCurentPosition({
        ...curentPosition,
        latitude,
        longitude
      })
    },
      error => alert(error.message),
      { timeout: 20000, maximumAge: 1000 }
    )
  }, [])

  
  const renderMarker = () =>{
      return  dataMarker.map((_marker,index) =>(
        //  alert('rent.name : '+_marker.rentlists.rentname+' latitude : '+ _marker.rentlists.latitude+' longitude : '+ _marker.rentlists.longtitude)
        //alert(parseFloat(_marker.rentlists.latitude), parseFloat(_marker.rentlists.longtitude))
        <Marker
            key = {index}
            coordinate={{
              latitude: parseFloat(_marker.rentlists.latitude),
              longitude: parseFloat(_marker.rentlists.longtitude)
            }}
            title={city}
            description={_marker.rentlists.rentname}
            onPress={() => {
              myMap.fitToCoordinates([{
                latitude: parseFloat(_marker.rentlists.latitude),
                longitude: parseFloat(_marker.rentlists.longtitude)
              }], {
                edgePadding: { top: 10, bottom: 10, left: 10, right: 10 },
                animated: true
              })
          }}
        />
      ))

    }
  

  return curentPosition.latitude ? (
    <View style={styles.container}>
      <MapView
        ref={ref => myMap = ref}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        initialRegion={curentPosition}

      >
        {renderMarker()}
        <Marker

          coordinate={{
            latitude: propsLatitude,
            longitude: propsLongitude,
          }}
          title={city}
          description={"Kosan disekitar sini"}
          onPress={() => {
            myMap.fitToCoordinates([{
              latitude: propsLatitude,
              longitude: propsLongitude,
            }], {
              edgePadding: { top: 10, bottom: 10, left: 10, right: 10 },
              animated: true
            })
          }}

        />

      </MapView>
    </View>
  ) : <ActivityIndicator style={{ flex: 1 }} animating size="large" />;


}



export default ViewMaps

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  marker: {
    height: 48,
    width: 48,

  }
})