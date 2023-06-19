import React from "react";
import {StyleSheet, Text, View} from "react-native";

const Map = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.librayTitle}>Mi ubicación</Text>
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
});

export default Map;
