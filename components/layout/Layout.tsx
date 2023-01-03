import { ScriptProps } from "next/script";
import React, { FC } from "react";
import Header from "./Header";

const Layout: FC<ScriptProps> = ({ children }) => {
  return (
    <div className="bg-bg">
      <header className="">
        <Header />
      </header>
      <main className="">{children}</main>
    </div>
  );
};

export default Layout;
