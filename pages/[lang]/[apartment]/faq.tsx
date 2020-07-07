import { withGrommetTheme } from "../../../components/withGrommetTheme";
import { NextPage } from "next";
import { useState } from "react";
import { Box } from "grommet";
import { GlobalType } from "../../../components/graphql/airbnDetail";
import { takeShapeGQLClient } from "../../../components/takeshape/takeShapeClient";
import { FaqsQuery } from "../../../generated/graphql-takeshape";
import {
  getGlobalPaths,
  getGlobalProps,
} from "../../../components/takeshape/getGlobal";

export async function getStaticProps({ params }) {
  const globalProps = await getGlobalProps({ params });
  const data = await takeShapeGQLClient.Faqs(globalProps.props.global);

  return {
    props: { ...globalProps.props, data: data },
  };
}

export const getStaticPaths = getGlobalPaths;

const Faq: NextPage<{ data: FaqsQuery; global: GlobalType }> = ({ data }) => {
  const [copied, setCopied] = useState<{ [key: string]: boolean }>({});

  return (
    <Box>
      {data.getFaqList.items.map((item, i) => (
        <Box
          margin="medium"
          style={{ marginTop: "-80px", paddingTop: "80px" }}
          key={i}
          id={"faq" + i}
        >
          <h3
            onClick={() => {
              navigator.clipboard.writeText(
                "https://www.atticodellino.com/faq#faq" + i
              );
              setCopied({ [i]: true });
              setTimeout(() => {
                setCopied({ [i]: false });
              }, 2000);
            }}
          >
            {item.question}
            {copied[i] && <span style={{ color: "red" }}> copied</span>}
          </h3>
          <p>{item.answer?.blocks?.[0]?.text}</p>
        </Box>
      ))}
    </Box>
  );
};

export default withGrommetTheme()(Faq);
