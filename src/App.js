import React, { useState } from "react";
import "./App.css";

import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
import Counter from "./components/Counter";
import Todo from "./components/Todo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
}
