import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { checkSession } from "./api.js";
import Navbar from "./Navbar.jsx";
import Landing from "./Landing.jsx";
import RouterContent from "./RouterContent.jsx";
import "./App.css";

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    checkSession().then(({ session }) => {
      setLoggedIn(session);
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return null;
  }
  return (
    <div className="fadein">
      <BrowserRouter>
        <Navbar displayLinks={isLoggedIn} />
        <div className="container mt-4">
          {isLoggedIn ? <RouterContent /> : <Landing />}
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
