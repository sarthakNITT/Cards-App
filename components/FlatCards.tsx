// rnfs is the shortcut to get the stylesheet structure 
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return ( // 1st view jiske andr sara content hai, 2nd view jiske andr boxes k liye ek div hai ek trh se, 3rd view jisme ek box h bss. || for multiple properties use{[...]} mtlb jb ek single box ki edit ho to usko select kro lekin sb box ki same ho jese size vgera to sbko same chij deni h uske liye ye syntax use kro 
    <View>
      <Text style={styles.Headingtext}>Flat Cards</Text>
      <View style={styles.container}> 
        <View style={[styles.Card , styles.CardOne]}> 
          <Text>RED</Text>
        </View>
        <View style={[styles.Card , styles.CardTwo]}> 
          <Text>BLUE</Text>
        </View>
        <View style={[styles.Card , styles.CardThree]}> 
          <Text>GREEN</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Headingtext: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8 
  },
  container: {
    flex: 1,
    flexDirection: 'row', // flex also opens door for this thing learn every thing of flex and some more additional properties from the documentation of react native
    padding: 8,
  },
  Card: {
    flex: 1, // flex basically open doors for justifycontent and align items without flex you cant use them
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8
  },
  CardOne: {
    backgroundColor: '#EF5354'
  },
  CardTwo: {
    backgroundColor: '#50DBB4'
  },
  CardThree: {
    backgroundColor: '#5DA3FA'
  }
})