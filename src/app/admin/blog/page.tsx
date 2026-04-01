import type { Metadata } from "next";
import AdminBlogEditor from "./AdminBlogEditor";

export const metadata: Metadata = {
  title: "Blog admin | ItsIndianGuy",
  robots: { index: false, follow: false },
};

export default function AdminBlogPage() {
  return <AdminBlogEditor />;
}
