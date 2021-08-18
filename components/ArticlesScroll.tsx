import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  TouchableWithoutFeedback,
} from "react-native";

export const ArticlesScroll = ({ articles }: any) => {
  const [selectedArticleIndex, setSelectedArticleIndex] = useState(1);

  const onPressHandle = (index: any) => {
    setSelectedArticleIndex(index);
  };

  const isSelectedArticle = (index: any) => selectedArticleIndex == index;

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {articles.map((article: any, index: any) => {
          return (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => onPressHandle(index)}
            >
              <View style={styles.itemWrapper}>
                <Image
                  style={
                    isSelectedArticle(index)
                      ? styles.selectedItemImage
                      : styles.itemImage
                  }
                  source={{ uri: article.cover }}
                />
                <View
                  style={[
                    styles.articleContainer,
                    !isSelectedArticle(index) && { marginTop: -40 },
                  ]}
                >
                  <Text style={[styles.text, styles.articleTitle]}>
                    {article.title}
                  </Text>
                  <Text style={[styles.text, styles.articleBody]}>
                    {article.body}
                  </Text>
                  <View style={styles.authorContainer}>
                    <Image
                      style={styles.authorImage}
                      source={{
                        uri: article.author.imageUri,
                      }}
                    />
                    <Text style={[styles.text, styles.authorName]}>
                      {article.author.fullName}
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 6,
    zIndex: 100,
  },
  itemWrapper: {
    shadowOffset: { width: 0, height: 0 },
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    zIndex: 999,
  },
  itemImage: {
    marginTop: 25,
    height: 300,
    width: 300,
    borderRadius: 20,
    resizeMode: "cover",
    margin: 10,
  },
  selectedItemImage: {
    height: 340,
    width: 340,
    borderRadius: 20,
    resizeMode: "cover",
    margin: 10,
  },
  articleContainer: {
    position: "absolute",
    top: 230,
    left: 30,
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
