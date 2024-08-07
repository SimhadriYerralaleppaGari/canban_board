import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Task from './Task';

function Column({ columnId, tasks }) {
  return (
    <div style={{ minWidth: '200px', border: '1px solid gray', padding: '8px' }}>
      <h2>{columnId}</h2>
      <Droppable droppableId={columnId}>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}

export default Column;