import React from "react";

export interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  icon?: React.ReactNode;
  className?: string;
  inputClassName?: string;
  errorClassName?: string;
}
