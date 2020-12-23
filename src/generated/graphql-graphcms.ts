import { GraphQLClient } from 'graphql-request';
import { print } from 'graphql';
import gql from 'graphql-tag';
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
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: any;
  Hex: any;
  /** Raw JSON value */
  Json: any;
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
  RGBAHue: any;
  RGBATransparency: any;
  /** Slate-compatible RichText AST */
  RichTextAST: any;
};





export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int'];
};

export type Apartment = Node & {
  __typename?: 'Apartment';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Apartment>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  enterCode?: Maybe<Scalars['String']>;
  /** List of Apartment versions */
  history: Array<Version>;
};


export type ApartmentDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type ApartmentHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

/** A connection to a list of items. */
export type ApartmentConnection = {
  __typename?: 'ApartmentConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<ApartmentEdge>;
  aggregate: Aggregate;
};

export type ApartmentCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  enterCode?: Maybe<Scalars['String']>;
};

/** An edge in a connection. */
export type ApartmentEdge = {
  __typename?: 'ApartmentEdge';
  /** The item at the end of the edge. */
  node: Apartment;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type ApartmentManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ApartmentWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ApartmentWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ApartmentWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  code_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  code_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  code_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  code_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  code_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  code_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  code_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  code_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  code_not_ends_with?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  enterCode?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  enterCode_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  enterCode_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  enterCode_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  enterCode_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  enterCode_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  enterCode_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  enterCode_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  enterCode_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  enterCode_not_ends_with?: Maybe<Scalars['String']>;
};

export enum ApartmentOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  CodeAsc = 'code_ASC',
  CodeDesc = 'code_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  EnterCodeAsc = 'enterCode_ASC',
  EnterCodeDesc = 'enterCode_DESC'
}

export type ApartmentUpdateInput = {
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  enterCode?: Maybe<Scalars['String']>;
};

export type ApartmentUpdateManyInput = {
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  enterCode?: Maybe<Scalars['String']>;
};

export type ApartmentUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: ApartmentWhereInput;
  /** Update many input */
  data: ApartmentUpdateManyInput;
};

export type ApartmentUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ApartmentWhereUniqueInput;
  /** Document to update */
  data: ApartmentUpdateInput;
};

export type ApartmentUpsertInput = {
  /** Create document if it didn't exist */
  create: ApartmentCreateInput;
  /** Update document if it exists */
  update: ApartmentUpdateInput;
};

export type ApartmentUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ApartmentWhereUniqueInput;
  /** Upsert data */
  data: ApartmentUpsertInput;
};

/** Identifies documents */
export type ApartmentWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ApartmentWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ApartmentWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ApartmentWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  code_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  code_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  code_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  code_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  code_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  code_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  code_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  code_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  code_not_ends_with?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  enterCode?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  enterCode_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  enterCode_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  enterCode_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  enterCode_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  enterCode_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  enterCode_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  enterCode_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  enterCode_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  enterCode_not_ends_with?: Maybe<Scalars['String']>;
};

/** References Apartment record uniquely */
export type ApartmentWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

/** Asset system model */
export type Asset = Node & {
  __typename?: 'Asset';
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** The file handle */
  handle: Scalars['String'];
  /** The file name */
  fileName: Scalars['String'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']>;
  /** The file width */
  width?: Maybe<Scalars['Float']>;
  /** The file size */
  size?: Maybe<Scalars['Float']>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>;
  /** List of Asset versions */
  history: Array<Version>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'];
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  locales?: Array<Locale>;
  includeCurrent?: Scalars['Boolean'];
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: Maybe<AssetTransformationInput>;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  aggregate: Aggregate;
};

export type AssetCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<AssetCreateLocalizationsInput>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<AssetCreateLocalizationInput>>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** The item at the end of the edge. */
  node: Asset;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
};

export enum AssetOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC'
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  image?: Maybe<ImageTransformationInput>;
  document?: Maybe<DocumentTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: Maybe<Scalars['Boolean']>;
};

export type AssetUpdateInput = {
  handle?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  /** Manage document localizations */
  localizations?: Maybe<AssetUpdateLocalizationsInput>;
};

export type AssetUpdateLocalizationDataInput = {
  handle?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: Maybe<Array<AssetUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
};

export type AssetUpdateManyInput = {
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: Maybe<AssetUpdateManyLocalizationsInput>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: AssetWhereInput;
  /** Update many input */
  data: AssetUpdateManyInput;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AssetWhereUniqueInput;
  /** Document to update */
  data: AssetUpdateInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  update: AssetUpdateLocalizationDataInput;
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AssetWhereUniqueInput;
  /** Upsert data */
  data: AssetUpsertInput;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  handle?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  handle_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  handle_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  handle_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  fileName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fileName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  fileName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  fileName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  fileName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  fileName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  fileName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  height_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  height_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  height_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  width_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  width_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  width_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  width_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  width_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  width_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  width_gte?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  size_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  size_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  size_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  size_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  size_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  size_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  size_gte?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  mimeType_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mimeType_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  mimeType_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: Maybe<Scalars['String']>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  hex: Scalars['Hex'];
  rgba: Rgba;
  css: Scalars['String'];
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: Maybe<Scalars['Hex']>;
  rgba?: Maybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: Maybe<Scalars['ID']>;
  /** Connect document before specified document */
  before?: Maybe<Scalars['ID']>;
  /** Connect document at first position */
  start?: Maybe<Scalars['Boolean']>;
  /** Connect document at last position */
  end?: Maybe<Scalars['Boolean']>;
};



export enum DocumentFileTypes {
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Png = 'png',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Docx = 'docx',
  Pdf = 'pdf',
  Html = 'html',
  Doc = 'doc',
  Xlsx = 'xlsx',
  Xls = 'xls',
  Pptx = 'pptx',
  Ppt = 'ppt'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   * 
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: Maybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: Maybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  data?: Maybe<Scalars['Json']>;
};

export type Guest = Node & {
  __typename?: 'Guest';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Guest>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  birthDate?: Maybe<Scalars['Date']>;
  documentNumber?: Maybe<Scalars['String']>;
  documentType?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  nationality?: Maybe<Scalars['String']>;
  placeOfBirth?: Maybe<Scalars['String']>;
  reservation?: Maybe<Reservation>;
  documentPlace?: Maybe<Scalars['String']>;
  docFile?: Maybe<Scalars['String']>;
  /** List of Guest versions */
  history: Array<Version>;
};


