import { useEffect, useState } from "react";
import { Task } from "./component/Task";
import axios from "axios";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState("");

  const fetch = async () => {
    const res = await axios.get("http://localhost:3010/tasks");
    setTasks(res.data);
  };

  const createTask = async () => {
    await axios.post("http://localhost:3010/tasks", {
      name: name,
      is_done: false,
    });
    setName("");
    fetch();
  };

  useEffect(() => {
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleIsDone = (index) => {
    const tasksCopy = [...tasks];
    const isDone = tasksCopy[index].isDone;
    tasksCopy[index].isDone = !isDone;
    setTasks(tasksCopy);
  };

  return (
    <>
      <div className="container">
        <h1>タスク一覧</h1>
        <input
          placeholder="タスク名を入力"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button colorScheme="teal" onClick={createTask}>
          タスクを作成
        </button>
        {tasks.map((task, index) => (
          <Task
            key={index}
            index={index}
            name={task.name}
            isDone={task.isDone}
            toggleIsDone={toggleIsDone}
          />
        ))}
      </div>
    </>
  );
};

export default App;
