import { Title } from "@mantine/core";
import { Head, PageLayout } from "../../components";
import { labels } from "../../config/labels";
import { ErrorPageProps } from "./ErrorPage.types";

export function ErrorPage({}: ErrorPageProps) {
  return (
    <>
      <Head
        title={labels.pages.error.title}
        description={labels.pages.error.description}
      />
      <PageLayout>
        <Title>{labels.pages.error.text}</Title>
      </PageLayout>
    </>
  );
}
