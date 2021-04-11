import PropTypes from "prop-types";
import { useQuery } from "react-query";
import { getRewards, getTasks } from "./api";
import Banner from "./Banner.jsx";
import Message from "./Message.jsx";
import TaskForm from "./TaskForm.jsx";
import TaskList from "./TaskList.jsx";

const Tasks = () => {
  const rewardQuery = useQuery("rewards", getRewards);
  const taskQuery = useQuery("tasks", getTasks);

  if (rewardQuery.isLoading) {
    return <span>Loading...</span>;
  }

  let activeRewards = [];

  if (Array.isArray(rewardQuery.data)) {
    for (const reward of rewardQuery.data) {
      if (reward.amountEarned < reward.goal) {
        activeRewards.push(reward);
      }
    }
  }

  return (
    <>
      <Banner>Tasks</Banner>
      <Message show={!activeRewards.length}>
        You must have at least one reward before you can create a task.
      </Message>
      <Message show={activeRewards.length && !taskQuery?.data?.length}>
        Click the <strong>Add Task</strong> button to create your first task.
      </Message>
      <TaskList tasks={taskQuery.data} />
      <TaskForm rewards={activeRewards} />
    </>
  );
};

const ToDo = (props) => (
  <tr>
    <th scope="row">
      {props.task} {props.count} times
    </th>
    <td>{props.due}</td>
    <td>
      <div
        className="btn-group"
        role="group"
        aria-label="Basic mixed styles example"
      >
        <button
          type="button"
          className="btn btn-success"
          onClick={"completeTask(" + props.id + ")"}
        >
          Done
        </button>
      </div>
    </td>
  </tr>
);

ToDo.propTypes = {
  id: PropTypes.string,
  task: PropTypes.string,
  count: PropTypes.string,
  due: PropTypes.string,
};

export default Tasks;
