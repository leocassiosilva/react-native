import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    
    <View style={styles.container}>
      <View style={styles.header}>
          <View style={styles.box}>
            <Text style={styles.text_header}>Menu</Text>
          </View>
          <View style={styles.box}>
          <Text style={styles.text_header}>Logs</Text>
          </View>
          <View style={styles.box}>
          <Text style={styles.text_header}>Credits</Text>
          </View>
      </View>
      <View style={styles.central}>
        <View style={styles.box_central}>
            <View style={styles.box_central_dentro}><Text>1</Text></View>
            <View style={styles.box_central_dentro}><Text>2</Text></View>
            <View style={styles.box_central_dentro}><Text>4</Text></View>
        </View>
        <View style={styles.box_central1}>
            <View style={styles.box_central_dentro1}><Text>1</Text></View>
            <View style={styles.box_central_dentro1}><Text>2</Text></View>
            <View style={styles.box_central_dentro1}><Text>4</Text></View>
        </View>
        <View style={styles.box_central2}>
            <View style={styles.box_central_dentro2}><Text>1</Text></View>
            <View style={styles.box_central_dentro2}><Text>2</Text></View>
            <View style={styles.box_central_dentro2}><Text>3</Text></View>
            <View style={styles.box_central_dentro2}><Text>4</Text></View>
            <View style={styles.box_central_dentro2}><Text>5</Text></View>
            <View style={styles.box_central_dentro2}><Text>6</Text></View>
            <View style={styles.box_central_dentro2}><Text>7</Text></View>
            <View style={styles.box_central_dentro2}><Text>8</Text></View>
            <View style={styles.box_central_dentro2}><Text>9</Text></View>
            <View style={styles.box_central_dentro2}><Text>10</Text></View>
            <View style={styles.box_central_dentro2}><Text>11</Text></View>
            <View style={styles.box_central_dentro2}><Text>12</Text></View>
            <View style={styles.box_central_dentro2}><Text>13</Text></View>
            <View style={styles.box_central_dentro2}><Text>14</Text></View>
            <View style={styles.box_central_dentro2}><Text>15</Text></View>
        </View>
		  </View>

      <View style={styles.footer}>
          <Text style={styles.text_footer}>Exercício 01 - DDM</Text>
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

  //Flex do centro
  central: {
    flex: 0.8,
    backgroundColor: '#E5E5E5',
    justifyContent:'space-evenly',
    alignItems:'center'
  },

  box_central:{
    width: 230,
    height: 124,
    backgroundColor: '#B2B9FF',
    justifyContent: 'space-between',
    margin: 10,
    flexDirection:"row"
	},

  box_central_dentro:{
    width: 45,
    height: 106,
    backgroundColor: 'red',
		margin: 10,
	},

    //central 1
  box_central1:{
    width: 230,
    height: 124,
    backgroundColor: '#B2B9FF',
    justifyContent: 'space-evenly',
    margin: 10,
	},
  
  box_central_dentro1:{
    width: 209,
    height: 31,
    backgroundColor: 'red',
		margin: 10,
	},
  
  //Fim do Centro 1

  //central 2
  box_central2:{
    width: 230,
    height: 124,
    backgroundColor: '#B2B9FF',
    justifyContent: 'space-evenly',
    margin: 10,
    flexDirection:"row", 
    flexWrap:'wrap'
	},

  box_central_dentro2:{
    width: 35,
    height: 31,
    backgroundColor: 'red',
		margin: 5,
	},
  //fim central 2 

  

  header: {
    flexDirection:'row',
    flex: 0.145,
    backgroundColor: '#C4C4C4',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },

  text_header: {
    color: 'white',
    fontSize: 15,
    textAlign:'center'
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

  text_footer: {
    color: 'white',
    fontSize: 30,
    textAlign:'center'
  },


  footer: {
    flexDirection:'row',
    flex: 0.145,
    backgroundColor: '#4E466A',
    alignItems:'center',
    justifyContent: 'center',

  } 
});
