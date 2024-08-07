
import KanbanBoard from './components/KanbanBoard';
import SearchBar from './components/SearchBar';
import AddTaskButton from './components/AddTaskButton';
import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';


function App() {
  const [tasks, setTasks] = useState({
    'To Do': [
      { id: 'task1', title: 'Task 1', description: 'Description 1' },
      { id: 'task2', title: 'Task 2', description: 'Description 2' },
    ],
    'In Progress': [],
    'Peer Review': [],
    'Done': [],
  });

  const [searchTerm, setSearchTerm] = useState('');

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceColumn = tasks[source.droppableId];
    const destColumn = tasks[destination.droppableId];
    const [removed] = sourceColumn.splice(source.index, 1);
    destColumn.splice(destination.index, 0, removed);

    setTasks({...tasks});
  };

  const addTask = (newTask) => {
    setTasks({
      ...tasks,
      'To Do': [...tasks['To Do'], newTask],
    });
  };

  const filteredTasks = Object.keys(tasks).reduce((acc, columnId) => {
    acc[columnId] = tasks[columnId].filter(task =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return acc;
  }, {});

  return (
    <div className="App">
      <SearchBar setSearchTerm={setSearchTerm} />
      <DragDropContext onDragEnd={onDragEnd}>
        <KanbanBoard tasks={filteredTasks} />
      </DragDropContext>
      <AddTaskButton addTask={addTask} />
    </div>
  );
}

export default App;