export type GuestDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type GuestReservationArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type GuestHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type GuestConnectInput = {
  /** Document to connect */
  where: GuestWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type GuestConnection = {
  __typename?: 'GuestConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<GuestEdge>;
  aggregate: Aggregate;
};

export type GuestCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  birthDate?: Maybe<Scalars['Date']>;
  documentNumber?: Maybe<Scalars['String']>;
  documentType?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  nationality?: Maybe<Scalars['String']>;
  placeOfBirth?: Maybe<Scalars['String']>;
  reservation?: Maybe<ReservationCreateOneInlineInput>;
  documentPlace?: Maybe<Scalars['String']>;
  docFile?: Maybe<Scalars['String']>;
};

export type GuestCreateManyInlineInput = {
  /** Create and connect multiple existing Guest documents */
  create?: Maybe<Array<GuestCreateInput>>;
  /** Connect multiple existing Guest documents */
  connect?: Maybe<Array<GuestWhereUniqueInput>>;
};

export type GuestCreateOneInlineInput = {
  /** Create and connect one Guest document */
  create?: Maybe<GuestCreateInput>;
  /** Connect one existing Guest document */
  connect?: Maybe<GuestWhereUniqueInput>;
};

/** An edge in a connection. */
export type GuestEdge = {
  __typename?: 'GuestEdge';
  /** The item at the end of the edge. */
  node: Guest;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type GuestManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GuestWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GuestWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GuestWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  birthDate?: Maybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  birthDate_not?: Maybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  birthDate_in?: Maybe<Array<Scalars['Date']>>;
  /** All values that are not contained in given list. */
  birthDate_not_in?: Maybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  birthDate_lt?: Maybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  birthDate_lte?: Maybe<Scalars['Date']>;
  /** All values greater than the given value. */
  birthDate_gt?: Maybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  birthDate_gte?: Maybe<Scalars['Date']>;
  documentNumber?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  documentNumber_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  documentNumber_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  documentNumber_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  documentNumber_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  documentNumber_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  documentNumber_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  documentNumber_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  documentNumber_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  documentNumber_not_ends_with?: Maybe<Scalars['String']>;
  documentType?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  documentType_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  documentType_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  documentType_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  documentType_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  documentType_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  documentType_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  documentType_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  documentType_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  documentType_not_ends_with?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  firstName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  firstName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  firstName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  firstName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  firstName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  firstName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  firstName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  firstName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  firstName_not_ends_with?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  lastName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  lastName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  lastName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  lastName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  lastName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  lastName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  lastName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  lastName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  lastName_not_ends_with?: Maybe<Scalars['String']>;
  nationality?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  nationality_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  nationality_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  nationality_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  nationality_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  nationality_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  nationality_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  nationality_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  nationality_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  nationality_not_ends_with?: Maybe<Scalars['String']>;
  placeOfBirth?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  placeOfBirth_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  placeOfBirth_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  placeOfBirth_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  placeOfBirth_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  placeOfBirth_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  placeOfBirth_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  placeOfBirth_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  placeOfBirth_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  placeOfBirth_not_ends_with?: Maybe<Scalars['String']>;
  reservation?: Maybe<ReservationWhereInput>;
  documentPlace?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  documentPlace_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  documentPlace_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  documentPlace_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  documentPlace_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  documentPlace_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  documentPlace_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  documentPlace_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  documentPlace_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  documentPlace_not_ends_with?: Maybe<Scalars['String']>;
  docFile?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  docFile_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  docFile_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  docFile_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  docFile_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  docFile_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  docFile_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  docFile_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  docFile_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  docFile_not_ends_with?: Maybe<Scalars['String']>;
};

export enum GuestOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  BirthDateAsc = 'birthDate_ASC',
  BirthDateDesc = 'birthDate_DESC',
  DocumentNumberAsc = 'documentNumber_ASC',
  DocumentNumberDesc = 'documentNumber_DESC',
  DocumentTypeAsc = 'documentType_ASC',
  DocumentTypeDesc = 'documentType_DESC',
  FirstNameAsc = 'firstName_ASC',
  FirstNameDesc = 'firstName_DESC',
  LastNameAsc = 'lastName_ASC',
  LastNameDesc = 'lastName_DESC',
  NationalityAsc = 'nationality_ASC',
  NationalityDesc = 'nationality_DESC',
  PlaceOfBirthAsc = 'placeOfBirth_ASC',
  PlaceOfBirthDesc = 'placeOfBirth_DESC',
  DocumentPlaceAsc = 'documentPlace_ASC',
  DocumentPlaceDesc = 'documentPlace_DESC',
  DocFileAsc = 'docFile_ASC',
  DocFileDesc = 'docFile_DESC'
}

/** Guest Status */
export enum GuestStatus {
  LinkSent = 'link_sent',
  New = 'new',
  Registered = 'registered'
}

export type GuestUpdateInput = {
  birthDate?: Maybe<Scalars['Date']>;
  documentNumber?: Maybe<Scalars['String']>;
  documentType?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  nationality?: Maybe<Scalars['String']>;
  placeOfBirth?: Maybe<Scalars['String']>;
  reservation?: Maybe<ReservationUpdateOneInlineInput>;
  documentPlace?: Maybe<Scalars['String']>;
  docFile?: Maybe<Scalars['String']>;
};

export type GuestUpdateManyInlineInput = {
  /** Create and connect multiple Guest documents */
  create?: Maybe<Array<GuestCreateInput>>;
  /** Connect multiple existing Guest documents */
  connect?: Maybe<Array<GuestConnectInput>>;
  /** Override currently-connected documents with multiple existing Guest documents */
  set?: Maybe<Array<GuestWhereUniqueInput>>;
  /** Update multiple Guest documents */
  update?: Maybe<Array<GuestUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Guest documents */
  upsert?: Maybe<Array<GuestUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Guest documents */
  disconnect?: Maybe<Array<GuestWhereUniqueInput>>;
  /** Delete multiple Guest documents */
  delete?: Maybe<Array<GuestWhereUniqueInput>>;
};

