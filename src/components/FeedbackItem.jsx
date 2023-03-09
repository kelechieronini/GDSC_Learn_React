import Card from "../shared/Card";
import { FaTimes } from 'react-icons/fa'

function FeedbackItem({ item, feedback, setFeedback }) {
const handleDelete = (id) => {
  setFeedback(() => feedback.filter((arr) => arr.id !== id));
}

  return (
    <Card className="card">
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => handleDelete(item.id)}>
        <FaTimes color='blue'/>
      </button>
      <div className="text-display">{item.text}</div>
    
    </Card>
    
  );
}

export default FeedbackItem;
