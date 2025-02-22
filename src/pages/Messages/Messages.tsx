import { Link } from "react-router-dom";
import "../Dashboard/Dashboard.scss";

const Messages = () => {
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
        <section className="cards">Messages</section>
      </main>
    </div>
  );
};

export default Messages;
