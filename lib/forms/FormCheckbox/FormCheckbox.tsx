import React from "react";
import { Field, FieldProps } from "formik";
import "./FormCheckbox.css";
import { FormCheckboxProps } from "./types";

export function FormCheckbox({
  label,
  name,
  required = false,
  className = "form-checkbox",
  checkboxClassName = "form-checkbox-input",
  labelClassName = "form-checkbox-label",
  errorClassName = "form-checkbox-error",
  children,
}: FormCheckboxProps) {
  return (
    <Field name={name}>
      {({ field, meta }: FieldProps) => {
        const hasError = meta.touched && !!meta.error;

        return (
          <div className={className}>
            <div className="form-checkbox-wrapper">
              <input
                id={name}
                name={field.name}
                type="checkbox"
                checked={field.value as boolean}
                onChange={field.onChange}
                onBlur={field.onBlur}
                className={checkboxClassName}
              />
            </div>
            <div>
              <label htmlFor={name} className={labelClassName}>
                {label}{" "}
                {required && <span className="form-checkbox-required">*</span>}
                {children}
              </label>
              {hasError && <p className={errorClassName}>{meta.error}</p>}
            </div>
          </div>
        );
      }}
    </Field>
  );
}
