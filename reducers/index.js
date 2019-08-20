import { RECEIVE_DECKS, ADD_DECK, ADD_CARD } from "../actions/index"
import DeckList from "../components/DeckList"

const decks = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      }
    case ADD_DECK:
      const { title, color } = action

      return {
        ...state,
        [title]: {
          title: title,
          color: color,
          questions: []
        }
      }
    case ADD_CARD:
      const { card, deckTitle } = action

      let decks = {}

      decks = {
        ...state,
        [deckTitle]: {
          ...state[deckTitle],
          questions: state[deckTitle].questions.concat(card)
        }
      }

      return {
        ...state,
        ...decks
      }

    default:
      return state
  }
}

export default decks
