import React from 'react';
import ReactDOM from 'react-dom';
import ModalOverlay from './ModalOverLay';

function Modal(props) {
  return (
    <>
        {ReactDOM.createPortal(<ModalOverlay onCloseModal={props.onCloseModal} />, document.getElementById('modal-root')) }
    </>
  )
}

export default Modal