import React from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableWithoutFeedback,
} from "react-native";
import Constants from "expo-constants";
import {Link} from "react-router-native";

const AppBarTab = ({active, to, uri}) => {
    return (
        <Link to={to}>
            <Image
                style={styles.logo}
                source={uri}
            />
        </Link>
    );
    
};
const NavBar = () => {
    return (
        <View style={styles.container}>
            <AppBarTab active to="/" uri={require("../../assets/home.png")} />
            <AppBarTab active to="/map" uri={require("../../assets/map.png")} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#138D75",
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: 16,
    },
    logo: {
        width: 32,
        height: 32,
    },
});

export default NavBar;
