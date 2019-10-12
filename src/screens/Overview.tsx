import React from 'react';
import Dictionary from './../components/Dictionary';
import ModalDialog from './../components/Modal';
import { dataset } from './../dataset';

const Overview: React.FC = () => {
  const dictionaries = Object.values(dataset);
  return (
    <>
    <h1 className='display-4 text-center my-2'>Your Dictionaries</h1>
    <ModalDialog buttonLabel='Create Dictionary' buttonIcon='add' isDismissable={true}/>
    <div className='d-flex justify-content-center'>
      {dictionaries.map(dict => (
        <Dictionary
          title={dict.title}
          description={dict.description}
          id={dict.id}
          rows={Object.entries(dict.table)}
        />
      ))}
    </div>
    </>
  );
}

export default Overview;