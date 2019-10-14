import React, { Component } from 'react';
import './style.scss';

import TableRow from '../TableRow/TableRow';
import ModalDialog from '../ModalDialog/ModalDialog';
import ConfirmAlert from '../ConfirmAlert';

import {
  IDictionary,
  IRowData,
  IDictionaryError
} from '../../store/interfaces';
import { VALIDATIONS } from '../../constants';

interface State {
  isAddingRow: boolean;
  confirmModalOpen: boolean;
  error: IDictionaryError;
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
      confirmModalOpen: false,
      error: {
        message: '',
        rowIndexes: []
      }
    };
    this.handleAddRow = this.handleAddRow.bind(this);
    this.onOpenConfirmModal = this.onOpenConfirmModal.bind(this);
    this.onConfirmDelete = this.onConfirmDelete.bind(this);
    this.onCancelDelete = this.onCancelDelete.bind(this);
    this.isDictionaryValid = this.isDictionaryValid.bind(this);
    this.resetError = this.resetError.bind(this);
  }

  handleAddRow() {
    this.resetError();
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

  isDictionaryValid(savingRow: IRowData, rowIndex: number) {
    let errMessage = '';
    const rowErrIndex = [];
    const restRows = this.props.rows.filter((row, index) => {
      return index !== rowIndex;
    });

    restRows.forEach((row, index) => {
      if (row.from === savingRow.from && row.to === savingRow.to) {
        errMessage = VALIDATIONS.CLONE;
        rowErrIndex.push(index);
      }
      if (row.from === savingRow.from && row.to !== savingRow.to) {
        errMessage = VALIDATIONS.FORK;
        rowErrIndex.push(index);
      }
    });
    if (!savingRow.from || !savingRow.to) {
      errMessage = VALIDATIONS.EMPTY;
    }
    if (errMessage) {
      rowErrIndex.push(rowIndex);
    }
    this.setState({
      error: {
        message: errMessage,
        rowIndexes: rowErrIndex
      }
    });

    return !errMessage;
  }

  resetError() {
    this.setState({
      error: {
        message: '',
        rowIndexes: []
      }
    });
  }

  renderErrorMessage() {
    if (this.state.error) {
      return <p className='text-danger mt-4'>{this.state.error.message}</p>;
    }
    return null;
  }

  renderCardHeader() {
    const modalButtons = [
      { color: 'danger', label: 'Yes, delete it', onClick: this.onConfirmDelete },
      { color: 'primary', label: 'Cancel', onClick: this.onCancelDelete }
    ];
    return (
      <div className='card-header'>
        {this.props.title}
        <button
          className='btn p-0'
          title='Delete Dictionary'
          onClick={this.onOpenConfirmModal}
        >
          <i className='material-icons' >delete</i>
        </button>
        <ModalDialog
          isDismissable={false}
          modalIsOpen={this.state.confirmModalOpen}
        >
          <ConfirmAlert
            message='Are you sure you want to delete this dictionary?'
            buttons={modalButtons}
          />
        </ModalDialog>
      </div>
    );
  }

  renderTable() {
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
          {this.props.rows.map((row, index) => (
            <TableRow
              key={index}
              rowData={row}
              dictionaryId={this.props.id}
              rowIndex={index}
              editRow={this.props.editRow}
              deleteRow={this.props.deleteRow}
              editModeOn={this.state.isAddingRow}
              isDictionaryValid={this.isDictionaryValid}
              hasError={this.state.error.rowIndexes.includes(index)}
              resetError={this.resetError}
            />
          ))}
        </tbody>
      </table>
    );
  }

  render() {
    return (
      <div className='card dictionary-card'>
        {this.renderCardHeader()}
        <div className='card-body'>
          <p className='text-muted text-small'>
            {this.props.description}
          </p>
          <button
            type='button'
            className='btn btn-primary btn-sm'
            onClick={this.handleAddRow}>
            Add New Row
          </button>
          {this.renderErrorMessage()}
          {this.renderTable()}
        </div>
      </div>
    );
  }
}
