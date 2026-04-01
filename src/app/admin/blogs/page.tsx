import type { Metadata } from "next";
import BlogCrudPage from "./BlogCrudPage";

export const metadata: Metadata = {
  title: "Blog CRUD | Admin",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <BlogCrudPage />;
}
