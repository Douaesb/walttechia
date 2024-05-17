import React, { useState } from "react";
import Svg, { Circle, Ellipse } from "react-native-svg";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  View,
  Image,
  Modal,
} from "react-native";
import { Link } from "expo-router";

export default function LoginScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");

  return (
    <View style={modalVisible ? styles.overlay : styles.container}>
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
        <Text style={styles.title}>Login to your account</Text>
        <Text style={styles.label}>Mobile Number</Text>
        <TextInput
          style={styles.input}
          placeholder="+212 XXXXXXXXX"
          placeholderTextColor="#999"
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="#999"
          secureTextEntry={true}
        />
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={styles.pass}>Forgot your password?</Text>
        </TouchableOpacity>
        <Image
          source={require("../assets/images/eye.png")}
          style={styles.icon}
        />
        <Text>
          Don't have an account ?{" "}
          <Link style={styles.span} href={"register"}>
            Register here
          </Link>{" "}
        </Text>
      </View>
      <TouchableOpacity style={styles.button}>
        {/* <Text style={styles.buttonText}>Login</Text> */}
        <Link href='defaultW' style={styles.buttonText}>Login</Link>

      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View>
              <View style={styles.head}>
                <Text style={styles.modalTitle}>Forgot your password?</Text>
                <TouchableOpacity
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.closeButtonText}>Done</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.scnd}>
                <Text style={styles.label}>Mobile Number</Text>
                <TextInput
                  style={styles.input}
                  placeholder="+212 XXXXXXXXX"
                  placeholderTextColor="#999"
                  value={mobileNumber}
                  onChangeText={setMobileNumber}
                  keyboardType="phone-pad"
                />
              </View>
            </View>

            <TouchableOpacity style={styles.button}>
              <Link href="" style={styles.buttonText}>
                Send reset link
              </Link>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1,
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
    width: "100%",
    paddingHorizontal: "5%",
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
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    height: 50,
    borderColor: "#E1E3ED",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#045CB4",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 50,
    width: "100%",
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
    right: 25,
    top: "57%",
    transform: [{ translateY: -10 }],
  },
  span: {
    textDecorationLine: "underline",
  },
  pass: {
    textDecorationLine: "underline",
    textAlign: "right",
    marginBottom: 20,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "100%",
    height: "35%",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    alignItems: "center",
    paddingHorizontal: 30,
    paddingBottom: 100,
  },
  head: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    width: "100%",
    height: "1%",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  scnd: {
    marginBottom: 40,
  },
  closeButtonText: {
    color: "#045CB4",
    fontSize: 18,
    fontWeight: "bold",
  },
  send: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
