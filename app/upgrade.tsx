import React from "react";
import { StyleSheet, Text, View } from "react-native";
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.bottom}>
        <Text style={styles.title}>Upgrade wallet</Text>
        <View>
          <View>
            
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  bottom: {
    flex: 2,
    flexDirection: "column",
    backgroundColor: "white",
    width: "110%",
    padding: 15,
  },
  title: {
    fontWeight: "bold",
    fontSize: 28,
    marginVertical: 30,
    marginLeft: 12
  },

});
