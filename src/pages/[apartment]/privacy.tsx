import { withGrommetTheme } from "../../components/Layout";
import { getGlobalProps, getGlobalPaths } from "../../takeshape/getGlobal";
import { takeShapeGQLClient } from "../../takeshape/takeShapeClient";
import { GetArticleByPathQuery } from "../../generated/graphql-takeshape";

import { Section } from "../../components/@UI/Section";

export const getStaticProps = async ({ params, locale }) => {
  const globalProps = await getGlobalProps({ params, locale });
  const data = await takeShapeGQLClient.getArticleByPath({ path: "/privacy" });
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
