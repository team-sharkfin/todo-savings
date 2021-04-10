import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { checkSession } from "./api";
import Navbar from "./Navbar.jsx";

const App = () => {
  useEffect(() => {
    checkSession().then((data) => console.log(data));
  });

  return (
    <BrowserRouter>
      <Navbar />
      <div className="container"></div>
    </BrowserRouter>
  );
};

export default App;
