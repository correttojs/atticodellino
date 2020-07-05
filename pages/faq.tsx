import { withGrommetTheme } from "../components/withGrommetTheme";
import { NextPage } from "next";
import { useState } from "react";
import { Box } from "grommet";
import { getSdk, FaqsQuery } from "../generated/graphql-takeshape";
import { GraphQLClient } from "graphql-request";
import { GlobalType } from "../components/graphql/airbnDetail";

export async function getStaticProps() {
  console.log(process.env.TAKESHAPE_API_KEY);
  const graphQLClient = new GraphQLClient(
    `https://api.takeshape.io/project/${process.env.TAKESHAPE_PROJECT}/graphql`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TAKESHAPE_API_KEY}`,
      },
    }
  );

  const sdk = getSdk(graphQLClient);
  const data = await sdk.Faqs({ lang: "en", apartment: "VR" });

  return {
    props: { global: { apartment: "VR", lang: "en" }, data: data },
  };
}

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
          <p>{item.answer}</p>
        </Box>
      ))}
    </Box>
  );
};

export default withGrommetTheme()(Faq);
