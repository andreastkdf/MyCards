import React, { Component } from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { connect } from "react-redux"
import { MaterialIcons } from "@expo/vector-icons"
import { gray, blue, white, green } from "../utils/colors"
import { clearLocalNotification, setLocalNotification } from "../utils/helpers"

class DeckDetails extends Component {
  static navigationOptions = ({ navigation }) => {
    const { title } = navigation.state.params

    return {
      title: title
    }
  }
  render() {
    const { deck } = this.props
    return (
      <View style={[styles.container, { backgroundColor: deck.color }]}>
        <View style={styles.details}>
          <Text style={styles.title}>{deck.title}</Text>
          <Text style={styles.total}>{deck.questions.length} card(s)</Text>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.add}
            onPress={() =>
              this.props.navigation.navigate("AddCard", {
                deckTitle: deck.title,
                deckColor: deck.color
              })
            }
          >
            <View style={[styles.iconContainer, { backgroundColor: green }]}>
              <MaterialIcons
                name="note-add"
                style={{ color: white }}
                size={35}
              />
            </View>
            <Text style={styles.add}>Add new card</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.start}
            onPress={() => {
              clearLocalNotification().then(setLocalNotification)
              this.props.navigation.navigate("Quiz", {
                deck: deck
              })
            }}
          >
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
}

const mapStateToProps = (state, { navigation }) => {
  const { title } = navigation.state.params

  return {
    title,
    deck: state[title]
  }
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

export default connect(mapStateToProps)(DeckDetails)
