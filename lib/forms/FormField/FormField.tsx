import React from "react";
import { Field, FieldProps } from "formik";
import "./FormField.css";
import { FormFieldProps } from "./types";

export function FormField({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
  icon,
  className = "form-field",
  inputClassName = "form-field-input",
  errorClassName = "form-field-error",
}: FormFieldProps) {
  return (
    <Field name={name}>
      {({ field, meta }: FieldProps) => {
        const hasError = meta.touched && !!meta.error;

        return (
          <div className={className}>
            <label htmlFor={name} className="form-field-label">
              {label}{" "}
              {required && <span className="form-field-required">*</span>}
            </label>
            <div className="form-field-input-wrapper">
              {icon && <div className="form-field-input-icon">{icon}</div>}
              <input
                id={name}
                name={field.name}
                type={type}
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                className={`${inputClassName} ${
                  icon ? "form-field-input-with-icon" : ""
                } ${hasError ? "form-field-input-error" : ""}`}
                placeholder={placeholder}
              />
            </div>
            {hasError && <p className={errorClassName}>{meta.error}</p>}
          </div>
        );
      }}
    </Field>
  );
}
