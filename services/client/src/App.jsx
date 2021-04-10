import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { checkSession } from "./api.js";
import Landing from "./Landing.jsx";
import Navbar from "./Navbar.jsx";
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

  if (!isLoggedIn) {
    return <Landing />;
  }

  return (
    <BrowserRouter>
      <div className="fadein">
        <Navbar />
        <div className="container"></div>
      </div>
    </BrowserRouter>
  );
};

export default App;
