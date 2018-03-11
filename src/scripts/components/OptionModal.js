import React from 'react';
import Modal from 'react-modal';

const OptionModal = props => (
    <Modal
        className="modal"
        isOpen={!!props.selectedOption}
        onRequestClose={props.closeModal}
        closeTimeoutMS={250}
        ariaHideApp={false}
        contentLabel="Selected option"
    >
        <h3 id="modal-header">Selected option</h3>
        {props.selectedOption && <p id="modal__option">{props.selectedOption}</p> }
        <button className="modal__button" onClick={props.closeModal}>OKEY</button>
    </Modal>
);

export default OptionModal;
