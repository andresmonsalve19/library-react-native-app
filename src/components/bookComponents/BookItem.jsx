import React from "react";
import {Image, Text, StyleSheet, View} from "react-native";

const BookItem = (props) => {
    return (
        <View key={props.id} style={styles.bookContainer}>
            <Image
                style={styles.image}
                source={{
                    uri: props.image,
                }}
            />
            <Text style={styles.text}>Título: {props.title}</Text>
            <Text style={styles.text}>Autor: {props.author}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    bookContainer: {
        padding: 10,
        margin: 16,
        backgroundColor: "#A2D9CE",
        borderRadius: 32,
    },
    image: {
        marginTop: 10,
        width: 200,
        height: 350,
        marginLeft: 72,
        borderRadius: 24,
    },
    text: {
        marginTop: 16,
        fontSize: 16,
        textAlign: "center",
        marginBottom: 10,
        fontWeight: "bold",
    },
});

export default BookItem;
