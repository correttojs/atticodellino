import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
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
  id?: Maybe<Scalars['ID']>;
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
  address?: Maybe<Scalars['String']>;
  displayHome?: Maybe<Scalars['String']>;
  isExpired?: Maybe<Scalars['Boolean']>;
  code?: Maybe<Scalars['String']>;
  airbnbLink?: Maybe<Scalars['String']>;
  mapLink?: Maybe<Scalars['String']>;
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
  hash: Scalars['String'];
};


export type QueryFaqArgs = {
  hash: Scalars['String'];
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}




export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  File: ResolverTypeWrapper<File>;
  String: ResolverTypeWrapper<Scalars['String']>;
  IGuest: never;
  Guest: Guest;
  UserInput: UserInput;
  GuestMail: ResolverTypeWrapper<GuestMail>;
  ReviewType: ResolverTypeWrapper<ReviewType>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Calendar: ResolverTypeWrapper<Calendar>;
  BookInput: BookInput;
  BookResponse: ResolverTypeWrapper<BookResponse>;
  GuestRegistration: ResolverTypeWrapper<GuestRegistration>;
  ReservationStatus: ReservationStatus;
  Reservation: ResolverTypeWrapper<Reservation>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ReservationShort: ResolverTypeWrapper<ReservationShort>;
  Asset: ResolverTypeWrapper<Asset>;
  Faq: ResolverTypeWrapper<Faq>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  CacheControlScope: CacheControlScope;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  File: File;
  String: Scalars['String'];
  IGuest: never;
  Guest: Guest;
  UserInput: UserInput;
  GuestMail: GuestMail;
  ReviewType: ReviewType;
  Int: Scalars['Int'];
  Calendar: Calendar;
  BookInput: BookInput;
  BookResponse: BookResponse;
  GuestRegistration: GuestRegistration;
  Reservation: Reservation;
  ID: Scalars['ID'];
  Boolean: Scalars['Boolean'];
  ReservationShort: ReservationShort;
  Asset: Asset;
  Faq: Faq;
  Mutation: {};
  Query: {};
  Float: Scalars['Float'];
  Upload: Scalars['Upload'];
};

export type CacheControlDirectiveArgs = {   maxAge?: Maybe<Scalars['Int']>;
  scope?: Maybe<CacheControlScope>; };

export type CacheControlDirectiveResolver<Result, Parent, ContextType = any, Args = CacheControlDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type FileResolvers<ContextType = any, ParentType extends ResolversParentTypes['File'] = ResolversParentTypes['File']> = {
  filename?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mimetype?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  encoding?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IGuestResolvers<ContextType = any, ParentType extends ResolversParentTypes['IGuest'] = ResolversParentTypes['IGuest']> = {
  __resolveType: TypeResolveFn<null, ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  documentNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  documentType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  birthDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nationality?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  placeOfBirth?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type GuestMailResolvers<ContextType = any, ParentType extends ResolversParentTypes['GuestMail'] = ResolversParentTypes['GuestMail']> = {
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReviewTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReviewType'] = ResolversParentTypes['ReviewType']> = {
  comments?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  language?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reviewer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CalendarResolvers<ContextType = any, ParentType extends ResolversParentTypes['Calendar'] = ResolversParentTypes['Calendar']> = {
  start?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  end?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BookResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['BookResponse'] = ResolversParentTypes['BookResponse']> = {
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GuestRegistrationResolvers<ContextType = any, ParentType extends ResolversParentTypes['GuestRegistration'] = ResolversParentTypes['GuestRegistration']> = {
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  documentNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  documentType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  birthDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nationality?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  placeOfBirth?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  docFile?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  documentPlace?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReservationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Reservation'] = ResolversParentTypes['Reservation']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  check_in?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  check_out?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  guest_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  home?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  registrationUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  faqUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reservationStatus?: Resolver<Maybe<ResolversTypes['ReservationStatus']>, ParentType, ContextType>;
  guests?: Resolver<Maybe<Array<Maybe<ResolversTypes['GuestRegistration']>>>, ParentType, ContextType>;
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  displayHome?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isExpired?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  airbnbLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mapLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReservationShortResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReservationShort'] = ResolversParentTypes['ReservationShort']> = {
  check_in?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  check_out?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  guest_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  home?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetResolvers<ContextType = any, ParentType extends ResolversParentTypes['Asset'] = ResolversParentTypes['Asset']> = {
  path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mimeType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FaqResolvers<ContextType = any, ParentType extends ResolversParentTypes['Faq'] = ResolversParentTypes['Faq']> = {
  question?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  answerHtml?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  linkVideo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  asset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  book?: Resolver<Maybe<ResolversTypes['BookResponse']>, ParentType, ContextType, RequireFields<MutationBookArgs, never>>;
  registerGuests?: Resolver<Maybe<ResolversTypes['ReservationStatus']>, ParentType, ContextType, RequireFields<MutationRegisterGuestsArgs, 'user' | 'file'>>;
  updateReservationStatus?: Resolver<Maybe<ResolversTypes['ReservationStatus']>, ParentType, ContextType, RequireFields<MutationUpdateReservationStatusArgs, 'id' | 'hash' | 'reservationStatus'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<QueryPriceArgs, 'from' | 'to' | 'airBnb'>>;
  reviews?: Resolver<Maybe<Array<Maybe<ResolversTypes['ReviewType']>>>, ParentType, ContextType, RequireFields<QueryReviewsArgs, 'airBnb'>>;
  calendar?: Resolver<Maybe<Array<Maybe<ResolversTypes['Calendar']>>>, ParentType, ContextType, RequireFields<QueryCalendarArgs, 'apartment'>>;
  syncReservations?: Resolver<Maybe<Array<Maybe<ResolversTypes['Reservation']>>>, ParentType, ContextType>;
  reservations?: Resolver<Maybe<Array<Maybe<ResolversTypes['Reservation']>>>, ParentType, ContextType, RequireFields<QueryReservationsArgs, 'isPast'>>;
  reservation?: Resolver<Maybe<ResolversTypes['Reservation']>, ParentType, ContextType, RequireFields<QueryReservationArgs, 'hash'>>;
  faq?: Resolver<Maybe<Array<Maybe<ResolversTypes['Faq']>>>, ParentType, ContextType, RequireFields<QueryFaqArgs, 'hash'>>;
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type Resolvers<ContextType = any> = {
  File?: FileResolvers<ContextType>;
  IGuest?: IGuestResolvers<ContextType>;
  GuestMail?: GuestMailResolvers<ContextType>;
  ReviewType?: ReviewTypeResolvers<ContextType>;
  Calendar?: CalendarResolvers<ContextType>;
  BookResponse?: BookResponseResolvers<ContextType>;
  GuestRegistration?: GuestRegistrationResolvers<ContextType>;
  Reservation?: ReservationResolvers<ContextType>;
  ReservationShort?: ReservationShortResolvers<ContextType>;
  Asset?: AssetResolvers<ContextType>;
  Faq?: FaqResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Upload?: GraphQLScalarType;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = any> = {
  cacheControl?: CacheControlDirectiveResolver<any, any, ContextType>;
};


/**
 * @deprecated
 * Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
 */
export type IDirectiveResolvers<ContextType = any> = DirectiveResolvers<ContextType>;