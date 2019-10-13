import React, { Component } from 'react';

import { IDictionary } from './../../store/interfaces';
import ReadOnlyDictionary from './../../components/ReadOnlyDictionary';
import NavBar from './../../components/NavBar';

interface Props {
  dictionaries: IDictionary[];
}

const ViewDictionaries: React.FC<Props> = ({
  dictionaries
}) => (
    <>
      <NavBar/>
      <h1 className='display-4 text-center mb-5'>Dictionaries</h1>
      <div className='d-flex justify-content-center flex-wrap'>
        {dictionaries.map(dictionary => (
          <ReadOnlyDictionary
            title={dictionary.title}
            description={dictionary.description}
            key={dictionary.id}
            rows={dictionary.rows}
            id={dictionary.id}
          />
        ))}
      </div>
    </>
  );

export default ViewDictionaries;