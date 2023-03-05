import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./layout/home";
import "./App.scss";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<h1>404</h1>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
