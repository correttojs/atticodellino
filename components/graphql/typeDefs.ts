import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type File {
    filename: String!
    mimetype: String!
    encoding: String!
  }

  input UserInput {
    firstName: String
    lastName: String
    documentNumber: String
    documentType: String
    birthDate: String
    nationality: String
    placeOfBirth: String
    apartment: String
  }

  type MailResponse {
    firstName: String
    lastName: String
    apartment: String
    code: String
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

  type Mutation {
    sendMail(user: UserInput!, file: Upload!): MailResponse
    book(user: BookInput): BookResponse
  }
  type Query {
    price(from: String, to: String): Float
    reviews: [ReviewType]
    calendar: [Calendar]
  }
`;
