import React, { ReactNode } from "react";
import { AuthProvider } from "@asgardeo/auth-react";
import useSiteMetadata from "../hooks/useSiteMetaData";
import "../styles/global.css";

interface Props {
  children?: ReactNode;
}

const PageLayout = ({ children }: Props) => {
  const { title, description } = useSiteMetadata();

  return (
    <React.Fragment>

      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />

      <AuthProvider
        config={{
          signInRedirectURL: "https://localhost:8000",
          signOutRedirectURL: "https://localhost:8000",
          clientID: `${process.env.GATSBY_CLIENT_ID}`,
          baseUrl: `https://api.asgardeo.io/t/${process.env.GATSBY_ORGANIZATION}`,
          scope: ["openid", "profile"],
        }}
      >
        {children}
      </AuthProvider>
    </React.Fragment>
  );
};

export default PageLayout;
