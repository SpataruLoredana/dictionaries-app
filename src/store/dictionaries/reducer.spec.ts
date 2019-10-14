import {
  CREATE_DICTIONARY,
  CreateDictionaryAction,
  DELETE_DICTIONARY,
  DeleteDictionaryAction,
  ADD_ROW,
  AddRowAction,
  EDIT_ROW,
  EditRowAction,
  DELETE_ROW,
  DeleteRowAction
 } from './types';
import reducer from './reducer';
import appInitialState from './../app-initial-state';

describe('Dictionaries Reducer', () => {
  const emptyState = {};
  const initialState = appInitialState.dictionaries;

  it(`handles correctly 'createDictionary' action`, () => {
    const payload = {
      title: 'Color Transformation',
      description: 'Lorem ipsum dolor sit amet',
      id: 1000,
      rows: []
    };
    const action: CreateDictionaryAction = {
      type: CREATE_DICTIONARY,
      payload
    };
    const expectedState = { 1000: payload };
    expect(reducer(emptyState, action)).toEqual(expectedState);
  });

  it(`handles correctly 'deleteDictionary' action`, () => {
    const id = 1001;
    const action: DeleteDictionaryAction = {
      type: DELETE_DICTIONARY,
      id
    };
    const expectedState =  { ...initialState};
    delete expectedState[id];
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it(`handles correctly 'addRow' action`, () => {
    const id = 1000;
    const action: AddRowAction = {
      type: ADD_ROW,
      id
    };
    const updatedState = reducer(initialState, action);
    const prevRowsLength = initialState[id].rows.length;
    expect(updatedState[id].rows.length).toBe(prevRowsLength + 1);
  });

  it(`handles correctly 'editRow' action`, () => {
    const id = 1001;
    const action: EditRowAction = {
      type: EDIT_ROW,
      id,
      rowIndex: 1,
      row: { from: 'Key', to: 'Prop'}
    };
    const updatedState = reducer(initialState, action);
    expect(updatedState[id].rows[action.rowIndex]).toEqual(action.row);
  });

  it(`handles correctly 'deleteRow' action`, () => {
    const id = 1002;
    const action: DeleteRowAction = {
      type: DELETE_ROW,
      id,
      rowIndex: 0
    };
    const deletedRow = { from: 'USA', to: 'United States' };
    const prevRowsLength = initialState[id].rows.length;
    const updatedState = reducer(initialState, action);
    expect(updatedState[id].rows.length).toBe(prevRowsLength - 1);
    expect(updatedState[id].rows[0]).not.toEqual(deletedRow);
  });
});