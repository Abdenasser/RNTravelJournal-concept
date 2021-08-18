import React from "react";
import { StyleSheet, TextInput, View, Image } from "react-native";

export const SearchInput = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.searchIcon}
        source={require("./../assets/images/searchIcon.png")}
      />
      <TextInput
        style={styles.searchInput}
        placeholder="Search country or list"
        placeholderTextColor="#EDA47E"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 44,
    width: 281,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FAE5D2",
    borderRadius: 10,
    paddingLeft: 15,
  },
  searchInput: {
    height: 44,
    width: "90%",
    marginLeft: 10,
    borderRadius: 10,
    backgroundColor: "#FAE5D2",
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
});
