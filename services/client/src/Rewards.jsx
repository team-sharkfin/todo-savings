import { useQuery } from "react-query";
import { getRewards } from "./api";
import Banner from "./Banner.jsx";
import ProgressBar from "./ProgressBar";
import RewardForm from "./RewardForm";

const Rewards = () => {
  const { isLoading, data } = useQuery("rewards", getRewards);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <>
      <Banner>Rewards</Banner>
      <div className="row g-0">
        {data.length && (
          <div className="accordion accordion-flush" id="pendingRewards">
            {data.map(
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
        )}
      </div>
      <RewardForm />
    </>
  );
};

export default Rewards;
