import { Switch, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Profile from "./Profile.jsx";
import Tasks from "./Tasks.jsx";
import Rewards from "./Rewards.jsx";

const queryClient = new QueryClient();

const RouterContent = () => (
  <QueryClientProvider client={queryClient}>
    <Switch>
      <Route path="/tasks">
        <Tasks />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/">
        <Rewards />
      </Route>
    </Switch>
  </QueryClientProvider>
);

export default RouterContent;
