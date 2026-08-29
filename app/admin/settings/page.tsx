"use client";

import { useEffect, useState } from "react";

import {
  Settings,
  Building2,
  ShieldCheck,
  Bell,
  Palette,
  Globe,
  Save,
  Users,
  Trash2,
  RefreshCw,
} from "lucide-react";

type User = {
  id: string;
  email?: string;
  created_at: string;
  last_sign_in_at?: string | null;
};

type SettingsData = {
  language: string;
  currency: string;
  theme: string;
  order_notifications: boolean;
  stock_notifications: boolean;
};

const defaultSettings: SettingsData = {
  language: "ar",
  currency: "LYD",
  theme: "light",
  order_notifications: true,
  stock_notifications: true,
};

export default function SettingsPage() {
  /* =========================
     Users
  ========================= */

  const [users, setUsers] = useState<User[]>([]);
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [deletingUser, setDeletingUser] = useState<string | null>(null);

  /* =========================
     Settings
  ========================= */

  const [settings, setSettings] =
    useState<SettingsData>(defaultSettings);

  const [loadingSettings, setLoadingSettings] = useState(true);
  const [savingSettings, setSavingSettings] = useState(false);

  /* =========================
     Load Settings
  ========================= */

  async function loadSettings() {
    setLoadingSettings(true);

    try {
      const response = await fetch("/api/admin/settings", {
        method: "GET",
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error("فشل في تحميل الإعدادات");
      }

      const data = await response.json();

      if (data.settings) {
        setSettings({
          language:
            data.settings.language ??
            defaultSettings.language,

          currency:
            data.settings.currency ??
            defaultSettings.currency,

          theme:
            data.settings.theme ??
            defaultSettings.theme,

          order_notifications:
            data.settings.order_notifications ??
            defaultSettings.order_notifications,

          stock_notifications:
            data.settings.stock_notifications ??
            defaultSettings.stock_notifications,
        });
      }
    } catch (error) {
      console.error(error);
      alert("تعذر تحميل الإعدادات");
    } finally {
      setLoadingSettings(false);
    }
  }

  /* =========================
     Save Settings
  ========================= */

  async function saveSettings() {
    if (savingSettings) return;

    setSavingSettings(true);

    try {
      const response = await fetch("/api/admin/settings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(settings),
      });

      const text = await response.text();

      const data = text
        ? JSON.parse(text)
        : {};

      if (!response.ok) {
        throw new Error(
          data.error || "فشل حفظ الإعدادات"
        );
      }

      if (data.settings) {
        setSettings({
          language:
            data.settings.language ??
            settings.language,

          currency:
            data.settings.currency ??
            settings.currency,

          theme:
            data.settings.theme ??
            settings.theme,

          order_notifications:
            data.settings.order_notifications ??
            settings.order_notifications,

          stock_notifications:
            data.settings.stock_notifications ??
            settings.stock_notifications,
        });
      }

      alert("تم حفظ التغييرات بنجاح");
    } catch (error) {
      console.error(error);

      alert(
        error instanceof Error
          ? error.message
          : "حدث خطأ أثناء حفظ الإعدادات"
      );
    } finally {
      setSavingSettings(false);
    }
  }

  /* =========================
     Load Users
  ========================= */

  async function loadUsers() {
    setLoadingUsers(true);

    try {
      const response = await fetch(
        "/api/admin/users",
        {
          method: "GET",
          cache: "no-store",
        }
      );

      if (!response.ok) {
        throw new Error(
          "فشل في جلب المستخدمين"
        );
      }

      const data = await response.json();

      setUsers(data.users || []);
    } catch (error) {
      console.error(error);
      alert("تعذر تحميل المستخدمين");
    } finally {
      setLoadingUsers(false);
    }
  }

  /* =========================
     Delete User
  ========================= */

  async function deleteUser(userId: string) {
    const confirmed = window.confirm(
      "هل أنت متأكد من حذف هذا المستخدم؟ لا يمكن التراجع عن هذه العملية."
    );

    if (!confirmed) return;

    setDeletingUser(userId);

    try {
      const response = await fetch(
        "/api/admin/users",
        {
          method: "DELETE",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            userId,
          }),
        }
      );

      const text = await response.text();

      const data = text
        ? JSON.parse(text)
        : {};

      if (!response.ok) {
        throw new Error(
          data.error ||
            "فشل حذف المستخدم"
        );
      }

      setUsers((currentUsers) =>
        currentUsers.filter(
          (user) => user.id !== userId
        )
      );

      alert("تم حذف المستخدم بنجاح");
    } catch (error) {
      console.error(error);

      alert(
        error instanceof Error
          ? error.message
          : "حدث خطأ أثناء حذف المستخدم"
      );
    } finally {
      setDeletingUser(null);
    }
  }

  /* =========================
     Initial Load
  ========================= */

  useEffect(() => {
    loadSettings();
    loadUsers();
  }, []);

  /* =========================
     Render
  ========================= */

  return (
    <main
      className="min-h-screen bg-slate-50 p-6"
      dir="rtl"
    >
      <div className="mx-auto max-w-5xl">

        {/* =========================
            Header
        ========================= */}

        <div className="mb-8">
          <p className="mb-2 text-sm font-medium text-emerald-600">
            لوحة الإدارة
          </p>

          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
              <Settings size={26} />
            </div>

            <div>
              <h1 className="text-3xl font-bold text-slate-800">
                الإعدادات
              </h1>

              <p className="mt-1 text-sm text-slate-500">
                إدارة إعدادات نظام شركة البطنان
              </p>
            </div>
          </div>
        </div>

        {/* =========================
            Settings Cards
        ========================= */}

        <div className="grid gap-6 md:grid-cols-2">

          {/* Company */}

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                <Building2 size={22} />
              </div>

              <div>
                <h2 className="font-bold text-slate-800">
                  معلومات الشركة
                </h2>

                <p className="text-xs text-slate-500">
                  البيانات الأساسية للشركة
                </p>
              </div>
            </div>

            <div className="space-y-4">

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  اسم الشركة
                </label>

                <input
                  type="text"
                  defaultValue="شركة البطنان"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  وصف الشركة
                </label>

                <textarea
                  defaultValue="مصنع متخصص في إنتاج الأكياس البلاستيكية"
                  rows={3}
                  className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                />
              </div>

            </div>
          </section>

          {/* General */}

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-xl bg-purple-50 p-3 text-purple-600">
                <Globe size={22} />
              </div>

              <div>
                <h2 className="font-bold text-slate-800">
                  الإعدادات العامة
                </h2>

                <p className="text-xs text-slate-500">
                  اللغة والعملة والنظام
                </p>
              </div>
            </div>

            <div className="space-y-4">

              {/* Language */}

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  اللغة
                </label>

                <select
                  value={settings.language}
                  onChange={(event) =>
                    setSettings((current) => ({
                      ...current,
                      language:
                        event.target.value,
                    }))
                  }
                  disabled={loadingSettings}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-emerald-500 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <option value="ar">
                    العربية
                  </option>

                  <option value="en">
                    English
                  </option>
                </select>
              </div>

              {/* Currency */}

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  العملة
                </label>

                <select
                  value={settings.currency}
                  onChange={(event) =>
                    setSettings((current) => ({
                      ...current,
                      currency:
                        event.target.value,
                    }))
                  }
                  disabled={loadingSettings}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-emerald-500 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <option value="LYD">
                    دينار ليبي (LYD)
                  </option>

                  <option value="MYR">
                    Ringgit Malaysia (MYR)
                  </option>

                  <option value="USD">
                    US Dollar (USD)
                  </option>
                </select>
              </div>

            </div>
          </section>

          {/* Notifications */}

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-xl bg-amber-50 p-3 text-amber-600">
                <Bell size={22} />
              </div>

              <div>
                <h2 className="font-bold text-slate-800">
                  الإشعارات
                </h2>

                <p className="text-xs text-slate-500">
                  التحكم في إشعارات النظام
                </p>
              </div>
            </div>

            <div className="space-y-4">

              {/* Order Notifications */}

              <label className="flex cursor-pointer items-center justify-between rounded-xl bg-slate-50 p-4">
                <div>
                  <p className="font-medium text-slate-700">
                    إشعارات الطلبات
                  </p>

                  <p className="text-xs text-slate-500">
                    استقبال تنبيه عند وصول طلب جديد
                  </p>
                </div>

                <input
                  type="checkbox"
                  checked={
                    settings.order_notifications
                  }
                  onChange={(event) =>
                    setSettings((current) => ({
                      ...current,
                      order_notifications:
                        event.target.checked,
                    }))
                  }
                  disabled={loadingSettings}
                  className="h-5 w-5 accent-emerald-600"
                />
              </label>

              {/* Stock Notifications */}

              <label className="flex cursor-pointer items-center justify-between rounded-xl bg-slate-50 p-4">
                <div>
                  <p className="font-medium text-slate-700">
                    تنبيهات المخزون
                  </p>

                  <p className="text-xs text-slate-500">
                    تنبيه عند انخفاض المخزون
                  </p>
                </div>

                <input
                  type="checkbox"
                  checked={
                    settings.stock_notifications
                  }
                  onChange={(event) =>
                    setSettings((current) => ({
                      ...current,
                      stock_notifications:
                        event.target.checked,
                    }))
                  }
                  disabled={loadingSettings}
                  className="h-5 w-5 accent-emerald-600"
                />
              </label>

            </div>
          </section>

          {/* Security */}

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-xl bg-red-50 p-3 text-red-600">
                <ShieldCheck size={22} />
              </div>

              <div>
                <h2 className="font-bold text-slate-800">
                  الأمان
                </h2>

                <p className="text-xs text-slate-500">
                  حماية حساب الإدارة
                </p>
              </div>
            </div>

            <div className="space-y-3">

              <button
                type="button"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-right font-medium text-slate-700 transition hover:bg-slate-50"
              >
                تغيير كلمة المرور
              </button>

              <button
                type="button"
                className="w-full rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-right font-medium text-red-600 transition hover:bg-red-100"
              >
                تسجيل الخروج من جميع الأجهزة
              </button>

            </div>
          </section>

          {/* Appearance */}

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:col-span-2">

            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-xl bg-pink-50 p-3 text-pink-600">
                <Palette size={22} />
              </div>

              <div>
                <h2 className="font-bold text-slate-800">
                  المظهر
                </h2>

                <p className="text-xs text-slate-500">
                  تخصيص مظهر لوحة الإدارة
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">

              {/* Light */}

              <button
                type="button"
                onClick={() =>
                  setSettings((current) => ({
                    ...current,
                    theme: "light",
                  }))
                }
                className={`rounded-xl border-2 p-4 text-right transition ${
                  settings.theme === "light"
                    ? "border-emerald-500 bg-emerald-50"
                    : "border-slate-200 hover:bg-slate-50"
                }`}
              >
                <p className="font-bold text-slate-800">
                  الوضع الفاتح
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  المظهر الافتراضي
                </p>
              </button>

              {/* Dark */}

              <button
                type="button"
                onClick={() =>
                  setSettings((current) => ({
                    ...current,
                    theme: "dark",
                  }))
                }
                className={`rounded-xl border-2 p-4 text-right transition ${
                  settings.theme === "dark"
                    ? "border-emerald-500 bg-emerald-50"
                    : "border-slate-200 hover:bg-slate-50"
                }`}
              >
                <p className="font-bold text-slate-800">
                  الوضع الداكن
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  مظهر داكن للنظام
                </p>
              </button>

              {/* Auto */}

              <button
                type="button"
                onClick={() =>
                  setSettings((current) => ({
                    ...current,
                    theme: "system",
                  }))
                }
                className={`rounded-xl border-2 p-4 text-right transition ${
                  settings.theme === "system"
                    ? "border-emerald-500 bg-emerald-50"
                    : "border-slate-200 hover:bg-slate-50"
                }`}
              >
                <p className="font-bold text-slate-800">
                  تلقائي
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  حسب إعداد الجهاز
                </p>
              </button>

            </div>
          </section>

        </div>

        {/* =========================
            User Management
        ========================= */}

        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

          <div className="mb-5 flex items-center justify-between">

            <div className="flex items-center gap-3">

              <div className="rounded-xl bg-indigo-50 p-3 text-indigo-600">
                <Users size={22} />
              </div>

              <div>
                <h2 className="font-bold text-slate-800">
                  إدارة المستخدمين
                </h2>

                <p className="text-xs text-slate-500">
                  عرض وحذف المستخدمين المسجلين في النظام
                </p>
              </div>

            </div>

            <button
              type="button"
              onClick={loadUsers}
              disabled={loadingUsers}
              className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 disabled:opacity-50"
            >
              <RefreshCw
                size={17}
                className={
                  loadingUsers
                    ? "animate-spin"
                    : ""
                }
              />

              تحديث
            </button>

          </div>

          {users.length === 0 ? (

            <div className="rounded-xl bg-slate-50 p-6 text-center">

              <Users
                size={30}
                className="mx-auto mb-2 text-slate-400"
              />

              <p className="font-medium text-slate-600">
                لا يوجد مستخدمون معروضون
              </p>

              <p className="mt-1 text-xs text-slate-400">
                اضغط على تحديث لعرض المستخدمين
              </p>

            </div>

          ) : (

            <div className="overflow-hidden rounded-xl border border-slate-200">

              <div className="divide-y divide-slate-200">

                {users.map((user) => (

                  <div
                    key={user.id}
                    className="flex items-center justify-between gap-4 p-4 transition hover:bg-slate-50"
                  >

                    <div className="min-w-0">

                      <p className="truncate font-medium text-slate-800">
                        {user.email ||
                          "بدون بريد إلكتروني"}
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        تاريخ التسجيل:{" "}
                        {new Date(
                          user.created_at
                        ).toLocaleDateString(
                          "ar-LY"
                        )}
                      </p>

                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        deleteUser(user.id)
                      }
                      disabled={
                        deletingUser === user.id
                      }
                      className="flex shrink-0 items-center gap-2 rounded-xl bg-red-50 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-100 disabled:opacity-50"
                    >
                      <Trash2 size={17} />

                      {deletingUser === user.id
                        ? "جاري الحذف..."
                        : "حذف"}
                    </button>

                  </div>

                ))}

              </div>

            </div>

          )}

        </section>

        {/* =========================
            Save Button
        ========================= */}

        <div className="mt-6 flex justify-end">

          <button
            type="button"
            onClick={saveSettings}
            disabled={
              savingSettings ||
              loadingSettings
            }
            className="flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-bold text-white shadow-sm transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
          >

            <Save
              size={19}
              className={
                savingSettings
                  ? "animate-pulse"
                  : ""
              }
            />

            {savingSettings
              ? "جاري الحفظ..."
              : "حفظ التغييرات"}

          </button>

        </div>

      </div>
    </main>
  );
}