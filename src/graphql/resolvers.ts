import { reviewsResolver, priceResolver } from "./_airbnb";
import { calendarResolver } from "./_calendar";
import { bookMutation } from "./_book";
import { syncReservations } from "./_syncReservations";
import {
  reservations,
  updateReservationStatus,
  reservation,
} from "./_reservations";
import { registerGuests } from "./_reservationsRegister";
import { faq } from "./_faq";
import { upload } from "./upload";

export const resolvers = {
  Mutation: {
    book: bookMutation,
    updateReservationStatus,
    registerGuests,
  },
  Query: {
    price: priceResolver,
    reviews: reviewsResolver,
    calendar: calendarResolver,
    syncReservations,
    reservations,
    reservation,
    faq,
  },
};
