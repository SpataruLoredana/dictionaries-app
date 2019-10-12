import React from 'react';

interface Props {
  title?: string;
  message: string;
  buttonConfirmLabel: string;
  buttonCancelLabel: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

const ConfirmAlert: React.FC<Props> = ({
  title,
  message,
  buttonConfirmLabel,
  buttonCancelLabel,
  onConfirm,
  onCancel
}) => (
  <div>
    {title && <h5>{title}</h5>}
    <p>{message}</p>
    <button type="button" className="btn btn-primary btn-sm mx-1" onClick={onConfirm}>
      {buttonConfirmLabel}
    </button>
    <button type="button" className="btn btn-danger btn-sm mx-1" onClick={onCancel}>
      {buttonCancelLabel}
    </button>
  </div>
);

export default ConfirmAlert;