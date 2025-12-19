import "./groncha.css";

export default function GronchaLogo() {
  return (
    <svg viewBox="0 0 600 200" className="w-full max-w-xl">
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        className="groncha-text"
      >
        GRONCHA
      </text>

      {/* líneas cruzadas */}
      <line x1="200" y1="130" x2="400" y2="170" className="scratch" />
      <line x1="400" y1="130" x2="200" y2="170" className="scratch" />
    </svg>
  );
}