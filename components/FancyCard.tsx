import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.HeadingText}>Trending Places</Text>
      <View style={[styles.card , styles.cardElevated]}>
        <Image 
          source={{
            uri: 'https://villainnudaipur.com/wp-content/uploads/2023/11/Trending-Places-to-Visit-in-Udaipur.jpg'
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Udaipur Fort Hotel</Text>
          <Text style={styles.cardLabel}>Udaipur, Rajasthan</Text>
          <Text style={styles.cardDescription}>The Udaipur Fort Hotel is a luxurious heritage property situated in the picturesque city of Udaipur, Rajasthan, India. This hotel is renowned for its blend of historic charm and modern amenities. Originally a fort, the hotel offers guests an immersive experience of Rajasthan's royal past with its majestic architecture, intricate carvings, and regal decor. Visitors can enjoy stunning views of Udaipur's lakes and the surrounding Aravalli hills from various vantage points within the property. The Udaipur Fort Hotel provides a range of upscale accommodations, gourmet dining options, and curated experiences that highlight the rich cultural heritage of the region, making it a perfect destination for travelers seeking a blend of history and luxury. </Text>
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
    card: {
      height: 460,
      width: 350,
      borderRadius: 6,
      margin: 14
    },
    cardElevated: {
      backgroundColor: '#CAD5E2',
      elevation: 4,
      shadowOffset: {
        width: 1,
        height: 1
      },
      shadowColor: '#000000',
      shadowOpacity: 0.8,
      shadowRadius: 5
    },
    cardImage: {
      height: 180,
      marginBottom: 12,
      borderTopLeftRadius: 6,
      borderTopRightRadius: 6
    },
    cardBody: {
      flex: 1,
      flexGrow: 1,
      paddingHorizontal: 12
    },
    cardTitle: {
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 6
    },
    cardLabel: {
      fontSize: 16,
      marginBottom: 2
    },
    cardDescription: {
      fontSize: 12,
      flexShrink: 1,
      marginTop: 6
    }
})