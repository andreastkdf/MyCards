import React from "React"
import { StyleSheet, Text, View } from "react-native"
import { gray } from "../utils/colors"

const DeckSummary = ({ deck }) => {
  return (
    <View style={[styles.deck, { backgroundColor: deck.color }]}>
      <Text style={styles.title}>{deck.title}</Text>
      <Text style={styles.total}>{deck.questions.length} card(s)</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  deck: {},
  title: {
    fontSize: 50
  },
  total: {
    fontSize: 20,
    color: gray
  }
})

export default DeckSummary
