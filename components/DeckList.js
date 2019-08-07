import React, { Component } from "react"
import { StyleSheet, Text, View } from "react-native"
import { connect } from "react-redux"
import { getDecks } from "../utils/api"
import { receiveDecks } from "../actions"
import DeckSummary from "./DeckSummary"

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
        {Object.keys(decks).map(title => {
          return (
            <View key={title}>
              <DeckSummary deck={decks[title]} />
            </View>
          )
        })}
      </View>
    )
  }
}

const mapStateToProps = decks => {
  return {
    decks,
    totalDecks: Object.keys(decks).length
  }
}

export default connect(mapStateToProps)(DeckList)
