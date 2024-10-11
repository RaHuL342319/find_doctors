/* eslint-disable react/prop-types */

import "./Modal.css"; // Import CSS for styling

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null; // Don't render if not open

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          className="close-button"
          onClick={onClose}
          aria-label="Close Modal"
        >
          &times; {/* Close button */}
        </button>
        {title && <h2 className="modal-title">{title}</h2>}{" "}
        {/* Optional title */}
        <div className="modal-body">{children}</div>{" "}
        {/* Render children content */}
      </div>
    </div>
  );
};

export default Modal;
