import React from "react";
import {StyleSheet, Text, View} from "react-native";
import MapView from "react-native-maps";

const Map = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.librayTitle}>Mi ubicación</Text>
            <MapView
                style={styles.map}
                region={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
            />
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
        height: "50%"
    }
});

export default Map;
