"use client";

import { useRegister } from "./useRegister";
import { Mail, Lock, User, Phone } from "lucide-react";
import Link from "next/link";
import { FormField, FormCheckbox, FormButton } from "@/lib/forms";
import { FormikProvider } from "formik";
import "./register.css";

export default function RegisterPage() {
  const { form, isLoading } = useRegister();

  return (
    <div className="register-container">
      <div className="register-form-wrapper">
        {/* Header */}
        <div className="register-header">
          <h2 className="register-title">สร้างบัญชีใหม่</h2>
          <p className="register-subtitle">
            หรือ{" "}
            <Link href="/login" className="register-login-link">
              เข้าสู่ระบบ
            </Link>
          </p>
        </div>

        {/* Form */}
        <FormikProvider value={form.formik}>
          <form className="register-form" onSubmit={form.handleSubmit}>
            <div className="register-form-fields">
              {/* Name Fields */}
              <div className="register-name-grid">
                <FormField
                  label="ชื่อ"
                  name="firstName"
                  placeholder="ชื่อ"
                  required
                  icon={<User />}
                />

                <FormField
                  label="นามสกุล"
                  name="lastName"
                  placeholder="นามสกุล"
                  required
                  icon={<User />}
                />
              </div>

              {/* Email */}
              <FormField
                label="อีเมล"
                name="email"
                type="email"
                placeholder="example@email.com"
                required
                icon={<Mail />}
              />

              {/* Phone */}
              <FormField
                label="เบอร์โทรศัพท์"
                name="phone"
                type="tel"
                placeholder="08x-xxx-xxxx"
                required
                icon={<Phone />}
              />

              {/* Password */}
              <FormField
                label="รหัสผ่าน"
                name="password"
                type="password"
                placeholder="รหัสผ่านอย่างน้อย 8 ตัวอักษร"
                required
                icon={<Lock />}
              />

              {/* Confirm Password */}
              <FormField
                label="ยืนยันรหัสผ่าน"
                name="confirmPassword"
                type="password"
                placeholder="ยืนยันรหัสผ่าน"
                required
                icon={<Lock />}
              />

              {/* Terms and Conditions */}
              <FormCheckbox label="ยอมรับ" name="agreeTerms" required>
                {" "}
                <a href="#" className="register-terms-link">
                  ข้อกำหนดการใช้งาน
                </a>{" "}
                และ{" "}
                <a href="#" className="register-terms-link">
                  นโยบายความเป็นส่วนตัว
                </a>
              </FormCheckbox>
            </div>

            {/* Submit Button */}
            <div className="register-submit-wrapper">
              <FormButton
                type="submit"
                disabled={!form.isValid}
                loading={isLoading}
                loadingText="กำลังสร้างบัญชี..."
                className="btn-primary register-submit-btn"
              >
                สร้างบัญชี
              </FormButton>
            </div>
          </form>
        </FormikProvider>
      </div>
    </div>
  );
}
