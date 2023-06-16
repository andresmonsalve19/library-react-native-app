import React from "react";
import {Text, View, StyleSheet} from "react-native";
import Constants from "expo-constants";
import BookList from "./BookList.jsx";

const Main = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.librayTitle}>Librería Unal Med</Text>
            <BookList />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        flexGrow: 1,
        backgroundColor: "#73C6B6",
    },
    librayTitle: {
        fontSize: 32,
        textAlign: "center",
        fontFamily: "Cochin",
        backgroundColor: "#138D75",
        padding: 16,
        fontWeight: "bold",
        color: "white",
    },
});

export default Main;
