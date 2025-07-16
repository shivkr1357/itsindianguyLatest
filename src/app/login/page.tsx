import { Metadata } from "next";
import React, { Fragment } from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Login | ItsIndianGuy`,
  description:
    "Login to your ItsIndianGuy account to access exclusive content, track your progress, and personalize your experience.",
  alternates: {
    canonical: "https://itsindianguy.in/login",
  },
};

const Login = () => {
  return (
    <Fragment>
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-neutral-800 dark:text-neutral-100">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-neutral-600 dark:text-neutral-400">
              Or{" "}
              <Link
                href="/signup"
                className="font-medium text-primary-200 hover:text-primary-300"
              >
                create a new account
              </Link>
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 placeholder-neutral-500 dark:placeholder-neutral-400 text-neutral-900 dark:text-neutral-100 rounded-t-md focus:outline-none focus:ring-primary-200 focus:border-primary-200 focus:z-10 sm:text-sm bg-white dark:bg-neutral-800"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 placeholder-neutral-500 dark:placeholder-neutral-400 text-neutral-900 dark:text-neutral-100 rounded-b-md focus:outline-none focus:ring-primary-200 focus:border-primary-200 focus:z-10 sm:text-sm bg-white dark:bg-neutral-800"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-primary-200 focus:ring-primary-200 border-neutral-300 dark:border-neutral-600 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-neutral-900 dark:text-neutral-100"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link
                  href="/forgot-password"
                  className="font-medium text-primary-200 hover:text-primary-300"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-200 hover:bg-primary-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-200"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
