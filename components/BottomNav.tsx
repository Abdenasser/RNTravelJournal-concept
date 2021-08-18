import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";

export const BottomNav = () => {
  const items = [
    { name: "map", icon: require("./../assets/images/map.png") },
    { name: "best", icon: require("./../assets/images/thumb-up.png") },
    { name: "speak", icon: require("./../assets/images/microphone.png") },
  ];

  const [currentNavItemIndex, setCurrentNavItemIndex] = useState(0);

  const onPressHandler = (index: any) => {
    setCurrentNavItemIndex(index);
  };

  const isActiveNavItem = (index: any) => index == currentNavItemIndex;

  {
    return (
      <LinearGradient colors={["#FC7712", "#FC8E12"]} style={styles.container}>
        {items.map((item: any, index: any) => {
          return (
            <TouchableOpacity onPress={() => onPressHandler(index)} key={index}>
              <View
                style={
                  isActiveNavItem(index) ? styles.activeNavItem : styles.navItem
                }
              >
                <Image style={{ height: 24, width: 24 }} source={item.icon} />
              </View>
            </TouchableOpacity>
          );
        })}
      </LinearGradient>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FC8E12",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    alignItems: "center",
    height: 56,
    width: 327,
    borderRadius: 25,
    zIndex: 300,
  },
  activeNavItem: {
    width: 105,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 50,
  },
  navItem: {
    width: 105,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    opacity: 0.2,
  },
});
