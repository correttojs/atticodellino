import { withGrommetTheme } from "../../components/Layout";
import {
  getGlobalProps,
  getGlobalPaths,
} from "../../graphql/takeshape/getGlobal";
import { takeShapeRequest } from "../../graphql/takeshape/takeShapeClient";

import { Section } from "../../components/@UI/Section";
import {
  GetArticleByPathDocument,
  GetArticleByPathQuery,
} from "../../generated/graphql-takeshape-doc";

export const getStaticProps = async ({ params, locale }) => {
  const globalProps = await getGlobalProps({ params, locale });
  const data = await takeShapeRequest(GetArticleByPathDocument, {
    path: "/privacy",
  });
  return {
    props: { ...globalProps.props, data: data },
  };
};

export const getStaticPaths = getGlobalPaths;

const Privacy = ({ data }: { data: GetArticleByPathQuery }) => {
  const article = data?.getArticleList?.items?.[0];
  return (
    <Section>
      <h1>{article?.title}</h1>{" "}
      <div dangerouslySetInnerHTML={{ __html: article?.contentHtml }}></div>
    </Section>
  );
};

export default withGrommetTheme()(Privacy);
