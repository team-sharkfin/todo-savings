<<<<<<< Updated upstream
import PropTypes from "prop-types";
import Banner from "./Banner.jsx";

const Tasks = () => (
  <>
    <Banner>Upcoming Tasks</Banner>
    <div className="row g-0">
      <TaskTable />
    </div>
  </>
);

const TaskTable = () => (
  <table className="table">
    <thead>
      <tr>
        <th scope="col">Task</th>
        <th scope="col">Due Date</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
    <tbody>
      <ToDo task="Take Cat to Vet" count="1" due="April 1" id="12" />
      <ToDo task="Take Dog for Walk" count="3" due="n/a" id="20" />
      <ToDo task="Get Card for Olivia" count="1" due="April 22" id="66" />
    </tbody>
  </table>
);
=======
import { useQuery } from "react-query";
import { getTasks } from "./api";
import Banner from "./Banner.jsx";
import RewardForm from "./RewardForm";

const Tasks = () => {
  const { isLoading, data } = useQuery("tasks", getTasks);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <>
      <Banner>Upcoming Tasks</Banner>
      <div className="row g-0">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Task</th>
              <th scope="col">Reward</th>
              <th scope="col">Complete?</th>
            </tr>
          </thead>
          {data.length && (
            <tbody>
              {data.map(({ taskId, name, reward, amountPerTask }) => {
                return (
                  <tr>
                    <th scope="row">{name}</th>
                    <td>
                      ${amountPerTask} towards {reward}
                    </td>
                    <td>
                      <div
                        className="btn-group"
                        role="group"
                        aria-label="Basic mixed styles example"
                      >
                        <button
                          type="button"
                          className="btn btn-success"
                          onClick={"completeTask(" + taskId + ")"}
                        >
                          Done
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          )}
        </table>
      </div>
      <RewardForm />
    </>
  );
};
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
          className="btn btn-warning"
          onClick={"updateTask(" + props.id + ")"}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={"completeTask(" + props.id + ")"}
        >
          Complete
=======
          className="btn btn-success"
          onClick={"completeTask(" + props.id + ")"}
        >
          Done
>>>>>>> Stashed changes
        </button>
      </div>
    </td>
  </tr>
);

<<<<<<< Updated upstream
ToDo.propTypes = {
  id: PropTypes.string,
  task: PropTypes.string,
  count: PropTypes.string,
  due: PropTypes.string,
};

=======
>>>>>>> Stashed changes
export default Tasks;
