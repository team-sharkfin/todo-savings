import PropTypes from "prop-types";
import ProgressBar from "./ProgressBar";

const RewardAccordion = ({ rewards }) => {
  if (!Array.isArray(rewards) || rewards.length === 0) {
    return null;
  }

  return (
    <div className="row g-0">
      <div className="accordion accordion-flush" id="pendingRewards">
        {rewards.map(
          ({
            rewardId,
            name,
            goal,
            amountPerTask,
            taskCount,
            completedTaskCount,
          }) => {
            const amountRewarded = amountPerTask * completedTaskCount;
            const tasksRemaining = taskCount - completedTaskCount;

            return (
              <div className="accordion-item" key={rewardId}>
                <h2
                  className="accordion-header"
                  id={`flush-heading-${rewardId}`}
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#flush-collapse-${rewardId}`}
                    aria-expanded="false"
                    aria-controls={`flush-collapse-${rewardId}`}
                  >
                    ${amountRewarded} towards {name}
                  </button>
                </h2>
                <div
                  id={`flush-collapse-${rewardId}`}
                  className="accordion-collapse collapse"
                  aria-labelledby={`heading-${rewardId}`}
                  data-bs-parent="#pendingRewards"
                >
                  <div className="accordion-body">
                    <ProgressBar percentage={(amountRewarded / goal) * 100}>
                      ${amountRewarded} out of ${goal}
                    </ProgressBar>
                    {tasksRemaining} of {taskCount} task(s) remaining
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

RewardAccordion.propTypes = {
  rewards: PropTypes.arrayOf(
    PropTypes.shape({
      rewardId: PropTypes.number,
      name: PropTypes.string,
      goal: PropTypes.number,
      amountPerTask: PropTypes.number,
      taskCount: PropTypes.number,
      completedTaskCount: PropTypes.number,
    })
  ),
};

export default RewardAccordion;
