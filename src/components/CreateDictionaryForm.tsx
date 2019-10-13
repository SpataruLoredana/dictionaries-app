import React, { Component, ComponentState } from 'react';
import { IDictionary } from './../store/interfaces';

interface State {
  title: string;
  description: string;
  error: string;
  id: number;
};

interface Props {
  createDictionary: (payload: IDictionary) => void;
  onCloseModal: () => void;
}

export default class CreateDictionaryForm extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      error: '',
      id: 1100
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const field = event.target.name;
    const newValue = event.target.value;
    this.setState({ [field]: newValue } as ComponentState);
  }

  handleFormSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!this.isValidForm()) {
      return;
    }
    let { id } = this.state;
    const payload = {
      title: this.state.title,
      description: this.state.description,
      id: id++,
      rows: []
    };
    this.setState({ id });
    this.props.createDictionary(payload);
    this.props.onCloseModal();
  }

  isValidForm() {
    let error = '';
    if (!this.state.title) {
      error = 'Please add a title to create a new dictionary';
    } else {
      error = '';
    }
    this.setState({ error });
    return !error;
  }

  renderErrorMessage() {
    if (this.state.error) {
      return <p className='text-danger'>{this.state.error}</p>;
    }
    return null;
  }

  render() {
    const { onCloseModal } = this.props;
    return (
      <div className='my-2'>
        <h3 className='text-center'>Create Dictionary</h3>
        {this.renderErrorMessage()}
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group my-4">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              name='title'
              id="title"
              placeholder="Enter title here..."
              value={this.state.title}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group my-4">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              name='description'
              id="description"
              placeholder="Enter description here..."
              value={this.state.description}
              onChange={this.handleInputChange}
            />
          </div>
          <div className='d-flex justify-content-end mt-5'>
            <button type="submit" className="btn btn-success mx-1">
              Create Dictionary
            </button>
            <button type="button" className="btn btn-danger mx-1" onClick={onCloseModal}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
}
