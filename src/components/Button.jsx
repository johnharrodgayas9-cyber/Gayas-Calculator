const styles = {
  num: "bg-white text-forest hover:bg-green-50 border border-green-900/10",
  op: "bg-leaf text-white hover:bg-forest",
  clear: "bg-red-50 text-red-700 hover:bg-red-100 border border-red-200",
  fn: "bg-green-100 text-forest hover:bg-green-200",
  equals: "bg-gold text-forest-dark hover:bg-amber-400",
};

export default function Button({ label, onClick, variant = "num", wide = false, ariaLabel }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel || label}
      className={`h-16 rounded-xl text-2xl font-medium shadow-sm transition
        duration-100 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2
        focus-visible:outline-gold sm:h-[4.5rem] ${wide ? "col-span-2" : ""} ${styles[variant]}`}
    >
      {label}
    </button>
  );
}
