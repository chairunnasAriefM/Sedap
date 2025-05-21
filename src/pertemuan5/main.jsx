import { createRoot } from "react-dom/client";
import './assets/tailwind.css';
import { FaHome } from "react-icons/fa";
import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import Dashboard from "./pages/Dashboard";

createRoot(document.getElementById("root"))
    .render(
        <div id="layout-wrapper" className="flex flex-row flex-1">
            <Sidebar />
            <div id="main-content" className="flex-1 p-4 bg-latar">
                <Header />
                <Dashboard />
            </div>
        </div>
    )