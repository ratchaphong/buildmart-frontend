import * as Yup from "yup";

export const registerSchema = Yup.object({
  firstName: Yup.string()
    .required("กรุณากรอกชื่อ")
    .min(2, "ชื่อต้องมีอย่างน้อย 2 ตัวอักษร")
    .max(50, "ชื่อต้องไม่เกิน 50 ตัวอักษร"),

  lastName: Yup.string()
    .required("กรุณากรอกนามสกุล")
    .min(2, "นามสกุลต้องมีอย่างน้อย 2 ตัวอักษร")
    .max(50, "นามสกุลต้องไม่เกิน 50 ตัวอักษร"),

  email: Yup.string()
    .required("กรุณากรอกอีเมล")
    .email("รูปแบบอีเมลไม่ถูกต้อง")
    .max(100, "อีเมลต้องไม่เกิน 100 ตัวอักษร"),

  phone: Yup.string()
    .required("กรุณากรอกเบอร์โทรศัพท์")
    .matches(/^[0-9-+\s()]+$/, "รูปแบบเบอร์โทรศัพท์ไม่ถูกต้อง")
    .min(9, "เบอร์โทรศัพท์ต้องมีอย่างน้อย 9 ตัวอักษร")
    .max(15, "เบอร์โทรศัพท์ต้องไม่เกิน 15 ตัวอักษร"),

  password: Yup.string()
    .required("กรุณากรอกรหัสผ่าน")
    .min(8, "รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร")
    .max(100, "รหัสผ่านต้องไม่เกิน 100 ตัวอักษร")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "รหัสผ่านต้องมีตัวอักษรเล็ก ใหญ่ และตัวเลข"
    ),

  confirmPassword: Yup.string()
    .required("กรุณายืนยันรหัสผ่าน")
    .oneOf([Yup.ref("password")], "รหัสผ่านไม่ตรงกัน"),

  agreeTerms: Yup.boolean()
    .required("กรุณายอมรับข้อกำหนดการใช้งาน")
    .oneOf([true], "กรุณายอมรับข้อกำหนดการใช้งาน"),
});

export type RegisterFormData = Yup.InferType<typeof registerSchema>;
