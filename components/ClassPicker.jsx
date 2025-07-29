export default function ClassPicker({ value, onChange }) {
  const CLASSES = ["Tank", "Healer", "DPS"];
  return (
    <div className="chip-row">
      {CLASSES.map(cl => (
        <button
          key={cl}
          className={value.class === cl ? "chip active" : "chip"}
          onClick={() => onChange({ ...value, class: cl })}
        >
          {cl}
        </button>
      ))}
    </div>
  );
}
