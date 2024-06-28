import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./Main.css";

import Home from "./Page/Home/Home";
import Login from "./Page/LoginRegister/Login/Login";
import Register from "./Page/LoginRegister/Register/Register";

function App() {
  return (
    <div className="App">
      <Router basename="/SparkSystem/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
