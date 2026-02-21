export default function BottomFade({ color = "white", height = "h-32" }) {
  return (
    <div
      className={`absolute bottom-0 left-0 w-full ${height} pointer-events-none z-20`}
      style={{ background: `linear-gradient(to top, ${color}, transparent)` }}
    />
  );
}
