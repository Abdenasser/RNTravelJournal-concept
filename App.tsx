import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { TravelJournalMain } from "./screens/TravelJournalMain";

export default function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: "#FCEFE3" }} />
      <SafeAreaView style={styles.container}>
        <StatusBar />
        <TravelJournalMain />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF9B3E",
  },
});
