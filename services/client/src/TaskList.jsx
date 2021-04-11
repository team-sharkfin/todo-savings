import PropTypes from "prop-types";
import { useMutation, useQueryClient } from "react-query";
import { setTaskComplete } from "./api";

const TaskList = ({ tasks }) => {
  const queryClient = useQueryClient();

  const mutation = useMutation(async (taskId, isComplete) => {
    await setTaskComplete(taskId, isComplete);
    queryClient.invalidateQueries("rewards");
  });

  if (!tasks?.length) {
    return null;
  }

  function handleCheckboxChange(event) {
    mutation.mutate(event.target.id, event.target.checked);
  }

  return (
    <ul className="list-group">
      {tasks.map(({ taskId, name, isComplete }) => (
        <li key={taskId} className="list-group-item">
          <div className="form-check">
            <label className="form-check-label" htmlFor={taskId}>
              <input
                type="checkbox"
                className="form-check-input"
                id={taskId}
                defaultChecked={isComplete === 1}
                onChange={handleCheckboxChange}
              />
              {name}
            </label>
          </div>
        </li>
      ))}
    </ul>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      taskId: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isComplete: PropTypes.number.isRequired,
    })
  ),
};

export default TaskList;
