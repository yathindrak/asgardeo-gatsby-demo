import React from "react";
import PageLayout from "./src/components/layout";

export const wrapRootElement = ({ element }) => {
  return (
    <>
      <PageLayout>
        {element}
      </PageLayout>
    </>
  );
};
