import React from "react";
import "./FormButton.css";
import { FormButtonProps } from "./types";

export function FormButton({
  loading = false,
  loadingText = "กำลังประมวลผล...",
  children,
  disabled,
  className = "btn-primary",
  ...props
}: FormButtonProps) {
  return (
    <button disabled={disabled || loading} className={className} {...props}>
      {loading ? (
        <div className="form-button-loading">
          <div className="form-button-spinner"></div>
          {loadingText}
        </div>
      ) : (
        children
      )}
    </button>
  );
}
