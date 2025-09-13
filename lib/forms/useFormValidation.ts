import { useFormik, FormikHelpers } from "formik";
import { ObjectSchema } from "yup";

export interface UseFormValidationOptions<T extends Record<string, unknown>> {
  initialValues: T;
  validationSchema: ObjectSchema<T>;
  onSubmit: (
    values: T,
    formikHelpers: FormikHelpers<T>
  ) => void | Promise<unknown>;
  enableReinitialize?: boolean;
  validateOnChange?: boolean;
  validateOnBlur?: boolean;
}

export function useFormValidation<T extends Record<string, unknown>>({
  initialValues,
  validationSchema,
  onSubmit,
  enableReinitialize = false,
  validateOnChange = true,
  validateOnBlur = true,
}: UseFormValidationOptions<T>) {
  const formik = useFormik<T>({
    initialValues,
    validationSchema,
    onSubmit,
    enableReinitialize,
    validateOnChange,
    validateOnBlur,
  });

  return {
    formik,
    values: formik.values,
    errors: formik.errors,
    touched: formik.touched,
    isSubmitting: formik.isSubmitting,
    isValid: formik.isValid,
    dirty: formik.dirty,
    setFieldValue: formik.setFieldValue,
    setFieldTouched: formik.setFieldTouched,
    setFieldError: formik.setFieldError,
    resetForm: formik.resetForm,
    submitForm: formik.submitForm,
    handleChange: formik.handleChange,
    handleBlur: formik.handleBlur,
    handleSubmit: formik.handleSubmit,
  };
}
