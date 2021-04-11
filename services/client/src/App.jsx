import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { checkSession } from "./api";
import Landing from "./Landing.jsx";
import Navbar from "./Navbar.jsx";
import {CreateForm, CreateBar} from "./CreateTask.jsx";
import Profile from "./Profile.jsx";
import Tasks from "./Tasks.jsx";
import Rewards from "./Rewards.jsx"
import "./App.css";

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    checkSession().then(({ session }) => {
      setLoggedIn(session);
      setLoading(false);
    });
  });

  if (isLoading) {
    return null;
  }
  return (
    <div className="fadein">
      <BrowserRouter>
        <Navbar displayLinks={isLoggedIn} />
        <div className="container mt-1">{!isLoggedIn && <Landing />}</div>
      </BrowserRouter>
    </div>
  );
};

export default App;
