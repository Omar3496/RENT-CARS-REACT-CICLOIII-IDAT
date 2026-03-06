export function Characteristics({ icon, title, desc }) {
  return (
    <div className="characteristics-card">
      <span>{icon}</span>
      <div className="characteristics-desc">
        <span style={{ fontSize: "0.8em", color: "#B9B9B9" }}>
          <strong>{title}</strong>
        </span>
        <span style={{ fontSize: "1em", color: "#000" }}>
          <strong>{desc}</strong>
        </span>
      </div>
    </div>
  );
}
