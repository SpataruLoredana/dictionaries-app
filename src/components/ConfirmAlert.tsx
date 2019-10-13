import React from 'react';

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
    <div className='py-2'>
      {title && <h5>{title}</h5>}
      <p className='h6 mb-4'>{message}</p>
      {buttons.map(btn =>
        <button
          type="button"
          className={`btn btn-${btn.color} btn-sm mx-1`}
          onClick={btn.onClick}>
          {btn.label}
        </button>
      )}
    </div>
  );

export default ConfirmAlert;