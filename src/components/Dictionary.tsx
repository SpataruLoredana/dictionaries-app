import React, { Component } from 'react';

import Table from './Table';
import ModalDialog from './Modal';
import ConfirmAlert from './ConfirmBox';

import { IDictionaryProps } from './../store/interfaces';

interface State {
  isAddingRow: boolean;
  confirmModalOpen: boolean;
}

interface Props extends IDictionaryProps {
  onDeleteDictionary: (id: number) => void;
}

export default class Dictionary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isAddingRow: false,
      confirmModalOpen: false
    };
    this.handleAddRow = this.handleAddRow.bind(this);
    this.onOpenConfirmModal = this.onOpenConfirmModal.bind(this);
    this.onConfirmDelete = this.onConfirmDelete.bind(this);
    this.onCancelDelete = this.onCancelDelete.bind(this);
  }

  handleAddRow() {
    this.setState({ isAddingRow: true });
  }

  onOpenConfirmModal() {
    this.setState({ confirmModalOpen: true });
  }

  onConfirmDelete() {
    this.props.onDeleteDictionary(this.props.id);
    this.setState({ confirmModalOpen: false });
  }

  onCancelDelete() {
    this.setState({ confirmModalOpen: false });
  }

  render() {
    const { title, description, id, rows } = this.props;
    return (
      <div className="card mx-4 my-5" style={{ width: '520px' }}>
        <div className="card-header">
          {title}
          <button className='btn p-0' title='Delete Dictionary' onClick={this.onOpenConfirmModal}>
            <i className="material-icons text-light" >delete</i>
          </button>
          <ModalDialog
            isDismissable={false}
            modalIsOpen={this.state.confirmModalOpen}
          >
            <ConfirmAlert
              message='Are you sure you want to delete this?'
              buttonConfirmLabel='Yes, delete it'
              buttonCancelLabel='Cancel'
              onConfirm={this.onConfirmDelete}
              onCancel={this.onCancelDelete}
            />
          </ModalDialog>
        </div>
        <div className="card-body">
          <p className='text-muted text-small'>{description}</p>
          <button type="button" className="btn btn-primary btn-sm" onClick={this.handleAddRow}>
            Add New Row
          </button>
          <Table rows={rows} addingNewRow={this.state.isAddingRow} />
        </div>
      </div>
    );
  }
}
