import { Title } from "@mantine/core";
import { Head } from "../../components/Head";
import { PageLayout } from "../../components/PageLayout";
import { labels } from "../../labels";
import { ErrorPageProps } from "./ErrorPage.types";

export function ErrorPage({}: ErrorPageProps) {
  return (
    <>
      <Head
        title={labels.pages.error.title}
        description={labels.pages.error.description}
        favicon={labels.pages.error.favicon}
      />
      <PageLayout>
        <Title>{labels.pages.error.text}</Title>
      </PageLayout>
    </>
  );
}
