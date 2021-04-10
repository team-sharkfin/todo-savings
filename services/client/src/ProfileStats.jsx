const ProfileStats = () => (
    <div className="col-sm-3 p-1" id="userStats">
        <StatCollapse idType="nextBtn" type="Next Task Due" task="Task" badge="dueBadge" due="Due" collapse="nextCollapse" />
        <StatCollapse idType="lastBtn" type="Last Reward Earned" task="Reward" badge="lastBadge" due="Completed" collapse="lastCollapse" />    
    </div> 
);

const StatCollapse = (props) => (
    <div className="container-fluid my-2 p-2">
         <h3>
            <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target={"#" + props.collapse} aria-expanded="false" aria-controls={props.collapse} id={props.idType}>
                 {props.type}
            </button>
        </h3>
        <div className="collapse" id={props.collapse}>
            <div className="card card-body">
                <p>{props.task} <span className="badge" id={props.badge}>{props.due}</span></p> 
            </div>
        </div>
    </div>
);

export default ProfileStats;