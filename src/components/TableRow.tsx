import React, { Component, ComponentState } from 'react';
import { IRowData } from './../store/interfaces';

interface Props {
  rowData: IRowData;
  editModeOn?: boolean;
  dictionaryId: number;
  rowIndex: number;
  editRow: (id: number, rowIndex: number, row: IRowData) => void;
  deleteRow: (id: number, rowIndex: number) => void;
}

interface State {
  editModeOn: boolean;
  from: string;
  to: string;
}

export default class TableRow extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      editModeOn: this.props.editModeOn || false,
      from: this.props.rowData.from,
      to: this.props.rowData.to
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleEditRow = this.handleEditRow.bind(this);
    this.handleSaveRow = this.handleSaveRow.bind(this);
    this.handleDeleteRow = this.handleDeleteRow.bind(this);
  }

  handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const field = event.target.name;
    const newValue = event.target.value;
    this.setState({ [field]: newValue } as ComponentState);
  }

  handleEditRow() {
    this.setState({ editModeOn: true });
  }

  handleSaveRow() {
    const { dictionaryId, rowIndex } = this.props;
    const row = {
      from: this.state.from,
      to: this.state.to
    };
    this.props.editRow(dictionaryId, rowIndex, row);
    this.setState({ editModeOn: false });
  }

  handleDeleteRow() {
    this.props.deleteRow(this.props.dictionaryId, this.props.rowIndex);
  }

  renderInEditMode() {
    if (this.state.editModeOn) {
      return (
        <tr>
          <td className='px-0'>
            <input
              autoFocus
              className='form-control form-control-sm'
              type='text'
              name='from'
              placeholder='From'
              value={this.state.from}
              onChange={this.handleInputChange}
            />
          </td>
          <td className='px-0'>
            <input
              className='form-control form-control-sm'
              type='text'
              name='to'
              placeholder='To'
              value={this.state.to}
              onChange={this.handleInputChange}
            />
          </td>
          <td>
            <button className='btn py-0 px-1' onClick={this.handleSaveRow}>
              <i className='material-icons'>save</i>
            </button>
            <button className='btn py-0 px-1' onClick={this.handleDeleteRow}>
              <i className='material-icons color-danger'>clear</i>
            </button>
          </td>
        </tr>
      );
    }
    return null;
  }

  renderInStaticMode() {
    if (!this.state.editModeOn) {
      return (
        <tr>
          <td>{this.props.rowData.from}</td>
          <td>{this.props.rowData.to}</td>
          <td>
            <button className='btn py-0 px-1' onClick={this.handleEditRow}>
              <i className='material-icons'>edit</i>
            </button>
            <button className='btn py-0 px-1' onClick={this.handleDeleteRow}>
              <i className='material-icons color-danger'>clear</i>
            </button>
          </td>
        </tr>
      );
    }
    return null;
  }

  render() {
    return (
      <>
        {this.renderInStaticMode()}
        {this.renderInEditMode()}
      </>
    );
  }
}