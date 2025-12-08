import type { Metadata } from "next";
import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export const metadata: Metadata = {
  title: "SQL Database Tutorial - Complete Guide | ItsIndianGuy",
  description: "Step-by-step SQL tutorial covering queries, joins, optimization, and database design.",
};

export default function SQLContentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Link
          href="/tutorials/sql"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Tutorial Overview
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
            Master SQL Database Queries
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400">
            Complete guide to SQL from basics to advanced optimization
          </p>
        </header>

        <section className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-blue-500">
            Section 1: SQL Fundamentals
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Understanding SQL
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                SQL (Structured Query Language) is the standard language for managing relational databases. It allows you to query, insert, update, and delete data.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Basic SELECT Queries
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                Start with simple SELECT statements to retrieve data:
              </p>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <SyntaxHighlighter
                  language="sql"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: 0,
                    fontSize: "0.875rem",
                    background: "transparent",
                  }}
                >
                  {`-- Select all columns from a table
SELECT * FROM users;

-- Select specific columns
SELECT id, name, email FROM users;

-- Select with conditions
SELECT * FROM users WHERE age > 18;

-- Select with multiple conditions
SELECT * FROM users 
WHERE age > 18 AND status = 'active';

-- Select with ordering
SELECT * FROM users 
ORDER BY created_at DESC;

-- Select with limit
SELECT * FROM users 
LIMIT 10;`}
                </SyntaxHighlighter>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                INSERT, UPDATE, DELETE
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                Learn to modify data in your database:
              </p>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <SyntaxHighlighter
                  language="sql"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: 0,
                    fontSize: "0.875rem",
                    background: "transparent",
                  }}
                >
                  {`-- Insert new record
INSERT INTO users (name, email, age)
VALUES ('John Doe', 'john@example.com', 25);

-- Update existing record
UPDATE users 
SET email = 'newemail@example.com'
WHERE id = 1;

-- Delete record
DELETE FROM users 
WHERE id = 1;`}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-blue-500">
            Section 2: Advanced JOINs
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                INNER JOIN
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                Combine rows from two tables where there is a match:
              </p>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <SyntaxHighlighter
                  language="sql"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: 0,
                    fontSize: "0.875rem",
                    background: "transparent",
                  }}
                >
                  {`SELECT users.name, orders.total
FROM users
INNER JOIN orders ON users.id = orders.user_id;`}
                </SyntaxHighlighter>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                LEFT JOIN
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                Return all rows from the left table, even if there&apos;s no match:
              </p>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <SyntaxHighlighter
                  language="sql"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: 0,
                    fontSize: "0.875rem",
                    background: "transparent",
                  }}
                >
                  {`SELECT users.name, orders.total
FROM users
LEFT JOIN orders ON users.id = orders.user_id;`}
                </SyntaxHighlighter>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Multiple JOINs
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                Join multiple tables in a single query:
              </p>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <SyntaxHighlighter
                  language="sql"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: 0,
                    fontSize: "0.875rem",
                    background: "transparent",
                  }}
                >
                  {`SELECT 
  users.name,
  products.name AS product_name,
  order_items.quantity
FROM users
INNER JOIN orders ON users.id = orders.user_id
INNER JOIN order_items ON orders.id = order_items.order_id
INNER JOIN products ON order_items.product_id = products.id;`}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-blue-500">
            Section 3: Subqueries
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Subquery in WHERE Clause
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                Use subqueries to filter results based on another query:
              </p>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <SyntaxHighlighter
                  language="sql"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: 0,
                    fontSize: "0.875rem",
                    background: "transparent",
                  }}
                >
                  {`-- Find users who have placed orders
SELECT * FROM users
WHERE id IN (
  SELECT DISTINCT user_id FROM orders
);

-- Find users with above-average age
SELECT * FROM users
WHERE age > (SELECT AVG(age) FROM users);`}
                </SyntaxHighlighter>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Correlated Subqueries
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                Subqueries that reference the outer query:
              </p>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <SyntaxHighlighter
                  language="sql"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: 0,
                    fontSize: "0.875rem",
                    background: "transparent",
                  }}
                >
                  {`-- Find users with their latest order
SELECT 
  u.name,
  (SELECT MAX(created_at) 
   FROM orders o 
   WHERE o.user_id = u.id) AS last_order_date
FROM users u;`}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-blue-500">
            Section 4: Aggregate Functions
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                GROUP BY and Aggregate Functions
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                Group data and calculate aggregates:
              </p>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <SyntaxHighlighter
                  language="sql"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: 0,
                    fontSize: "0.875rem",
                    background: "transparent",
                  }}
                >
                  {`-- Count orders per user
SELECT user_id, COUNT(*) AS order_count
FROM orders
GROUP BY user_id;

-- Calculate total sales per product
SELECT 
  product_id,
  SUM(quantity * price) AS total_sales
FROM order_items
GROUP BY product_id;

-- Average age by city
SELECT 
  city,
  AVG(age) AS avg_age,
  COUNT(*) AS user_count
FROM users
GROUP BY city
HAVING COUNT(*) > 10;`}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-blue-500">
            Section 5: Database Optimization
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Creating Indexes
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                Indexes improve query performance by allowing faster data retrieval:
              </p>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <SyntaxHighlighter
                  language="sql"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: 0,
                    fontSize: "0.875rem",
                    background: "transparent",
                  }}
                >
                  {`-- Create single column index
CREATE INDEX idx_user_email ON users(email);

-- Create composite index
CREATE INDEX idx_user_name_email ON users(name, email);

-- Create unique index
CREATE UNIQUE INDEX idx_user_email_unique ON users(email);`}
                </SyntaxHighlighter>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Query Optimization Tips
              </h3>
              <ul className="list-disc list-inside space-y-2 text-neutral-600 dark:text-neutral-300">
                <li>Use indexes on frequently queried columns</li>
                <li>Avoid SELECT * - only select needed columns</li>
                <li>Use WHERE clauses to filter early</li>
                <li>Limit result sets when possible</li>
                <li>Use JOINs instead of subqueries when possible</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-blue-500">
            Section 6: Transactions and ACID
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Transaction Management
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                Ensure data integrity with transactions:
              </p>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <SyntaxHighlighter
                  language="sql"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: 0,
                    fontSize: "0.875rem",
                    background: "transparent",
                  }}
                >
                  {`-- Start a transaction
BEGIN TRANSACTION;

-- Perform multiple operations
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;

-- Commit if successful
COMMIT;

-- Or rollback on error
ROLLBACK;`}
                </SyntaxHighlighter>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                ACID Properties
              </h3>
              <ul className="list-disc list-inside space-y-2 text-neutral-600 dark:text-neutral-300">
                <li><strong>Atomicity:</strong> All operations succeed or fail together</li>
                <li><strong>Consistency:</strong> Database remains in valid state</li>
                <li><strong>Isolation:</strong> Concurrent transactions don&apos;t interfere</li>
                <li><strong>Durability:</strong> Committed changes persist</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="text-center mt-12">
          <Link
            href="/tutorials/sql"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            ← Back to Overview
          </Link>
        </div>
      </div>
    </div>
  );
}

