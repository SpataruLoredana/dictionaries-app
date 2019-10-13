import React, { Component } from 'react';

import Dictionary from '../../components/Dictionary/Dictionary';
import ModalDialog from '../../components/ModalDialog/ModalDialog';
import CreateDictionaryForm from '../../components/CreateDictionaryForm/CreateDictionaryForm';
import NavBar from '../../components/NavBar/NavBar';

import { IDictionary, IRowData } from './../../store/interfaces';

interface Props {
  dictionaries: IDictionary[];
  createDictionary: (payload: IDictionary) => void;
  deleteDictionary: (id: number) => void;
  editRow: (id: number, rowIndex: number, row: IRowData) => void;
  deleteRow: (id: number, rowIndex: number) => void;
  addRow: (id: number) => void;
}

interface State {
  modalFormOpen: boolean;
}

export default class ManageDictionaries extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      modalFormOpen: false
    };
    this.onOpenFormModal = this.onOpenFormModal.bind(this);
    this.onCloseFormModal = this.onCloseFormModal.bind(this);
  }

  onOpenFormModal() {
    this.setState({ modalFormOpen: true });
  }

  onCloseFormModal() {
    this.setState({ modalFormOpen: false });
  }

  render() {
    const { dictionaries, createDictionary, deleteDictionary } = this.props;
    return (
      <>
        <NavBar/>
        <h1 className='display-4 text-center mb-5'>Manage Dictionaries</h1>
        <button type="button" className="btn btn-success btn-add" onClick={this.onOpenFormModal}>
          <i className='material-icons'>add</i>
          Create Dictionary
        </button>
        <ModalDialog
          isDismissable={false}
          modalIsOpen={this.state.modalFormOpen}
        >
          <CreateDictionaryForm
            createDictionary={createDictionary}
            onCloseModal={this.onCloseFormModal}
          />
        </ModalDialog>
        <div className='d-flex justify-content-center flex-wrap'>
          {dictionaries.map(dictionary => (
            <Dictionary
              title={dictionary.title}
              description={dictionary.description}
              id={dictionary.id}
              rows={dictionary.rows}
              onDeleteDictionary={deleteDictionary}
              addRow={this.props.addRow}
              editRow={this.props.editRow}
              deleteRow={this.props.deleteRow}
            />
          ))}
        </div>
      </>
    );
  }
}