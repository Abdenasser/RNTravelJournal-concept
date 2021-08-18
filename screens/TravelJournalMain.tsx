import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { User } from "../components/User";
import { BottomNav } from "../components/BottomNav";
import { LinearGradient } from "expo-linear-gradient";
import { ArticlesScroll } from "../components/ArticlesScroll";
import { SearchInput } from "../components/SearchInput";
import { FilterButton } from "../components/FilterButton";
import { ThumbnailScroll } from "../components/ThumbnailScroll";
import { data as DATA } from "../data";
import { FlatArticlesScroll } from "../components/FlatArticlesScroll";

export const TravelJournalMain = () => {
  const data = DATA;

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <User welcomeMessage="Hi there, Welcome!" user={data.user} userStatus />
      </View>
      <View style={styles.articles}>
        <Text style={[styles.text, styles.sectionTitle]}>New Articles</Text>
        <ThumbnailScroll items={data.countries} />
      </View>
      <View style={styles.search}>
        <SearchInput />
        <FilterButton />
      </View>
      {/*First Component was good design wise but needed to have a snap effect which I could only achieve using FlatList*/}
      {/* <ArticlesScroll articles={data.articles} /> */}
      <FlatArticlesScroll />
      <View style={styles.bottom}>
        <BottomNav />
        <LinearGradient
          colors={["#FACB0F", "#FF9B3E"]}
          style={styles.gradientBehind}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCEFE3",
  },
  text: {
    fontFamily: "AvenirNext-Regular",
    fontSize: 12,
    color: "#321F0E",
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "600",
    marginLeft: 20,
    marginBottom: 5,
  },
  top: {
    flex: 1,
    flexDirection: "row",
    marginLeft: 20,
    alignItems: "center",
  },
  articles: {
    flex: 2,
  },
  search: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20,
  },
  bottom: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF9B3E",
  },
  gradientBehind: {
    position: "absolute",
    height: 200,
    width: "100%",
    zIndex: -1,
    top: -100,
    bottom: 0,
    borderRadius: 70,
  },
});
