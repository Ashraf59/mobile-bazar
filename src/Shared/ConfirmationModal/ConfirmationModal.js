import React from 'react';

const ConfirmationModal = ({ title, message, closeModal, modalData, successAction }) => {
    return (
        <div>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-green-500">{title}</h3>
                    <p className="py-4 text-green-500">{message}</p>
                    <div className="modal-action">
                        <label onClick={() => successAction(modalData)} htmlFor="my-modal" className="btn btn-outline btn-success">Confirm</label>
                        <button onClick={closeModal} className='btn btn-outline btn-warning'>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;