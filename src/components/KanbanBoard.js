import React from 'react';
import Column from './Column';

function KanbanBoard({ tasks }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      {Object.entries(tasks).map(([columnId, columnTasks]) => (
        <Column key={columnId} columnId={columnId} tasks={columnTasks} />
      ))}
    </div>
  );
}

export default KanbanBoard;