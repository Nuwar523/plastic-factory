"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/90 backdrop-blur-xl"
      dir="rtl"
    >
      <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">

        {/* ================= LOGO ================= */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="flex min-w-0 items-center gap-2.5 sm:gap-4"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white shadow-md sm:h-12 sm:w-12">
            <img
              src="/iogo.jpeg"
              alt="شركة البطنان"
              className="h-full w-full object-contain"
            />
          </div>

          <div className="min-w-0">
            <h2 className="truncate text-base font-black leading-tight text-white sm:text-xl">
              شركة البطنان
            </h2>

            <p className="mt-0.5 max-w-[190px] truncate text-[10px] font-medium text-orange-300 sm:max-w-none sm:text-sm">
              لصناعة وطباعة الأكياس البلاستيكية
            </p>
          </div>
        </Link>

        {/* ================= DESKTOP MENU ================= */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-semibold text-white transition hover:text-orange-300"
          >
            الرئيسية
          </Link>

          <a
            href="/#about"
            className="text-sm font-semibold text-white transition hover:text-orange-300"
          >
            من نحن
          </a>

          <a
            href="/#services"
            className="text-sm font-semibold text-white transition hover:text-orange-300"
          >
            الخدمات
          </a>

          <Link
            href="/products"
            className="text-sm font-semibold text-white transition hover:text-orange-300"
          >
            منتجاتنا
          </Link>

          <a
            href="/#contact"
            className="text-sm font-semibold text-white transition hover:text-orange-300"
          >
            تواصل معنا
          </a>
        </div>

        {/* ================= DESKTOP CTA ================= */}
        <Link
          href="/products"
          className="hidden rounded-xl bg-orange-500 px-5 py-3 text-sm font-black text-white shadow-lg shadow-orange-500/20 transition hover:-translate-y-0.5 hover:bg-orange-600 md:inline-flex"
        >
          اطلب عرض سعر
        </Link>

        {/* ================= MOBILE BUTTON ================= */}
        <button
          type="button"
          aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white transition hover:bg-white/15 md:hidden"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 6l12 12M18 6L6 18"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-slate-950/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          menuOpen
            ? "max-h-[420px] opacity-100"
            : "max-h-0 border-t-0 opacity-0"
        }`}
      >
        <div className="space-y-2 px-4 pb-5 pt-3">

          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="flex min-h-12 items-center rounded-xl px-4 text-base font-bold text-white transition hover:bg-white/10"
          >
            الرئيسية
          </Link>

          <a
            href="/#about"
            onClick={() => setMenuOpen(false)}
            className="flex min-h-12 items-center rounded-xl px-4 text-base font-bold text-white transition hover:bg-white/10"
          >
            من نحن
          </a>

          <a
            href="/#services"
            onClick={() => setMenuOpen(false)}
            className="flex min-h-12 items-center rounded-xl px-4 text-base font-bold text-white transition hover:bg-white/10"
          >
            الخدمات
          </a>

          <Link
            href="/products"
            onClick={() => setMenuOpen(false)}
            className="flex min-h-12 items-center rounded-xl px-4 text-base font-bold text-white transition hover:bg-white/10"
          >
            منتجاتنا
          </Link>

          <a
            href="/#contact"
            onClick={() => setMenuOpen(false)}
            className="flex min-h-12 items-center rounded-xl px-4 text-base font-bold text-white transition hover:bg-white/10"
          >
            تواصل معنا
          </a>

          <Link
            href="/products"
            onClick={() => setMenuOpen(false)}
            className="mt-2 flex min-h-13 items-center justify-center rounded-xl bg-orange-500 px-5 py-3.5 text-base font-black text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600"
          >
            اطلب عرض سعر
            <span className="mr-2">←</span>
          </Link>

        </div>
      </div>
    </nav>
  );
}