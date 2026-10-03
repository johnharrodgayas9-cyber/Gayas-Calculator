import { useEffect, useReducer } from "react";
import { reducer, initialState, topLine } from "../calculatorReducer";
import Display from "./Display";
import Button from "./Button";

const KEY_OPS = { "+": "+", "-": "−", "*": "×", x: "×", "/": "÷" };

export default function Calculator() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Keyboard support
  useEffect(() => {
    const onKey = (e) => {
      const k = e.key;
      if (/^[0-9]$/.test(k)) dispatch({ type: "digit", value: k });
      else if (k === ".") dispatch({ type: "dot" });
      else if (KEY_OPS[k]) {
        e.preventDefault();
        dispatch({ type: "op", value: KEY_OPS[k] });
      } else if (k === "Enter" || k === "=") {
        e.preventDefault();
        dispatch({ type: "equals" });
      } else if (k === "Backspace") dispatch({ type: "backspace" });
      else if (k === "Escape") dispatch({ type: "clear" });
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const digit = (d) => <Button label={d} onClick={() => dispatch({ type: "digit", value: d })} />;
  const op = (o) => <Button label={o} variant="op" onClick={() => dispatch({ type: "op", value: o })} />;

  return (
    <section aria-label="Calculator" className="w-full max-w-sm rounded-3xl bg-forest p-4 shadow-xl sm:p-5">
      <Display top={topLine(state)} value={state.current} error={state.error} />
      <div className="grid grid-cols-4 gap-3">
        <Button label="AC" ariaLabel="All clear" variant="clear" wide onClick={() => dispatch({ type: "clear" })} />
        <Button label="⌫" ariaLabel="Backspace" variant="fn" onClick={() => dispatch({ type: "backspace" })} />
        {op("÷")}
        {digit("7")}{digit("8")}{digit("9")}{op("×")}
        {digit("4")}{digit("5")}{digit("6")}{op("−")}
        {digit("1")}{digit("2")}{digit("3")}{op("+")}
        <Button label="0" wide onClick={() => dispatch({ type: "digit", value: "0" })} />
        <Button label="." ariaLabel="Decimal point" onClick={() => dispatch({ type: "dot" })} />
        <Button label="=" ariaLabel="Equals" variant="equals" onClick={() => dispatch({ type: "equals" })} />
      </div>
    </section>
  );
}
