import { MutationSendMailArgs, MutationBookArgs } from "../generated/graphql";
import { sendGridMail, sendBookMail } from "./sendGridMail";
import { getReviews, calculatePrice } from "./airbnb";
import { fetchPublicIcal } from "./ical";
import { registrationList } from "./registrationList";

export const resolvers = {
  Mutation: {
    sendMail: async (_, { file, user }: MutationSendMailArgs) =>
      sendGridMail({ file, user }),
    book: async (_, { user }: MutationBookArgs) => sendBookMail({ user }),
  },
  Query: {
    price: async (_, { from, to, airBnb }) => calculatePrice(from, to, airBnb),
    reviews: async (_, { airBnb }) => {
      const res = await getReviews(airBnb);
      return res.reviews.map((r) => ({
        comments: r.comments,
        date: r.localized_date,
        language: r.language,
        reviewer: r.reviewer.first_name,
        id: r.id,
      }));
    },
    calendar: fetchPublicIcal,
    registrationList,
  },
};
