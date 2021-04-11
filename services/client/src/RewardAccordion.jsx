import PropTypes from "prop-types";

const RewardAccordion = () => (
  <div className="accordion accordion-flush" id="pendingRewards">
    <AccordionItem
      row="One"
      amount={5}
      goal="Steak Dinner"
      quantity={20}
      total={50}
      task="Bike a Mile"
      count={5}
      date="April 1"
    />
    <AccordionItem
      row="Two"
      amount={1}
      goal="Beer"
      quantity={3}
      total={12}
      task="Swim a Lap"
      count={10}
      date="May 1"
    />
  </div>
);

const AccordionItem = (props) => {
  const percentage = (props.quantity / props.total) * 100;
  const bar = { progress: { width: `${percentage}%` } };
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={"flush-heading" + props.row}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={"#flush-collapse" + props.row}
          aria-expanded="false"
          aria-controls={"flush-collapse" + props.row}
        >
          ${props.amount} towards {props.goal}
        </button>
      </h2>
      <div
        id={"flush-collapse" + props.row}
        className="accordion-collapse collapse"
        aria-labelledby={"heading" + props.row}
        data-bs-parent="#pendingRewards"
      >
        <div className="accordion-body">
          <h4>Goal Progress</h4>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={bar.progress}
              aria-valuenow={props.quantity}
              aria-valuemin="0"
              aria-valuemax={props.total}
            >
              ${props.quantity} out of ${props.total}
            </div>
          </div>
          <br />
          <h5>Task Details</h5>
          <p>
            {props.task} {props.count} times due {props.date}
          </p>
        </div>
      </div>
    </div>
  );
};

AccordionItem.propTypes = {
  row: PropTypes.string,
  amount: PropTypes.number,
  goal: PropTypes.string,
  quantity: PropTypes.number,
  total: PropTypes.number,
  task: PropTypes.string,
  count: PropTypes.number,
  date: PropTypes.string,
};

export default RewardAccordion;
