import { connect } from 'react-redux';
import ManageDictionaries from './ManageDictionaries';

import { AppState } from './../../store';
import {
  createDictionary,
  deleteDictionary,
  addRow,
  editRow,
  deleteRow
} from './../../store/dictionaries/actions';

const state2Props = (state: AppState) => {
  return {
    dictionaries: Object.values(state.dictionaries)
  };
}

export default connect(
  state2Props,
  {
    createDictionary,
    deleteDictionary,
    addRow,
    editRow,
    deleteRow
  }
)(ManageDictionaries);