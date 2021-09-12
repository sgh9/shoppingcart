import React, { useState, useEffect } from 'react';
import { ShoppingContext } from './Context/ShoppingContext';

const Modal = ({ show, onClose, title, buttonLabel, children }) => {
  const [showModal, setShowModal] = useState(show);

  useEffect(() => {
    setShowModal(show);
  }, [show]);

  return (
    <div
      className={`modal fade ${showModal ? 'show' : ''}`}
      id="cart"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style={{ display: `${showModal ? 'block' : 'none'}` }}
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {title}
            </h5>
            <button
              type="button focus-none"
              className="close btn fs-4"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => {
                setShowModal(false);
                onClose();
              }}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">{children}</div>
          <div className="modal-footer">
            <button
              onClick={() => {
                setShowModal(false);
                onClose();
              }}
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              {buttonLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
