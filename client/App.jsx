import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar.jsx";

const App = () => (
  <BrowserRouter>
    <Navbar />
    <div className="container"></div>
  </BrowserRouter>
);

export default App;
