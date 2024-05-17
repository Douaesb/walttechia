import React from "react";
import Svg, { Circle, Ellipse } from "react-native-svg";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  View,
  Image,
} from "react-native";
import { Link } from "expo-router";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View>
          <Svg width="200" height="25" viewBox="0 0 200 200">
            <Circle cx="650" cy="120" r="60" fill="#8CC404" />
            <Circle cx="520" cy="130" r="30" fill="#8CC404" />
          </Svg>
          <Text style={styles.header}>WALTTECHIA</Text>
        </View>
        <View>
          <Image
            source={require("../assets/images/walletB.png")}
            style={styles.image}
          />
          <Svg width="200" height="25" viewBox="0 0 200 200">
            <Ellipse cy="120" rx="600" ry="40" fill="rgba(140, 196, 4, 0.5)" />
          </Svg>
        </View>
      </View>

      <View style={styles.bottom}>
        <Text style={styles.title}>Define your default wallet</Text>
        
        <Text style={styles.label}>Mobile Number</Text>
        <TextInput
          style={styles.input}
          placeholder="+212 XXXXXXXXX"
          placeholderTextColor="#999"
        />
        <Text style={styles.label}>Identification Type</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g CIN"
          placeholderTextColor="#999"
        />
        <Text style={styles.label}>Identification Number</Text>
        <TextInput
          style={styles.input}
          placeholder="XXXXXX"
          placeholderTextColor="#999"
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Link href="OTP" style={styles.buttonText}>Continue</Link>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
  top: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "white",
  },
  bottom: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    width: "90%",
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#045CB4",
    marginLeft: 24,
    fontFamily: "itim",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  span: {
    textDecorationLine: "underline",
  },
  input: {
    height: 50,
    borderColor: "#E1E3ED",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#045CB4",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 50,
    width: "90%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  image: {
    width: 150,
    height: 150,
    marginVertical: 4,
    marginHorizontal: 10,
  },
  icon: {
    width: 20,
    height: 20,
    position: "absolute",
    right: 12,
    top: "57%",
    transform: [{ translateY: -10 }],
  },
});
