import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { ConfirmAlert } from './ConfirmAlert';

describe('<ConfirmAlert>', () => {
  let wrapper: ShallowWrapper;
  const confirmHandler = jest.fn();
  const cancelHandler = jest.fn();
  const defaultProps = {
    message: 'Are you sure?',
    buttons: [
      { label: 'Yes', color: 'success', onClick: confirmHandler },
      { label: 'No', color: 'danger', onClick: cancelHandler }
    ]
  };

  beforeEach(() => {
    wrapper = shallow(<ConfirmAlert {...defaultProps} />);
  });

  it('renders component', () => {
    expect(wrapper).toBeTruthy();
  });

  it('contains a wrapper div with correct className', () => {
    expect(wrapper.find('div').prop('className')).toBe('confirm-alert');
  });

  it('contains an h5 with title when it is provided in props', () => {
    wrapper = shallow(<ConfirmAlert {...defaultProps} title='Test'/>);
    expect(wrapper.find('h5').length).toBe(1);
    expect(wrapper.find('h5').text()).toBe('Test');
  });

  it('doesn\'t contain an h5 with title when it is not provided', () => {
    expect(wrapper.find('h5').length).toBe(0);
  });

  it('displays the message provided in props', () => {
    expect(wrapper.find('p').text()).toBe(defaultProps.message);
  });

  it('renders all the buttons provided in props', () => {
    expect(wrapper.find('button').length).toBe(defaultProps.buttons.length);
  });

  it('buttons should have correct props', () => {
    const firstButton = wrapper.find('button').first();
    const secondButton = wrapper.find('button').at(1);

    expect(firstButton.text()).toBe(defaultProps.buttons[0].label);
    expect(firstButton.prop('className')).toContain(`btn-${defaultProps.buttons[0].color}`);
    expect(secondButton.text()).toBe(defaultProps.buttons[1].label);
    expect(secondButton.prop('className')).toContain(`btn-${defaultProps.buttons[1].color}`);
  });

  it('confirm button should call the correct click handler', () => {
    wrapper.find('button').first().simulate('click');
    expect(confirmHandler.mock.calls.length).toBe(1);
  });

  it('cancel button should call the correct click handler', () => {
    wrapper.find('button').at(1).simulate('click');
    wrapper.find('button').at(1).simulate('click');
    expect(cancelHandler.mock.calls.length).toBe(2);
  });
});