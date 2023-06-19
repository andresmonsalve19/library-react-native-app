import React from "react";
import { FlatList, StyleSheet } from "react-native";
import books from "../../../data/books.js";
import BookItem from "./BookItem.jsx";

const BookList = () => {
    return (
        <FlatList
            style={styles.container}
            data={books}
            renderItem={({ item: book }) => (
                <BookItem { ...book } />
            )}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#73C6B6",
    }
});

export default BookList;
