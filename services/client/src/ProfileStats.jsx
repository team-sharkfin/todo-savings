/* eslint-disable react/prop-types */
const ProfileStats = ({ profile }) => {
  if (!Array.isArray(profile) || profile.length === 0) {
    return null;
  }

  return (
    <div className="col-sm-3 p-1" id="userStats">
      <div className="container-fluid my-2 p-2">
        <h3>
          <button
            className="btn btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#nextCollapse"
            aria-expanded="false"
            aria-controls="nextCollapse"
            id="nextBtn"
          >
            Last Task Set
          </button>
        </h3>
        <div className="collapse" id="nextCollapse">
          <div className="card card-body">
            <p>
              {profile.lastTask.name}{" "}
              <span className="badge" id="dueBadge">
                {profile.lastTask.created_at}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid my-2 p-2">
        <h3>
          <button
            className="btn btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#lastCollapse"
            aria-expanded="false"
            aria-controls="lastCollapse"
            id="lastBtn"
          >
            Last Reward Earned
          </button>
        </h3>
        <div className="collapse" id="lastCollapse">
          <div className="card card-body">
            <p>
              {profile.lastReward.name}{" "}
              <span className="badge" id="lastBadge">
                {profile.lastReward.completed_at}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileStats;
