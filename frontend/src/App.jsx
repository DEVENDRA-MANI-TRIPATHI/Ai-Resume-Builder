import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Analyze from "./pages/Analyze";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-center p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analyze" element={<Analyze />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
