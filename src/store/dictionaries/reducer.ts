import {
  CREATE_DICTIONARY,
  DELETE_DICTIONARY,
  DictionaryActionTypes
} from './types';
import { DictionaryState } from '../interfaces';
import appInitialState from './../app-initial.state';

const initialState: DictionaryState = appInitialState.dictionaries;

export default (state = initialState, action: DictionaryActionTypes): DictionaryState => {
  switch (action.type) {
    case CREATE_DICTIONARY:
      return {
        ...state,
        [action.payload.id]: action.payload
      };

    case DELETE_DICTIONARY:
      const { [action.id]: omit, ...dictionaries } = state;
      return dictionaries;

    default:
      return state;
  }
}
