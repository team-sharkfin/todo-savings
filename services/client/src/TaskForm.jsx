import PropTypes from "prop-types";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { addTask } from "./api";
import CollapsibleFooter from "./CollapsibleFooter";

const TaskForm = ({ rewards }) => {
  const [name, setName] = useState("");
  const [rewardId, setRewardId] = useState(0);
  const queryClient = useQueryClient();

  const mutation = useMutation(async (task) => {
    const { taskId } = await addTask(task);

    setName("");
    setRewardId("");

    queryClient.setQueryData("tasks", (tasks) =>
      tasks.concat([{ taskId, name, rewardId, isComplete: 0 }])
    );
  });

  if (!rewards.length) {
    return null;
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleRewardChange(event) {
    setRewardId(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    mutation.mutate({
      name,
      rewardId: parseInt(rewardId),
    });
  }

  return (
    <CollapsibleFooter id="rewardForm" buttonLabel="Add Task">
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label htmlFor="taskName" className="form-label">
            Task Name
          </label>
          <input
            type="text"
            className="form-control"
            id="taskName"
            name="taskName"
            aria-describedby="taskHelp"
            value={name}
            onChange={handleNameChange}
            required
          />
          <div id="taskHelp" className="form-text">
            What is your task? i.e. Run a Mile, Mow the Lawn, etc.
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="reward" className="form-label">
            Reward
          </label>
          <select
            className="form-select"
            id="reward"
            name="reward"
            aria-describedby="rewardHelp"
            value={rewardId}
            onChange={handleRewardChange}
            required
          >
            {rewards.map(({ rewardId, name }) => (
              <option key={rewardId} value={rewardId}>
                {name}
              </option>
            ))}
          </select>
          <div id="rewardHelp" className="form-text">
            Which reward will this task contribute to?
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </form>
    </CollapsibleFooter>
  );
};

TaskForm.propTypes = {
  rewards: PropTypes.arrayOf(
    PropTypes.shape({
      rewardId: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default TaskForm;
