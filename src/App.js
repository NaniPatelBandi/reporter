import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./Login";
import Write from "./Write";
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
