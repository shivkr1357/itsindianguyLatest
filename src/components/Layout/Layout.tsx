import React from "react";
import Topbar from "@/components/Topbar/Topbar";
import Footer from "@/components/Footer/Footer";

interface LayoutProps {
  children: React.ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
}

const Layout = ({ 
  children, 

}: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 dark:bg-neutral-900">
      <Topbar />
      <main className="flex-grow pt-16">{children}</main>
    </div>
  );
};

export default Layout; 