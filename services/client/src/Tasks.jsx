import PropTypes from "prop-types";
import Banner from "./Banner.jsx";

const Tasks = () => (
  <div className="container">
    <br />
    <Banner name="Upcoming Tasks" />
    <div className="row g-0">
      <TaskTable />
    </div>
  </div>
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
