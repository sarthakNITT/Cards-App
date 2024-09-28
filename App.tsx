// on the app press d for developer options if you suddenly get inspect option then do this and press toggle inspect element
// rnfe is the shortcut to get structure of app.tsx
import React from 'react'
import {
  View, 
  Text,
  SafeAreaView, 
  ScrollView,
} from 'react-native'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCard from './components/FancyCard'
import ActionCard from './components/ActionCard'
import ContactList from './components/ContactList'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards></FlatCards>
        <ElevatedCards></ElevatedCards>
        <FancyCard></FancyCard>
        <ActionCard></ActionCard>
        <ContactList></ContactList>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App