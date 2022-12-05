export const Task = (props) => {
  return (
    <div className="taskArea">
      <input type="checkbox" className="task" />
      <label>{props.name}</label>
    </div>
  );
};
