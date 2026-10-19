import { forwardRef } from "react";

/**
 * Input: Accessible form input with clear label, 16px min mobile font, and clean focus states.
 */
const Input = forwardRef(function Input(
  {
    label,
    id,
    name,
    type = "text",
    value,
    onChange,
    placeholder = "",
    error,
    helperText,
    required = false,
    className = "",
    inputClassName = "",
    ...props
  },
  ref
) {
  const inputId = id || name;
  const errorId = `${inputId}-error`;
  const helperId = `${inputId}-helper`;

  return (
    <div className={`w-full flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label
          htmlFor={inputId}
          className="text-xs uppercase tracking-[0.14em] font-medium text-text flex items-center justify-between"
        >
          <span>
            {label}
            {required && <span className="text-accent ml-1">*</span>}
          </span>
        </label>
      )}

      <input
        ref={ref}
        id={inputId}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? errorId : helperText ? helperId : undefined}
        className={`w-full min-h-[46px] px-3.5 py-2.5 text-base sm:text-sm bg-surface text-text border rounded-sm placeholder:text-text-muted/50 transition-colors duration-200 outline-none ${
          error
            ? "border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
            : "border-border hover:border-text-muted/60 focus:border-primary focus:ring-1 focus:ring-primary"
        } ${inputClassName}`}
        {...props}
      />

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

export default Input;

