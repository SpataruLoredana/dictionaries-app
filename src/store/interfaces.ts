export interface IDictionary {
  title: string;
  description: string;
  id: number;
  table: any
}

export interface IDictionaryProps {
  title: string;
  description: string;
  id: number;
  rows: Array<[string, string]>;
}

export interface IRowData {
  from: string;
  to: string;
}

export interface DictionaryState {
  [id: number]: IDictionary
};
