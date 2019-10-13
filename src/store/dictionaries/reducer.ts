import {
  CREATE_DICTIONARY,
  DELETE_DICTIONARY,
  DictionaryActionTypes,
  ADD_ROW,
  EDIT_ROW,
  DELETE_ROW,
  RowActionTypes
} from './types';
import { DictionaryState, IRowData } from '../interfaces';
import appInitialState from './../app-initial.state';

const initialState: DictionaryState = appInitialState.dictionaries;

export default (
  state = initialState, action: DictionaryActionTypes | RowActionTypes): DictionaryState => {
  switch (action.type) {
    case CREATE_DICTIONARY:
      return {
        ...state,
        [action.payload.id]: action.payload
      };

    case DELETE_DICTIONARY:
      const { [action.id]: omit, ...dictionaries } = state;
      return dictionaries;

    case ADD_ROW:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          rows: [
            ...state[action.id].rows,
            { from: '', to: '' }
          ]
        }
      };

    case EDIT_ROW:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          rows: [
            ...state[action.id].rows.filter((row, index) => index < action.rowIndex),
            action.row,
            ...state[action.id].rows.filter((row, index) => index > action.rowIndex)
          ]
        }
      };

    case DELETE_ROW:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          rows: [
            ...state[action.id].rows.filter((row, index) => index !== action.rowIndex)
          ]
        }
      };

    default:
      return state;
  }
}
