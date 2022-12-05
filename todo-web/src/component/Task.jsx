export const Task = (props) => {
  return (
    <div className="taskArea">
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
  );
};
