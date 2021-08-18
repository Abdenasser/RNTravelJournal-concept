import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  TouchableWithoutFeedback,
} from "react-native";

export const ThumbnailScroll = ({ items }: any) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(1);
  const onPressHandler = (index: number) => {
    setSelectedItemIndex(index);
  };
  const isSelectedItem = (index: number) => index == selectedItemIndex;
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {items.map((item: any, index: any) => {
        return (
          <TouchableWithoutFeedback
            onPress={() => onPressHandler(index)}
            key={index}
          >
            <View
              style={[
                isSelectedItem(index) ? styles.selectedItem : styles.item,
              ]}
            >
              <Image
                style={[
                  isSelectedItem(index)
                    ? styles.selectedItemImage
                    : styles.itemImage,
                ]}
                source={{ uri: item.image }}
              />
              <Text
                style={
                  isSelectedItem(index)
                    ? styles.selectedItemText
                    : styles.itemText
                }
              >
                {item.name}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  item: {
    shadowOffset: { width: 0, height: 0 },
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    margin: 4,
  },
  selectedItemImage: {
    borderWidth: 4,
    borderColor: "#FCEFE3",
    borderRadius: 13,
    height: 88,
    width: 88,
  },
  itemImage: { borderRadius: 13, height: 80, width: 80 },
  selectedItem: {
    borderWidth: 1,
    height: 90,
    width: 90,
    borderColor: "#E9913F",
    borderRadius: 13,
    marginLeft: 4,
    marginRight: 4,
  },
  itemText: {
    position: "absolute",
    bottom: 10,
    left: 8,
    height: 18,
    fontSize: 15,
    fontWeight: "bold",
    color: "#ffffff",
  },
  selectedItemText: {
    position: "absolute",
    bottom: 15,
    left: 8,
    height: 18,
    fontSize: 15,
    fontWeight: "bold",
    color: "#ffffff",
  },
});
