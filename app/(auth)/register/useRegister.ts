import { useFormValidation } from "@/lib/forms";
import { registerSchema, RegisterFormData } from "./validationSchema";
import { useAuthStore } from "@/lib/stores";

export function useRegister() {
  const { register, isLoading, clearError } = useAuthStore();

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
        clearError(); // Clear any previous errors

        await register({
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          phone: values.phone,
          password: values.password,
          confirmPassword: values.confirmPassword,
          agreeTerms: values.agreeTerms,
        });

        // Registration successful - user will be redirected automatically
        console.log("Registration successful");
      } catch (error) {
        console.error("Registration failed:", error);
        // Error is handled by the store
      } finally {
        setSubmitting(false);
      }
    },
  });

  return {
    form,
    isLoading: isLoading || form.isSubmitting,
  };
}
