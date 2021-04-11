import { Switch, Route } from "react-router-dom";
import { CreateForm, CreateBar } from "./CreateTask";
import Profile from "./Profile.jsx";
import Tasks from "./Tasks.jsx";
import Rewards from "./Rewards.jsx";

const Content = () => (
  <>
    <Switch>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/tasks">
        <Tasks />
      </Route>
      <Route path="/rewards">
        <Rewards />
      </Route>
    </Switch>
    <CreateForm />
    <CreateBar />
  </>
);

export default Content;
