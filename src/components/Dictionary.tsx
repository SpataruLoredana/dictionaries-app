import React, { Component } from 'react';

import Table from './Table';
import ModalDialog from './ModalDialog';
import ConfirmAlert from './ConfirmAlert';

import { IDictionary, IRowData } from './../store/interfaces';

interface State {
  isAddingRow: boolean;
  confirmModalOpen: boolean;
}

interface Props extends IDictionary {
  onDeleteDictionary: (id: number) => void;
  addRow: (id: number) => void;
  editRow: (id: number, rowIndex: number, row: IRowData) => void;
  deleteRow: (id: number, rowIndex: number) => void;
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
    this.props.addRow(this.props.id);
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
    const modalButtons = [
      { color: 'danger', label: 'Yes, delete it', onClick: this.onConfirmDelete },
      { color: 'primary', label: 'Cancel', onClick: this.onCancelDelete }
    ];
    return (
      <div className="card mx-4 my-5">
        <div className="card-header">
          {title}
          <button
            className='btn p-0'
            title='Delete Dictionary'
            onClick={this.onOpenConfirmModal}
          >
            <i className="material-icons text-light" >delete</i>
          </button>
          <ModalDialog
            isDismissable={false}
            modalIsOpen={this.state.confirmModalOpen}
          >
            <ConfirmAlert
              message='Are you sure you want to delete this?'
              buttons={modalButtons}
            />
          </ModalDialog>
        </div>
        <div className="card-body">
          <p className='text-muted text-small'>{description}</p>
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={this.handleAddRow}
          >
            Add New Row
          </button>
          <Table
            rows={rows}
            addingNewRow={this.state.isAddingRow}
            id={id}
            editRow={this.props.editRow}
            deleteRow={this.props.deleteRow}
          />
        </div>
      </div>
    );
  }
}
