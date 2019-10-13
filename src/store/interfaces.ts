export interface IDictionary {
  title: string;
  description: string;
  id: number;
  rows: IRowData[]
}

export interface IRowData {
  from: string;
  to: string;
}

export interface DictionaryState {
  [id: number]: IDictionary
};

export interface IDictionaryError {
  message: string;
  rowIndexes: number[];
}