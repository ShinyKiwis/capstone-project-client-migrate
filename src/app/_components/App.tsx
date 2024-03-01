import React from "react";
import { PageContent, SideBar } from ".";

const App = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <SideBar />
      <PageContent>{children}</PageContent>
    </div>
  );
};

export default App;
