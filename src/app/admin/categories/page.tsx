import type { Metadata } from "next";
import CategoriesCrudPage from "./CategoriesCrudPage";

export const metadata: Metadata = {
  title: "Category CRUD | Admin",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <CategoriesCrudPage />;
}
