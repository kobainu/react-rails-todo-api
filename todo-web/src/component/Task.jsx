export const Task = (props) => {
  return (
    <div className="taskArea">
      <div>
        <input
          type="checkbox"
          className="task"
          isChecked={props.isDone}
          onChange={() => {
            props.toggleIsDone(props.index);
          }}
        />
        <label>{props.name}</label>
      </div>
      <div>
        <button
          className="deleteButton"
          onClick={() => props.destroyTask(props.id)}
        >
          削除
        </button>
      </div>
    </div>
  );
};
