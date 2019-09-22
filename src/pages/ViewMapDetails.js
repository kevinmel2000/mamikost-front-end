import React, { useState, useEffect } from 'react';
import { Platform, StyleSheet, Text, View, ActivityIndicator, Dimensions } from 'react-native';
import geolocation from '@react-native-community/geolocation';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';


const ViewMapsDetails = (props) => {

    const propsLatitude = props.latitude
    const propsLongitude = props.longitude

    
    const initialState = {

        latitude: parseFloat(propsLatitude),
        longitude: parseFloat(propsLongitude),
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


    return curentPosition.latitude ? (
        
        <View style={styles.container}>
            <Text>tes</Text>
            <MapView
                ref={ref => myMap = ref}
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                showsUserLocation
                initialRegion={curentPosition}

            >
                <Marker
                    style={{ flex: 1 }}
                    coordinate={{
                        latitude: parseFloat(propsLatitude),
                        longitude: parseFloat(propsLongitude),
                    }}
                    title={"Jakarta"}
                    description={"Kosan disekitar sini"}
                    onPress={() => {
                        myMap.fitToCoordinates([{
                            latitude: parseFloat(propsLatitude),
                            longitude: parseFloat(propsLongitude),
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

export default ViewMapsDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        position: 'relative',
        height: 250,
        width: Dimensions.get('window').width
    },
    marker: {
        height: 48,
        width: 48,

    }
})