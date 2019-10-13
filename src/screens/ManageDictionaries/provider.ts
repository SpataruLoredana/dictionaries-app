import { connect } from 'react-redux';
import ManageDictionaries from './ManageDictionaries';

import { AppState } from './../../store';
import { createDictionary, deleteDictionary } from './../../store/dictionaries/actions';

const state2Props = (state: AppState) => {
  return {
    dictionaries: Object.values(state.dictionaries)
  };
}

export default connect(
  state2Props,
  { createDictionary, deleteDictionary }
)(ManageDictionaries);