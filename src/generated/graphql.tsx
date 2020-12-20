import gql from 'graphql-tag';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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
  __typename?: 'File';
  filename: Scalars['String'];
  mimetype: Scalars['String'];
  encoding: Scalars['String'];
};

export type IGuest = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  documentNumber: Scalars['String'];
  documentType: Scalars['String'];
  birthDate: Scalars['String'];
  nationality: Scalars['String'];
  placeOfBirth: Scalars['String'];
};

export type Guest = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  documentNumber: Scalars['String'];
  documentType: Scalars['String'];
  documentPlace?: Maybe<Scalars['String']>;
  birthDate: Scalars['String'];
  nationality: Scalars['String'];
  placeOfBirth?: Maybe<Scalars['String']>;
};

export type UserInput = {
  guests?: Maybe<Array<Maybe<Guest>>>;
  id: Scalars['ID'];
  hash: Scalars['String'];
  phone: Scalars['String'];
  home: Scalars['String'];
  check_out: Scalars['String'];
};

export type GuestMail = {
  __typename?: 'GuestMail';
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
};

export type ReviewType = {
  __typename?: 'ReviewType';
  comments?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  reviewer?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

export type Calendar = {
  __typename?: 'Calendar';
  start?: Maybe<Scalars['String']>;
  end?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
};

export type BookInput = {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
};

export type BookResponse = {
  __typename?: 'BookResponse';
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
};

export type GuestRegistration = {
  __typename?: 'GuestRegistration';
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  documentNumber: Scalars['String'];
  documentType: Scalars['String'];
  birthDate: Scalars['String'];
  nationality: Scalars['String'];
  placeOfBirth: Scalars['String'];
  docFile?: Maybe<Scalars['String']>;
  documentPlace?: Maybe<Scalars['String']>;
};

export enum ReservationStatus {
  LinkSent = 'link_sent',
  New = 'new',
  Registered = 'registered'
}

export type Reservation = {
  __typename?: 'Reservation';
  id: Scalars['ID'];
  check_in?: Maybe<Scalars['String']>;
  check_out?: Maybe<Scalars['String']>;
  guest_name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  home?: Maybe<Scalars['String']>;
  registrationUrl?: Maybe<Scalars['String']>;
  faqUrl?: Maybe<Scalars['String']>;
  reservationStatus?: Maybe<ReservationStatus>;
  guests?: Maybe<Array<Maybe<GuestRegistration>>>;
};

export type ReservationShort = {
  __typename?: 'ReservationShort';
  check_in?: Maybe<Scalars['String']>;
  check_out?: Maybe<Scalars['String']>;
  guest_name?: Maybe<Scalars['String']>;
  home?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

export type Asset = {
  __typename?: 'Asset';
  path?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type Faq = {
  __typename?: 'Faq';
  question: Scalars['String'];
  answerHtml: Scalars['String'];
  linkVideo?: Maybe<Scalars['String']>;
  asset?: Maybe<Asset>;
};

export type Mutation = {
  __typename?: 'Mutation';
  book?: Maybe<BookResponse>;
  registerGuests?: Maybe<ReservationStatus>;
  updateReservationStatus?: Maybe<ReservationStatus>;
};


export type MutationBookArgs = {
  user?: Maybe<BookInput>;
};


export type MutationRegisterGuestsArgs = {
  user: UserInput;
  file: Array<Maybe<Scalars['Upload']>>;
};


export type MutationUpdateReservationStatusArgs = {
  id: Scalars['ID'];
  hash: Scalars['String'];
  reservationStatus: ReservationStatus;
};

export type Query = {
  __typename?: 'Query';
  price?: Maybe<Scalars['Float']>;
  reviews?: Maybe<Array<Maybe<ReviewType>>>;
  calendar?: Maybe<Array<Maybe<Calendar>>>;
  syncReservations?: Maybe<Array<Maybe<Reservation>>>;
  reservations?: Maybe<Array<Maybe<Reservation>>>;
  reservation?: Maybe<Reservation>;
  faq?: Maybe<Array<Maybe<Faq>>>;
};


export type QueryPriceArgs = {
  from: Scalars['String'];
  to: Scalars['String'];
  airBnb: Scalars['String'];
};


export type QueryReviewsArgs = {
  airBnb: Scalars['String'];
};


export type QueryCalendarArgs = {
  apartment: Scalars['String'];
};


export type QueryReservationsArgs = {
  isPast: Scalars['Boolean'];
};


export type QueryReservationArgs = {
  id: Scalars['ID'];
  hash: Scalars['String'];
};


export type QueryFaqArgs = {
  id: Scalars['ID'];
  hash: Scalars['String'];
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type ReservationsQueryVariables = Exact<{
  isPast: Scalars['Boolean'];
}>;


export type ReservationsQuery = (
  { __typename?: 'Query' }
  & { reservations?: Maybe<Array<Maybe<(
    { __typename?: 'Reservation' }
    & ReservationRespFragment
  )>>> }
);

export type SyncRegistrationsQueryVariables = Exact<{ [key: string]: never; }>;


export type SyncRegistrationsQuery = (
  { __typename?: 'Query' }
  & { syncReservations?: Maybe<Array<Maybe<(
    { __typename?: 'Reservation' }
    & ReservationRespFragment
  )>>> }
);

export type ReservationRespFragment = (
  { __typename?: 'Reservation' }
  & Pick<Reservation, 'id' | 'guest_name' | 'check_out' | 'check_in' | 'hash' | 'phone' | 'home' | 'reservationStatus' | 'registrationUrl' | 'faqUrl'>
  & { guests?: Maybe<Array<Maybe<(
    { __typename?: 'GuestRegistration' }
    & Pick<GuestRegistration, 'birthDate' | 'documentNumber' | 'documentType' | 'documentPlace' | 'docFile' | 'firstName' | 'lastName' | 'nationality' | 'placeOfBirth'>
  )>>> }
);

export type UpdateReservationStatusMutationVariables = Exact<{
  userId: Scalars['ID'];
  hash: Scalars['String'];
  reservationStatus: ReservationStatus;
}>;


export type UpdateReservationStatusMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'updateReservationStatus'>
);

export type FaqQueryVariables = Exact<{
  id: Scalars['ID'];
  hash: Scalars['String'];
}>;


export type FaqQuery = (
  { __typename?: 'Query' }
  & { faq?: Maybe<Array<Maybe<(
    { __typename?: 'Faq' }
    & Pick<Faq, 'answerHtml' | 'question' | 'linkVideo'>
    & { asset?: Maybe<(
      { __typename?: 'Asset' }
      & Pick<Asset, 'mimeType' | 'path'>
    )> }
  )>>> }
);

export type BookNowMutationVariables = Exact<{
  user: BookInput;
}>;


export type BookNowMutation = (
  { __typename?: 'Mutation' }
  & { book?: Maybe<(
    { __typename?: 'BookResponse' }
    & Pick<BookResponse, 'firstName' | 'lastName'>
  )> }
);

export type CalendarQueryVariables = Exact<{
  apartment: Scalars['String'];
}>;


export type CalendarQuery = (
  { __typename?: 'Query' }
  & { calendar?: Maybe<Array<Maybe<(
    { __typename?: 'Calendar' }
    & Pick<Calendar, 'start' | 'end'>
  )>>> }
);

export type PriceQueryVariables = Exact<{
  from: Scalars['String'];
  to: Scalars['String'];
  airBnb: Scalars['String'];
}>;


export type PriceQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'price'>
);

export type RegisterMutationVariables = Exact<{
  user: UserInput;
  file: Array<Maybe<Scalars['Upload']>>;
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'registerGuests'>
);

export type ReservationQueryVariables = Exact<{
  id: Scalars['ID'];
  hash: Scalars['String'];
}>;


export type ReservationQuery = (
  { __typename?: 'Query' }
  & { reservation?: Maybe<(
    { __typename?: 'Reservation' }
    & Pick<Reservation, 'guest_name' | 'check_out' | 'check_in' | 'phone' | 'home'>
  )> }
);

export const ReservationRespFragmentDoc = gql`
    fragment ReservationResp on Reservation {
  id
  guest_name
  check_out
  check_in
  hash
  phone
  home
  reservationStatus
  registrationUrl
  faqUrl
  guests {
    birthDate
    documentNumber
    documentType
    documentPlace
    docFile
    firstName
    lastName
    nationality
    placeOfBirth
  }
}
    `;
export const ReservationsDocument = gql`
    query Reservations($isPast: Boolean!) {
  reservations(isPast: $isPast) {
    ...ReservationResp
  }
}
    ${ReservationRespFragmentDoc}`;

/**
 * __useReservationsQuery__
 *
 * To run a query within a React component, call `useReservationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useReservationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReservationsQuery({
 *   variables: {
 *      isPast: // value for 'isPast'
 *   },
 * });
 */
export function useReservationsQuery(baseOptions: Apollo.QueryHookOptions<ReservationsQuery, ReservationsQueryVariables>) {
        return Apollo.useQuery<ReservationsQuery, ReservationsQueryVariables>(ReservationsDocument, baseOptions);
      }
export function useReservationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReservationsQuery, ReservationsQueryVariables>) {
          return Apollo.useLazyQuery<ReservationsQuery, ReservationsQueryVariables>(ReservationsDocument, baseOptions);
        }
export type ReservationsQueryHookResult = ReturnType<typeof useReservationsQuery>;
export type ReservationsLazyQueryHookResult = ReturnType<typeof useReservationsLazyQuery>;
export type ReservationsQueryResult = Apollo.QueryResult<ReservationsQuery, ReservationsQueryVariables>;
export const SyncRegistrationsDocument = gql`
    query syncRegistrations {
  syncReservations {
    ...ReservationResp
  }
}
    ${ReservationRespFragmentDoc}`;

/**
 * __useSyncRegistrationsQuery__
 *
 * To run a query within a React component, call `useSyncRegistrationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSyncRegistrationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSyncRegistrationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useSyncRegistrationsQuery(baseOptions?: Apollo.QueryHookOptions<SyncRegistrationsQuery, SyncRegistrationsQueryVariables>) {
        return Apollo.useQuery<SyncRegistrationsQuery, SyncRegistrationsQueryVariables>(SyncRegistrationsDocument, baseOptions);
      }
export function useSyncRegistrationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SyncRegistrationsQuery, SyncRegistrationsQueryVariables>) {
          return Apollo.useLazyQuery<SyncRegistrationsQuery, SyncRegistrationsQueryVariables>(SyncRegistrationsDocument, baseOptions);
        }
export type SyncRegistrationsQueryHookResult = ReturnType<typeof useSyncRegistrationsQuery>;
export type SyncRegistrationsLazyQueryHookResult = ReturnType<typeof useSyncRegistrationsLazyQuery>;
export type SyncRegistrationsQueryResult = Apollo.QueryResult<SyncRegistrationsQuery, SyncRegistrationsQueryVariables>;
export const UpdateReservationStatusDocument = gql`
    mutation updateReservationStatus($userId: ID!, $hash: String!, $reservationStatus: ReservationStatus!) {
  updateReservationStatus(
    id: $userId
    hash: $hash
    reservationStatus: $reservationStatus
  )
}
    `;
export type UpdateReservationStatusMutationFn = Apollo.MutationFunction<UpdateReservationStatusMutation, UpdateReservationStatusMutationVariables>;

/**
 * __useUpdateReservationStatusMutation__
 *
 * To run a mutation, you first call `useUpdateReservationStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateReservationStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateReservationStatusMutation, { data, loading, error }] = useUpdateReservationStatusMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      hash: // value for 'hash'
 *      reservationStatus: // value for 'reservationStatus'
 *   },
 * });
 */
export function useUpdateReservationStatusMutation(baseOptions?: Apollo.MutationHookOptions<UpdateReservationStatusMutation, UpdateReservationStatusMutationVariables>) {
        return Apollo.useMutation<UpdateReservationStatusMutation, UpdateReservationStatusMutationVariables>(UpdateReservationStatusDocument, baseOptions);
      }
export type UpdateReservationStatusMutationHookResult = ReturnType<typeof useUpdateReservationStatusMutation>;
export type UpdateReservationStatusMutationResult = Apollo.MutationResult<UpdateReservationStatusMutation>;
export type UpdateReservationStatusMutationOptions = Apollo.BaseMutationOptions<UpdateReservationStatusMutation, UpdateReservationStatusMutationVariables>;
export const FaqDocument = gql`
    query Faq($id: ID!, $hash: String!) {
  faq(id: $id, hash: $hash) {
    answerHtml
    question
    linkVideo
    asset {
      mimeType
      path
    }
  }
}
    `;

/**
 * __useFaqQuery__
 *
 * To run a query within a React component, call `useFaqQuery` and pass it any options that fit your needs.
 * When your component renders, `useFaqQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFaqQuery({
 *   variables: {
 *      id: // value for 'id'
 *      hash: // value for 'hash'
 *   },
 * });
 */
export function useFaqQuery(baseOptions: Apollo.QueryHookOptions<FaqQuery, FaqQueryVariables>) {
        return Apollo.useQuery<FaqQuery, FaqQueryVariables>(FaqDocument, baseOptions);
      }
export function useFaqLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FaqQuery, FaqQueryVariables>) {
          return Apollo.useLazyQuery<FaqQuery, FaqQueryVariables>(FaqDocument, baseOptions);
        }
