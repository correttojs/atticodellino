import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
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

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Calendar = {
   __typename?: 'Calendar';
  start?: Maybe<Scalars['String']>;
  end?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
};

export type File = {
   __typename?: 'File';
  filename: Scalars['String'];
  mimetype: Scalars['String'];
  encoding: Scalars['String'];
};

export type MailResponse = {
   __typename?: 'MailResponse';
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type Mutation = {
   __typename?: 'Mutation';
  sendMail?: Maybe<MailResponse>;
  book?: Maybe<BookResponse>;
  registerUser?: Maybe<MailResponse>;
};


export type MutationSendMailArgs = {
  user: UserInput;
  file: Scalars['Upload'];
};


export type MutationBookArgs = {
  user?: Maybe<BookInput>;
};


export type MutationRegisterUserArgs = {
  user: UserInput;
  file: Scalars['Upload'];
};

export type Query = {
   __typename?: 'Query';
  price?: Maybe<Scalars['Float']>;
  reviews?: Maybe<Array<Maybe<ReviewType>>>;
  calendar?: Maybe<Array<Maybe<Calendar>>>;
};


export type QueryPriceArgs = {
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
};

export type ReviewType = {
   __typename?: 'ReviewType';
  comments?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  reviewer?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};


export type UserInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  documentNumber: Scalars['String'];
  documentType: Scalars['String'];
  birthDate: Scalars['String'];
  nationality: Scalars['String'];
  placeOfBirth: Scalars['String'];
  apartment?: Maybe<Scalars['String']>;
  email: Scalars['String'];
};

export type BookNowMutationVariables = {
  user: BookInput;
};


export type BookNowMutation = (
  { __typename?: 'Mutation' }
  & { book?: Maybe<(
    { __typename?: 'BookResponse' }
    & Pick<BookResponse, 'firstName' | 'lastName'>
  )> }
);

export type CalendarQueryVariables = {};


export type CalendarQuery = (
  { __typename?: 'Query' }
  & { calendar?: Maybe<Array<Maybe<(
    { __typename?: 'Calendar' }
    & Pick<Calendar, 'start' | 'end'>
  )>>> }
);

export type PriceQueryVariables = {
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
};


export type PriceQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'price'>
);

export type SendMailMutationVariables = {
  user: UserInput;
  file: Scalars['Upload'];
};


export type SendMailMutation = (
  { __typename?: 'Mutation' }
  & { sendMail?: Maybe<(
    { __typename?: 'MailResponse' }
    & Pick<MailResponse, 'firstName' | 'lastName' | 'email'>
  )> }
);


export const BookNowDocument = gql`
    mutation bookNow($user: BookInput!) {
  book(user: $user) {
    firstName
    lastName
  }
}
    `;
export type BookNowMutationFn = ApolloReactCommon.MutationFunction<BookNowMutation, BookNowMutationVariables>;

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
export function useBookNowMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<BookNowMutation, BookNowMutationVariables>) {
        return ApolloReactHooks.useMutation<BookNowMutation, BookNowMutationVariables>(BookNowDocument, baseOptions);
      }
export type BookNowMutationHookResult = ReturnType<typeof useBookNowMutation>;
export type BookNowMutationResult = ApolloReactCommon.MutationResult<BookNowMutation>;
export type BookNowMutationOptions = ApolloReactCommon.BaseMutationOptions<BookNowMutation, BookNowMutationVariables>;
export const CalendarDocument = gql`
    query Calendar {
  calendar {
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
 *   },
 * });
 */
export function useCalendarQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CalendarQuery, CalendarQueryVariables>) {
        return ApolloReactHooks.useQuery<CalendarQuery, CalendarQueryVariables>(CalendarDocument, baseOptions);
      }
export function useCalendarLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CalendarQuery, CalendarQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CalendarQuery, CalendarQueryVariables>(CalendarDocument, baseOptions);
        }
export type CalendarQueryHookResult = ReturnType<typeof useCalendarQuery>;
export type CalendarLazyQueryHookResult = ReturnType<typeof useCalendarLazyQuery>;
export type CalendarQueryResult = ApolloReactCommon.QueryResult<CalendarQuery, CalendarQueryVariables>;
export const PriceDocument = gql`
    query Price($from: String, $to: String) {
  price(from: $from, to: $to)
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
 *   },
 * });
 */
export function usePriceQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PriceQuery, PriceQueryVariables>) {
        return ApolloReactHooks.useQuery<PriceQuery, PriceQueryVariables>(PriceDocument, baseOptions);
      }
export function usePriceLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PriceQuery, PriceQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<PriceQuery, PriceQueryVariables>(PriceDocument, baseOptions);
        }
export type PriceQueryHookResult = ReturnType<typeof usePriceQuery>;
export type PriceLazyQueryHookResult = ReturnType<typeof usePriceLazyQuery>;
export type PriceQueryResult = ApolloReactCommon.QueryResult<PriceQuery, PriceQueryVariables>;
export const SendMailDocument = gql`
    mutation sendMail($user: UserInput!, $file: Upload!) {
  sendMail(user: $user, file: $file) {
    firstName
    lastName
    email
  }
}
    `;
export type SendMailMutationFn = ApolloReactCommon.MutationFunction<SendMailMutation, SendMailMutationVariables>;

/**
 * __useSendMailMutation__
 *
 * To run a mutation, you first call `useSendMailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendMailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendMailMutation, { data, loading, error }] = useSendMailMutation({
 *   variables: {
 *      user: // value for 'user'
 *      file: // value for 'file'
 *   },
 * });
 */
export function useSendMailMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SendMailMutation, SendMailMutationVariables>) {
        return ApolloReactHooks.useMutation<SendMailMutation, SendMailMutationVariables>(SendMailDocument, baseOptions);
      }
export type SendMailMutationHookResult = ReturnType<typeof useSendMailMutation>;
export type SendMailMutationResult = ApolloReactCommon.MutationResult<SendMailMutation>;
export type SendMailMutationOptions = ApolloReactCommon.BaseMutationOptions<SendMailMutation, SendMailMutationVariables>;