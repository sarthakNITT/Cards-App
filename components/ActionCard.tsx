import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function  () {
    function openWebsite(websitelink: string){
        Linking.openURL(websitelink)
    }
    return (
    <View>
      <Text style={styles.HeadingText}>Blog Card</Text>
      <View style={[styles.Card , styles.ElevatedCard]}>
        <View style={styles.HeadingContainer}>
        <Text style={styles.HeaderText}>What's new in Javascript 21 - ES12</Text>
        </View>
        <Image
        source={{
            uri: 'https://plus.unsplash.com/premium_photo-1680626561534-079425381952?q=80&w=3017&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }}
        style={styles.CardImage}
        />
        <View style={styles.CardBody}>
            <Text numberOfLines={3}>
            Just like every year, Javascript brings in new features. This year
            javascript is bringing 4 new features, which are almost in
            production rollout. I won't be wasting much more time and directly
            jump to code with easy to understand examples.</Text>
        </View>
        <View style={styles.CardBodyFooter}>
            <TouchableOpacity //callback function () => () means calling another function here
            onPress={() => openWebsite('https://reactnative.dev/docs/more-resources')}> 
                <Text style={styles.SocialLinks}>Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity //callback function () => () means calling another function here
            onPress={() => openWebsite('https://www.instagram.com/sarrthak_2003/')}> 
                <Text style={styles.SocialLinks}>Follow Me</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    HeadingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    Card:{
        width: 350,
        height: 280,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 14
    },
    ElevatedCard: {
        backgroundColor: '#CAD5E2',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1 
        },  
        shadowColor: '#000000',
        shadowOpacity: 0.8,
        shadowRadius: 5
    },
    HeadingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    HeaderText: {
        color: '#000',
        fontSize: 15,
        fontWeight: '600'
    },
    CardImage: {
        height:100
    },
    CardBody: {
        padding: 10
    },
    CardBodyFooter: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    SocialLinks: {
        fontSize: 16,
        color: '#FFFFFF',
        backgroundColor: '#3CB371',
        padding: 8,
        borderRadius: 6,
    }
})