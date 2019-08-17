import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { pink, gray, blue, white, green } from "../utils/colors"
import { MaterialIcons } from "@expo/vector-icons"

const DeckDetails = ({ deck }) => {
  return (
    <View style={[styles.container, { backgroundColor: deck.color }]}>
      <View style={styles.details}>
        <Text style={styles.title}>{deck.title}</Text>
        <Text style={styles.total}>{deck.questions.length} card(s)</Text>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.add}>
          <View style={[styles.iconContainer, { backgroundColor: green }]}>
            <MaterialIcons name="note-add" style={{ color: white }} size={35} />
          </View>
          <Text style={styles.add}>Add new card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.start}>
          <View style={[styles.iconContainer, { backgroundColor: blue }]}>
            <MaterialIcons
              name="play-arrow"
              style={{ color: white }}
              size={35}
            />
          </View>
          <Text style={styles.start}>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "space-around"
  },
  details: {
    alignSelf: "center"
  },
  title: {
    fontSize: 50,
    textAlign: "center"
  },
  total: {
    fontSize: 20,
    textAlign: "center",
    color: gray
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  add: { color: green, fontSize: 25, alignItems: "center" },
  start: {
    color: blue,
    fontSize: 25,
    alignItems: "center"
  },
  iconContainer: {
    padding: 6,
    borderRadius: 8,
    width: 50,
    height: 50
  }
})

export default DeckDetails
