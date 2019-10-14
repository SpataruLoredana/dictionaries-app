import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import CreateDictionaryForm from './CreateDictionaryForm';

describe('<CreateDictionaryForm>', () => {
  let wrapper: ShallowWrapper;
  const createDictionaryMock = jest.fn();
  const onCloseModalMock = jest.fn();
  const defaultProps = {
    createDictionary: createDictionaryMock,
    onCloseModal: onCloseModalMock
  };

  beforeEach(() => {
    wrapper = shallow(<CreateDictionaryForm {...defaultProps} />);
  });

  it('renders component', () => {
    expect(wrapper).toBeTruthy();
  });

  it('contains a wrapper div with correct className', () => {
    expect(wrapper.find('div').first().prop('className')).toBe('dictionary-form');
  });

  it('displays error when form is invalid', () => {
    const errorMessage = 'Field cannot be empty';
    wrapper.setState({ error: errorMessage });
    expect(wrapper.find('.text-danger').text()).toBe(errorMessage);
  });

  it('handles correctly input change', () => {
    const event = { target: {name: 'from', value: 'color' }};
    wrapper.find('input').first().simulate('change', event);
    expect(wrapper.state('from')).toBe('color');
  });

  it('handles correctly form submit when form is invalid', () => {
    const event = { preventDefault: jest.fn() };
    wrapper.find('form').simulate('submit', event);
  
    expect(wrapper.state('error')).toBeTruthy();
    expect(createDictionaryMock.mock.calls.length).toBe(0);
    expect(onCloseModalMock.mock.calls.length).toBe(0);
  });

  it('handles correctly form submit when form is valid', () => {
    const preventDefaultMock = jest.fn();
    const event = { preventDefault: preventDefaultMock };
    wrapper.setState({ title: 'New Dictionary' });
    wrapper.find('form').simulate('submit', event);

    expect(preventDefaultMock.mock.calls.length).toBe(1);
    expect(createDictionaryMock.mock.calls.length).toBe(1);
    expect(onCloseModalMock.mock.calls.length).toBe(1);
  });
});