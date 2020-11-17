import { REQUEST_CHARACTER_ITEM } from "../actions/CharacterActions";

const initialState = {
  data: {},
};

export default function characterItem(state = initialState, { type, payload }) {
  switch (type) {
    case REQUEST_CHARACTER_ITEM:
      const { name, status, species, image, id } = payload;
      const characterItem = { name, status, species, image, id };

      return { ...state, data: characterItem };
    default:
      return state;
  }
}
