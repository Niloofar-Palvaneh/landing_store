'use client';

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [isSignup, setIsSignup] = useState(false); // حالت فرم

  return (
    <div className="flex items-center justify-center px-4 md:w-1/2 w-full">
      <div className="w-full bg-primary backdrop-blur-md border border-white/10 rounded-2xl shadow-xl p-8">
        <div className="relative">
          <Link href={"/"}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
              className="size-6 absolute top-2 right-2 text-white ">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
          <h1 className="text-2xl font-bold text-white mb-6 text-center">
            {isSignup ? "ثبت‌نام" : "ورود به حساب کاربری"}
          </h1>
        </div>

        <form className="space-y-4">
          {isSignup ? (
            // فرم ثبت‌نام
            <div>
              <label htmlFor="phone" className="block text-sm text-gray-200 mb-1">شماره تماس</label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-2 rounded-lg bg-[#1f2b23] text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#AD8C47]"
                placeholder="09XXXXXXXXX"
              />
            </div>
          ) : (
            // فرم ورود
            <>
              <div>
                <label htmlFor="email" className="block text-sm text-gray-200 mb-1">ایمیل</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg bg-[#1f2b23] text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#AD8C47]"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm text-gray-200 mb-1">رمز عبور</label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 rounded-lg bg-[#1f2b23] text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#AD8C47]"
                  placeholder="••••••••"
                />
              </div>
            </>
          )}

          <button
            type="submit"
            className="w-full py-2 bg-[#AD8C47] text-[#2E4030] font-bold rounded-lg hover:bg-[#c8a750] transition"
          >
            {isSignup ? "ادامه ثبت‌نام" : "ورود"}
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-300">
          {isSignup ? (
            <>
              قبلاً ثبت‌نام کردید؟{" "}
              <button
                type="button"
                className="text-[#AD8C47] hover:underline"
                onClick={() => setIsSignup(false)}
              >
                ورود
              </button>
            </>
          ) : (
            <>
              حساب ندارید؟{" "}
              <button
                type="button"
                className="text-[#AD8C47] hover:underline"
                onClick={() => setIsSignup(true)}
              >
                ثبت‌نام
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
