import React, { Component } from 'react';

import Dictionary from './../../components/Dictionary';
import ModalDialog from './../../components/Modal';

import { IDictionary } from './../../store/interfaces';

interface Props {
  dictionaries: IDictionary[];
  deleteDictionary: (id: number) => void;
}

export default class ManageDictionaries extends Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { dictionaries, deleteDictionary } = this.props;
    return (
      <>
      <h1 className='display-4 text-center my-2'>Your Dictionaries</h1>
      <ModalDialog buttonLabel='Create Dictionary' buttonIcon='add' isDismissable={true} />
      <div className='d-flex justify-content-center'>
        {dictionaries.map(dictionary => (
          <Dictionary
            title={dictionary.title}
            description={dictionary.description}
            id={dictionary.id}
            rows={Object.entries(dictionary.table)}
            onDeleteDictionary={deleteDictionary}
          />
        ))}
      </div>
    </>
    );
  }
}