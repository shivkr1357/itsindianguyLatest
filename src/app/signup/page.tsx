import { Metadata } from "next";
import React, { Fragment } from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Sign Up | ItsIndianGuy`,
  description:
    "Create your ItsIndianGuy account to access exclusive content, track your progress, and personalize your learning experience.",
  alternates: {
    canonical: "https://itsindianguy.in/signup",
  },
};

const SignUp = () => {
  return (
    <Fragment>
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-neutral-800 dark:text-neutral-100">
              Create your account
            </h2>
            <p className="mt-2 text-center text-sm text-neutral-600 dark:text-neutral-400">
              Or{" "}
              <Link
                href="/login"
                className="font-medium text-primary-200 hover:text-primary-300"
              >
                sign in to your existing account
              </Link>
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="sr-only">
                    First name
                  </label>
                  <input
                    id="first-name"
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    required
                    className="appearance-none relative block w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 placeholder-neutral-500 dark:placeholder-neutral-400 text-neutral-900 dark:text-neutral-100 rounded-md focus:outline-none focus:ring-primary-200 focus:border-primary-200 focus:z-10 sm:text-sm bg-white dark:bg-neutral-800"
                    placeholder="First name"
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="sr-only">
                    Last name
                  </label>
                  <input
                    id="last-name"
                    name="lastName"
                    type="text"
                    autoComplete="family-name"
                    required
                    className="appearance-none relative block w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 placeholder-neutral-500 dark:placeholder-neutral-400 text-neutral-900 dark:text-neutral-100 rounded-md focus:outline-none focus:ring-primary-200 focus:border-primary-200 focus:z-10 sm:text-sm bg-white dark:bg-neutral-800"
                    placeholder="Last name"
                  />
                </div>
              </div>
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
                  className="appearance-none relative block w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 placeholder-neutral-500 dark:placeholder-neutral-400 text-neutral-900 dark:text-neutral-100 rounded-md focus:outline-none focus:ring-primary-200 focus:border-primary-200 focus:z-10 sm:text-sm bg-white dark:bg-neutral-800"
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
                  autoComplete="new-password"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 placeholder-neutral-500 dark:placeholder-neutral-400 text-neutral-900 dark:text-neutral-100 rounded-md focus:outline-none focus:ring-primary-200 focus:border-primary-200 focus:z-10 sm:text-sm bg-white dark:bg-neutral-800"
                  placeholder="Password"
                />
              </div>
              <div>
                <label htmlFor="confirm-password" className="sr-only">
                  Confirm password
                </label>
                <input
                  id="confirm-password"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 placeholder-neutral-500 dark:placeholder-neutral-400 text-neutral-900 dark:text-neutral-100 rounded-md focus:outline-none focus:ring-primary-200 focus:border-primary-200 focus:z-10 sm:text-sm bg-white dark:bg-neutral-800"
                  placeholder="Confirm password"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="agree-terms"
                name="agreeTerms"
                type="checkbox"
                required
                className="h-4 w-4 text-primary-200 focus:ring-primary-200 border-neutral-300 dark:border-neutral-600 rounded"
              />
              <label
                htmlFor="agree-terms"
                className="ml-2 block text-sm text-neutral-900 dark:text-neutral-100"
              >
                I agree to the{" "}
                <Link
                  href="/terms"
                  className="font-medium text-primary-200 hover:text-primary-300"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy-policy"
                  className="font-medium text-primary-200 hover:text-primary-300"
                >
                  Privacy Policy
                </Link>
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-200 hover:bg-primary-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-200"
              >
                Create account
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default SignUp;