export type FaqQueryHookResult = ReturnType<typeof useFaqQuery>;
export type FaqLazyQueryHookResult = ReturnType<typeof useFaqLazyQuery>;
export type FaqQueryResult = Apollo.QueryResult<FaqQuery, FaqQueryVariables>;
export const BookNowDocument = gql`
    mutation bookNow($user: BookInput!) {
  book(user: $user) {
    firstName
    lastName
  }
}
    `;
export type BookNowMutationFn = Apollo.MutationFunction<BookNowMutation, BookNowMutationVariables>;

/**
 * __useBookNowMutation__
 *
 * To run a mutation, you first call `useBookNowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBookNowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [bookNowMutation, { data, loading, error }] = useBookNowMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useBookNowMutation(baseOptions?: Apollo.MutationHookOptions<BookNowMutation, BookNowMutationVariables>) {
        return Apollo.useMutation<BookNowMutation, BookNowMutationVariables>(BookNowDocument, baseOptions);
      }
export type BookNowMutationHookResult = ReturnType<typeof useBookNowMutation>;
export type BookNowMutationResult = Apollo.MutationResult<BookNowMutation>;
export type BookNowMutationOptions = Apollo.BaseMutationOptions<BookNowMutation, BookNowMutationVariables>;
export const CalendarDocument = gql`
    query Calendar($apartment: String!) {
  calendar(apartment: $apartment) {
    start
    end
  }
}
    `;

/**
 * __useCalendarQuery__
 *
 * To run a query within a React component, call `useCalendarQuery` and pass it any options that fit your needs.
 * When your component renders, `useCalendarQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCalendarQuery({
 *   variables: {
 *      apartment: // value for 'apartment'
 *   },
 * });
 */
