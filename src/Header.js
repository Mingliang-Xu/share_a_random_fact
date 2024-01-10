import React from "react";

export function Header({ showForm, setShowForm }) {
  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" alt="logo" />
        <h1>Random Fact Of The Day</h1>
      </div>
      <button
        className="btn btn-large btn-open"
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? "Close" : "Share a fact"}
      </button>
    </header>
  );
}
