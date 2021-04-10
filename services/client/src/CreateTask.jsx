const CreateBar = () => (
    <nav className="navbar fixed-bottom navbar-dark" style={{ backgroundColor: "#5c6784" }}>
        <div className="container-fluid justify-content-center">
            <button className="navbar-toggler p-2" id="createBtn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
              Create Task & Reward
            </button>
        </div>
    </nav>
  );
  
const CreateForm = () => (
    <div className="collapse fixed-bottom" id="navbarToggleExternalContent">
        <div className="bg-light p-4">
            <form className="row g-3" method="POST">
                <div className="col-md-12">
                  <label for="taskName" className="form-label">Task Name</label>
                  <input type="text" className="form-control" id="taskName"  name="taskName" aria-describedby="taskHelp" />
                  <div id="taskHelp" className="form-text">What is your task? i.e. Run a Mile, Mow the Lawn, etc.</div>
                </div>
                <div className="col-md-6">
                  <label for="count" className="form-label">Repetitions</label>
                  <input type="number" className="form-control" id="count" name="count" aria-describedby="countHelp" />
                  <div id="countHelp" className="form-text">Do you need to do this task multiple times to get your reward? i.e. Run a Mile 5 times. (optional)</div>
                </div>
                <div className="col-md-6">
                  <label for="dueDate" className="form-label">Due Date</label>
                  <input type="date" className="form-control" id="dueDate" name="dueDate" aria-describedby="dueHelp" />
                  <div id="dueHelp" className="form-text">Do you need to complete your task by a date? Put it here! (optional)</div>
                </div>
                <div className="col-12">
                  <label for="rewardName" className="form-label">Reward Name</label>
                  <input type="text" className="form-control" id="rewardName" name="rewardName" aria-describedby="rewardHelp" />
                  <div id="rewardHelp" className="form-text">What are you putting your reward towards? i.e. Vacation, Steak dinner, etc.</div>
                </div>
                <div className="col-md-6">
                  <label for="amount" className="form-label">Amount</label>
                  <input type="number" className="form-control" id="amount" name="amount" aria-describedby="amountHelp" />
                  <div id="amountHelp" className="form-text">How much are you rewarding yourself with? $1 or $100?</div>
                </div>
                <div className="col-md-6">
                  <label for="goal" className="form-label">Total Goal</label>
                  <input type="number" className="form-control" id="goal" name="goal" aria-describedby="goalHelp" />
                  <div id="goalHelp" className="form-text">What final amount are you trying to reach?</div>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-primary">Create</button>
                </div>
            </form>
        </div>
        <br />
        <br />
      </div>
  );


  export {CreateBar, CreateForm};