export function useCalendarQuery(baseOptions: Apollo.QueryHookOptions<CalendarQuery, CalendarQueryVariables>) {
        return Apollo.useQuery<CalendarQuery, CalendarQueryVariables>(CalendarDocument, baseOptions);
      }
export function useCalendarLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CalendarQuery, CalendarQueryVariables>) {
          return Apollo.useLazyQuery<CalendarQuery, CalendarQueryVariables>(CalendarDocument, baseOptions);
        }
export type CalendarQueryHookResult = ReturnType<typeof useCalendarQuery>;
export type CalendarLazyQueryHookResult = ReturnType<typeof useCalendarLazyQuery>;
export type CalendarQueryResult = Apollo.QueryResult<CalendarQuery, CalendarQueryVariables>;
export const PriceDocument = gql`
    query Price($from: String!, $to: String!, $airBnb: String!) {
  price(from: $from, to: $to, airBnb: $airBnb)
}
    `;

/**
 * __usePriceQuery__
 *
 * To run a query within a React component, call `usePriceQuery` and pass it any options that fit your needs.
 * When your component renders, `usePriceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePriceQuery({
 *   variables: {
 *      from: // value for 'from'
 *      to: // value for 'to'
 *      airBnb: // value for 'airBnb'
 *   },
 * });
 */