export type GuestUpdateManyInput = {
  birthDate?: Maybe<Scalars['Date']>;
  documentNumber?: Maybe<Scalars['String']>;
  documentType?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  nationality?: Maybe<Scalars['String']>;
  placeOfBirth?: Maybe<Scalars['String']>;
  documentPlace?: Maybe<Scalars['String']>;
  docFile?: Maybe<Scalars['String']>;
};

export type GuestUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: GuestWhereInput;
  /** Update many input */
  data: GuestUpdateManyInput;
};

export type GuestUpdateOneInlineInput = {
  /** Create and connect one Guest document */
  create?: Maybe<GuestCreateInput>;
  /** Update single Guest document */
  update?: Maybe<GuestUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Guest document */
  upsert?: Maybe<GuestUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Guest document */
  connect?: Maybe<GuestWhereUniqueInput>;
  /** Disconnect currently connected Guest document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Guest document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type GuestUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GuestWhereUniqueInput;
  /** Document to update */
  data: GuestUpdateInput;
};

export type GuestUpsertInput = {
  /** Create document if it didn't exist */
  create: GuestCreateInput;
  /** Update document if it exists */
  update: GuestUpdateInput;
};

export type GuestUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GuestWhereUniqueInput;
  /** Upsert data */
  data: GuestUpsertInput;
};

/** Identifies documents */
export type GuestWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GuestWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GuestWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GuestWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  birthDate?: Maybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  birthDate_not?: Maybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  birthDate_in?: Maybe<Array<Scalars['Date']>>;
  /** All values that are not contained in given list. */
  birthDate_not_in?: Maybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  birthDate_lt?: Maybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  birthDate_lte?: Maybe<Scalars['Date']>;
  /** All values greater than the given value. */
  birthDate_gt?: Maybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  birthDate_gte?: Maybe<Scalars['Date']>;
  documentNumber?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  documentNumber_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  documentNumber_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  documentNumber_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  documentNumber_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  documentNumber_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  documentNumber_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  documentNumber_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  documentNumber_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  documentNumber_not_ends_with?: Maybe<Scalars['String']>;
  documentType?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  documentType_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  documentType_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  documentType_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  documentType_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  documentType_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  documentType_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  documentType_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  documentType_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  documentType_not_ends_with?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  firstName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  firstName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  firstName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  firstName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  firstName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  firstName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  firstName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  firstName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  firstName_not_ends_with?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  lastName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  lastName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  lastName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  lastName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  lastName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  lastName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  lastName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  lastName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  lastName_not_ends_with?: Maybe<Scalars['String']>;
  nationality?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  nationality_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  nationality_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  nationality_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  nationality_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  nationality_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  nationality_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  nationality_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  nationality_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  nationality_not_ends_with?: Maybe<Scalars['String']>;
  placeOfBirth?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  placeOfBirth_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  placeOfBirth_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  placeOfBirth_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  placeOfBirth_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  placeOfBirth_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  placeOfBirth_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  placeOfBirth_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  placeOfBirth_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  placeOfBirth_not_ends_with?: Maybe<Scalars['String']>;
  reservation?: Maybe<ReservationWhereInput>;
  documentPlace?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  documentPlace_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  documentPlace_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  documentPlace_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  documentPlace_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  documentPlace_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  documentPlace_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  documentPlace_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  documentPlace_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  documentPlace_not_ends_with?: Maybe<Scalars['String']>;
  docFile?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  docFile_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  docFile_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  docFile_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  docFile_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  docFile_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  docFile_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  docFile_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  docFile_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  docFile_not_ends_with?: Maybe<Scalars['String']>;
};

/** References Guest record uniquely */
export type GuestWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};


export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max'
}

export type ImageResizeInput = {
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: Maybe<Scalars['Int']>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: Maybe<Scalars['Int']>;
  /** The default value for the fit parameter is fit:clip. */
  fit?: Maybe<ImageFit>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: Maybe<ImageResizeInput>;
};


/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en',
  It = 'it'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  distance: Scalars['Float'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};


