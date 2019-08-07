import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { gray } from "../utils/colors"

const DeckDetails = ({ deck }) => {
  return (
    // <View style={{ backgroundColor: deck.color }}>
    //   <Text style={styles.title}>{deck.title}</Text>
    //   <Text style={styles.total}>{deck.questions.length} card(s)</Text>
    // </View>
    <View style={{ marginTop: 50 }}>
      <Text>{JSON.stringify(deck)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 50
  },
  total: {
    fontSize: 20,
    color: gray
  }
})

export default DeckDetails
