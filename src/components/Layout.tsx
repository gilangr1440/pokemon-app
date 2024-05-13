import React, { FC } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex justify-center bg-gray-700">
      <div className="layout-container min-w-full bg-white dark:bg-slate-900 md:min-w-[480px] md:max-w-[480px]">
        <Header />
        <main className="main-section overflow-auto w-full h-full">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
