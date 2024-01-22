import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { Home, CreatePost } from "./pages";
import { Nav } from "./components";

const App = () => {
  return <Router>
    <Nav />
  </Router>;
};

export default App;
