import { Link } from "react-router-dom";

export default function CrewmateCard({ c }) {
  return (
    <Link className={`card ${c.color}`} to={`/crew/${c.id}`}>
      <h3>{c.name}</h3>
    </Link>
  );
}
