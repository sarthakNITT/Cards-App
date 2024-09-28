// in line 31 key is for performance perposes it increases performace as it checks every single element once (unique element) use something which is unique
// in line 30 if you have to choose every element in 1st purple parentheses then item.uid, item.name etx but shortcut is in those parentses use {} and write the syntax as written here
// in line 30 and 41 if 2nd purple bracket is parentheses then you don't need to return a value means no need to write a keyword return but if its curly brackets then syntax will be {contacts.map(() => {return ()})} || in map we can choose every element as we also do in for loop but it is more convinient
// line 31 key is neccessary
// line 28 in scroll view one attribute is there called scrollenable={false} which checks the scoll should be there or not
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function  () {
  const contacts = [
    {
      uid: 1, 
      name: 'ABCD',
      status: 'Participating as an App Developer in DELTA', 
      imageUrl: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      uid: 2, 
      name: 'EFGH',
      status: 'Participating as an App Developer in SPIDER', 
      imageUrl: 'https://images.unsplash.com/photo-1511804074-5e57bc14db9f?q=80&w=2646&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ];
  return (
    <View>
      <Text style={styles.Headingtext}>Contact List</Text>
      <View style={styles.Card}>
        <ScrollView horizontal={true} style={styles.Container}> 
          <View style={styles.cardStyle}>
            {contacts.map(({uid, name, status, imageUrl}) => (
              <View key={uid} style={styles.userCard}> 
                <Image 
                source={{
                  uri: imageUrl
                }}
                style={styles.userImage}
                />
                <Text style={styles.Username}>{name}</Text>
                <Text style={styles.userStatus}>{status}</Text>
              </View>
            ))} 
          </View>
        </ScrollView> 
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
    Card: {
      shadowOffset: {
        width: 1,
        height: 1
      },
      shadowColor: '#000000',
      shadowOpacity: 0.8,
      shadowRadius: 5
    },
    Container: {
      backgroundColor: '#CAD5E2',
      margin: 12,
      elevation: 3,
      borderRadius: 6,
    },
    cardStyle: {
      flexDirection: 'row'
    },
    userCard: {
      margin: 12,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    userImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
      marginBottom: 8
    },
    Username: {
      fontSize: 20,
      fontWeight: 'bold',
      margin: 4
    },
    userStatus: {
      fontSize: 16,
      color: '#000000',
      padding: 3
    }
})