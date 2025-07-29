import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import './SideNav.css'

export default function SideNav() {
  const [open, setOpen] = useState(false);          // collapsible on mobile
  const nav = useNavigate();

  // close on route change
  useEffect(() => {
    const unlisten = nav((_, location) => setOpen(false));
    return unlisten;
  }, [nav]);

  return (
    <>
      {/* hamburger for small screens */}
      <button
        className="hamburger"
        onClick={() => setOpen(o => !o)}
      >
        ☰
      </button>

      <nav className={open ? "sidenav open" : "sidenav"}>
        <h1>Crewmates</h1>
        <NavLink to="/"        className="navlink">🏠 Home</NavLink>
        <NavLink to="/new"     className="navlink">＋ New</NavLink>
        <button   className="navlink back"
          onClick={() => nav(-1)}
        >
          ← Back
        </button>
      </nav>
    </>
  );
}
