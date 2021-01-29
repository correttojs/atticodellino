export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type File = {
  __typename?: "File";
  filename: Scalars["String"];
  mimetype: Scalars["String"];
  encoding: Scalars["String"];
};

export type IGuest = {
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  documentNumber: Scalars["String"];
  documentType: Scalars["String"];
  birthDate: Scalars["String"];
  nationality: Scalars["String"];
  placeOfBirth: Scalars["String"];
};

export type Guest = {
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  documentNumber: Scalars["String"];
  documentType: Scalars["String"];
  documentPlace?: Maybe<Scalars["String"]>;
  birthDate: Scalars["String"];
  nationality: Scalars["String"];
  placeOfBirth?: Maybe<Scalars["String"]>;
};

export type UserInput = {
  guests?: Maybe<Array<Maybe<Guest>>>;
  hash: Scalars["String"];
  phone: Scalars["String"];
  home: Scalars["String"];
  check_out: Scalars["String"];
};

export type GuestMail = {
  __typename?: "GuestMail";
  firstName?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
};

export type ReviewType = {
  __typename?: "ReviewType";
  comments?: Maybe<Scalars["String"]>;
  date?: Maybe<Scalars["String"]>;
  language?: Maybe<Scalars["String"]>;
  reviewer?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
};

export type Calendar = {
  __typename?: "Calendar";
  start?: Maybe<Scalars["String"]>;
  end?: Maybe<Scalars["String"]>;
  summary?: Maybe<Scalars["String"]>;
};

export type BookInput = {
  firstName?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  from?: Maybe<Scalars["String"]>;
  to?: Maybe<Scalars["String"]>;
};

export type BookResponse = {
  __typename?: "BookResponse";
  firstName?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
};

export type GuestRegistration = {
  __typename?: "GuestRegistration";
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  documentNumber: Scalars["String"];
  documentType: Scalars["String"];
  birthDate: Scalars["String"];
  nationality: Scalars["String"];
  placeOfBirth: Scalars["String"];
  docFile?: Maybe<Scalars["String"]>;
  documentPlace?: Maybe<Scalars["String"]>;
};

export enum ReservationStatus {
  LinkSent = "link_sent",
  New = "new",
  Registered = "registered",
}

export type Reservation = {
  __typename?: "Reservation";
  id?: Maybe<Scalars["ID"]>;
  check_in?: Maybe<Scalars["String"]>;
  check_out?: Maybe<Scalars["String"]>;
  guest_name?: Maybe<Scalars["String"]>;
  phone?: Maybe<Scalars["String"]>;
  hash?: Maybe<Scalars["String"]>;
  home?: Maybe<Scalars["String"]>;
  registrationUrl?: Maybe<Scalars["String"]>;
  faqUrl?: Maybe<Scalars["String"]>;
  reservationStatus?: Maybe<ReservationStatus>;
  guests?: Maybe<Array<Maybe<GuestRegistration>>>;
  address?: Maybe<Scalars["String"]>;
  displayHome?: Maybe<Scalars["String"]>;
  isExpired?: Maybe<Scalars["Boolean"]>;
  code?: Maybe<Scalars["String"]>;
  airbnbLink?: Maybe<Scalars["String"]>;
  mapLink?: Maybe<Scalars["String"]>;
};

export type ReservationShort = {
  __typename?: "ReservationShort";
  check_in?: Maybe<Scalars["String"]>;
  check_out?: Maybe<Scalars["String"]>;
  guest_name?: Maybe<Scalars["String"]>;
  home?: Maybe<Scalars["String"]>;
  phone?: Maybe<Scalars["String"]>;
};

export type Asset = {
  __typename?: "Asset";
  path?: Maybe<Scalars["String"]>;
  mimeType?: Maybe<Scalars["String"]>;
};

export type Faq = {
  __typename?: "Faq";
  question: Scalars["String"];
  answerHtml: Scalars["String"];
  linkVideo?: Maybe<Scalars["String"]>;
  asset?: Maybe<Asset>;
};

export type Mutation = {
  __typename?: "Mutation";
  book?: Maybe<BookResponse>;
  registerGuests?: Maybe<ReservationStatus>;
  updateReservationStatus?: Maybe<ReservationStatus>;
};

export type MutationBookArgs = {
  user?: Maybe<BookInput>;
};

export type MutationRegisterGuestsArgs = {
  user: UserInput;
  file: Array<Maybe<Scalars["Upload"]>>;
};

export type MutationUpdateReservationStatusArgs = {
  id: Scalars["ID"];
  hash: Scalars["String"];
  reservationStatus: ReservationStatus;
};

export type Query = {
  __typename?: "Query";
  price?: Maybe<Scalars["Float"]>;
  reviews?: Maybe<Array<Maybe<ReviewType>>>;
  calendar?: Maybe<Array<Maybe<Calendar>>>;
  syncReservations?: Maybe<Array<Maybe<Reservation>>>;
  reservations?: Maybe<Array<Maybe<Reservation>>>;
  reservation?: Maybe<Reservation>;
  faq?: Maybe<Array<Maybe<Faq>>>;
};

export type QueryPriceArgs = {
  from: Scalars["String"];
  to: Scalars["String"];
  airBnb: Scalars["String"];
};

export type QueryReviewsArgs = {
  airBnb: Scalars["String"];
};

export type QueryCalendarArgs = {
  apartment: Scalars["String"];
};

export type QueryReservationsArgs = {
  isPast: Scalars["Boolean"];
};

export type QueryReservationArgs = {
  hash: Scalars["String"];
};

export type QueryFaqArgs = {
  hash: Scalars["String"];
};

export enum CacheControlScope {
  Public = "PUBLIC",
  Private = "PRIVATE",
}
