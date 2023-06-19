import React from "react";
import {Text, View, StyleSheet} from "react-native";
import Constants from "expo-constants";
import BookList from "./bookComponents/BookList.jsx";
import NavBar from "./NavBar.jsx";
import Map from "./Map.jsx";
import {Route, Switch, Redirect, Routes} from "react-router-native";

const Main = () => {
    return (
        <View style={styles.container}>
            <Routes>
                <Route
                    path="/"
                    exact
                    element={
                        <>
                            <Text style={styles.librayTitle}>
                                Librería Unal Med
                            </Text>
                            <BookList />
                        </>
                    }
                />
                <Route
                    path="/map"
                    exact
                    element={
                        <Map />
                    }
                />
            </Routes>
            <NavBar />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
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

export default Main;
