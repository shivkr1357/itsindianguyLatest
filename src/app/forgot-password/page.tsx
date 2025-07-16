import React, { Fragment } from "react";
import Link from "next/link";

const ForgotPassword = () => {
  return (
    <Fragment>
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-neutral-800 dark:text-neutral-100">
              Reset your password
            </h2>
            <p className="mt-2 text-center text-sm text-neutral-600 dark:text-neutral-400">
              Enter your email address and we'll send you a link to reset your
              password.
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
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
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-200 hover:bg-primary-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-200"
              >
                Send reset link
              </button>
            </div>

            <div className="text-center">
              <Link
                href="/login"
                className="font-medium text-primary-200 hover:text-primary-300"
              >
                Back to login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default ForgotPassword;
