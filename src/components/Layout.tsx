import React, { FC } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-[640px] bg-gray-700 mx-auto">
      <Header />
      <main className="overflow-x-hidden overflow-y-scroll">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
