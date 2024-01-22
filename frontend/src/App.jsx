import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { Home, CreatePost } from "./pages";
import { Nav } from "./components";

const App = () => {
  return (
    <Router>
      <Nav />
      <main className="min-h-[calc(100vh-73px)] w-full bg-slate-100 px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
