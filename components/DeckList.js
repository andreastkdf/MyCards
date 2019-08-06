import React, { Component } from "react"
import { StyleSheet, Text, View } from "react-native"
import { connect } from "react-redux"
import { getDecks } from "../utils/api"
import { receiveDecks } from "../actions"

class DeckList extends Component {
  componentDidMount() {
    const { dispatch } = this.props

    getDecks().then(decks => {
      dispatch(receiveDecks(decks))
    })
  }

  render() {
    const { decks } = this.props

    return (
      <View>
        <Text>{JSON.stringify(decks)}</Text>
      </View>
    )
  }
}

const mapStateToProps = decks => {
  return {
    decks
  }
}

export default connect(mapStateToProps)(DeckList)
