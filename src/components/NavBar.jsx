import React from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableWithoutFeedback,
} from "react-native";
import {Link, useLocation} from "react-router-native";

const AppBarTab = ({active, to, icon}) => {
    const {pathname} = useLocation();
    const iconActive = pathname === to ? active : icon;
    return (
        <Link to={to} component={TouchableWithoutFeedback}>
            <Image
                style={styles.logo}
                source={iconActive}
            />
        </Link>
    );
    
};

const getIconActive = (path) => {
    if (path === "/") {
        return require("../../assets/home-active.png");
    } 
    else if (path=== "/map") {
        return require("../../assets/map-active.png");
    }
}

const NavBar = () => {
    return (
        <View style={styles.container}>
            <AppBarTab active={getIconActive("/")} to="/" icon={require("../../assets/home.png")} />
            <AppBarTab active={getIconActive("/map")} to="/map" icon={require("../../assets/map.png")} />
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
