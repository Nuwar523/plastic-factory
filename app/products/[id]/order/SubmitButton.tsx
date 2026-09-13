"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`flex min-h-14 w-full min-w-0 items-center justify-center rounded-2xl px-5 text-base font-black text-white shadow-lg transition sm:text-lg ${
        pending
          ? "cursor-not-allowed bg-slate-400 shadow-none"
          : "bg-[#024949] shadow-[#024949]/20 hover:bg-[#013c3c] active:scale-[0.99]"
      }`}
    >
      {pending ? (
        <>
          <span className="ml-3 h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
          جاري إرسال الطلب...
        </>
      ) : (
        <>
          إرسال الطلب للمراجعة
          <span className="mr-2 text-xl">←</span>
        </>
      )}
    </button>
  );
}