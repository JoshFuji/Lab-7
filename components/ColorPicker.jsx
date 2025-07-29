export default function ColorPicker({ value, onChange }) {
  const COLORS = ["red", "green", "blue", "purple", "yellow"];
  return (
    <div className="chip-row">
      {COLORS.map(c => (
        <button
          key={c}
          className={value.color === c ? `chip ${c} active` : `chip ${c}`}
          onClick={() => onChange({ ...value, color: c })}
        >
          {c}
        </button>
      ))}
    </div>
  );
}
