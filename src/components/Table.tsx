import React from 'react';
import TableRow from './TableRow';
import { IRowData } from './../store/interfaces';

interface Props {
  rows:  IRowData[];
  addingNewRow: boolean;
  id: number;
  editRow: (id: number, rowIndex: number, row: IRowData) => void;
  deleteRow: (id: number, rowIndex: number) => void;
}

const Table: React.FC<Props> = ({
  rows,
  addingNewRow,
  id,
  editRow,
  deleteRow
}) => {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th scope='col'>From</th>
          <th scope='col'>To</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <TableRow
            key={index}
            rowData={row}
            dictionaryId={id}
            rowIndex={index}
            editRow={editRow}
            deleteRow={deleteRow}
            editModeOn={addingNewRow}
          />
        ))}
      </tbody>
    </table>
  );
}

export default Table;