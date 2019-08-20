export const RECEIVE_DECKS = "RECEIVE_DECKS"
export const ADD_DECK = "ADD_DECK"

// Receive decks action creator
export const receiveDecks = decks => {
  return {
    type: RECEIVE_DECKS,
    decks
  }
}

// Add deck action creator
export const addDeck = ({ title, color }) => {
  return {
    type: ADD_DECK,
    title,
    color
  }
}

// TODO: add ADD_CARD action
