import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./screens/Dashboard";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
function App() {
  return (
    <BrowserRouter>
      <div>
        
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/login" element={<LoginScreen />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
