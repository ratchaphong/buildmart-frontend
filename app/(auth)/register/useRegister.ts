import { useFormValidation } from "@/lib/forms";
import { registerSchema, RegisterFormData } from "./validationSchema";

export function useRegister() {
  const form = useFormValidation<RegisterFormData>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      agreeTerms: false,
    },
    validationSchema: registerSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        // TODO: Implement actual register API call
        console.log("Registering with:", values);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // TODO: Handle successful registration
        console.log("Registration successful");
      } catch (error) {
        console.error("Registration failed:", error);
        // TODO: Handle registration error
      } finally {
        setSubmitting(false);
      }
    },
  });

  return {
    form,
    isLoading: form.isSubmitting,
  };
}
