import React from "react";
import Header from "./principal/Header";
import Footer from "./principal/Footer";
import "../styles/layout.css";
export default function Layout({ children }) {
  return (
    <div>
      <div className="Main">
        <Header />
        {children} aa
        <Footer />
      </div>
    </div>
  );
}
