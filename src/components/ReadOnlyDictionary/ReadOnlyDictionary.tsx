import React from 'react';
import { IDictionary } from '../../store/interfaces';
import './style.scss';

const ReadOnlyDictionary: React.FC<IDictionary> = ({
  title,
  description,
  rows
}) => (
    <div className='card card-readonly mx-4 my-5'>
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <p className='card-text text-muted'>{description}</p>
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
              <tr key={index}>
                <td>{row.from}
                </td>
                <td>{row.to}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

export default ReadOnlyDictionary;