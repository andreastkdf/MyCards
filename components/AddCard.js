import React, { Component } from "React"
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native"
import { connect } from "react-redux"
import { addCard } from "../actions"
import { submitCard } from "../utils/api"
import { purple, white } from "../utils/colors"

const SubmitButton = ({ onPress, disabled }) => {
  return (
    <TouchableOpacity
      style={[styles.androidSubmitButton, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.submitBtnText}>SUBMIT</Text>
    </TouchableOpacity>
  )
}

class AddCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      question: "",
      answer: "",
      deckTitle: this.props.deckTitle
    }
  }

  submit = () => {
    const { question, answer, deckTitle } = this.state
    const card = { question, answer }

    //  Reset state
    this.setState(() => ({
      question: "",
      answer: ""
    }))

    // Save card in local storage
    submitCard(card, deckTitle)

    this.props.dispatch(addCard(card, deckTitle))
  }

  render() {
    const { deckColor } = this.props

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
        <SubmitButton
          onPress={this.submit}
          disabled={this.state.question === "" || this.state.answer === ""}
        />
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
    margin: 10,
    alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "center"
  },
  disabled: {
    opacity: 0.5
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: "center"
  }
})

export default connect()(AddCard)
