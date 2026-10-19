import { forwardRef } from "react";

/**
 * Select: Accessible custom styled select input with native mobile pickers.
 */
const Select = forwardRef(function Select(
  {
    label,
    id,
    name,
    value,
    onChange,
    options = [],
    placeholder = "Select an option",
    error,
    helperText,
    required = false,
    className = "",
    selectClassName = "",
    ...props
  },
  ref
) {
  const selectId = id || name;
  const errorId = `${selectId}-error`;
  const helperId = `${selectId}-helper`;

  return (
    <div className={`w-full flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label
          htmlFor={selectId}
          className="text-xs uppercase tracking-[0.14em] font-medium text-text flex items-center justify-between"
        >
          <span>
            {label}
            {required && <span className="text-accent ml-1">*</span>}
          </span>
        </label>
      )}

      <div className="relative w-full">
        <select
          ref={ref}
          id={selectId}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? errorId : helperText ? helperId : undefined}
          className={`w-full min-h-[46px] px-3.5 pr-10 py-2.5 text-base sm:text-sm bg-surface text-text border rounded-sm transition-colors duration-200 outline-none appearance-none cursor-pointer ${
            error
              ? "border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
              : "border-border hover:border-text-muted/60 focus:border-primary focus:ring-1 focus:ring-primary"
          } ${selectClassName}`}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((opt) => {
            const isObj = typeof opt === "object" && opt !== null;
            const val = isObj ? opt.value : opt;
            const text = isObj ? opt.label : opt;
            return (
              <option key={val} value={val}>
                {text}
              </option>
            );
          })}
        </select>

        {/* Custom subtle chevron */}
        <div
          className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-text-muted"
          aria-hidden="true"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {error && (
        <p id={errorId} className="text-xs text-rose-600 font-medium mt-0.5" role="alert">
          {error}
        </p>
      )}

      {helperText && !error && (
        <p id={helperId} className="text-xs text-text-muted mt-0.5">
          {helperText}
        </p>
      )}
    </div>
  );
});

export default Select;

