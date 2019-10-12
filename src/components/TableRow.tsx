import React, { Component, ComponentState } from 'react';

interface Props {
  rowData: string[];
  editModeOn?: boolean;
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
      from: this.props.rowData[0],
      to: this.props.rowData[1]
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
    // add action to save row data
    this.setState({ editModeOn: false });
  }

  handleDeleteRow() {
    // add action to delete row
  }

  renderInEditMode() {
    if (this.state.editModeOn) {
      return (
        <tr>
          <td>
            <input
              className='form-control form-control-sm'
              type='text'
              name='from'
              placeholder='From'
              value={this.state.from}
              onChange={this.handleInputChange}
            />
          </td>
          <td>
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
          <td>{this.props.rowData[0]}</td>
          <td>{this.props.rowData[1]}</td>
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