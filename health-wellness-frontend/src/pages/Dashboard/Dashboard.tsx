import React from "react";
import "./Dashboard.scss";
import { Link } from "react-router-dom";

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>Bayer Health</h2>
        <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/profile">My Profile</Link></li>
          <li><Link to="/goals">Wellness Goals</Link></li>
          <li><Link to="/messages">Messages</Link></li>
          <li><Link to="/logout">Logout</Link></li>

        </ul>
      </aside>

      <main className="content">
        <header className="header">
          <h1>Welcome, Admin</h1>
        </header>

        <section className="cards">
          <div className="card">Total Users: 150</div>
          <div className="card">Total Sales: $5,000</div>
          <div className="card">New Orders: 20</div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
