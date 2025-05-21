import { createRoot } from "react-dom/client";
import Tailwindcss from "./TailwindCSS";
import './tailwind.css';
import UserForm from "./userForm";
import HitungGajiForm from "./HitungGajiForm";

createRoot(document.getElementById("root"))
    .render(
        <div>
            <Tailwindcss />
            <UserForm/>
            <HitungGajiForm/>
        </div>
    )