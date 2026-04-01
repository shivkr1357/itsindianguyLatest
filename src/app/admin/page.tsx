import type { Metadata } from "next";
import AdminHomeClient from "./AdminHomeClient";

export const metadata: Metadata = {
  title: "Admin | ItsIndianGuy",
  robots: { index: false, follow: false },
};

export default function AdminHomePage() {
  return <AdminHomeClient />;
}
