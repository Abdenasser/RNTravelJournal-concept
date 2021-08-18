import React from "react";
import {
  Animated,
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";
import { data as DATA } from "../data";

export const FlatArticlesScroll = () => {
  const [scrollViewWidth, setScrollViewWidth] = React.useState(0);
  const boxWidth = scrollViewWidth * 0.8;
  const boxDistance = scrollViewWidth - boxWidth;
  const halfBoxDistance = boxDistance / 2;
  const pan = React.useRef(new Animated.ValueXY()).current;

  const renderItem = ({ item, index }: any) => (
    <Animated.View
      style={{
        transform: [
          {
            scale: pan.x.interpolate({
              inputRange: [
                (index - 1) * boxWidth - halfBoxDistance,
                index * boxWidth - halfBoxDistance,
                (index + 1) * boxWidth - halfBoxDistance,
              ],
              outputRange: [0.8, 1, 0.8],
              extrapolate: "clamp",
            }),
          },
        ],
      }}
    >
      <View
        style={{
          height: "100%",
          width: boxWidth,
        }}
      >
        <Image style={styles.itemImage} source={{ uri: item.cover }} />
        <View style={styles.articleContainer}>
          <Text style={[styles.text, styles.articleTitle]}>{item.title}</Text>
          <Text style={[styles.text, styles.articleBody]}>{item.body}</Text>
          <View style={styles.authorContainer}>
            <Image
              style={styles.authorImage}
              source={{
                uri: item.author.imageUri,
              }}
            />
            <Text style={[styles.text, styles.authorName]}>
              {item.author.fullName}
            </Text>
          </View>
        </View>
      </View>
    </Animated.View>
  );

  return (
    <FlatList
      horizontal
      data={DATA.articles}
      style={{ height: 250, zIndex: 100 }}
      contentInsetAdjustmentBehavior="never"
      snapToAlignment="center"
      decelerationRate="fast"
      automaticallyAdjustContentInsets={false}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={1}
      snapToInterval={boxWidth}
      contentInset={{
        left: halfBoxDistance,
        right: halfBoxDistance,
      }}
      contentOffset={{ x: halfBoxDistance * -1, y: 0 }}
      onLayout={(e) => {
        setScrollViewWidth(e.nativeEvent.layout.width);
      }}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: pan.x } } }],
        {
          useNativeDriver: false,
        }
      )}
      keyExtractor={(item: any, index: any) => `${index}-${item}`}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  itemImage: {
    height: "100%",
    width: "100%",
    borderRadius: 20,
    resizeMode: "cover",
  },
  articleContainer: {
    position: "absolute",
    top: "60%",
    left: "5%",
    shadowOffset: { width: 0, height: 0 },
    shadowColor: "black",
    shadowOpacity: 1,
    shadowRadius: 5,
    zIndex: 999,
  },
  articleTitle: {
    width: 300,
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
  },
  articleBody: {
    width: 280,
    fontSize: 14,
    color: "#ffffff",
  },
  authorContainer: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  authorName: {
    height: 17,
    width: 300,
    fontWeight: "600",
    fontSize: 13,
    color: "#ffffff",
  },
  authorImage: {
    width: 17,
    height: 17,
    borderRadius: 50,
    marginRight: 10,
  },
  text: {
    fontFamily: "AvenirNext-Regular",
    fontSize: 12,
    color: "#321F0E",
  },
});
