export default function Display({ top, value, error }) {
  const size = value.length > 14 ? "text-2xl" : value.length > 9 ? "text-3xl" : "text-5xl";
  return (
    <div
      className="mb-4 rounded-2xl bg-forest-dark px-5 py-4 text-right"
      role="status"
      aria-live="polite"
    >
      <div className="h-6 truncate font-mono text-sm text-green-200/80">{top}</div>
      <div
        className={`mt-1 truncate font-mono font-medium ${size} ${
          error ? "text-red-300" : "text-white"
        }`}
        data-testid="display"
      >
        {value}
      </div>
    </div>
  );
}
