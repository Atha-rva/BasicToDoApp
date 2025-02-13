import React, { useState, useEffect } from "react";
import { db } from "./FirebaseData/firebase";
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const querySnapshot = await getDocs(collection(db, "tasks"));
    setTasks(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  const addTask = async () => {
    if (newTask.trim() !== "") {
      await addDoc(collection(db, "tasks"), { text: newTask, completed: false });
      setNewTask("");
      fetchTasks();
    }
  };

  const toggleComplete = async (task) => {
    await updateDoc(doc(db, "tasks", task.id), { completed: !task.completed });
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await deleteDoc(doc(db, "tasks", id));
    fetchTasks();
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-10 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">To-Do List</h1>
      <div className="flex gap-2">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="border p-2 rounded-md"
          placeholder="Add a new task..."
        />
        <button onClick={addTask} className="bg-blue-500 text-white px-4 py-2 rounded-md">Add</button>
      </div>

      <ul className="mt-5 w-96">
        {tasks.map(task => (
          <li key={task.id} className="flex justify-between items-center bg-white p-3 mt-2 shadow-md rounded-md">
            <span className={task.completed ? "line-through text-gray-500" : ""}>{task.text}</span>
            <div className="flex gap-2">
              <button onClick={() => toggleComplete(task)} className="text-green-500">✔</button>
              <button onClick={() => deleteTask(task.id)} className="text-red-500">❌</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
