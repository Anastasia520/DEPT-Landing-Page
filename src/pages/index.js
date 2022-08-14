import React from "react";
import dynamic from "next/dynamic";

import { CircularProgress, Typography } from "@mui/material";

import SEO from "components/seo";
import Layout from "components/layout";
import MainBanner from "sections/MainBanner";
import useIndexPage from "customHooks/useIndexPage";

export default function IndexPage() {
  const Works = dynamic(() => import("sections/Works"), {
    loading: () => <CircularProgress />,
  });

  const Clients = dynamic(() => import("sections/Clients"), {
    loading: () => <CircularProgress />,
  });

  const ContactForm = dynamic(() => import("sections/ContactForm"), {
    loading: () => <CircularProgress />,
  });

  const { dataContent, dataContentLoading, dataContentError } = useIndexPage();

  if (dataContentLoading || !dataContent) {
    return <CircularProgress />;
  }

  return (
    <Layout>
      <SEO title="DEPT Landing Page" />
      <MainBanner />
      {dataContentError && <Typography>{dataContentError}</Typography>}
      <Works works={dataContent?.works} />
      <Clients clients={dataContent?.clients} />
      <ContactForm />
    </Layout>
  );
}
