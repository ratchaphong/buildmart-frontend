import React from "react";

export interface FormCheckboxProps {
  label: string;
  name: string;
  required?: boolean;
  className?: string;
  checkboxClassName?: string;
  labelClassName?: string;
  errorClassName?: string;
  children?: React.ReactNode;
}
