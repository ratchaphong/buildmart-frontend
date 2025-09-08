import { useState } from "react";

export interface ForgotPasswordFormData {
  email: string;
}

export function useForgotPassword() {
  const [formData, setFormData] = useState<ForgotPasswordFormData>({
    email: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Partial<ForgotPasswordFormData>>({});

  const handleInputChange = (
    field: keyof ForgotPasswordFormData,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: undefined,
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<ForgotPasswordFormData> = {};

    if (!formData.email) {
      newErrors.email = "กรุณากรอกอีเมล";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "รูปแบบอีเมลไม่ถูกต้อง";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // TODO: Implement actual forgot password API call
      console.log("Sending reset email to:", formData.email);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Show success message
      setIsSuccess(true);
    } catch (error) {
      console.error("Failed to send reset email:", error);
      // TODO: Handle error
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendEmail = async () => {
    if (!formData.email) return;

    setIsLoading(true);

    try {
      // TODO: Implement resend email API call
      console.log("Resending email to:", formData.email);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Email resent successfully");
    } catch (error) {
      console.error("Failed to resend email:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    isLoading,
    isSuccess,
    errors,
    handleInputChange,
    handleSubmit,
    handleResendEmail,
  };
}
