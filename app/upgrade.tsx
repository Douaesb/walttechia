import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.bottom}>
        <Text style={styles.title}>Upgrade wallet</Text>
        <View>
          {/* Card 1 */}
          <View style={styles.card}>
            <View style={styles.titleRow}>
              <Text style={styles.smallTitle}>Niveau 1</Text>
              <View style={styles.tag}>
                <Text style={styles.tagText}>Current</Text>
              </View>
            </View>
            <Text style={styles.bigTitle}>Basic Wallet</Text>
            <Text style={styles.underlineText}>Plafonné à 200 DHS</Text>
          </View>
          {/* Card 2 */}
          <View style={styles.card}>
            <Text style={styles.smallTitle}>Niveau 2</Text>
            <Text style={styles.bigTitle}>Silver Wallet</Text>
            <Text style={styles.underlineText}>Plafonné à 2000 DHS</Text>
            <TouchableOpacity style={styles.button}>
              <View style={styles.btn}>
                <Text style={styles.buttonText}>Upgrade</Text>
                <Ionicons name="heart" size={16} color="white" />
              </View>
            </TouchableOpacity>
          </View>
          {/* Card 3 */}
          <View style={styles.card}>
            <Text style={styles.smallTitle}>Niveau 3</Text>
            <Text style={styles.bigTitle}>Premium Wallet</Text>
            <Text style={styles.underlineText}>Plafonné à 20 000DHS</Text>
            <TouchableOpacity style={styles.button}>
              <View style={styles.btn}>
                <Text style={styles.buttonText}>Upgrade</Text>
                <Ionicons name="heart" size={16} color="white" />
              </View>
            </TouchableOpacity>
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
    marginLeft: 12,
  },
  card: {
    backgroundColor: "white",
    padding: 20,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    borderRadius: 8,
    width: "100%", // Set width to 100% to make all cards the same width
    height: 200, // Set a fixed height to make all cards the same height
    justifyContent: "space-between", // Space out elements evenly within the card
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  smallTitle: {
    fontSize: 20,
    color: "#045CB4",
  },
  tag: {
    backgroundColor: "green",
    borderRadius: 5,
    paddingVertical: 2,
    paddingHorizontal: 14,
    marginLeft: 10,
  },
  tagText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  bigTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  underlineText: {
    fontSize: 24,
    textAlign: "center",
    textDecorationLine: "underline",
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#045CB4",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: "center",
    marginTop: 15,
    paddingBottom: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  btn: {
    flexDirection: "row",
    gap: 4,
  },
});