export type Mutation = {
  __typename?: 'Mutation';
  /** Create one apartment */
  createApartment?: Maybe<Apartment>;
  /** Update one apartment */
  updateApartment?: Maybe<Apartment>;
  /** Delete one apartment from _all_ existing stages. Returns deleted document. */
  deleteApartment?: Maybe<Apartment>;
  /** Upsert one apartment */
  upsertApartment?: Maybe<Apartment>;
  /** Publish one apartment */
  publishApartment?: Maybe<Apartment>;
  /** Unpublish one apartment from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishApartment?: Maybe<Apartment>;
  /** Update many Apartment documents */
  updateManyApartmentsConnection: ApartmentConnection;
  /** Delete many Apartment documents, return deleted documents */
  deleteManyApartmentsConnection: ApartmentConnection;
  /** Publish many Apartment documents */
  publishManyApartmentsConnection: ApartmentConnection;
  /** Find many Apartment documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyApartmentsConnection: ApartmentConnection;
  /**
   * Update many apartments
   * @deprecated Please use the new paginated many mutation (updateManyApartmentsConnection)
   */
  updateManyApartments: BatchPayload;
  /**
   * Delete many Apartment documents
   * @deprecated Please use the new paginated many mutation (deleteManyApartmentsConnection)
   */
  deleteManyApartments: BatchPayload;
  /**
   * Publish many Apartment documents
   * @deprecated Please use the new paginated many mutation (publishManyApartmentsConnection)
   */
  publishManyApartments: BatchPayload;
  /**
   * Unpublish many Apartment documents
   * @deprecated Please use the new paginated many mutation (unpublishManyApartmentsConnection)
   */
  unpublishManyApartments: BatchPayload;
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Create one guest */
  createGuest?: Maybe<Guest>;
  /** Update one guest */
  updateGuest?: Maybe<Guest>;
  /** Delete one guest from _all_ existing stages. Returns deleted document. */
  deleteGuest?: Maybe<Guest>;
  /** Upsert one guest */
  upsertGuest?: Maybe<Guest>;
  /** Publish one guest */
  publishGuest?: Maybe<Guest>;
  /** Unpublish one guest from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishGuest?: Maybe<Guest>;
  /** Update many Guest documents */
  updateManyGuestsConnection: GuestConnection;
  /** Delete many Guest documents, return deleted documents */
  deleteManyGuestsConnection: GuestConnection;
  /** Publish many Guest documents */
  publishManyGuestsConnection: GuestConnection;
  /** Find many Guest documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyGuestsConnection: GuestConnection;
  /**
   * Update many guests
   * @deprecated Please use the new paginated many mutation (updateManyGuestsConnection)
   */
  updateManyGuests: BatchPayload;
  /**
   * Delete many Guest documents
   * @deprecated Please use the new paginated many mutation (deleteManyGuestsConnection)
   */
  deleteManyGuests: BatchPayload;
  /**
   * Publish many Guest documents
   * @deprecated Please use the new paginated many mutation (publishManyGuestsConnection)
   */
  publishManyGuests: BatchPayload;
  /**
   * Unpublish many Guest documents
   * @deprecated Please use the new paginated many mutation (unpublishManyGuestsConnection)
   */
  unpublishManyGuests: BatchPayload;
  /** Create one reservation */
  createReservation?: Maybe<Reservation>;
  /** Update one reservation */
  updateReservation?: Maybe<Reservation>;
  /** Delete one reservation from _all_ existing stages. Returns deleted document. */
  deleteReservation?: Maybe<Reservation>;
  /** Upsert one reservation */
  upsertReservation?: Maybe<Reservation>;
  /** Publish one reservation */
  publishReservation?: Maybe<Reservation>;
  /** Unpublish one reservation from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishReservation?: Maybe<Reservation>;
  /** Update many Reservation documents */
  updateManyReservationsConnection: ReservationConnection;
  /** Delete many Reservation documents, return deleted documents */
  deleteManyReservationsConnection: ReservationConnection;
  /** Publish many Reservation documents */
  publishManyReservationsConnection: ReservationConnection;
  /** Find many Reservation documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyReservationsConnection: ReservationConnection;
  /**
   * Update many reservations
   * @deprecated Please use the new paginated many mutation (updateManyReservationsConnection)
   */
  updateManyReservations: BatchPayload;
  /**
   * Delete many Reservation documents
   * @deprecated Please use the new paginated many mutation (deleteManyReservationsConnection)
   */
  deleteManyReservations: BatchPayload;
  /**
   * Publish many Reservation documents
   * @deprecated Please use the new paginated many mutation (publishManyReservationsConnection)
   */
  publishManyReservations: BatchPayload;
  /**
   * Unpublish many Reservation documents
   * @deprecated Please use the new paginated many mutation (unpublishManyReservationsConnection)
   */
  unpublishManyReservations: BatchPayload;
  /** Create one token */
  createToken?: Maybe<Token>;
  /** Update one token */
  updateToken?: Maybe<Token>;
  /** Delete one token from _all_ existing stages. Returns deleted document. */
  deleteToken?: Maybe<Token>;
  /** Upsert one token */
  upsertToken?: Maybe<Token>;
  /** Publish one token */
  publishToken?: Maybe<Token>;
  /** Unpublish one token from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishToken?: Maybe<Token>;
  /** Update many Token documents */
  updateManyTokensConnection: TokenConnection;
  /** Delete many Token documents, return deleted documents */
  deleteManyTokensConnection: TokenConnection;
  /** Publish many Token documents */
  publishManyTokensConnection: TokenConnection;
  /** Find many Token documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyTokensConnection: TokenConnection;
  /**
   * Update many tokens
   * @deprecated Please use the new paginated many mutation (updateManyTokensConnection)
   */
  updateManyTokens: BatchPayload;
  /**
   * Delete many Token documents
   * @deprecated Please use the new paginated many mutation (deleteManyTokensConnection)
   */
  deleteManyTokens: BatchPayload;
  /**
   * Publish many Token documents
   * @deprecated Please use the new paginated many mutation (publishManyTokensConnection)
   */
  publishManyTokens: BatchPayload;
  /**
   * Unpublish many Token documents
   * @deprecated Please use the new paginated many mutation (unpublishManyTokensConnection)
   */
  unpublishManyTokens: BatchPayload;
};


export type MutationCreateApartmentArgs = {
  data: ApartmentCreateInput;
};


export type MutationUpdateApartmentArgs = {
  where: ApartmentWhereUniqueInput;
  data: ApartmentUpdateInput;
};


export type MutationDeleteApartmentArgs = {
  where: ApartmentWhereUniqueInput;
};


export type MutationUpsertApartmentArgs = {
  where: ApartmentWhereUniqueInput;
  upsert: ApartmentUpsertInput;
};


