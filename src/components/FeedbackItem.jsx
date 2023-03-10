import React, { useState } from "react";
import Card from "../shared/Card";
import { FaTimes } from "react-icons/fa";
import ConfirmModal from "./ConfirmModal";

const FeedbackItem = ({ item, feedback, setFeedback }) => {
  const handleDelete = (id) => {
    setFeedback(() => feedback.filter((arr) => arr.id !== id));
  };

  const [confirmContainer, showConfirmContainer] = useState(false);

  return (
    <Card className="card">
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => showConfirmContainer(true)}>
        <FaTimes color="blue" />
      </button>
      <div className="text-display">{item.text}</div>
      {confirmContainer && (
        <ConfirmModal
          item={item}
          handleDelete={handleDelete}
          showConfirmContainer={showConfirmContainer}
        />
      )}
      +
    </Card>
  );
};

export default FeedbackItem;
