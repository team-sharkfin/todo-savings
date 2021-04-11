import PropTypes from "prop-types";
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
                  <tr key={taskId}>
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
