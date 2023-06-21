import React, {useEffect, useState} from "react";
import { getCurrentPositionAsync, requestForegroundPermissionsAsync } from "expo-location";
import {StyleSheet, Text, View} from "react-native";
import MapView, {Marker} from "react-native-maps";

const Map = () => {
    const [origin, setOrigin] = useState({
        latitude: 6.26119,
        longitude: -75.57886,
    });
    
    useEffect(() => {
        getLocationPermission();
    }, []);
    
    async function getLocationPermission() {
        let {status} = await requestForegroundPermissionsAsync();
        if (status !== "granted") {
            alert("Permiso Denegado - No será posible obtener su ubicación");
            return;
        }
        location = await getCurrentPositionAsync({});
        const current = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude
        }
        setOrigin(current);
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.librayTitle}>Mi ubicación</Text>
            <MapView
                style={styles.map}
                region={{
                    latitude: origin.latitude,
                    longitude: origin.longitude,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
            >
                <Marker coordinate={origin} />
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexGrow: 1,
        backgroundColor: "#73C6B6",
    },
    librayTitle: {
        fontSize: 32,
        textAlign: "center",
        backgroundColor: "#138D75",
        padding: 16,
        fontWeight: "bold",
        color: "white",
    },
    map: {
        width: "100%",
        height: "100%",
    },
});

export default Map;
