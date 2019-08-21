import React, { Component } from "react"
import { StyleSheet, Text, ScrollView, TouchableOpacity } from "react-native"
import { connect } from "react-redux"
import { getDecks } from "../utils/api"
import { receiveDecks } from "../actions"
import { AppLoading } from "expo"
import DeckSummary from "./DeckSummary"

class DeckList extends Component {
  state = {
    ready: false
  }

  componentDidMount() {
    const { dispatch } = this.props

    getDecks()
      .then(decks => {
        dispatch(receiveDecks(decks))
      })
      .then(() =>
        this.setState(() => ({
          ready: true
        }))
      )
  }

  render() {
    const { decks } = this.props
    const { ready } = this.state

    if (ready === false) {
      return <AppLoading />
    }

    if (decks) {
      return (
        <ScrollView>
          {Object.keys(decks).map(title => {
            return (
              <TouchableOpacity
                key={title}
                onPress={() =>
                  this.props.navigation.navigate("DeckDetails", {
                    title: title
                  })
                }
              >
                <DeckSummary deck={decks[title]} />
              </TouchableOpacity>
            )
          })}
        </ScrollView>
      )
    }
  }
}

const mapStateToProps = decks => {
  return {
    decks,
    totalDecks: Object.keys(decks).length
  }
}

export default connect(mapStateToProps)(DeckList)
