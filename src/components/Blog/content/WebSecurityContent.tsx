const WebSecurityContent = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 rounded-2xl p-6 md:p-8 border-l-4 border-red-500">
        <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
          Web security is critical for protecting your applications and users from malicious attacks. Learn essential security practices to safeguard your web applications against common vulnerabilities.
        </p>
      </div>

      <section className="bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
        <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-red-500">
          Common Security Vulnerabilities
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-6 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 rounded-xl border border-red-200 dark:border-red-800">
            <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
              <span className="text-2xl">🔓</span>
              XSS (Cross-Site Scripting)
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3">
              Attackers inject malicious scripts into web pages viewed by other users.
            </p>
            <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded text-xs">
              <strong>Prevention:</strong> Sanitize user input, use Content Security Policy (CSP)
            </div>
          </div>

          <div className="p-6 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 rounded-xl border border-orange-200 dark:border-orange-800">
            <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
              <span className="text-2xl">🎭</span>
              CSRF (Cross-Site Request Forgery)
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3">
              Tricks users into performing actions they didn&apos;t intend to make.
            </p>
            <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded text-xs">
              <strong>Prevention:</strong> Use CSRF tokens, SameSite cookies
            </div>
          </div>

          <div className="p-6 bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20 rounded-xl border border-amber-200 dark:border-amber-800">
            <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
              <span className="text-2xl">💉</span>
              SQL Injection
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3">
              Malicious SQL code inserted into application queries.
            </p>
            <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded text-xs">
              <strong>Prevention:</strong> Use parameterized queries, ORMs
            </div>
          </div>

          <div className="p-6 bg-gradient-to-br from-yellow-50 to-lime-50 dark:from-yellow-950/20 dark:to-lime-950/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
            <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
              <span className="text-2xl">🔐</span>
              Authentication Issues
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3">
              Weak authentication mechanisms compromise user accounts.
            </p>
            <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded text-xs">
              <strong>Prevention:</strong> Use strong passwords, MFA, secure session management
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
        <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-red-500">
          Security Best Practices
        </h2>
        <div className="grid gap-4">
          <div className="p-5 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-xl">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <span>🛡️</span> HTTPS Everywhere
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Always use HTTPS to encrypt data in transit. Use HSTS headers to enforce HTTPS connections.
            </p>
          </div>
          <div className="p-5 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 rounded-xl">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <span>🔑</span> Secure Password Storage
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Use bcrypt or Argon2 for password hashing. Never store passwords in plain text.
            </p>
          </div>
          <div className="p-5 bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/20 rounded-xl">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <span>🔒</span> Input Validation
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Validate and sanitize all user inputs on both client and server side. Never trust user input.
            </p>
          </div>
          <div className="p-5 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 rounded-xl">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <span>📋</span> Security Headers
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Implement security headers: CSP, X-Frame-Options, X-Content-Type-Options, and Referrer-Policy.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-6 md:p-8 shadow-lg text-white">
        <div className="flex items-start gap-4">
          <span className="text-4xl">🛡️</span>
          <div>
            <h2 className="text-3xl font-bold mb-4">Security First</h2>
            <p className="text-lg leading-relaxed text-red-50">
              Security should never be an afterthought. Implement these best practices from day one to protect your applications and users from potential threats. Stay vigilant and keep your dependencies updated!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebSecurityContent;

