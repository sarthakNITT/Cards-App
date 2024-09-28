import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.Headingtext}>ElevatedCards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.Card, styles.CardElevated]}>
            <Text>TAP</Text>
        </View>
        <View style={[styles.Card, styles.CardElevated]}>
            <Text>ME</Text>
        </View>
        <View style={[styles.Card, styles.CardElevated]}>
            <Text>TO</Text>
        </View>
        <View style={[styles.Card, styles.CardElevated]}>
            <Text>SCROLL</Text>
        </View>
        <View style={[styles.Card, styles.CardElevated]}>
            <Text>MORE...</Text>
        </View>
        <View style={[styles.Card, styles.CardElevated]}>
            <Text>😀</Text>
        </View>
      </ScrollView>
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
        padding: 8
    },
    Card: {
        borderRadius: 4,
        margin: 8,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100
    },
    CardElevated: {
        backgroundColor: '#CAD5E2',
        elevation: 4, // this wont show on the screen but if you are on 4k you will notice a black bar in the bottom of the box
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor: '#000000',
        shadowOpacity: 0.4,
        shadowRadius: 2
    }
})