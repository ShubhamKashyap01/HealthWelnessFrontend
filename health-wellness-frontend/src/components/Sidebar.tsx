import { Link } from "react-router-dom";
import { Home, BarChart, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-gray-900 text-white p-4">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <nav>
        <ul className="space-y-4">
          <li>
            <Link className="flex items-center gap-3 p-2 rounded hover:bg-gray-700" to="/">
              <Home size={20} /> Home
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-3 p-2 rounded hover:bg-gray-700" to="/analytics">
              <BarChart size={20} /> Analytics
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-3 p-2 rounded hover:bg-gray-700" to="/settings">
              <Settings size={20} /> Settings
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
