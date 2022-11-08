import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactAnimate from "./animation";
import "./App.scss";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ReactAnimate />} />
                <Route path="*" element={<h1>404</h1>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