export function usePriceQuery(baseOptions: Apollo.QueryHookOptions<PriceQuery, PriceQueryVariables>) {
        return Apollo.useQuery<PriceQuery, PriceQueryVariables>(PriceDocument, baseOptions);
      }
export function usePriceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PriceQuery, PriceQueryVariables>) {
          return Apollo.useLazyQuery<PriceQuery, PriceQueryVariables>(PriceDocument, baseOptions);
        }
export type PriceQueryHookResult = ReturnType<typeof usePriceQuery>;
export type PriceLazyQueryHookResult = ReturnType<typeof usePriceLazyQuery>;
export type PriceQueryResult = Apollo.QueryResult<PriceQuery, PriceQueryVariables>;
export const RegisterDocument = gql`
    mutation register($user: UserInput!, $file: [Upload]!) {
  registerGuests(user: $user, file: $file)
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      user: // value for 'user'
 *      file: // value for 'file'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const ReservationDocument = gql`
    query Reservation($id: ID!, $hash: String!) {
  reservation(id: $id, hash: $hash) {
    guest_name
    check_out
    check_in
    phone
    home
  }
}
    `;

/**
 * __useReservationQuery__
 *
 * To run a query within a React component, call `useReservationQuery` and pass it any options that fit your needs.
 * When your component renders, `useReservationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReservationQuery({
 *   variables: {
 *      id: // value for 'id'
 *      hash: // value for 'hash'
 *   },
 * });
 */
export function useReservationQuery(baseOptions: Apollo.QueryHookOptions<ReservationQuery, ReservationQueryVariables>) {
        return Apollo.useQuery<ReservationQuery, ReservationQueryVariables>(ReservationDocument, baseOptions);
      }
export function useReservationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReservationQuery, ReservationQueryVariables>) {
          return Apollo.useLazyQuery<ReservationQuery, ReservationQueryVariables>(ReservationDocument, baseOptions);
        }
export type ReservationQueryHookResult = ReturnType<typeof useReservationQuery>;
export type ReservationLazyQueryHookResult = ReturnType<typeof useReservationLazyQuery>;
export type ReservationQueryResult = Apollo.QueryResult<ReservationQuery, ReservationQueryVariables>;