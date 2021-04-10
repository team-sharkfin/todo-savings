import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { checkSession } from "./api";
import Navbar from "./Navbar.jsx";
import "./App.css";

const App = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    checkSession().then((data) => {
      console.log(data);
      setLoading(false);
    });
  });

  if (isLoading) {
    return null;
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
