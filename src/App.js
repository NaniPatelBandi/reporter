import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./components/Login";
import Write from "./components/Write";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/write" element={<Write />} />
      </Routes>
    </Router>
  );
}

export default App;
