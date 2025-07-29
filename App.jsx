import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SideNav         from "./components/SideNav";
import CrewmateList    from "./pages/CrewmateList";
import NewCrewmate     from "./pages/NewCrewmate";
import EditCrewmate    from "./pages/EditCrewmate";
import CrewmateDetail  from "./pages/CrewmateDetail";

export default function App() {
  return (
    <BrowserRouter>
      <div className="layout">
        <SideNav />

        <main className="content">
          <Routes>
            <Route path="/"         element={<CrewmateList />} />
            <Route path="/new"      element={<NewCrewmate />} />
            <Route path="/edit/:id" element={<EditCrewmate />} />
            <Route path="/crew/:id" element={<CrewmateDetail />} />
            <Route path="*"         element={<Navigate to="/" />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
