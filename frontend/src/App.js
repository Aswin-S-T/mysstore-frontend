import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Dashboard from "./screens/Dashboard";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
function App() {
  return (
    <BrowserRouter>
      <div>
        
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/login" element={<LoginScreen />} />

          {/* Customer related routes */}
          <Route path="/" element={<HomePage />} />
          {/* End customer related routes */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
