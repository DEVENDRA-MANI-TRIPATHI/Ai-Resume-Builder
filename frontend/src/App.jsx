import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Home = lazy(() => import("./pages/Home"));
const Analyze = lazy(() => import("./pages/Analyze"));

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-center p-6">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/analyze" element={<Analyze />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
