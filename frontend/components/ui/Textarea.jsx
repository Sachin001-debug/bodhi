import { forwardRef } from "react";

/**
 * Textarea: Accessible multiline text input with 16px min mobile font.
 */
const Textarea = forwardRef(function Textarea(
  {
    label,
    id,
    name,
    value,
    onChange,
    placeholder = "",
    error,
    helperText,
    required = false,
    rows = 4,
    className = "",
    textareaClassName = "",
    ...props
  },
  ref
) {
  const textareaId = id || name;
  const errorId = `${textareaId}-error`;
  const helperId = `${textareaId}-helper`;

  return (
    <div className={`w-full flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label
          htmlFor={textareaId}
          className="text-xs uppercase tracking-[0.14em] font-medium text-text flex items-center justify-between"
        >
          <span>
            {label}
            {required && <span className="text-accent ml-1">*</span>}
          </span>
        </label>
      )}

      <textarea
        ref={ref}
        id={textareaId}
        name={name}
        rows={rows}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? errorId : helperText ? helperId : undefined}
        className={`w-full p-3.5 text-base sm:text-sm bg-surface text-text border rounded-sm placeholder:text-text-muted/50 transition-colors duration-200 outline-none resize-y ${
          error
            ? "border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
            : "border-border hover:border-text-muted/60 focus:border-primary focus:ring-1 focus:ring-primary"
        } ${textareaClassName}`}
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

export default Textarea;

