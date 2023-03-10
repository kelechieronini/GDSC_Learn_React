import React from 'react'


const ConfirmModal = ({item, handleDelete, showConfirmContainer}) => {

  return (
    <div className="confirm-container">
      <div className="confirm">
        <p>Are you sure you want to delete this item?</p>
        <div className="ask">
          <button className="yes" onClick={() => handleDelete(item.id)}>
            Yes
          </button>
          <button className="no" onClick={() => showConfirmContainer(false)}>No</button>
        </div>
      </div>
    </div>
  )
};

export default ConfirmModal;
