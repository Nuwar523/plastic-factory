"use client";

import { useActionState } from "react";
import { createAdminUser } from "./actions";

const initialState = {
  error: "",
  success: "",
};

export default function UsersPage() {
  const [state, formAction, pending] = useActionState(
    createAdminUser,
    initialState
  );

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-slate-50 p-6 sm:p-8"
    >
      <div className="mx-auto max-w-4xl">

        <div className="mb-8">
          <p className="text-sm font-semibold text-teal-600">
            إدارة النظام
          </p>

          <h1 className="mt-2 text-3xl font-black text-slate-900">
            المستخدمون
          </h1>

          <p className="mt-2 text-slate-500">
            إضافة حسابات جديدة للدخول إلى لوحة الإدارة.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

          <div className="mb-7 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-2xl">
              👤
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900">
                إضافة حساب أدمن
              </h2>

              <p className="text-sm text-slate-500">
                أنشئ حسابًا جديدًا للوصول إلى لوحة الإدارة.
              </p>
            </div>
          </div>

          <form action={formAction} className="space-y-5">

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                البريد الإلكتروني
              </label>

              <input
                name="email"
                type="email"
                required
                placeholder="admin@example.com"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                كلمة المرور
              </label>

              <input
                name="password"
                type="password"
                required
                minLength={6}
                placeholder="••••••••"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-100"
              />

              <p className="mt-2 text-xs text-slate-400">
                يجب أن تكون كلمة المرور 6 أحرف على الأقل.
              </p>
            </div>

            {state.error && (
              <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-700">
                ❌ {state.error}
              </div>
            )}

            {state.success && (
              <div className="rounded-xl border border-green-200 bg-green-50 p-4 text-sm font-semibold text-green-700">
                ✅ {state.success}
              </div>
            )}

            <button
              type="submit"
              disabled={pending}
              className="w-full rounded-xl bg-teal-600 px-6 py-4 font-bold text-white transition hover:bg-teal-700 disabled:opacity-60"
            >
              {pending
                ? "جاري إنشاء الحساب..."
                : "➕ إنشاء حساب الأدمن"}
            </button>

          </form>
        </div>

        <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <p className="font-bold text-amber-800">
            🔐 ملاحظة أمنية
          </p>

          <p className="mt-1 text-sm leading-7 text-amber-700">
            الحسابات التي يتم إنشاؤها هنا يمكنها تسجيل الدخول إلى لوحة الإدارة.
          </p>
        </div>

      </div>
    </div>
  );
}