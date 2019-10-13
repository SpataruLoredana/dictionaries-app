import { connect } from 'react-redux';
import ViewDictionaries from './ViewDictionaries';

import { AppState } from './../../store';

const state2Props = (state: AppState) => {
  return {
    dictionaries: Object.values(state.dictionaries)
  };
}

export default connect(state2Props)(ViewDictionaries);