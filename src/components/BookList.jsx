import React from "react";
import {Image, Text, FlatList, StyleSheet, View } from "react-native";
import books from "../../data/books.js";

const BookList = () => {
    return (
        <FlatList
            style={styles.container}
            data={books}
            renderItem={({ item: book }) => (
                <View key={book.id} style={styles.bookContainer}>
                    <Image
                        style={styles.image}
                        source={{
                            uri: book.image,
                        }}
                    />
                    <Text style={styles.text}>Título: {book.title}</Text>
                    <Text style={styles.text}>Autor: {book.author}</Text>
                </View>
            )}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#73C6B6",
        marginBottom: 84,
    },
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

export default BookList;
