import { IDictionary, IRowData } from './../interfaces';
import {
  CREATE_DICTIONARY,
  DELETE_DICTIONARY,
  ADD_ROW,
  EDIT_ROW,
  DELETE_ROW
} from './types';


export const createDictionary = (payload: IDictionary) => {
  return {
    type: CREATE_DICTIONARY,
    payload
  };
};


export const deleteDictionary = (id: number) => {
  return {
    type: DELETE_DICTIONARY,
    id
  };
};


export const addRow = (id: number) => {
  return {
    type: ADD_ROW,
    id
  };
};


export const editRow = (id: number, rowIndex: number, row: IRowData) => {
  return {
    type: EDIT_ROW,
    id,
    rowIndex,
    row
  };
};

export const deleteRow = (id: number, rowIndex: number) => {
  return {
    type: DELETE_ROW,
    id,
    rowIndex
  };
};
