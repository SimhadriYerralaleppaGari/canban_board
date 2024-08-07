import React from 'react';
import { useDrag } from 'react-dnd';

const TaskCard = ({ task }) => {
  const [, ref] = useDrag({
    type: 'TASK',
    item: { id: task.id },
  });

  return (
    <div ref={ref} className="task-card">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
    </div>
  );
};

export default TaskCard;
