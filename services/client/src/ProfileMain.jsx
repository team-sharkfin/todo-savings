const ProfileMain = () => (
    <div className="col-sm-9 p-2" id="userMain">
            <ProfileTotals />
            <RewardTotal />
    </div> 
);

const ProfileTotals = () => (
    <div className="row gx-2" id="userTotals">
        <Total type="Rewards Earned" all="All-Time:" year="Past Year:" month="Past Month:" week="Past Week:" allNum={100} yearNum={50} monthNum={10} weekNum={1} />
        <Total type="Upcoming Tasks" all="Lifetime:" year="The Next Year:" month="The Next Month:" week="The Next Week:" allNum={100} yearNum={50} monthNum={10} weekNum={1} />
    </div>
);

const Total = (props) => (
    <div className="col-sm-6 p-3">
        <h5 className="text-center">{props.type}</h5>
        <ul className="list-unstyled">
            <li><strong>{props.all}</strong><p className="num-count">{props.allNum}</p></li>
            <li><strong>{props.year}</strong><p className="num-count">{props.yearNum}</p></li>
            <li><strong>{props.month}</strong><p className="num-count">{props.monthNum}</p></li>
            <li><strong>{props.week}:</strong><p className="num-count">{props.weekNum}</p></li>
        </ul>
    </div>
);

const RewardTotal = () => (
    <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item" id="accordionHead">
                      <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" id="rewardAccordion" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                          All Rewards Earned
                        </button>
                      </h2>
                      <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
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
                            <RewardEarned amount={5} goal="Steak Dinner" task="Bike a Mile" count={5} date="March 10" />
                            <RewardEarned amount={10} goal="New Bike" task="Clean the Garage" count={2} date="March 1" />
                            <RewardEarned amount={1} goal="Cake" task="Do a Push-Up" count={25} date="February 28" />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
);

const RewardEarned = (props) => (
    <tr>
        <th scope="row">${props.amount} towards {props.goal}</th>
        <td>{props.task} {props. count} times</td>
        <td>{props.date}</td>
    </tr>
);

export default ProfileMain;