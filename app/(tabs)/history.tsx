// HistoryScreen.js
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function HistoryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transaction History</Text>
      <View style={styles.transaction}>
        <Image source={require('../../assets/images/prfl1.png')} style={styles.icon} />
        <View style={styles.details}>
          <Text style={styles.name}>Transaction Name</Text>
          <Text style={styles.date}>Date</Text>
        </View>
        <Text style={styles.amount}>$100.00</Text>
      </View>
      <View style={styles.transaction}>
        <Image source={require('../../assets/images/prfl1.png')} style={styles.icon} />
        <View style={styles.details}>
          <Text style={styles.name}>Transaction Name</Text>
          <Text style={styles.date}>Date</Text>
        </View>
        <Text style={styles.amount}>$100.00</Text>
      </View>
      <View style={styles.transaction}>
        <Image source={require('../../assets/images/prfl1.png')} style={styles.icon} />
        <View style={styles.details}>
          <Text style={styles.name}>Transaction Name</Text>
          <Text style={styles.date}>Date</Text>
        </View>
        <Text style={styles.amount}>$100.00</Text>
      </View>
      <View style={styles.transaction}>
        <Image source={require('../../assets/images/prfl1.png')} style={styles.icon} />
        <View style={styles.details}>
          <Text style={styles.name}>Transaction Name</Text>
          <Text style={styles.date}>Date</Text>
        </View>
        <Text style={styles.amount}>$100.00</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  transaction: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 14,
    color: '#888',
  },
  amount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});
