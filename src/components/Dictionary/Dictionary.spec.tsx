import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Dictionary from './Dictionary';

describe('<Dictionary>', () => {
  let wrapper: ShallowWrapper;
  const onDeleteDictionaryMock = jest.fn();
  const addRowMock = jest.fn();
  const editRowMock = jest.fn();
  const deleteRowMock = jest.fn();

  const defaultProps = {
    onDeleteDictionary: onDeleteDictionaryMock,
    addRow: addRowMock,
    editRow: editRowMock,
    deleteRow: deleteRowMock,
    title: 'Dictionary',
    description: 'Lorem ipsum dolor sit amet',
    id: 2500,
    rows: [
      { from: 'France', to: 'FRA' },
      { from: 'Germany', to: 'GER' }
    ]
  };

  beforeEach(() => {
    wrapper = shallow(<Dictionary {...defaultProps} />);
  });

  it('renders component', () => {
    expect(wrapper).toBeTruthy();
  });

  it('contains a wrapper div with correct className', () => {
    expect(wrapper.find('div').first().prop('className')).toContain('dictionary-card');
  });

  it('displays error when dictionary is invalid', () => {
    const errorMessage = 'Field cannot be empty';
    wrapper.setState({ error: { message: errorMessage, rowIndexes: [] }});
    expect(wrapper.find('.text-danger').text()).toBe(errorMessage);
  });

  it('contains add row button with correct handler', () => {
    wrapper.find('button').at(1).simulate('click');
    expect(addRowMock.mock.calls.length).toBe(1);
    expect(addRowMock.mock.calls[0][0]).toBe(defaultProps.id);
    expect(wrapper.state('isAddingRow')).toBe(true);
  });

  it('updates state when clicking delete button', () => {
    wrapper.find('button').first().simulate('click');
    expect(wrapper.state('confirmModalOpen')).toBe(true);
  });
});