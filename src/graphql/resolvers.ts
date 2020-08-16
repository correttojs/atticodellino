import { registerMutation, registerConfirmationMutation } from "./_register";
import { reviewsResolver, priceResolver } from "./_airbnb";
import { calendarResolver } from "./_calendar";
import { registrationListResolver } from "./_registrationList";
import { bookMutation } from "./_book";

export const resolvers = {
  Mutation: {
    book: bookMutation,
    register: registerMutation,
    registerConfirmation: registerConfirmationMutation,
  },
  Query: {
    price: priceResolver,
    reviews: reviewsResolver,
    calendar: calendarResolver,
    registrationList: registrationListResolver,
  },
};
