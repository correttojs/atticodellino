import { FaFemale, FaPersonBooth, FaBed, FaBath } from "react-icons/fa";
import { Box } from "grommet";
import React from "react";
import { pdp_listing_detail } from "../../graphql/_airbn.types";
import { Span } from "../@UI/Texts";
import tw from "twin.macro";
import { IconType } from "react-icons/lib";

const Item: React.FC<{ Icon: IconType; label: string }> = ({ Icon, label }) => {
  return (
    <div css={tw`flex flex-row`}>
      <Icon />
      <Span css={tw`pl-2`}>{label}</Span>
    </div>
  );
};

export const Summary: React.FC<Partial<
  pdp_listing_detail["pdp_listing_detail"]
>> = ({ guest_label, bedroom_label, bed_label, bathroom_label }) => {
  return (
    <Box
      direction="row-responsive"
      align="center"
      justify="between"
      pad={{ horizontal: "large", top: "large", bottom: "small" }}
      margin={{ bottom: "large" }}
      border="bottom"
    >
      <Item Icon={FaFemale} label={guest_label} />
      <Item Icon={FaPersonBooth} label={bedroom_label} />
      {!/^0/.test(bed_label) && <Item Icon={FaBed} label={bed_label} />}
      <Item Icon={FaBath} label={bathroom_label} />
    </Box>
  );
};
