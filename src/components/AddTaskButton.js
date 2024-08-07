import React, { useState } from 'react';
// import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@material-ui/core';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
function AddTaskButton({ addTask }) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    addTask({ id: Date.now().toString(), title, description });
    setOpen(false);
    setTitle('');
    setDescription('');
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        style={{ position: 'fixed', right: 20, bottom: 20 }}
        onClick={() => setOpen(true)}
      >
        Add Task
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Add New Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Task Title"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Task Description"
            fullWidth
            multiline
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AddTaskButton;