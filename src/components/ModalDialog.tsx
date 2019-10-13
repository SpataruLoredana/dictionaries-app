import React, { Component, ComponentState } from 'react';
import Modal from 'react-modal';

interface Props {
  children?: React.ReactChild;
  isDismissable: boolean;
  modalIsOpen?: boolean;
}

interface State {
  modalIsOpen: boolean;
}

export default class ModalDialog extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
    Modal.setAppElement('#root');

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.modalIsOpen !== prevProps.modalIsOpen) {
      this.setState({ modalIsOpen: this.props.modalIsOpen } as ComponentState);
    }
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    if (this.props.isDismissable) {
      this.setState({ modalIsOpen: false });
    }
  }

  render() {
    return (
      <Modal
        isOpen={this.state.modalIsOpen}
        onRequestClose={this.closeModal}
        className="modal-dialog"
        overlayClassName="modal-overlay"
      >
        {this.props.children}
      </Modal>
    );
  }
}
