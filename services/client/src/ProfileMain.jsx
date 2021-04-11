/* eslint-disable react/prop-types */
const ProfileMain = ({ profile }) => {
  if (!Array.isArray(profile) || profile.length === 0) {
    return null;
  }

  return (
    <div className="col-sm-9 p-2" id="userMain">
      <div className="row gx-2" id="userTotals">
        <div className="col-sm-6 p-3">
          <h5 className="text-center">Rewards Completed</h5>
          <ul className="list-unstyled">
            <li>
              <strong>All-Time</strong>
              <p className="num-count">{profile.countRAll.task_id}</p>
            </li>
            <li>
              <strong>Past Year:</strong>
              <p className="num-count">{profile.countRYear.task_id}</p>
            </li>
            <li>
              <strong>Past Month:</strong>
              <p className="num-count">{profile.countRMonth.task_id}</p>
            </li>
            <li>
              <strong>Past Week:</strong>
              <p className="num-count">{profile.countRWeek.task_id}</p>
            </li>
          </ul>
        </div>
        <div className="col-sm-6 p-3">
          <h5 className="text-center">Incomplete Tasks</h5>
          <ul className="list-unstyled">
            <li>
              <strong>From All-Time:</strong>
              <p className="num-count">{profile.countTAll.task_id}</p>
            </li>
            <li>
              <strong>Past Year:</strong>
              <p className="num-count">{profile.countTYear.task_id}</p>
            </li>
            <li>
              <strong>Past Month:</strong>
              <p className="num-count">{profile.countTMonth.task_id}</p>
            </li>
            <li>
              <strong>Past Week:</strong>
              <p className="num-count">{profile.countTWeek.task_id}</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item" id="accordionHead">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed"
              id="rewardAccordion"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              All Rewards Earned
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Reward</th>
                    <th scope="col">Task</th>
                    <th scope="col">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {profile.compRewards.map(
                    (name, reward, amountPerTask, completed) => (
                      <tr key={reward}>
                        <th scope="row">
                          ${amountPerTask} towards {reward}
                        </th>
                        <td>{name}</td>
                        <td>{completed}</td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileMain;
