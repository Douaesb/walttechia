import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";

export default function HomeScreen() {
  const [email, setEmail] = useState('');
  const [creditCard, setCreditCard] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [cvv, setCvv] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.bottom}>
        <Text style={styles.title}>Payment details</Text>
        <View>
          <View style={styles.sec1}>
            <Text style={styles.tit}>Méthode de paiement : </Text>
            <View style={styles.imgs}>
              <Image source={require("../assets/images/Visa.png")} />
              <Image source={require("../assets/images/MasterCard.png")} />
              <Image source={require("../assets/images/Maestro.png")} />
              <Image source={require("../assets/images/CMI.png")} />
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <Ionicons name="checkbox-outline" size={20} color="black" />
          <Text style={styles.check}> carte bancaire</Text>
        </View>
        <View style={styles.inputs}>
          {/* Here */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email Address</Text>
            <TextInput
              style={styles.input}
              onChangeText={setEmail}
              value={email}
              placeholder="Enter your email"
              placeholderTextColor="#999"

            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Credit Card Number</Text>
            <TextInput
              style={styles.input}
              onChangeText={setCreditCard}
              value={creditCard}
              placeholder="Enter your credit card number"
              keyboardType="numeric"
              placeholderTextColor="#999"

            />
          </View>
          <View style={styles.expiryContainer}>
            <View style={styles.expiryInputContainer}>
              <Text style={styles.label}>Expiry Month</Text>
              <TextInput
                style={styles.input}
                onChangeText={setExpiryMonth}
                value={expiryMonth}
                placeholder="MM"
                keyboardType="numeric"
                placeholderTextColor="#999"

              />
            </View>
            <View style={styles.expiryInputContainer}>
              <Text style={styles.label}>Expiry Year</Text>
              <TextInput
                style={styles.input}
                onChangeText={setExpiryYear}
                value={expiryYear}
                placeholder="YYYY"
                keyboardType="numeric"
                placeholderTextColor="#999"
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>CVV</Text>
            <TextInput
              style={styles.input}
              onChangeText={setCvv}
              value={cvv}
              placeholderTextColor="#999"
              placeholder="Enter CVV"
              keyboardType="numeric"
              secureTextEntry
            />
          </View>
          <View style={styles.checkboxContainer}>
          <Ionicons name="checkbox-outline" size={20} color="black" />
            <Text style={styles.checkboxLabel}>I agree to the terms and conditions</Text>
          </View>
        </View>
      </View>
        <TouchableOpacity style={styles.button}>
        <Link href="otpPay" style={styles.buttonText}>
          Secure payement
        </Link>
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
    paddingHorizontal: 16,
    backgroundColor: "white",
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
  tit: {
    color: "#413E3E",
    fontSize: 20,
    width: "40%",
  },
  sec1: {
    flexDirection: "row",
    gap: 2,
    justifyContent: "space-evenly",
    paddingHorizontal: 20,
    paddingTop:14
  },
  imgs: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
  check: {
    textAlign:"center"
  },
  card:{
    flexDirection:"row",
    alignItems: "center",
    paddingTop:30,
    paddingLeft:14
  },
  inputContainer: {
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  expiryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  expiryInputContainer: {
    flex: 1,
    marginHorizontal: 5,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  checkboxLabel: {
    marginLeft: 10,
  },
  inputs:{
 padding:20,
 gap:10
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
});
