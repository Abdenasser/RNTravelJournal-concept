import React from "react";
import { StyleSheet, View, Image } from "react-native";

export const FilterButton = () => {
  return (
    <View style={styles.filterButton}>
      <Image
        style={styles.icon}
        source={require("./../assets/images/filterIcon.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  filterButton: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    height: 44,
    width: 44,
    backgroundColor: "#FAE5D2",
    right: 0,
  },
  icon: {
    width: 20,
    height: 20,
  },
});
