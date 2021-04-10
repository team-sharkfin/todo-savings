const ProfileStats = () => (
    <div className="col-sm-3 p-1" id="userStats">
        <StatCollapse idType="nextBtn" type="Next Task Due" task="Task" badge="dueBadge" due="Due" collapse="nextCollapse" />
        <StatCollapse idType="lastBtn" type="Last Reward Earned" task="Reward" badge="lastBadge" due="Completed" collapse="lastCollapse" />  
        <Settings />  
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

const Settings = () => (
    <div className="container-fluid my-2 p-2">
         <h3>
            <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#settings" aria-expanded="false" aria-controls="settings" id="settingsBtn">
                 Profile Settings
            </button>
        </h3>
        <div className="collapse" id="settings">
            <div className="card card-body">
                <form>
                    <div className="mb-3">
                        <label for="nameInput" className="form-label">Name</label>
                        <input type="text" className="form-control" id="nameInput" aria-describedby="nameHelp" name="nameInput" />
                        <div id="nameHelp" className="form-text">Add your name to personalize your profile.</div>
                    </div>
                    <div className="mb-3">
                        <label for="bdayInput" className="form-label">Birthday</label>
                        <input type="date" className="form-control" id="bdayInput" aria-describedby="bdayHelp" name="bdayInput" />
                        <div id="bdayHelp" className="form-text">Add your birthday to personalize your profile.</div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
    
);

export default ProfileStats;