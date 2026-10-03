const operations = [
  ["+", "Addition", "8 + 5 = 13"],
  ["−", "Subtraction", "8 − 5 = 3"],
  ["×", "Multiplication", "8 × 5 = 40"],
  ["÷", "Division", "8 ÷ 4 = 2 (dividing by 0 shows an error)"],
];

const keys = [
  ["0–9 and .", "Type digits and the decimal point"],
  ["+  −  *  /", "Choose an operation"],
  ["Enter or =", "Show the result"],
  ["Backspace", "Delete the last digit"],
  ["Esc", "Clear everything"],
];

export default function Guide() {
  return (
    <section aria-labelledby="guide-title" className="w-full max-w-xl space-y-8">
      <div>
        <h2 id="guide-title" className="text-2xl font-bold text-forest">How to use the calculator</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-stone-700">
          <li>Tap or type the first number.</li>
          <li>Choose an operation: +, −, × or ÷.</li>
          <li>Enter the second number.</li>
          <li>Press = to see the result. You can keep going with the result.</li>
          <li>Press AC to clear everything and start over, or ⌫ to remove the last digit.</li>
        </ol>
      </div>

      <div>
        <h3 className="text-xl font-bold text-forest">Supported operations</h3>
        <dl className="mt-3 divide-y divide-green-900/10 rounded-xl border border-green-900/10 bg-white">
          {operations.map(([sym, name, ex]) => (
            <div key={name} className="flex items-baseline gap-4 px-4 py-3">
              <dt className="w-8 text-center font-mono text-xl text-leaf">{sym}</dt>
              <dd className="text-stone-700">
                <span className="font-medium">{name}</span>
                <span className="block font-mono text-sm text-stone-500">{ex}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div>
        <h3 className="text-xl font-bold text-forest">Keyboard shortcuts</h3>
        <ul className="mt-3 space-y-2 text-stone-700">
          {keys.map(([k, d]) => (
            <li key={k} className="flex flex-wrap items-center gap-3">
              <kbd className="rounded-md border border-stone-300 bg-white px-2 py-0.5 font-mono text-sm">{k}</kbd>
              <span>{d}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
