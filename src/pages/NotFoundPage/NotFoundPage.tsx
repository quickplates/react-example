import { Title } from "@mantine/core";
import { Head, PageLayout } from "../../components";
import { labels } from "../../config/labels";
import { NotFoundPageProps } from "./NotFoundPage.types";

export function NotFoundPage({}: NotFoundPageProps) {
  return (
    <>
      <Head
        title={labels.pages.notFound.title}
        description={labels.pages.notFound.description}
      />
      <PageLayout>
        <Title>{labels.pages.notFound.text}</Title>
      </PageLayout>
    </>
  );
}
