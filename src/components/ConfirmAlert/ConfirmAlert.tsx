import React from 'react';
import './style.scss';

interface IButton {
  color: string;
  label: string;
  onClick: () => void;
}

interface Props {
  title?: string;
  message: string;
  buttons: IButton[];
}

const ConfirmAlert: React.FC<Props> = ({
  title,
  message,
  buttons
}) => (
    <div className='confirm-alert'>
      {title && <h5>{title}</h5>}
      <p className='h6'>{message}</p>
      {buttons.map(btn =>
        <button
          type='button'
          className={`btn btn-${btn.color} btn-sm mx-2`}
          onClick={btn.onClick}>
          {btn.label}
        </button>
      )}
    </div>
  );

export default ConfirmAlert;