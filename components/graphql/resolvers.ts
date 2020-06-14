import {
  MutationSendMailArgs,
  MutationBookArgs,
} from "../../generated/graphql";
import { sendGridMail, sendBookMail } from "./sendGridMail";
import { getReviews, calculatePrice } from "./airbnb";
import { fetchPublicIcal } from "./ical";

export const resolvers = {
  Mutation: {
    sendMail: async (_, { file, user }: MutationSendMailArgs) =>
      sendGridMail({ file, user }),
    book: async (_, { user }: MutationBookArgs) => sendBookMail({ user }),
  },
  Query: {
    price: async (_, { from, to }) => calculatePrice(from, to),
    reviews: async () => {
      const res = await getReviews();
      return res.reviews.map((r) => ({
        comments: r.comments,
        date: r.localized_date,
        language: r.language,
        reviewer: r.reviewer.first_name,
        id: r.id,
      }));
    },
    calendar: fetchPublicIcal,
  },
};
