import React from "react";
import "./Dashboard.scss";
import { Link } from "react-router-dom";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import styles from "../WellnessGoals/FitnessTracker.module.scss";
// import Card from "../../components/ui/card/Card"

const Dashboard: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  console.log(user)
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>Bayer Health</h2>
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/profile">My Profile</Link>
          </li>
          <li>
            <Link to="/goals">Wellness Goals</Link>
          </li>
          <li>
            <Link to="/messages">Messages</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </aside>

      <main className="content">
        <p  style={{ textAlign: "left" }}>Welcome, {user?.name}</p>
        <section className="cards">
        
          <div className="card">
          <h3 style={{ textAlign: "left" }}>Wellness Goals</h3>
          <div className={styles.fitnessTracker}>
            {/* Steps Card */}
            <div className={styles.card}>
              <h3>🚶 Steps</h3>
              <p className={styles.stats}>3620 / 6000 steps</p>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: "60%" }}></div>
              </div>
            </div>

            {/* Active Time Card */}
            <div className={styles.card}>
              <h3>🔥 Active Time</h3>
              <p className={styles.stats}>
                56 / 60 mins &nbsp; | &nbsp; 1712 Kcal &nbsp; | &nbsp; 1.23 km
              </p>
            </div>

            {/* Sleep Card */}
            <div className={styles.card}>
              <h3>🌙 Sleep</h3>
              <p className={styles.stats}>
                6 hrs 30 mins &nbsp; | &nbsp; 11:30 pm - 06:00 am
              </p>
              <div className={styles.sleepGraph}>
                <div className={`${styles.block} ${styles.sleep}`}></div>
                <div className={`${styles.block} ${styles.lightSleep}`}></div>
                <div className={`${styles.block} ${styles.awake}`}></div>
                <div className={`${styles.block} ${styles.sleep}`}></div>
                <div className={`${styles.block} ${styles.lightSleep}`}></div>
              </div>
            </div>
          </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
