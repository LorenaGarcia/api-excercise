import { SEARCH_CHARACTERS } from "../actions/CharacterActions";

const initialState = {
  data: [],
};

export default function charactersList(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case SEARCH_CHARACTERS:
      return {
        ...state,
        data: payload.results,
      };
    default:
      return state;
  }
}
