import React, { useState } from "react";

const FaqItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <div
      className="card mb-3"
      style={{
        boxShadow: isOpen
          ? "0 4px 8px rgba(0, 0, 0, 0.1)"
          : "0 2px 4px rgba(0, 0, 0, 0.05)",
      }}
    >
      <div
        className={`card-header d-flex justify-content-between align-items-center ${
          isOpen ? "open-accordion" : ""
        }`}
        id={title}
        onClick={handleToggle}
        style={{
          backgroundColor: isOpen ? "#f48a2f" : "#f8f9fa",
          cursor: "pointer",
          padding: "15px",
        }}
      >
        <h5 className="mb-0" style={{ color: isOpen ? "#ffffff" : "#000000" }}>
          {" "}
          <span className="btn">{title}</span>
        </h5>
        <span style={{ color: isOpen ? "#ffffff" : "#000000" }}>
          <i
            className={`fas ${isOpen ? "fa-minus" : "fa-plus"}`}
            style={{ color: isOpen ? "#ffffff" : "#000000" }}
          />
        </span>{" "}
      </div>
      <div
        id={title}
        className={`collapse ${isOpen ? "show" : ""}`}
        aria-labelledby={title}
        data-parent="#accordion"
      >
        <div className="card-body" style={{ color: "#4a4a4a" }}>
          {" "}
          {content}
        </div>
      </div>
    </div>
  );
};

export default FaqItem;
