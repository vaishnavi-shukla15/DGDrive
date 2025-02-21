import React from 'react';
import './ImageModal.css';

const ImageModal = ({ src, onClose }) => {
  return (
    <div className="modal" onClick={onClose}>
      <span className="close">&times;</span>
      <img className="modal-content" src={src} alt="fullscreen" />
    </div>
  );
};

export default ImageModal;
