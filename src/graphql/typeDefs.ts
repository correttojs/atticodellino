import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type File {
    filename: String!
    mimetype: String!
    encoding: String!
  }

  interface IGuest {
    firstName: String!
    lastName: String!
    documentNumber: String!
    documentType: String!
    birthDate: String!
    nationality: String!
    placeOfBirth: String!
  }

  input Guest {
    firstName: String!
    lastName: String!
    documentNumber: String!
    documentType: String!
    documentPlace: String
    birthDate: String!
    nationality: String!
    placeOfBirth: String
  }

  input UserInput {
    guests: [Guest]
    hash: String!
    phone: String!
    home: String!
    check_out: String!
  }

  type GuestMail {
    firstName: String
    lastName: String
  }

  type ReviewType {
    comments: String
    date: String
    language: String
    reviewer: String
    id: Int
  }

  type Calendar {
    start: String
    end: String
    summary: String
  }

  input BookInput {
    firstName: String
    lastName: String
    email: String
    from: String
    to: String
  }

  type BookResponse {
    firstName: String
    lastName: String
  }

  type GuestRegistration {
    firstName: String!
    lastName: String!
    documentNumber: String!
    documentType: String!
    birthDate: String!
    nationality: String!
    placeOfBirth: String!
    docFile: String
    documentPlace: String
  }

  enum ReservationStatus {
    link_sent
    new
    registered
  }

  type Reservation {
    id: ID
    check_in: String
    check_out: String
    guest_name: String
    phone: String
    hash: String
    home: String
    registrationUrl: String
    faqUrl: String
    reservationStatus: ReservationStatus
    guests: [GuestRegistration]
    address: String
    displayHome: String
    isExpired: Boolean
    code: String
  }

  type ReservationShort {
    check_in: String
    check_out: String
    guest_name: String
    home: String
    phone: String
  }

  type Asset {
    path: String
    mimeType: String
  }
  type Faq {
    question: String!
    answerHtml: String!
    linkVideo: String
    asset: Asset
  }

  type Mutation {
    book(user: BookInput): BookResponse
    registerGuests(user: UserInput!, file: [Upload]!): ReservationStatus
    updateReservationStatus(
      id: ID!
      hash: String!
      reservationStatus: ReservationStatus!
    ): ReservationStatus
  }

  type Query {
    price(from: String!, to: String!, airBnb: String!): Float
    reviews(airBnb: String!): [ReviewType]
    calendar(apartment: String!): [Calendar]
    syncReservations: [Reservation]
    reservations(isPast: Boolean!): [Reservation]
    reservation(hash: String!): Reservation
    faq(hash: String!): [Faq]
  }
`;
