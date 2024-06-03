import React from "react";
import { StyleSheet, Text, View } from "react-native";
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.bottom}>
        <Text style={styles.title}>About eWallet</Text>
        <View>
          <View style={styles.divc}>
            <Text style={styles.abt}>
              Our app allows you to easily store, manage, and spend your money
              on the go. With our secure platform, you can make transactions,
              check your balance, and track your spending all in one place.
            </Text>
            <Text style={styles.abt}>
              Whether you're paying bills, shopping online, or sending money to
              friends and family, our app makes it easy and convenient to do so.
              Plus, with our various promotions and discounts, you can save even
              more while using our app.
            </Text>
            <Text style={styles.abt}>
              Thank you for choosing us as your preferred e-wallet solution. If
              you have any questions or feedback, please don't hesitate to
              contact us. We're always here to help.
            </Text>
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
    fontSize: 28,
    fontWeight: "bold",
    marginVertical: 30,
    marginLeft: 12
  },
  divc: {
    flexDirection: "column",
    padding: 16,
    gap: 16
  },
  abt: {
    fontSize: 14,
    color: "#535D66",
    lineHeight: 23
  },
});
