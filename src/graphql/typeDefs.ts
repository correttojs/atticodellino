import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type File {
    filename: String!
    mimetype: String!
    encoding: String!
  }

  input Guest {
    firstName: String!
    lastName: String!
    documentNumber: String!
    documentType: String!
    birthDate: String!
    nationality: String!
    placeOfBirth: String!
  }
  input UserInput {
    guests: [Guest]
    apartment: String
    email: String!
  }

  type GuestMail {
    firstName: String
    lastName: String
  }

  type MailResponse {
    guests: [GuestMail]
    email: String
    _id: ID!
    registrationStatus: String
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
    birthDate: String!
    documentNumber: String!
    documentType: String!
    firstName: String!
    lastName: String!
    nationality: String!
    placeOfBirth: String!
  }
  type Registration {
    _id: ID!
    apartmentKey: String!
    email: String!
    registrationStatus: String
    guests: [GuestRegistration]
  }

  type RegistrationList {
    items: [Registration]
  }

  type Mutation {
    book(user: BookInput): BookResponse
    register(user: UserInput!, file: [Upload]!): MailResponse
    registerConfirmation(userId: ID!): MailResponse
  }
  type Query {
    price(from: String!, to: String!, airBnb: String!): Float
    reviews(airBnb: String!): [ReviewType]
    calendar(apartment: String!): [Calendar]
    registrationList: RegistrationList
  }
`;
