import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import NotFound from "./NotFound";

export default function MainComponents() {
  return (
    <div id="wrapper">
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/hadith" exact element={<HomePage />} />
        <Route path="/kalema" exact element={<HomePage />} />
        <Route path="/dowa" exact element={<HomePage />} />
        <Route path="/salat-time" exact element={<HomePage />} />
        <Route path="/ramjan" exact element={<HomePage />} />
        <Route path="/about" exact element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
