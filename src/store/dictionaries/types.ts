import { IDictionary, IRowData } from './../interfaces';

/**
 * Dictionary Actions
 */
export const CREATE_DICTIONARY = 'CREATE_DICTIONARY';
export const DELETE_DICTIONARY = 'DELETE_DICTIONARY';

export interface CreateDictionaryAction {
  type: typeof CREATE_DICTIONARY;
  payload: IDictionary;
};

export interface DeleteDictionaryAction {
  type: typeof DELETE_DICTIONARY;
  id: number;
};

/**
 * Dictionary Rows Actions
 */
export const ADD_ROW = 'ADD_NEW_ROW';
export const EDIT_ROW = 'EDIT_ROW';
export const DELETE_ROW = 'DELETE_ROW';

export interface AddRowAction {
  type: typeof ADD_ROW;
  id: number;
};

export interface EditRowAction {
  type: typeof EDIT_ROW;
  id: number;
  rowIndex: number;
  row: IRowData;
};

export interface DeleteRowAction {
  type: typeof DELETE_ROW;
  id: number;
  rowIndex: number;
};

export type DictionaryActionTypes = CreateDictionaryAction | DeleteDictionaryAction;
export type RowActionTypes = AddRowAction | EditRowAction | DeleteRowAction;
