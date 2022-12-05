import { useEffect, useState } from "react";
import { Task } from "./component/Task";

const App = () => {
  const initialTasks = [
    {
      name: "買い物",
      isDone: true,
    },
    {
      name: "ランニング",
      isDone: false,
    },
    {
      name: "プログラミング",
      isDone: false,
    },
  ];

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(initialTasks);
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
