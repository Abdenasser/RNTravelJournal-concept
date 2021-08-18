import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

export const User = ({ welcomeMessage, user, userStatus }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: user.imageUri,
          }}
        />
        <View
          style={[styles.status, userStatus && { backgroundColor: "#05DEE6" }]}
        ></View>
      </View>
      <View style={styles.textContainer}>
        <Text
          style={[
            styles.text,
            { opacity: 0.6, fontSize: 10, fontWeight: "600" },
          ]}
        >
          {welcomeMessage}
        </Text>
        <Text
          style={[
            styles.text,
            {
              fontSize: 15,
              fontWeight: "600",
            },
          ]}
        >
          {user.fullName}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  imageContainer: {
    width: 55,
    height: 40,
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 50,
    marginRight: 15,
  },
  status: {
    position: "absolute",
    height: 15,
    width: 15,
    top: 26,
    right: 12,
    borderRadius: 50,
    borderColor: "#fff",
    borderWidth: 3,
    backgroundColor: "#FB8927",
  },
  text: {
    fontFamily: "AvenirNext-Regular",
    fontSize: 12,
    color: "#321F0E",
  },
  textContainer: {
    height: 40,
    marginTop: 5,
    alignItems: "flex-start",
    justifyContent: "space-around",
  },
});
