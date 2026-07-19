"use client";

import { useActionState } from "react";
import { login } from "./actions";

const initialState = {
  error: "",
};

export default function LoginPage() {
  const [state, formAction] = useActionState(login, initialState);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">
          تسجيل الدخول
        </h1>

        <form action={formAction} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="البريد الإلكتروني"
            required
            className="w-full border rounded-lg p-3"
          />

          <input
            type="password"
            name="password"
            placeholder="كلمة المرور"
            required
            className="w-full border rounded-lg p-3"
          />

          {state.error && (
            <div className="bg-red-100 border border-red-300 text-red-700 p-3 rounded-lg text-center">
              {state.error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            تسجيل الدخول
          </button>
        </form>
      </div>
    </main>
  );
}