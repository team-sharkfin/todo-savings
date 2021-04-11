import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { checkSession } from "./api.js";
import Landing from "./Landing.jsx";
import Navbar from "./Navbar.jsx";
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
        {isLoggedIn && <Navbar />}
        <main role="main" className="container">
          <div className="mt-2">
            {isLoggedIn ? <RouterContent /> : <Landing />}
          </div>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
