// All calculator logic lives here. State is managed in React with useReducer.
export const initialState = {
  current: "0",   // number being typed / shown
  prev: null,     // stored first operand
  op: null,       // pending operator
  overwrite: false, // next digit starts a new number
  error: false,
  expr: "",       // finished expression shown after "="
};

const fmt = (n) => String(parseFloat(n.toPrecision(12)));

const calc = (a, b, op) => {
  switch (op) {
    case "+": return a + b;
    case "−": return a - b;
    case "×": return a * b;
    case "÷": return b === 0 ? null : a / b; // null = divide by zero
    default: return b;
  }
};

const divideByZero = {
  ...initialState,
  current: "Error",
  error: true,
  expr: "Cannot divide by zero",
};

export function reducer(state, action) {
  if (action.type === "clear") return initialState;
  const s = state.error ? initialState : state;

  switch (action.type) {
    case "digit": {
      if (s.overwrite || s.current === "0")
        return { ...s, current: action.value, overwrite: false, expr: "" };
      if (s.current.replace(/[-.]/g, "").length >= 12) return s;
      return { ...s, current: s.current + action.value };
    }
    case "dot": {
      if (s.overwrite) return { ...s, current: "0.", overwrite: false, expr: "" };
      if (s.current.includes(".")) return s;
      return { ...s, current: s.current + "." };
    }
    case "backspace": {
      if (s.overwrite) return s;
      const c = s.current;
      const short = c.length <= 1 || (c.length === 2 && c.startsWith("-"));
      return { ...s, current: short ? "0" : c.slice(0, -1) };
    }
    case "op": {
      if (s.prev !== null && s.op && !s.overwrite) {
        const r = calc(s.prev, parseFloat(s.current), s.op);
        if (r === null) return divideByZero;
        return { ...s, prev: r, current: fmt(r), op: action.value, overwrite: true, expr: "" };
      }
      return { ...s, prev: parseFloat(s.current), op: action.value, overwrite: true, expr: "" };
    }
    case "equals": {
      if (s.op === null || s.prev === null) return s;
      const b = parseFloat(s.current);
      const r = calc(s.prev, b, s.op);
      if (r === null) return divideByZero;
      return {
        ...initialState,
        current: fmt(r),
        overwrite: true,
        expr: `${fmt(s.prev)} ${s.op} ${fmt(b)} =`,
      };
    }
    default:
      return s;
  }
}

export const topLine = (s) => (s.op && s.prev !== null ? `${fmt(s.prev)} ${s.op}` : s.expr);
