"use client";

import Link from "next/link";
import { useActionState } from "react";
import { login } from "./actions";

const initialState = {
  error: "",
};

export default function LoginPage() {
  const [state, formAction] = useActionState(login, initialState);

  return (
    <main
      dir="rtl"
      className="relative min-h-screen overflow-hidden bg-slate-950"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-800 via-slate-900 to-slate-950" />

      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-teal-400/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-orange-400/10 blur-3xl" />

      <div className="relative flex min-h-screen items-center justify-center px-5 py-10">

        <div className="grid w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 shadow-2xl backdrop-blur-xl lg:grid-cols-2">

          {/* Information Side */}
          <div className="hidden bg-gradient-to-br from-teal-700 to-teal-900 p-12 text-white lg:flex lg:flex-col lg:justify-between">

            <div>

              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-lg">
                  <img
                    src="/iogo.jpeg"
                    alt="شركة البطنان"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div>
                  <h1 className="text-xl font-black">
                    شركة البطنان
                  </h1>

                  <p className="text-sm text-teal-100">
                    لصناعة وطباعة الأكياس البلاستيكية
                  </p>
                </div>

              </div>


              <div className="mt-20">

                <p className="font-semibold text-orange-300">
                  لوحة الإدارة
                </p>

                <h2 className="mt-4 text-4xl font-black leading-tight">
                  إدارة المصنع
                  <br />
                  بكل سهولة واحترافية
                </h2>

                <p className="mt-6 max-w-md leading-8 text-teal-100">
                  من هنا يمكنك إدارة المنتجات ومتابعة طلبات العملاء
                  ومراجعة الطلبات الواردة إلى شركة البطنان.
                </p>

              </div>

            </div>


            <div className="grid grid-cols-3 gap-3">

              <div className="rounded-xl border border-white/10 bg-white/10 p-4 text-center">
                <p className="text-xl font-black">📦</p>
                <p className="mt-2 text-xs text-teal-100">
                  المنتجات
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/10 p-4 text-center">
                <p className="text-xl font-black">🛒</p>
                <p className="mt-2 text-xs text-teal-100">
                  الطلبات
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/10 p-4 text-center">
                <p className="text-xl font-black">🔐</p>
                <p className="mt-2 text-xs text-teal-100">
                  آمن
                </p>
              </div>

            </div>

          </div>


          {/* Login Form */}
          <div className="bg-white p-7 sm:p-10 lg:p-12">

            {/* Mobile Logo */}
            <div className="mb-8 flex items-center gap-3 lg:hidden">

              <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-teal-50">
                <img
                  src="/iogo.jpeg"
                  alt="شركة البطنان"
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <h1 className="font-black text-slate-900">
                  شركة البطنان
                </h1>

                <p className="text-xs text-slate-500">
                  نظام إدارة المصنع
                </p>
              </div>

            </div>


            <div className="mb-8">

              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-2xl">
                🔐
              </div>

              <h2 className="text-3xl font-black text-slate-900">
                تسجيل الدخول
              </h2>

              <p className="mt-2 leading-7 text-slate-500">
                سجّل الدخول للوصول إلى لوحة إدارة شركة البطنان.
              </p>

            </div>


            <form action={formAction} className="space-y-5">

              {/* Email */}
              <div>

                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-bold text-slate-700"
                >
                  البريد الإلكتروني
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="أدخل البريد الإلكتروني"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10"
                />

              </div>


              {/* Password */}
              <div>

                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-bold text-slate-700"
                >
                  كلمة المرور
                </label>

                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="أدخل كلمة المرور"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10"
                />

              </div>


              {/* Error */}
              {state.error && (

                <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">

                  <span className="text-lg">
                    ⚠️
                  </span>

                  <p>
                    {state.error}
                  </p>

                </div>

              )}


              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-xl bg-teal-600 px-6 py-4 font-bold text-white shadow-lg shadow-teal-600/20 transition hover:bg-teal-700 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-teal-500/20"
              >
                دخول إلى لوحة الإدارة
              </button>

            </form>


            {/* Back */}
            <div className="mt-8 border-t border-slate-100 pt-6 text-center">

              <Link
                href="/"
                className="text-sm font-semibold text-slate-500 transition hover:text-teal-600"
              >
                ← العودة إلى الموقع الرئيسي
              </Link>

            </div>


            <p className="mt-8 text-center text-xs text-slate-400">
              شركة البطنان • نظام إدارة المصنع
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}