import React from 'react';
import TableRow from './TableRow';

interface Props {
  rows: Array<string[]>;
  addingNewRow: boolean;
}

const Table: React.FC<Props> = ({
  rows,
  addingNewRow
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
        {rows.map((row, index) => <TableRow key={index} rowData={row} />)}
        { addingNewRow && <TableRow rowData={[]} editModeOn={true}/>}
      </tbody>
    </table>
  );
}

export default Table;