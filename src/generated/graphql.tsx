import gql from 'graphql-tag';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
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

export type Guest = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  documentNumber: Scalars['String'];
  documentType: Scalars['String'];
  birthDate: Scalars['String'];
  nationality: Scalars['String'];
  placeOfBirth: Scalars['String'];
};

export type UserInput = {
  guests?: Maybe<Array<Maybe<Guest>>>;
  apartment?: Maybe<Scalars['String']>;
  email: Scalars['String'];
};

export type GuestMail = {
  __typename?: 'GuestMail';
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
};

export type MailResponse = {
  __typename?: 'MailResponse';
  guests?: Maybe<Array<Maybe<GuestMail>>>;
  email?: Maybe<Scalars['String']>;
  _id: Scalars['ID'];
  registrationStatus?: Maybe<Scalars['String']>;
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
  birthDate: Scalars['String'];
  documentNumber: Scalars['String'];
  documentType: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  nationality: Scalars['String'];
  placeOfBirth: Scalars['String'];
};

export type Registration = {
  __typename?: 'Registration';
  _id: Scalars['ID'];
  apartmentKey: Scalars['String'];
  email: Scalars['String'];
  registrationStatus?: Maybe<Scalars['String']>;
  guests?: Maybe<Array<Maybe<GuestRegistration>>>;
};

export type RegistrationList = {
  __typename?: 'RegistrationList';
  items?: Maybe<Array<Maybe<Registration>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  book?: Maybe<BookResponse>;
  register?: Maybe<MailResponse>;
  registerConfirmation?: Maybe<MailResponse>;
};


export type MutationBookArgs = {
  user?: Maybe<BookInput>;
};


export type MutationRegisterArgs = {
  user: UserInput;
  file: Array<Maybe<Scalars['Upload']>>;
};


export type MutationRegisterConfirmationArgs = {
  userId: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  price?: Maybe<Scalars['Float']>;
  reviews?: Maybe<Array<Maybe<ReviewType>>>;
  calendar?: Maybe<Array<Maybe<Calendar>>>;
  registrationList?: Maybe<RegistrationList>;
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

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type RegistrationsQueryVariables = Exact<{ [key: string]: never; }>;


export type RegistrationsQuery = (
  { __typename?: 'Query' }
  & { registrationList?: Maybe<(
    { __typename?: 'RegistrationList' }
    & { items?: Maybe<Array<Maybe<(
      { __typename?: 'Registration' }
      & Pick<Registration, '_id' | 'apartmentKey' | 'email' | 'registrationStatus'>
      & { guests?: Maybe<Array<Maybe<(
        { __typename?: 'GuestRegistration' }
        & Pick<GuestRegistration, 'birthDate' | 'documentNumber' | 'documentType' | 'firstName' | 'lastName' | 'nationality' | 'placeOfBirth'>
      )>>> }
    )>>> }
  )> }
);

export type RegisterConfirmationMutationVariables = Exact<{
  userId: Scalars['ID'];
}>;


export type RegisterConfirmationMutation = (
  { __typename?: 'Mutation' }
  & { registerConfirmation?: Maybe<(
    { __typename?: 'MailResponse' }
    & Pick<MailResponse, 'registrationStatus' | '_id'>
  )> }
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
  & { register?: Maybe<(
    { __typename?: 'MailResponse' }
    & Pick<MailResponse, 'email'>
    & { guests?: Maybe<Array<Maybe<(
      { __typename?: 'GuestMail' }
      & Pick<GuestMail, 'firstName' | 'lastName'>
    )>>> }
  )> }
);


export const RegistrationsDocument = gql`
    query Registrations {
  registrationList {
    items {
      _id
      apartmentKey
      email
      registrationStatus
      guests {
        birthDate
        documentNumber
        documentType
        firstName
        lastName
        nationality
        placeOfBirth
      }
    }
  }
}
    `;

/**
 * __useRegistrationsQuery__
 *
 * To run a query within a React component, call `useRegistrationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRegistrationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRegistrationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useRegistrationsQuery(baseOptions?: Apollo.QueryHookOptions<RegistrationsQuery, RegistrationsQueryVariables>) {
        return Apollo.useQuery<RegistrationsQuery, RegistrationsQueryVariables>(RegistrationsDocument, baseOptions);
      }
export function useRegistrationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RegistrationsQuery, RegistrationsQueryVariables>) {
          return Apollo.useLazyQuery<RegistrationsQuery, RegistrationsQueryVariables>(RegistrationsDocument, baseOptions);
        }
export type RegistrationsQueryHookResult = ReturnType<typeof useRegistrationsQuery>;
export type RegistrationsLazyQueryHookResult = ReturnType<typeof useRegistrationsLazyQuery>;
export type RegistrationsQueryResult = Apollo.QueryResult<RegistrationsQuery, RegistrationsQueryVariables>;
export const RegisterConfirmationDocument = gql`
    mutation registerConfirmation($userId: ID!) {
  registerConfirmation(userId: $userId) {
    registrationStatus
    _id
  }
}
    `;
export type RegisterConfirmationMutationFn = Apollo.MutationFunction<RegisterConfirmationMutation, RegisterConfirmationMutationVariables>;

/**
 * __useRegisterConfirmationMutation__
 *
 * To run a mutation, you first call `useRegisterConfirmationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterConfirmationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerConfirmationMutation, { data, loading, error }] = useRegisterConfirmationMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useRegisterConfirmationMutation(baseOptions?: Apollo.MutationHookOptions<RegisterConfirmationMutation, RegisterConfirmationMutationVariables>) {
        return Apollo.useMutation<RegisterConfirmationMutation, RegisterConfirmationMutationVariables>(RegisterConfirmationDocument, baseOptions);
      }
export type RegisterConfirmationMutationHookResult = ReturnType<typeof useRegisterConfirmationMutation>;
export type RegisterConfirmationMutationResult = Apollo.MutationResult<RegisterConfirmationMutation>;
export type RegisterConfirmationMutationOptions = Apollo.BaseMutationOptions<RegisterConfirmationMutation, RegisterConfirmationMutationVariables>;
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
export function useCalendarQuery(baseOptions?: Apollo.QueryHookOptions<CalendarQuery, CalendarQueryVariables>) {
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
export function usePriceQuery(baseOptions?: Apollo.QueryHookOptions<PriceQuery, PriceQueryVariables>) {
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
  register(user: $user, file: $file) {
    guests {
      firstName
      lastName
    }
    email
  }
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