export type MutationPublishApartmentArgs = {
  where: ApartmentWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishApartmentArgs = {
  where: ApartmentWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyApartmentsConnectionArgs = {
  where?: Maybe<ApartmentManyWhereInput>;
  data: ApartmentUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyApartmentsConnectionArgs = {
  where?: Maybe<ApartmentManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyApartmentsConnectionArgs = {
  where?: Maybe<ApartmentManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyApartmentsConnectionArgs = {
  where?: Maybe<ApartmentManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyApartmentsArgs = {
  where?: Maybe<ApartmentManyWhereInput>;
  data: ApartmentUpdateManyInput;
};


export type MutationDeleteManyApartmentsArgs = {
  where?: Maybe<ApartmentManyWhereInput>;
};


export type MutationPublishManyApartmentsArgs = {
  where?: Maybe<ApartmentManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyApartmentsArgs = {
  where?: Maybe<ApartmentManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationUpdateAssetArgs = {
  where: AssetWhereUniqueInput;
  data: AssetUpdateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  where: AssetWhereUniqueInput;
  upsert: AssetUpsertInput;
};


export type MutationPublishAssetArgs = {
  where: AssetWhereUniqueInput;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
};


export type MutationUnpublishAssetArgs = {
  where: AssetWhereUniqueInput;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  data: AssetUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  data: AssetUpdateManyInput;
};


export type MutationDeleteManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
};


export type MutationPublishManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  to?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateGuestArgs = {
  data: GuestCreateInput;
};


export type MutationUpdateGuestArgs = {
  where: GuestWhereUniqueInput;
  data: GuestUpdateInput;
};


export type MutationDeleteGuestArgs = {
  where: GuestWhereUniqueInput;
};


export type MutationUpsertGuestArgs = {
  where: GuestWhereUniqueInput;
  upsert: GuestUpsertInput;
};


export type MutationPublishGuestArgs = {
  where: GuestWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishGuestArgs = {
  where: GuestWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyGuestsConnectionArgs = {
  where?: Maybe<GuestManyWhereInput>;
  data: GuestUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyGuestsConnectionArgs = {
  where?: Maybe<GuestManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyGuestsConnectionArgs = {
  where?: Maybe<GuestManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyGuestsConnectionArgs = {
  where?: Maybe<GuestManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyGuestsArgs = {
  where?: Maybe<GuestManyWhereInput>;
  data: GuestUpdateManyInput;
};


export type MutationDeleteManyGuestsArgs = {
  where?: Maybe<GuestManyWhereInput>;
};


export type MutationPublishManyGuestsArgs = {
  where?: Maybe<GuestManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyGuestsArgs = {
  where?: Maybe<GuestManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreateReservationArgs = {
  data: ReservationCreateInput;
};


export type MutationUpdateReservationArgs = {
  where: ReservationWhereUniqueInput;
  data: ReservationUpdateInput;
};


export type MutationDeleteReservationArgs = {
  where: ReservationWhereUniqueInput;
};


export type MutationUpsertReservationArgs = {
  where: ReservationWhereUniqueInput;
  upsert: ReservationUpsertInput;
};


export type MutationPublishReservationArgs = {
  where: ReservationWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishReservationArgs = {
  where: ReservationWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyReservationsConnectionArgs = {
  where?: Maybe<ReservationManyWhereInput>;
  data: ReservationUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyReservationsConnectionArgs = {
  where?: Maybe<ReservationManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyReservationsConnectionArgs = {
  where?: Maybe<ReservationManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyReservationsConnectionArgs = {
  where?: Maybe<ReservationManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyReservationsArgs = {
  where?: Maybe<ReservationManyWhereInput>;
  data: ReservationUpdateManyInput;
};


export type MutationDeleteManyReservationsArgs = {
  where?: Maybe<ReservationManyWhereInput>;
};


export type MutationPublishManyReservationsArgs = {
  where?: Maybe<ReservationManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyReservationsArgs = {
  where?: Maybe<ReservationManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreateTokenArgs = {
  data: TokenCreateInput;
};


export type MutationUpdateTokenArgs = {
  where: TokenWhereUniqueInput;
  data: TokenUpdateInput;
};


export type MutationDeleteTokenArgs = {
  where: TokenWhereUniqueInput;
};


export type MutationUpsertTokenArgs = {
  where: TokenWhereUniqueInput;
  upsert: TokenUpsertInput;
};


export type MutationPublishTokenArgs = {
  where: TokenWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishTokenArgs = {
  where: TokenWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyTokensConnectionArgs = {
  where?: Maybe<TokenManyWhereInput>;
  data: TokenUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyTokensConnectionArgs = {
  where?: Maybe<TokenManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyTokensConnectionArgs = {
  where?: Maybe<TokenManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyTokensConnectionArgs = {
  where?: Maybe<TokenManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyTokensArgs = {
  where?: Maybe<TokenManyWhereInput>;
  data: TokenUpdateManyInput;
};


export type MutationDeleteManyTokensArgs = {
  where?: Maybe<TokenManyWhereInput>;
};


export type MutationPublishManyTokensArgs = {
  where?: Maybe<TokenManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyTokensArgs = {
  where?: Maybe<TokenManyWhereInput>;
  from?: Array<Stage>;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The Stage of an object */
  stage: Stage;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: 'Query';
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve multiple apartments */
  apartments: Array<Apartment>;
  /** Retrieve a single apartment */
  apartment?: Maybe<Apartment>;
  /** Retrieve multiple apartments using the Relay connection interface */
  apartmentsConnection: ApartmentConnection;
  /** Retrieve document version */
  apartmentVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple guests */
  guests: Array<Guest>;
  /** Retrieve a single guest */
  guest?: Maybe<Guest>;
  /** Retrieve multiple guests using the Relay connection interface */
  guestsConnection: GuestConnection;
  /** Retrieve document version */
  guestVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple reservations */
  reservations: Array<Reservation>;
  /** Retrieve a single reservation */
  reservation?: Maybe<Reservation>;
  /** Retrieve multiple reservations using the Relay connection interface */
  reservationsConnection: ReservationConnection;
  /** Retrieve document version */
  reservationVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple tokens */
  tokens: Array<Token>;
  /** Retrieve a single token */
  token?: Maybe<Token>;
  /** Retrieve multiple tokens using the Relay connection interface */
  tokensConnection: TokenConnection;
  /** Retrieve document version */
  tokenVersion?: Maybe<DocumentVersion>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryApartmentsArgs = {
  where?: Maybe<ApartmentWhereInput>;
  orderBy?: Maybe<ApartmentOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryApartmentArgs = {
  where: ApartmentWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryApartmentsConnectionArgs = {
  where?: Maybe<ApartmentWhereInput>;
  orderBy?: Maybe<ApartmentOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryApartmentVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAssetsArgs = {
  where?: Maybe<AssetWhereInput>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetArgs = {
  where: AssetWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetsConnectionArgs = {
  where?: Maybe<AssetWhereInput>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryGuestsArgs = {
  where?: Maybe<GuestWhereInput>;
  orderBy?: Maybe<GuestOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryGuestArgs = {
  where: GuestWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryGuestsConnectionArgs = {
  where?: Maybe<GuestWhereInput>;
  orderBy?: Maybe<GuestOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryGuestVersionArgs = {
  where: VersionWhereInput;
};


export type QueryReservationsArgs = {
  where?: Maybe<ReservationWhereInput>;
  orderBy?: Maybe<ReservationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryReservationArgs = {
  where: ReservationWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryReservationsConnectionArgs = {
  where?: Maybe<ReservationWhereInput>;
  orderBy?: Maybe<ReservationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryReservationVersionArgs = {
  where: VersionWhereInput;
};


export type QueryTokensArgs = {
  where?: Maybe<TokenWhereInput>;
  orderBy?: Maybe<TokenOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryTokenArgs = {
  where: TokenWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryTokensConnectionArgs = {
  where?: Maybe<TokenWhereInput>;
  orderBy?: Maybe<TokenOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryTokenVersionArgs = {
  where: VersionWhereInput;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  r: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  b: Scalars['RGBAHue'];
  a: Scalars['RGBATransparency'];
};


/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  r: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  b: Scalars['RGBAHue'];
  a: Scalars['RGBATransparency'];
};


export type Reservation = Node & {
  __typename?: 'Reservation';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Reservation>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  guest_name?: Maybe<Scalars['String']>;
  check_out?: Maybe<Scalars['Date']>;
  check_in?: Maybe<Scalars['Date']>;
  phone?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  home?: Maybe<Scalars['String']>;
  guests: Array<Guest>;
  reservationStatus?: Maybe<GuestStatus>;
  /** List of Reservation versions */
  history: Array<Version>;
};


export type ReservationDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type ReservationGuestsArgs = {
  where?: Maybe<GuestWhereInput>;
  orderBy?: Maybe<GuestOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


export type ReservationHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type ReservationConnectInput = {
  /** Document to connect */
  where: ReservationWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type ReservationConnection = {
  __typename?: 'ReservationConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<ReservationEdge>;
  aggregate: Aggregate;
};

export type ReservationCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  guest_name?: Maybe<Scalars['String']>;
  check_out?: Maybe<Scalars['Date']>;
  check_in?: Maybe<Scalars['Date']>;
  phone?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  home?: Maybe<Scalars['String']>;
  guests?: Maybe<GuestCreateManyInlineInput>;
  reservationStatus?: Maybe<GuestStatus>;
};

export type ReservationCreateManyInlineInput = {
  /** Create and connect multiple existing Reservation documents */
  create?: Maybe<Array<ReservationCreateInput>>;
  /** Connect multiple existing Reservation documents */
  connect?: Maybe<Array<ReservationWhereUniqueInput>>;
};

export type ReservationCreateOneInlineInput = {
  /** Create and connect one Reservation document */
  create?: Maybe<ReservationCreateInput>;
  /** Connect one existing Reservation document */
  connect?: Maybe<ReservationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ReservationEdge = {
  __typename?: 'ReservationEdge';
  /** The item at the end of the edge. */
  node: Reservation;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type ReservationManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ReservationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ReservationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ReservationWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  guest_name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  guest_name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  guest_name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  guest_name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  guest_name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  guest_name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  guest_name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  guest_name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  guest_name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  guest_name_not_ends_with?: Maybe<Scalars['String']>;
  check_out?: Maybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  check_out_not?: Maybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  check_out_in?: Maybe<Array<Scalars['Date']>>;
  /** All values that are not contained in given list. */
  check_out_not_in?: Maybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  check_out_lt?: Maybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  check_out_lte?: Maybe<Scalars['Date']>;
  /** All values greater than the given value. */
  check_out_gt?: Maybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  check_out_gte?: Maybe<Scalars['Date']>;
  check_in?: Maybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  check_in_not?: Maybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  check_in_in?: Maybe<Array<Scalars['Date']>>;
  /** All values that are not contained in given list. */
  check_in_not_in?: Maybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  check_in_lt?: Maybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  check_in_lte?: Maybe<Scalars['Date']>;
  /** All values greater than the given value. */
  check_in_gt?: Maybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  check_in_gte?: Maybe<Scalars['Date']>;
  phone?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  phone_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  phone_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  phone_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  phone_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  phone_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  phone_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  phone_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  phone_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  phone_not_ends_with?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  hash_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  hash_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  hash_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  hash_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  hash_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  hash_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  hash_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  hash_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  hash_not_ends_with?: Maybe<Scalars['String']>;
  home?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  home_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  home_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  home_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  home_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  home_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  home_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  home_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  home_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  home_not_ends_with?: Maybe<Scalars['String']>;
  guests_every?: Maybe<GuestWhereInput>;
  guests_some?: Maybe<GuestWhereInput>;
  guests_none?: Maybe<GuestWhereInput>;
  reservationStatus?: Maybe<GuestStatus>;
  /** All values that are not equal to given value. */
  reservationStatus_not?: Maybe<GuestStatus>;
  /** All values that are contained in given list. */
  reservationStatus_in?: Maybe<Array<GuestStatus>>;
  /** All values that are not contained in given list. */
  reservationStatus_not_in?: Maybe<Array<GuestStatus>>;
};

export enum ReservationOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  GuestNameAsc = 'guest_name_ASC',
  GuestNameDesc = 'guest_name_DESC',
  CheckOutAsc = 'check_out_ASC',
  CheckOutDesc = 'check_out_DESC',
  CheckInAsc = 'check_in_ASC',
  CheckInDesc = 'check_in_DESC',
  PhoneAsc = 'phone_ASC',
  PhoneDesc = 'phone_DESC',
  HashAsc = 'hash_ASC',
  HashDesc = 'hash_DESC',
  HomeAsc = 'home_ASC',
  HomeDesc = 'home_DESC',
  ReservationStatusAsc = 'reservationStatus_ASC',
  ReservationStatusDesc = 'reservationStatus_DESC'
}

export type ReservationUpdateInput = {
  guest_name?: Maybe<Scalars['String']>;
  check_out?: Maybe<Scalars['Date']>;
  check_in?: Maybe<Scalars['Date']>;
  phone?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  home?: Maybe<Scalars['String']>;
  guests?: Maybe<GuestUpdateManyInlineInput>;
  reservationStatus?: Maybe<GuestStatus>;
};

export type ReservationUpdateManyInlineInput = {
  /** Create and connect multiple Reservation documents */
  create?: Maybe<Array<ReservationCreateInput>>;
  /** Connect multiple existing Reservation documents */
  connect?: Maybe<Array<ReservationConnectInput>>;
  /** Override currently-connected documents with multiple existing Reservation documents */
  set?: Maybe<Array<ReservationWhereUniqueInput>>;
  /** Update multiple Reservation documents */
  update?: Maybe<Array<ReservationUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Reservation documents */
  upsert?: Maybe<Array<ReservationUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Reservation documents */
  disconnect?: Maybe<Array<ReservationWhereUniqueInput>>;
  /** Delete multiple Reservation documents */
  delete?: Maybe<Array<ReservationWhereUniqueInput>>;
};

export type ReservationUpdateManyInput = {
  guest_name?: Maybe<Scalars['String']>;
  check_out?: Maybe<Scalars['Date']>;
  check_in?: Maybe<Scalars['Date']>;
  phone?: Maybe<Scalars['String']>;
  home?: Maybe<Scalars['String']>;
  reservationStatus?: Maybe<GuestStatus>;
};

export type ReservationUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: ReservationWhereInput;
  /** Update many input */
  data: ReservationUpdateManyInput;
};

export type ReservationUpdateOneInlineInput = {
  /** Create and connect one Reservation document */
  create?: Maybe<ReservationCreateInput>;
  /** Update single Reservation document */
  update?: Maybe<ReservationUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Reservation document */
  upsert?: Maybe<ReservationUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Reservation document */
  connect?: Maybe<ReservationWhereUniqueInput>;
  /** Disconnect currently connected Reservation document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Reservation document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type ReservationUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ReservationWhereUniqueInput;
  /** Document to update */
  data: ReservationUpdateInput;
};

export type ReservationUpsertInput = {
  /** Create document if it didn't exist */
  create: ReservationCreateInput;
  /** Update document if it exists */
  update: ReservationUpdateInput;
};

export type ReservationUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ReservationWhereUniqueInput;
  /** Upsert data */
  data: ReservationUpsertInput;
};

/** Identifies documents */
export type ReservationWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ReservationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ReservationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ReservationWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  guest_name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  guest_name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  guest_name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  guest_name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  guest_name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  guest_name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  guest_name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  guest_name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  guest_name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  guest_name_not_ends_with?: Maybe<Scalars['String']>;
  check_out?: Maybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  check_out_not?: Maybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  check_out_in?: Maybe<Array<Scalars['Date']>>;
  /** All values that are not contained in given list. */
  check_out_not_in?: Maybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  check_out_lt?: Maybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  check_out_lte?: Maybe<Scalars['Date']>;
  /** All values greater than the given value. */
  check_out_gt?: Maybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  check_out_gte?: Maybe<Scalars['Date']>;
  check_in?: Maybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  check_in_not?: Maybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  check_in_in?: Maybe<Array<Scalars['Date']>>;
  /** All values that are not contained in given list. */
  check_in_not_in?: Maybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  check_in_lt?: Maybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  check_in_lte?: Maybe<Scalars['Date']>;
  /** All values greater than the given value. */
  check_in_gt?: Maybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  check_in_gte?: Maybe<Scalars['Date']>;
  phone?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  phone_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  phone_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  phone_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  phone_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  phone_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  phone_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  phone_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  phone_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  phone_not_ends_with?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  hash_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  hash_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  hash_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  hash_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  hash_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  hash_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  hash_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  hash_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  hash_not_ends_with?: Maybe<Scalars['String']>;
  home?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  home_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  home_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  home_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  home_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  home_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  home_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  home_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  home_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  home_not_ends_with?: Maybe<Scalars['String']>;
  guests_every?: Maybe<GuestWhereInput>;
  guests_some?: Maybe<GuestWhereInput>;
  guests_none?: Maybe<GuestWhereInput>;
  reservationStatus?: Maybe<GuestStatus>;
  /** All values that are not equal to given value. */
  reservationStatus_not?: Maybe<GuestStatus>;
  /** All values that are contained in given list. */
  reservationStatus_in?: Maybe<Array<GuestStatus>>;
  /** All values that are not contained in given list. */
  reservationStatus_not_in?: Maybe<Array<GuestStatus>>;
};

/** References Reservation record uniquely */
export type ReservationWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  hash?: Maybe<Scalars['String']>;
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns AST representation */
  raw: Scalars['RichTextAST'];
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
};


/** Stage system enumeration */
export enum Stage {
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED',
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT'
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Localization = 'LOCALIZATION',
  Combined = 'COMBINED'
}

export type Token = Node & {
  __typename?: 'Token';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Token>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  token?: Maybe<Scalars['Json']>;
  /** List of Token versions */
  history: Array<Version>;
};


export type TokenDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type TokenHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

/** A connection to a list of items. */
export type TokenConnection = {
  __typename?: 'TokenConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<TokenEdge>;
  aggregate: Aggregate;
};

export type TokenCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  token?: Maybe<Scalars['Json']>;
};

/** An edge in a connection. */
export type TokenEdge = {
  __typename?: 'TokenEdge';
  /** The item at the end of the edge. */
  node: Token;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type TokenManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TokenWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TokenWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TokenWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
};

export enum TokenOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC'
}

export type TokenUpdateInput = {
  token?: Maybe<Scalars['Json']>;
};

export type TokenUpdateManyInput = {
  token?: Maybe<Scalars['Json']>;
};

export type TokenUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: TokenWhereInput;
  /** Update many input */
  data: TokenUpdateManyInput;
};

export type TokenUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: TokenWhereUniqueInput;
  /** Document to update */
  data: TokenUpdateInput;
};

export type TokenUpsertInput = {
  /** Create document if it didn't exist */
  create: TokenCreateInput;
  /** Update document if it exists */
  update: TokenUpdateInput;
};

export type TokenUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: TokenWhereUniqueInput;
  /** Upsert data */
  data: TokenUpsertInput;
};

/** Identifies documents */
export type TokenWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TokenWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TokenWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TokenWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
};

/** References Token record uniquely */
export type TokenWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** System User Kind */
export enum UserKind {
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

export type Version = {
  __typename?: 'Version';
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
  createdAt: Scalars['DateTime'];
};

export type VersionWhereInput = {
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
};

export enum _FilterKind {
  Search = 'search',
  And = 'AND',
  Or = 'OR',
  Not = 'NOT',
  Eq = 'eq',
  EqNot = 'eq_not',
  In = 'in',
  NotIn = 'not_in',
  Lt = 'lt',
  Lte = 'lte',
  Gt = 'gt',
  Gte = 'gte',
  Contains = 'contains',
  NotContains = 'not_contains',
  StartsWith = 'starts_with',
  NotStartsWith = 'not_starts_with',
  EndsWith = 'ends_with',
  NotEndsWith = 'not_ends_with',
  ContainsAll = 'contains_all',
  ContainsSome = 'contains_some',
  ContainsNone = 'contains_none',
  RelationalSingle = 'relational_single',
  RelationalEvery = 'relational_every',
  RelationalSome = 'relational_some',
  RelationalNone = 'relational_none'
}

export enum _MutationInputFieldKind {
  Scalar = 'scalar',
  RichText = 'richText',
  Enum = 'enum',
  Relation = 'relation',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Publish = 'publish',
  Unpublish = 'unpublish',
  Update = 'update',
  Upsert = 'upsert',
  Delete = 'delete',
  UpdateMany = 'updateMany',
  PublishMany = 'publishMany',
  UnpublishMany = 'unpublishMany',
  DeleteMany = 'deleteMany'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  One = 'one',
  Many = 'many'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Localization = 'localization',
  Combined = 'combined'
}

export type GetApartmentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetApartmentsQuery = (
  { __typename?: 'Query' }
  & { apartments: Array<(
    { __typename?: 'Apartment' }
    & Pick<Apartment, 'code' | 'name' | 'enterCode'>
  )> }
);

export type CreateReservationMutationVariables = Exact<{
  input: ReservationCreateInput;
}>;


export type CreateReservationMutation = (
  { __typename?: 'Mutation' }
  & { createReservation?: Maybe<(
    { __typename?: 'Reservation' }
    & ReservationFragment
  )> }
);

export type GetReservationsQueryVariables = Exact<{
  input: Scalars['Date'];
}>;


export type GetReservationsQuery = (
  { __typename?: 'Query' }
  & { reservations: Array<(
    { __typename?: 'Reservation' }
    & ReservationFragment
  )> }
);

export type ReservationFragment = (
  { __typename?: 'Reservation' }
  & Pick<Reservation, 'id' | 'guest_name' | 'check_out' | 'check_in' | 'hash' | 'phone' | 'home' | 'reservationStatus'>
  & { guests: Array<(
    { __typename?: 'Guest' }
    & Pick<Guest, 'birthDate' | 'documentNumber' | 'documentPlace' | 'docFile' | 'documentType' | 'firstName' | 'lastName' | 'nationality' | 'placeOfBirth'>
  )> }
);

export type UpdateReservationMutationVariables = Exact<{
  input: ReservationWhereUniqueInput;
  data: ReservationUpdateInput;
}>;


export type UpdateReservationMutation = (
  { __typename?: 'Mutation' }
  & { updateReservation?: Maybe<(
    { __typename?: 'Reservation' }
    & Pick<Reservation, 'reservationStatus' | 'phone'>
  )> }
);

export type GetReservationQueryVariables = Exact<{
  input: Scalars['String'];
}>;


export type GetReservationQuery = (
  { __typename?: 'Query' }
  & { reservations: Array<(
    { __typename?: 'Reservation' }
    & Pick<Reservation, 'guest_name' | 'check_out' | 'check_in' | 'home' | 'phone'>
  )> }
);

export type GetTokenQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTokenQuery = (
  { __typename?: 'Query' }
  & { tokens: Array<(
    { __typename?: 'Token' }
    & Pick<Token, 'token'>
  )> }
);

export const ReservationFragmentDoc = gql`
    fragment Reservation on Reservation {
  id
  guest_name
  check_out
  check_in
  hash
  phone
  home
  reservationStatus
  guests {
    birthDate
    documentNumber
    documentPlace
    docFile
    documentType
    firstName
    lastName
    nationality
    placeOfBirth
  }
}
    `;
export const GetApartmentsDocument = gql`
    query getApartments {
  apartments {
    code
    name
    enterCode
  }
}
    `;
export const CreateReservationDocument = gql`
    mutation createReservation($input: ReservationCreateInput!) {
  createReservation(data: $input) {
    ...Reservation
  }
}
    ${ReservationFragmentDoc}`;
export const GetReservationsDocument = gql`
    query getReservations($input: Date!) {
  reservations(where: {check_out_gt: $input}, orderBy: check_out_DESC) {
    ...Reservation
  }
}
    ${ReservationFragmentDoc}`;
export const UpdateReservationDocument = gql`
    mutation updateReservation($input: ReservationWhereUniqueInput!, $data: ReservationUpdateInput!) {
  updateReservation(where: $input, data: $data) {
    reservationStatus
    phone
  }
}
    `;
export const GetReservationDocument = gql`
    query getReservation($input: String!) {
  reservations(where: {hash: $input}, orderBy: check_out_DESC) {
    guest_name
    check_out
    check_in
    home
    phone
  }
}
    `;
export const GetTokenDocument = gql`
    query getToken {
  tokens {
    token
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction();
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getApartments(variables?: GetApartmentsQueryVariables, requestHeaders?: Headers): Promise<GetApartmentsQuery> {
      return withWrapper(() => client.request<GetApartmentsQuery>(print(GetApartmentsDocument), variables, requestHeaders));
    },
    createReservation(variables: CreateReservationMutationVariables, requestHeaders?: Headers): Promise<CreateReservationMutation> {
      return withWrapper(() => client.request<CreateReservationMutation>(print(CreateReservationDocument), variables, requestHeaders));
    },
    getReservations(variables: GetReservationsQueryVariables, requestHeaders?: Headers): Promise<GetReservationsQuery> {
      return withWrapper(() => client.request<GetReservationsQuery>(print(GetReservationsDocument), variables, requestHeaders));
    },
    updateReservation(variables: UpdateReservationMutationVariables, requestHeaders?: Headers): Promise<UpdateReservationMutation> {
      return withWrapper(() => client.request<UpdateReservationMutation>(print(UpdateReservationDocument), variables, requestHeaders));
    },
    getReservation(variables: GetReservationQueryVariables, requestHeaders?: Headers): Promise<GetReservationQuery> {
      return withWrapper(() => client.request<GetReservationQuery>(print(GetReservationDocument), variables, requestHeaders));
    },
    getToken(variables?: GetTokenQueryVariables, requestHeaders?: Headers): Promise<GetTokenQuery> {
      return withWrapper(() => client.request<GetTokenQuery>(print(GetTokenDocument), variables, requestHeaders));
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;