import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { checkSession } from "./api.js";
import Content from "./Content.jsx";
import Navbar from "./Navbar.jsx";
import Landing from "./Landing.jsx";
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
        <div className="container mt-1">
          {isLoggedIn ? <Content /> : <Landing />}
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
