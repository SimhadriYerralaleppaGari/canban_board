import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

function Task({ task, index }) {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{
            userSelect: 'none',
            padding: 16,
            margin: '0 0 8px 0',
            minHeight: '50px',
            backgroundColor: 'white',
            ...provided.draggableProps.style,
          }}
        >
          <h4>{task.title}</h4>
          <p>{task.description.substring(0, 50)}...</p>
        </div>
      )}
    </Draggable>
  );
}

export default Task;