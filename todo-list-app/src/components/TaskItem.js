import React, { useState } from 'react';
import TaskForm from './TaskForm';

function TaskItem({ task, onEdit, onDelete, onToggleCompletion }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <TaskForm
          initialTask={task}
          onUpdateTask={(updatedTask) => {
            onEdit(updatedTask);
            setIsEditing(false);
          }}
        />
      ) : (
        <>
          <div>
            <h3>{task.name}</h3>
            <p>{task.description}</p>
          </div>
          <div className="task-buttons">
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={onDelete}>Delete</button>
            <button onClick={onToggleCompletion}>
              {task.completed ? 'Undo' : 'Complete'}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default TaskItem;
