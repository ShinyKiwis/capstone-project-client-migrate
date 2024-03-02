import React from "react";
import PageHeader from "./PageHeader";

const PageContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-1 flex-col">
      <PageHeader />
      <div className="flex-1 bg-slate-100">{children}</div>
    </div>
  );
};

export default PageContent;
