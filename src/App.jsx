import { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");
  function addTask() {
    if (newTask.trim() !== "") {
      setTask(t => [...t, { text: newTask, color: "#ffffff" }]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    setTask(tasks.filter((_, i) => i !== index));
  }

  function moveUp(index) {
    if (index > 0) {
      const shift = [...tasks];
      [shift[index], shift[index - 1]] = [shift[index - 1], shift[index]];
      setTask(shift);
    }
  }

  function moveDown(index) {
    if (index < tasks.length - 1) {
      const shift = [...tasks];
      [shift[index], shift[index + 1]] = [shift[index + 1], shift[index]];
      setTask(shift);
    }
  }

  function changeColor(index, targetColor) {
    const updatedTasks = [...tasks];
    updatedTasks[index].color = targetColor;
    setTask(updatedTasks);
  }

  return (
    <>
      <div className='inputform'>
        <b><h1 class="title">Level Up List 📝</h1></b>
        <input
          type="text"
          placeholder="Enter the task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="add" onClick={addTask}>✚</button>
      </div>
      {tasks.map((task, index) => (
        <div
          key={index}
          className="eachTask"
          style={{ backgroundColor: task.color }}
        >
          <p>{task.text}</p>
          <button className='delete' onClick={() => deleteTask(index)}>Delete</button>
          <button className='moveup' onClick={() => moveUp(index)}>👆</button>
          <button className='movedown' onClick={() => moveDown(index)}>👇</button>
          <input
            type="color"
            value={task.color}
            onChange={(e) => changeColor(index, e.target.value)}
          />
        </div>
      ))}
    </>
  );
}

export default App;
