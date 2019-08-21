import { AsyncStorage } from "react-native"
import { setDummyData, DECKS_STORAGE_KEY } from "./_decks"

export const getDecks = () => {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(results => {
    return results === null ? setDummyData() : JSON.parse(results)
  })
}

export const getDeck = id => {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(results => {
    const data = JSON.parse(results)
    return data[id]
  })
}

export const submitDeck = deck => {
  // Init questions
  deck.questions = []
  return AsyncStorage.mergeItem(
    DECKS_STORAGE_KEY,
    JSON.stringify({
      [deck.title]: deck
    })
  )
}

export const submitCard = (card, id) => {
  getDeck(id).then(deck => {
    deck.questions = deck.questions.concat(card)

    return AsyncStorage.mergeItem(
      DECKS_STORAGE_KEY,
      JSON.stringify({
        [id]: deck
      })
    )
  })
}
