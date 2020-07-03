import { withGrommetTheme } from "../components/withGrommetTheme";
import { NextPage } from "next";
import { useState } from "react";
import { Box } from "grommet";

export async function getStaticProps() {
  return {
    props: { global: { apartment: "VR", lang: "en" } },
  };
}

const FAQ_TEXT = [
  {
    question: "Test ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

for (let i = 1; i < 20; i++) {
  FAQ_TEXT[i] = {
    question: FAQ_TEXT[0].question + i,
    description: FAQ_TEXT[0].description + i,
  };
}

const Faq: NextPage = () => {
  const [copied, setCopied] = useState<{ [key: string]: boolean }>({});

  return (
    <Box>
      {FAQ_TEXT.map((item, i) => (
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
          <p>{item.description}</p>
        </Box>
      ))}
    </Box>
  );
};

export default withGrommetTheme()(Faq);
