import React from "react";
import "./GamingLandingPage.css";
import { Link } from "react-router-dom";// Import the CSS file

const GamingLandingPage = () => {
  return (
    <div className="background-image">
      <header className="header">
        <h1 className="title">Groundwater Saviour</h1>
        <p className="subtitle">
          A Game that provides knowledge about Sustainable Solutions for a Vital
          Resource
        </p>
        <div className="button-group">
          <button className="cta-button"><Link to="/Robot" className="url">
            Play
          </Link></button>
          <button className="login-button"><Link to="/Login" className="url">
            Login
          </Link></button>
          <button className="signup-button"><Link to="/Signup" className="url">
            Signup
          </Link></button>
        </div>
      </header>
      <section className="info-section">
        <h2 className="section-title">Why Groundwater Management Matters</h2>
        <p className="section-text">
          Groundwater is a critical resource for drinking water, agriculture,
          and industrial processes. Effective management ensures that this vital
          resource is used sustainably, protects ecosystems, and supports
          long-term availability.
        </p>
      </section>
      <section className="services-section">
        <h2 className="section-title">Learning</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3 className="service-title">Groundwater Importance</h3>
            <p className="service-description">
              Recognizing the critical role of groundwater in providing drinking
              water, supporting agriculture, and sustaining ecosystems.
              Understanding the impact of groundwater on local and global water
              cycles.
            </p>
          </div>
          <div className="service-card">
            <h3 className="service-title">Resource Management</h3>
            <p className="service-description">
              Strategic planning and management of groundwater resources to
              prevent overuse and contamination.
            </p>
          </div>
          <div className="service-card">
            <h3 className="service-title">Groundwater Pollution

            </h3>
            <p className="service-description">
              Identifying common sources of groundwater pollution, such as agricultural runoff, industrial discharge, and leaking underground storage tanks.
              Learning about the effects of contaminants on water quality and public health.
            </p>
          </div>
        </div>
      </section>
      <footer className="footer">
        <p>
          &copy; 2024 Groundwater Management Solutions. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default GamingLandingPage;
