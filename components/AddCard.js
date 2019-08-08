import React, { Component } from "React"
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native"
import { purple, white, pink } from "../utils/colors"

const SubmitButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.androidSubmitButton} onPress={onPress}>
      <Text style={styles.submitBtnText}>SUBMIT</Text>
    </TouchableOpacity>
  )
}

export default class AddCard extends Component {
  constructor(props) {
    super(props)
    this.state = { question: "", answer: "" }
  }

  render() {
    const { deckTitle, deckColor } = this.props

    return (
      <View style={[styles.container, { backgroundColor: deckColor }]}>
        <TextInput
          multiline={true}
          numberOfLines={3}
          style={styles.input}
          onChangeText={question => this.setState({ question })}
          value={this.state.question}
          placeholder={"Add a question"}
          placeholderTextColor={purple}
        />
        <TextInput
          multiline={true}
          numberOfLines={3}
          style={styles.input}
          onChangeText={answer => this.setState({ answer })}
          value={this.state.answer}
          placeholder={"Add the answer"}
          placeholderTextColor={purple}
        />
        <SubmitButton onPress={this.submit} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    justifyContent: "center",
    padding: 10,
    height: "100%"
  },
  input: {
    height: 80,
    margin: 10,
    fontSize: 22,
    backgroundColor: white,
    opacity: 0.7
  },
  androidSubmitButton: {
    backgroundColor: purple,
    padding: 10,
    borderRadius: 5,
    height: 45,
    marginLeft: 30,
    marginRight: 30,
    alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "center"
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: "center"
  }
})
