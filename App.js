import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    
    <View style={styles.container}>
      <View style={styles.header}>
          <View style={styles.box}>
          </View>
          <View style={styles.box}>
          </View>
          <View style={styles.box}>
          </View>
      </View>
      <View style={styles.central}>
          <Text>central</Text>
		  </View>

      <View style={styles.footer}>
          <Text>footer</Text>
		  </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection:"column"
  },

  header: {
    flexDirection:'row',
    flex: 0.2,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },

  box:{
    width: 77,
    height: 28,
    top: 42,
    backgroundColor: 'red',
    borderRadius: 10,
    
		borderColor: 5, 
		margin: 10,
	},

  text: {
    color: 'black',
    fontSize: 40,
  },

  central: {
    flex: 0.6,
    backgroundColor: 'red',
  },

  footer: {
    flex: 0.2,
    backgroundColor: 'blue',
  } 
});
