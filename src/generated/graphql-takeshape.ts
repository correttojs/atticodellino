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
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
};

/** Root of the Schema */
export type Root = {
  __typename?: 'Root';
  /** List of Projects */
  tsGetProjectList?: Maybe<Array<Maybe<TsProjectListItem>>>;
  /** List of project templates available for import. */
  tsGetProjectTemplateList?: Maybe<Array<Maybe<TsProjectTemplate>>>;
  /** Retrieve a project import. */
  tsGetProjectImport?: Maybe<TsProjectImport>;
  /** Activity Log */
  tsGetActivityLog?: Maybe<Array<Maybe<TsActivityLogItem>>>;
  /** Most Recent Static Site Deploys */
  tsGetLatestSiteDeploys?: Maybe<Array<Maybe<TsActivityLogItem>>>;
  /** Get the status of a site deploy */
  tsSiteDeployStatus?: Maybe<TsSite>;
  /** Get the status of a site deploy */
  tsGetContentUsage?: Maybe<Array<Maybe<TsContentUsage>>>;
  /** List potential preview paths */
  tsGetPreviewPathList?: Maybe<Array<Maybe<TsContentTypePreviewPaths>>>;
  /** Get static site preview token */
  tsGetSitePreviewToken?: Maybe<Scalars['String']>;
  /** Get a Lock by id */
  tsIsLocked?: Maybe<TsLock>;
  /** Get an API key by key and project */
  tsGetApiKey?: Maybe<TsApiKey>;
  /** Get all API Keys for a Project */
  tsGetApiKeysByProject?: Maybe<Array<Maybe<TsApiKey>>>;
  /** Get user/API role */
  tsGetRole?: Maybe<TsRole>;
  /** List user/API roles for the current project */
  tsGetRoleList?: Maybe<TsRolePaginatedList>;
  /** Get all webhooks */
  tsGetWebhooks?: Maybe<TsWebhooks>;
  /** Get specific webhook history item by webhookUrl and invocationTime. */
  tsGetWebhookHistoryItem?: Maybe<TsWebhookHistory>;
  /** Get webhook history items for a webhookUrl. Filter for a window of invocationTime with the from and to arguments. */
  tsGetWebhookHistory?: Maybe<Array<Maybe<TsWebhookHistory>>>;
  /** Get Locales for Project */
  tsGetLocales?: Maybe<TsLocales>;
  /** Get all available Shapes, Queries, and Mutations for connected Services */
  tsGetAvailableSchema?: Maybe<Scalars['JSONObject']>;
  /** Get upcoming scheduled content status updates */
  tsGetStatusUpdateList?: Maybe<TsStatusUpdateList>;
  tsGetUsage?: Maybe<TsUsageType>;
  /** Retrieve a project export. If the export is completed, you'll be provided with a path to it. */
  tsGetProjectExport?: Maybe<TsProjectExport>;
  /** Get a Project by id */
  tsGetProject?: Maybe<TsProject>;
  /** List of Project Members */
  tsGetProjectMembers?: Maybe<Array<Maybe<TsUser>>>;
  /** List of Project Members */
  tsGetProjectAdmins?: Maybe<Array<Maybe<TsUser>>>;
  /** List of Project Plans */
  tsGetPlanList?: Maybe<Array<Maybe<TsBillingPlan>>>;
  /** List all payments for a project */
  tsGetPaymentList?: Maybe<TsBillingPaymentCursorPaginatedList>;
  /** List of active Project Members and the content they have open */
  tsGetProjectMembersLocationList?: Maybe<Array<Maybe<TsMemberLocation>>>;
  search?: Maybe<TsSearchResults>;
  taxonomySuggest?: Maybe<TsSuggestionPaginatedList>;
  /** List Versions for a piece of content */
  getContentVersion?: Maybe<TsVersionResponse>;
  /** List Versions for a piece of content */
  getContentVersionList?: Maybe<TsVersionsPaginatedList>;
  searchAssetIndex?: Maybe<AssetSearchResults>;
  searchTsStaticSiteIndex?: Maybe<TsStaticSiteSearchResults>;
  searchApartmentIndex?: Maybe<ApartmentSearchResults>;
  searchArticleIndex?: Maybe<ArticleSearchResults>;
  searchFaqIndex?: Maybe<FaqSearchResults>;
  searchRegistrationsIndex?: Maybe<RegistrationsSearchResults>;
  searchLanguageIndex?: Maybe<LanguageSearchResults>;
  /** Get a Asset by ID */
  getAsset?: Maybe<Asset>;
  /** Returns a list Asset in natural order. */
  getAssetList?: Maybe<AssetPaginatedList>;
  /** Get a TsStaticSite by ID */
  getTsStaticSite?: Maybe<TsStaticSite>;
  /** Returns a list TsStaticSite in natural order. */
  getTsStaticSiteList?: Maybe<TsStaticSitePaginatedList>;
  /** Get a Apartment by ID */
  getApartment?: Maybe<Apartment>;
  /** Returns a list Apartment in natural order. */
  getApartmentList?: Maybe<ApartmentPaginatedList>;
  /** Get a Article by ID */
  getArticle?: Maybe<Article>;
  /** Returns a list Article in natural order. */
  getArticleList?: Maybe<ArticlePaginatedList>;
  /** Get a Faq by ID */
  getFaq?: Maybe<Faq>;
  /** Returns a list Faq in natural order. */
  getFaqList?: Maybe<FaqPaginatedList>;
  /** Get a Registrations by ID */
  getRegistrations?: Maybe<Registrations>;
  /** Returns a list Registrations in natural order. */
  getRegistrationsList?: Maybe<RegistrationsPaginatedList>;
  /** Get a Language by ID */
  getLanguage?: Maybe<Language>;
  /** Returns a list Language in natural order. */
  getLanguageList?: Maybe<LanguagePaginatedList>;
  withContext?: Maybe<WithContext>;
};


/** Root of the Schema */
export type RootTsGetProjectImportArgs = {
  id: Scalars['String'];
};


/** Root of the Schema */
export type RootTsGetActivityLogArgs = {
  filters?: Maybe<Scalars['JSON']>;
};


/** Root of the Schema */
export type RootTsSiteDeployStatusArgs = {
  siteId?: Maybe<Scalars['ID']>;
};


/** Root of the Schema */
export type RootTsGetContentUsageArgs = {
  id: Scalars['ID'];
};


/** Root of the Schema */
export type RootTsGetSitePreviewTokenArgs = {
  siteId: Scalars['String'];
};


/** Root of the Schema */
export type RootTsIsLockedArgs = {
  contentTypeId?: Maybe<Scalars['ID']>;
  id?: Maybe<Scalars['ID']>;
};


/** Root of the Schema */
export type RootTsGetApiKeyArgs = {
  id?: Maybe<Scalars['ID']>;
};


/** Root of the Schema */
export type RootTsGetRoleArgs = {
  name: Scalars['String'];
};


/** Root of the Schema */
export type RootTsGetWebhookHistoryItemArgs = {
  webhookUrl: Scalars['String'];
  invocationTime?: Maybe<Scalars['String']>;
};


/** Root of the Schema */
export type RootTsGetWebhookHistoryArgs = {
  webhookUrl: Scalars['String'];
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
};


/** Root of the Schema */
export type RootTsGetStatusUpdateListArgs = {
  contentId: Scalars['String'];
  shapeName?: Maybe<Scalars['String']>;
  contentTypeName?: Maybe<Scalars['String']>;
};


/** Root of the Schema */
export type RootTsGetProjectExportArgs = {
  id: Scalars['String'];
};


/** Root of the Schema */
export type RootTsGetProjectArgs = {
  id?: Maybe<Scalars['ID']>;
};


/** Root of the Schema */
export type RootTsGetProjectMembersArgs = {
  id?: Maybe<Scalars['ID']>;
};


/** Root of the Schema */
export type RootTsGetPaymentListArgs = {
  cursor?: Maybe<Scalars['ID']>;
};


/** Root of the Schema */
export type RootSearchArgs = {
  shapeNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  shapeIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  contentTypeNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  contentTypeIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
  terms?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  filter?: Maybe<Scalars['JSON']>;
  sort?: Maybe<Array<Maybe<TsSearchSort>>>;
  where?: Maybe<TsWhereInput>;
};


/** Root of the Schema */
export type RootTaxonomySuggestArgs = {
  shapeNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  shapeIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  contentTypeNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  contentTypeIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  terms?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
  from?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  filter?: Maybe<Scalars['JSON']>;
  sort?: Maybe<Array<Maybe<TsSearchSort>>>;
};


/** Root of the Schema */
export type RootGetContentVersionArgs = {
  id: Scalars['ID'];
  version: Scalars['Int'];
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
};


/** Root of the Schema */
export type RootGetContentVersionListArgs = {
  id: Scalars['ID'];
  from?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
};


/** Root of the Schema */
export type RootSearchAssetIndexArgs = {
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
  terms?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  filter?: Maybe<Scalars['JSON']>;
  sort?: Maybe<Array<Maybe<TsSearchSort>>>;
  where?: Maybe<TsWhereAssetInput>;
};


/** Root of the Schema */
export type RootSearchTsStaticSiteIndexArgs = {
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
  terms?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  filter?: Maybe<Scalars['JSON']>;
  sort?: Maybe<Array<Maybe<TsSearchSort>>>;
  where?: Maybe<TsWhereTsStaticSiteInput>;
};


/** Root of the Schema */
export type RootSearchApartmentIndexArgs = {
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
  terms?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  filter?: Maybe<Scalars['JSON']>;
  sort?: Maybe<Array<Maybe<TsSearchSort>>>;
  where?: Maybe<TsWhereApartmentInput>;
};


/** Root of the Schema */
export type RootSearchArticleIndexArgs = {
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
  terms?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  filter?: Maybe<Scalars['JSON']>;
  sort?: Maybe<Array<Maybe<TsSearchSort>>>;
  where?: Maybe<TsWhereArticleInput>;
};


/** Root of the Schema */
export type RootSearchFaqIndexArgs = {
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
  terms?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  filter?: Maybe<Scalars['JSON']>;
  sort?: Maybe<Array<Maybe<TsSearchSort>>>;
  where?: Maybe<TsWhereFaqInput>;
};


/** Root of the Schema */
export type RootSearchRegistrationsIndexArgs = {
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
  terms?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  filter?: Maybe<Scalars['JSON']>;
  sort?: Maybe<Array<Maybe<TsSearchSort>>>;
  where?: Maybe<TsWhereRegistrationsInput>;
};


/** Root of the Schema */
export type RootSearchLanguageIndexArgs = {
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
  terms?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  filter?: Maybe<Scalars['JSON']>;
  sort?: Maybe<Array<Maybe<TsSearchSort>>>;
  where?: Maybe<TsWhereLanguageInput>;
};


/** Root of the Schema */
export type RootGetAssetArgs = {
  _id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
};


/** Root of the Schema */
export type RootGetAssetListArgs = {
  onlyEnabled?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
  terms?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  filter?: Maybe<Scalars['JSON']>;
  sort?: Maybe<Array<Maybe<TsSearchSort>>>;
  where?: Maybe<TsWhereAssetInput>;
};


/** Root of the Schema */
export type RootGetTsStaticSiteArgs = {
  _id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
};


/** Root of the Schema */
export type RootGetTsStaticSiteListArgs = {
  onlyEnabled?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
  terms?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  filter?: Maybe<Scalars['JSON']>;
  sort?: Maybe<Array<Maybe<TsSearchSort>>>;
  where?: Maybe<TsWhereTsStaticSiteInput>;
};


/** Root of the Schema */
export type RootGetApartmentArgs = {
  _id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
};


/** Root of the Schema */
export type RootGetApartmentListArgs = {
  onlyEnabled?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
  terms?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  filter?: Maybe<Scalars['JSON']>;
  sort?: Maybe<Array<Maybe<TsSearchSort>>>;
  where?: Maybe<TsWhereApartmentInput>;
};


/** Root of the Schema */
export type RootGetArticleArgs = {
  _id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
};


/** Root of the Schema */
export type RootGetArticleListArgs = {
  onlyEnabled?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
  terms?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  filter?: Maybe<Scalars['JSON']>;
  sort?: Maybe<Array<Maybe<TsSearchSort>>>;
  where?: Maybe<TsWhereArticleInput>;
};


/** Root of the Schema */
export type RootGetFaqArgs = {
  _id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
};


/** Root of the Schema */
export type RootGetFaqListArgs = {
  onlyEnabled?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
  terms?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  filter?: Maybe<Scalars['JSON']>;
  sort?: Maybe<Array<Maybe<TsSearchSort>>>;
  where?: Maybe<TsWhereFaqInput>;
};


/** Root of the Schema */
export type RootGetRegistrationsArgs = {
  _id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
};


/** Root of the Schema */
export type RootGetRegistrationsListArgs = {
  onlyEnabled?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
  terms?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  filter?: Maybe<Scalars['JSON']>;
  sort?: Maybe<Array<Maybe<TsSearchSort>>>;
  where?: Maybe<TsWhereRegistrationsInput>;
};


/** Root of the Schema */
export type RootGetLanguageArgs = {
  _id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
};


/** Root of the Schema */
export type RootGetLanguageListArgs = {
  onlyEnabled?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
  terms?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  filter?: Maybe<Scalars['JSON']>;
  sort?: Maybe<Array<Maybe<TsSearchSort>>>;
  where?: Maybe<TsWhereLanguageInput>;
};


/** Root of the Schema */
export type RootWithContextArgs = {
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
};

/** A Project is you main workspace it stores the content that powers your API */
export type TsProjectListItem = {
  __typename?: 'TSProjectListItem';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  invite?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  /** Project status object */
  status?: Maybe<Scalars['JSON']>;
  /** Project avatar */
  avatar?: Maybe<BaseAsset>;
  /** Default project timezone */
  defaultTimezone: Scalars['String'];
};


export type BaseAsset = TsSearchable & {
  __typename?: 'BaseAsset';
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  filename: Scalars['String'];
  caption?: Maybe<Scalars['JSON']>;
  captionHtml?: Maybe<Scalars['String']>;
  credit?: Maybe<Scalars['JSON']>;
  creditHtml?: Maybe<Scalars['String']>;
  path: Scalars['String'];
  mimeType?: Maybe<Scalars['String']>;
  sourceUrl?: Maybe<Scalars['String']>;
  uploadStatus?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ID']>;
  _version?: Maybe<Scalars['Int']>;
  _shapeId?: Maybe<Scalars['String']>;
  _shapeName?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['String']>;
  _createdBy?: Maybe<TsUser>;
  _updatedAt?: Maybe<Scalars['String']>;
  _updatedBy?: Maybe<TsUser>;
  _schemaVersion?: Maybe<Scalars['Float']>;
  /** @deprecated Use _status instead */
  _enabled?: Maybe<Scalars['Boolean']>;
  /** @deprecated Use a custom date field instead */
  _enabledAt?: Maybe<Scalars['String']>;
  _status?: Maybe<DefaultWorkflow>;
  _contentTypeId?: Maybe<Scalars['String']>;
  _contentTypeName?: Maybe<Scalars['String']>;
  searchSummary?: Maybe<Scalars['String']>;
};


export type BaseAssetCaptionHtmlArgs = {
  imageConfig?: Maybe<Scalars['JSON']>;
  images?: Maybe<TsImagesConfig>;
  classPrefix?: Maybe<Scalars['String']>;
};


export type BaseAssetCreditHtmlArgs = {
  imageConfig?: Maybe<Scalars['JSON']>;
  images?: Maybe<TsImagesConfig>;
  classPrefix?: Maybe<Scalars['String']>;
};

export type TsSearchable = {
  _id?: Maybe<Scalars['ID']>;
  _shapeId?: Maybe<Scalars['String']>;
  searchSummary?: Maybe<Scalars['String']>;
};

export type TsImagesConfig = {
  /** Default image parameters. See https://docs.imgix.com/apis/url  */
  default?: Maybe<Scalars['JSON']>;
  /** Small image parameters. See https://docs.imgix.com/apis/url  */
  small?: Maybe<Scalars['JSON']>;
  /** Medium image parameters. See https://docs.imgix.com/apis/url  */
  medium?: Maybe<Scalars['JSON']>;
  /** Large image parameters. See https://docs.imgix.com/apis/url  */
  large?: Maybe<Scalars['JSON']>;
};

export type TsUser = {
  __typename?: 'TSUser';
  id?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  avatarPath?: Maybe<Scalars['String']>;
};

export enum DefaultWorkflow {
  Disabled = 'disabled',
  Enabled = 'enabled'
}

/** A project template available for import. */
export type TsProjectTemplate = {
  __typename?: 'TSProjectTemplate';
  id: Scalars['String'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  avatarPath?: Maybe<Scalars['String']>;
  glitchProjectName?: Maybe<Scalars['String']>;
  sourcePath: Scalars['String'];
  uri?: Maybe<Scalars['String']>;
};

export type TsProjectImport = {
  __typename?: 'TSProjectImport';
  id?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['String']>;
};

export type TsActivityLogItem = {
  __typename?: 'TSActivityLogItem';
  activityType?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['ID']>;
  username?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['ID']>;
  siteId?: Maybe<Scalars['ID']>;
  stage?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['JSON']>;
};

export type TsSite = {
  __typename?: 'TSSite';
  siteId?: Maybe<Scalars['ID']>;
  status?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export type TsContentUsage = {
  __typename?: 'TSContentUsage';
  siteId?: Maybe<Scalars['ID']>;
  siteTitle?: Maybe<Scalars['String']>;
  deployedAt?: Maybe<Scalars['String']>;
  baseUrl?: Maybe<Scalars['String']>;
  usages?: Maybe<Array<Maybe<TsPathUsage>>>;
};

export type TsPathUsage = {
  __typename?: 'TSPathUsage';
  path?: Maybe<Scalars['String']>;
  depth?: Maybe<Scalars['Int']>;
};

export type TsContentTypePreviewPaths = {
  __typename?: 'TSContentTypePreviewPaths';
  contentTypeId: Scalars['String'];
  contentTypeName: Scalars['String'];
  shapeName: Scalars['String'];
  sites: Array<Maybe<TsSitePreviewPaths>>;
};

export type TsSitePreviewPaths = {
  __typename?: 'TSSitePreviewPaths';
  siteTitle: Scalars['String'];
  siteId: Scalars['String'];
  token?: Maybe<Scalars['String']>;
  routes: Array<Maybe<TsPreviewRoute>>;
};

export type TsPreviewRoute = {
  __typename?: 'TSPreviewRoute';
  routeName: Scalars['String'];
  isPaginated?: Maybe<Scalars['Boolean']>;
  path: Scalars['String'];
};

export type TsLock = {
  __typename?: 'TSLock';
  user?: Maybe<TsUser>;
  expires?: Maybe<Scalars['String']>;
};

export type TsApiKey = {
  __typename?: 'TSApiKey';
  projectId?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  permissions?: Maybe<Scalars['JSON']>;
  lastUsed?: Maybe<Scalars['String']>;
  apiKey?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
};

export type TsRole = {
  __typename?: 'TSRole';
  name: Scalars['String'];
  permissions: Scalars['JSONObject'];
  created?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['String']>;
  builtIn?: Maybe<Scalars['Boolean']>;
};


export type TsRolePaginatedList = {
  __typename?: 'TSRolePaginatedList';
  items?: Maybe<Array<Maybe<TsRole>>>;
  total?: Maybe<Scalars['Int']>;
  from?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
};

export type TsWebhooks = {
  __typename?: 'TSWebhooks';
  secret?: Maybe<Scalars['String']>;
  webhooks?: Maybe<Array<Maybe<TsWebhook>>>;
};

export type TsWebhook = {
  __typename?: 'TSWebhook';
  webhookUrl: Scalars['String'];
  headers?: Maybe<Array<Maybe<HttpHeader>>>;
  resourceActions?: Maybe<Array<Maybe<TsResourceActions>>>;
};

export type HttpHeader = {
  __typename?: 'HttpHeader';
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type TsResourceActions = {
  __typename?: 'TSResourceActions';
  resource: Scalars['String'];
  actions?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type TsWebhookHistory = {
  __typename?: 'TSWebhookHistory';
  _invocationTime: Scalars['String'];
  projectId: Scalars['ID'];
  webhookUrl: Scalars['String'];
  stats: TsWebhookHistoryStats;
};

export type TsWebhookHistoryStats = {
  __typename?: 'TSWebhookHistoryStats';
  succeeded: Scalars['Boolean'];
  retrying: Scalars['Boolean'];
  invocationStartTime: Scalars['String'];
  invocationDuration: Scalars['Int'];
  request: TsWebhookHistoryRequest;
  response?: Maybe<TsWebhookHistoryResponse>;
  error?: Maybe<TsWebhookHistoryError>;
};

export type TsWebhookHistoryRequest = {
  __typename?: 'TSWebhookHistoryRequest';
  url: Scalars['String'];
  headers?: Maybe<Scalars['JSON']>;
  body?: Maybe<Scalars['JSON']>;
};

export type TsWebhookHistoryResponse = {
  __typename?: 'TSWebhookHistoryResponse';
  status: Scalars['String'];
  statusText?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  headers?: Maybe<Scalars['JSON']>;
  body?: Maybe<Scalars['JSON']>;
};

export type TsWebhookHistoryError = {
  __typename?: 'TSWebhookHistoryError';
  name?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export type TsLocales = {
  __typename?: 'TSLocales';
  defaultLocale: Scalars['String'];
  locales?: Maybe<Array<Maybe<Scalars['String']>>>;
  version: Scalars['Int'];
};

export type TsStatusUpdateList = {
  __typename?: 'TSStatusUpdateList';
  items?: Maybe<Array<Maybe<TsStatusUpdate>>>;
  total?: Maybe<Scalars['Int']>;
};

export type TsStatusUpdate = {
  __typename?: 'TSStatusUpdate';
  id: Scalars['String'];
  timestamp: Scalars['String'];
  type: Scalars['String'];
  payload?: Maybe<Scalars['JSONObject']>;
};

export type TsUsageType = {
  __typename?: 'TSUsageType';
  /** The usage period start time */
  startTime?: Maybe<Scalars['String']>;
  /** The usage period end time */
  endTime?: Maybe<Scalars['String']>;
  /** Get members for project */
  users?: Maybe<Scalars['Int']>;
  /** Get user bandwidth */
  bandwidth?: Maybe<Scalars['Int']>;
  /** Get user roles */
  roles?: Maybe<Scalars['Int']>;
  /** Get user workflows */
  workflows?: Maybe<Scalars['Int']>;
  /** Get user sites */
  deployTargets?: Maybe<Scalars['Int']>;
  /** Get user locales */
  locales?: Maybe<Scalars['Int']>;
  /** Get user api calls */
  apiRequests?: Maybe<Scalars['Int']>;
  /** Get user content entries */
  contentEntries?: Maybe<Scalars['Int']>;
};

/** Projects are exported to downloadable ZIP files. */
export type TsProjectExport = {
  __typename?: 'TSProjectExport';
  id?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  file?: Maybe<Scalars['String']>;
};

/** A Project is you main workspace it stores the content that powers your API */
export type TsProject = {
  __typename?: 'TSProject';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  template?: Maybe<TsProjectTemplate>;
  invite?: Maybe<Scalars['String']>;
  users?: Maybe<Array<Maybe<TsUser>>>;
  /** Takeshape project schema */
  schema?: Maybe<Scalars['JSON']>;
  /** Takeshape project schema */
  billing?: Maybe<TsBilling>;
  /** Project status object */
  status?: Maybe<Scalars['JSON']>;
  /** Project avatar */
  avatar?: Maybe<BaseAsset>;
  /** Default project timezone */
  defaultTimezone: Scalars['String'];
  integrationTokens?: Maybe<Array<Maybe<TsIntegrationToken>>>;
};

export type TsBilling = {
  __typename?: 'TSBilling';
  enterprise?: Maybe<Scalars['Boolean']>;
  cardDetails?: Maybe<TsBillingCardDetails>;
  plan?: Maybe<TsBillingPlan>;
  discount?: Maybe<TsBillingDiscount>;
  trialEnd?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type TsBillingCardDetails = {
  __typename?: 'TSBillingCardDetails';
  brand?: Maybe<Scalars['String']>;
  cvcCheck?: Maybe<Scalars['String']>;
  expMonth?: Maybe<Scalars['Int']>;
  expYear?: Maybe<Scalars['Int']>;
  last4?: Maybe<Scalars['String']>;
};

export type TsBillingPlan = {
  __typename?: 'TSBillingPlan';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Int']>;
  created?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  interval?: Maybe<Scalars['String']>;
  intervalCount?: Maybe<Scalars['Int']>;
  entitlements?: Maybe<TsBillingEntitlements>;
  trialPeriodDays?: Maybe<Scalars['String']>;
};

export type TsBillingEntitlements = {
  __typename?: 'TSBillingEntitlements';
  users?: Maybe<Scalars['Int']>;
  apiRequests?: Maybe<Scalars['Int']>;
  apiRateLimit?: Maybe<Scalars['Int']>;
  contentEntries?: Maybe<Scalars['Int']>;
  bandwidth?: Maybe<Scalars['Int']>;
  deployTargets?: Maybe<Scalars['Int']>;
  webhooks?: Maybe<Scalars['Boolean']>;
  locales?: Maybe<Scalars['Int']>;
  roles?: Maybe<Scalars['Int']>;
  workflows?: Maybe<Scalars['Int']>;
};

export type TsBillingDiscount = {
  __typename?: 'TSBillingDiscount';
  percentOff?: Maybe<Scalars['Int']>;
  amountOff?: Maybe<Scalars['Int']>;
  duration?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
};

export type TsIntegrationToken = {
  __typename?: 'TSIntegrationToken';
  provider: Scalars['String'];
  token?: Maybe<Scalars['String']>;
};

export type TsBillingPaymentCursorPaginatedList = {
  __typename?: 'TSBillingPaymentCursorPaginatedList';
  items?: Maybe<Array<Maybe<TsBillingPayment>>>;
  cursor?: Maybe<Scalars['ID']>;
  hasMore?: Maybe<Scalars['Boolean']>;
};

export type TsBillingPayment = {
  __typename?: 'TSBillingPayment';
  date?: Maybe<Scalars['String']>;
  plan?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  amount?: Maybe<TsBillingAmount>;
  method?: Maybe<Scalars['String']>;
};

export type TsBillingAmount = {
  __typename?: 'TSBillingAmount';
  total?: Maybe<Scalars['Int']>;
  subtotal?: Maybe<Scalars['Int']>;
  refund?: Maybe<Scalars['Int']>;
  discount?: Maybe<TsBillingDiscount>;
};

export type TsMemberLocation = {
  __typename?: 'TSMemberLocation';
  userId: Scalars['String'];
  contentList?: Maybe<Array<Maybe<TsContentLocation>>>;
};

export type TsContentLocation = {
  __typename?: 'TSContentLocation';
  contentId?: Maybe<Scalars['String']>;
  contentTypeId?: Maybe<Scalars['String']>;
  hasLock?: Maybe<Scalars['Boolean']>;
};

export type TsSearchSort = {
  field: Scalars['String'];
  /** "asc" for ascending or "desc" for descending */
  order: Scalars['String'];
};

export type TsWhereInput = {
  sourceUrl?: Maybe<TsWhereString>;
  path?: Maybe<TsWhereString>;
  filename?: Maybe<TsWhereString>;
  description?: Maybe<TsWhereString>;
  caption?: Maybe<TsWhereDraftjs>;
  uploadStatus?: Maybe<TsWhereString>;
  mimeType?: Maybe<TsWhereString>;
  title?: Maybe<TsWhereString>;
  credit?: Maybe<TsWhereDraftjs>;
  _id?: Maybe<TsWhereId>;
  _version?: Maybe<TsWhereInteger>;
  _shapeId?: Maybe<TsWhereId>;
  _shapeName?: Maybe<TsWhereString>;
  _createdAt?: Maybe<TsWhereDate>;
  _updatedAt?: Maybe<TsWhereDate>;
  _schemaVersion?: Maybe<TsWhereNumber>;
  _status?: Maybe<TsWhereWorkflow>;
  _contentTypeId?: Maybe<TsWhereId>;
  _contentTypeName?: Maybe<TsWhereString>;
  s3Key?: Maybe<TsWhereString>;
  AND?: Maybe<Array<Maybe<TsAndOperator>>>;
  OR?: Maybe<Array<Maybe<TsOrOperator>>>;
  NOT?: Maybe<TsNotOperator>;
  baseUrl?: Maybe<TsWhereString>;
  provider?: Maybe<TsWhereString>;
  idKey?: Maybe<TsWhereString>;
  destination?: Maybe<TsWhereString>;
  privateAcl?: Maybe<TsWhereBoolean>;
  environmentVariables?: Maybe<TsWhereTsStaticSiteEnvironmentVariables>;
  triggers?: Maybe<TsWhereTsStaticSiteTriggers>;
  templateHash?: Maybe<TsWhereString>;
  sponsor?: Maybe<TsWhereApartmentRelationship>;
  bookingIcal?: Maybe<TsWhereString>;
  coverJpg?: Maybe<TsWhereAssetRelationship>;
  brandColor?: Maybe<TsWhereTsColor>;
  code?: Maybe<TsWhereString>;
  lighterColor?: Maybe<TsWhereTsColor>;
  address?: Maybe<TsWhereString>;
  latitude?: Maybe<TsWhereString>;
  lightColor?: Maybe<TsWhereTsColor>;
  airbnbLink?: Maybe<TsWhereString>;
  airBnb?: Maybe<TsWhereString>;
  facebookLink?: Maybe<TsWhereString>;
  coverWebp?: Maybe<TsWhereAssetRelationship>;
  name?: Maybe<TsWhereString>;
  location?: Maybe<TsWhereString>;
  airbnbIcal?: Maybe<TsWhereString>;
  key?: Maybe<TsWhereString>;
  longitude?: Maybe<TsWhereString>;
  relationship?: Maybe<TsWhereLanguageRelationship>;
  content?: Maybe<TsWhereDraftjs>;
  apartment?: Maybe<TsWhereApartmentRelationship>;
  language?: Maybe<TsWhereLanguageRelationship>;
  question?: Maybe<TsWhereString>;
  answer?: Maybe<TsWhereDraftjs>;
  linkVideo?: Maybe<TsWhereString>;
  asset?: Maybe<TsWhereAssetRelationship>;
  guests?: Maybe<TsWhereRegistrationsGuests>;
  registrationStatus?: Maybe<TsWhereString>;
  apartmentKey?: Maybe<TsWhereString>;
  email?: Maybe<TsWhereString>;
};

export type TsWhereString = {
  /** Exact match */
  eq?: Maybe<Scalars['String']>;
  /** Array of possible exact match values. */
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Full text searching with fuzzy matching. */
  match?: Maybe<Scalars['String']>;
  /** Regular expression string matching. Use of * wildcards could degrade performance. */
  regexp?: Maybe<Scalars['String']>;
};

export type TsWhereDraftjs = {
  /** Full text searching with fuzzy matching. */
  match?: Maybe<Scalars['String']>;
};

export type TsWhereId = {
  /** Exact match */
  eq?: Maybe<Scalars['ID']>;
  /** Array of possible exact match values. */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type TsWhereInteger = {
  /** Exact match */
  eq?: Maybe<Scalars['Int']>;
  /** Less than */
  lt?: Maybe<Scalars['Int']>;
  /** Less than or equal */
  lte?: Maybe<Scalars['Int']>;
  /** Greater than */
  gt?: Maybe<Scalars['Int']>;
  /** Greater than or equal */
  gte?: Maybe<Scalars['Int']>;
  /** Array of possible exact match values. */
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type TsWhereDate = {
  /** Exact match */
  eq?: Maybe<Scalars['String']>;
  /** Less than */
  lt?: Maybe<Scalars['String']>;
  /** Less than or equal */
  lte?: Maybe<Scalars['String']>;
  /** Greater than */
  gt?: Maybe<Scalars['String']>;
  /** Greater than or equal */
  gte?: Maybe<Scalars['String']>;
};

export type TsWhereNumber = {
  /** Exact match */
  eq?: Maybe<Scalars['Float']>;
  /** Less than */
  lt?: Maybe<Scalars['Float']>;
  /** Less than or equal */
  lte?: Maybe<Scalars['Float']>;
  /** Greater than */
  gt?: Maybe<Scalars['Float']>;
  /** Greater than or equal */
  gte?: Maybe<Scalars['Float']>;
  /** Array of possible exact match values. */
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type TsWhereWorkflow = {
  /** Exact match */
  eq?: Maybe<Scalars['String']>;
  /** Less than */
  lt?: Maybe<Scalars['String']>;
  /** Less than or equal */
  lte?: Maybe<Scalars['String']>;
  /** Greater than */
  gt?: Maybe<Scalars['String']>;
  /** Greater than or equal */
  gte?: Maybe<Scalars['String']>;
  /** Array of possible exact match values. */
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** AND takes an array of conditions that must appear in the matching results. Nested boolean operators can be used to create complex filters. */
export type TsAndOperator = {
  sourceUrl?: Maybe<TsWhereString>;
  path?: Maybe<TsWhereString>;
  filename?: Maybe<TsWhereString>;
  description?: Maybe<TsWhereString>;
  caption?: Maybe<TsWhereDraftjs>;
  uploadStatus?: Maybe<TsWhereString>;
  mimeType?: Maybe<TsWhereString>;
  title?: Maybe<TsWhereString>;
  credit?: Maybe<TsWhereDraftjs>;
  _id?: Maybe<TsWhereId>;
  _version?: Maybe<TsWhereInteger>;
  _shapeId?: Maybe<TsWhereId>;
  _shapeName?: Maybe<TsWhereString>;
  _createdAt?: Maybe<TsWhereDate>;
  _updatedAt?: Maybe<TsWhereDate>;
  _schemaVersion?: Maybe<TsWhereNumber>;
  _status?: Maybe<TsWhereWorkflow>;
  _contentTypeId?: Maybe<TsWhereId>;
  _contentTypeName?: Maybe<TsWhereString>;
  s3Key?: Maybe<TsWhereString>;
  AND?: Maybe<Array<Maybe<TsAndOperator>>>;
  OR?: Maybe<Array<Maybe<TsOrOperator>>>;
  NOT?: Maybe<TsNotOperator>;
  baseUrl?: Maybe<TsWhereString>;
  provider?: Maybe<TsWhereString>;
  idKey?: Maybe<TsWhereString>;
  destination?: Maybe<TsWhereString>;
  privateAcl?: Maybe<TsWhereBoolean>;
  environmentVariables?: Maybe<TsWhereTsStaticSiteEnvironmentVariables>;
  triggers?: Maybe<TsWhereTsStaticSiteTriggers>;
  templateHash?: Maybe<TsWhereString>;
  sponsor?: Maybe<TsWhereApartmentRelationship>;
  bookingIcal?: Maybe<TsWhereString>;
  coverJpg?: Maybe<TsWhereAssetRelationship>;
  brandColor?: Maybe<TsWhereTsColor>;
  code?: Maybe<TsWhereString>;
  lighterColor?: Maybe<TsWhereTsColor>;
  address?: Maybe<TsWhereString>;
  latitude?: Maybe<TsWhereString>;
  lightColor?: Maybe<TsWhereTsColor>;
  airbnbLink?: Maybe<TsWhereString>;
  airBnb?: Maybe<TsWhereString>;
  facebookLink?: Maybe<TsWhereString>;
  coverWebp?: Maybe<TsWhereAssetRelationship>;
  name?: Maybe<TsWhereString>;
  location?: Maybe<TsWhereString>;
  airbnbIcal?: Maybe<TsWhereString>;
  key?: Maybe<TsWhereString>;
  longitude?: Maybe<TsWhereString>;
  relationship?: Maybe<TsWhereLanguageRelationship>;
  content?: Maybe<TsWhereDraftjs>;
  apartment?: Maybe<TsWhereApartmentRelationship>;
  language?: Maybe<TsWhereLanguageRelationship>;
  question?: Maybe<TsWhereString>;
  answer?: Maybe<TsWhereDraftjs>;
  linkVideo?: Maybe<TsWhereString>;
  asset?: Maybe<TsWhereAssetRelationship>;
  guests?: Maybe<TsWhereRegistrationsGuests>;
  registrationStatus?: Maybe<TsWhereString>;
  apartmentKey?: Maybe<TsWhereString>;
  email?: Maybe<TsWhereString>;
};

/** OR takes an array of conditions that should appear in the matching results. Nested boolean operators can be used to create complex filters. */
export type TsOrOperator = {
  sourceUrl?: Maybe<TsWhereString>;
  path?: Maybe<TsWhereString>;
  filename?: Maybe<TsWhereString>;
  description?: Maybe<TsWhereString>;
  caption?: Maybe<TsWhereDraftjs>;
  uploadStatus?: Maybe<TsWhereString>;
  mimeType?: Maybe<TsWhereString>;
  title?: Maybe<TsWhereString>;
  credit?: Maybe<TsWhereDraftjs>;
  _id?: Maybe<TsWhereId>;
  _version?: Maybe<TsWhereInteger>;
  _shapeId?: Maybe<TsWhereId>;
  _shapeName?: Maybe<TsWhereString>;
  _createdAt?: Maybe<TsWhereDate>;
  _updatedAt?: Maybe<TsWhereDate>;
  _schemaVersion?: Maybe<TsWhereNumber>;
  _status?: Maybe<TsWhereWorkflow>;
  _contentTypeId?: Maybe<TsWhereId>;
  _contentTypeName?: Maybe<TsWhereString>;
  s3Key?: Maybe<TsWhereString>;
  AND?: Maybe<Array<Maybe<TsAndOperator>>>;
  OR?: Maybe<Array<Maybe<TsOrOperator>>>;
  NOT?: Maybe<TsNotOperator>;
  baseUrl?: Maybe<TsWhereString>;
  provider?: Maybe<TsWhereString>;
  idKey?: Maybe<TsWhereString>;
  destination?: Maybe<TsWhereString>;
  privateAcl?: Maybe<TsWhereBoolean>;
  environmentVariables?: Maybe<TsWhereTsStaticSiteEnvironmentVariables>;
  triggers?: Maybe<TsWhereTsStaticSiteTriggers>;
  templateHash?: Maybe<TsWhereString>;
  sponsor?: Maybe<TsWhereApartmentRelationship>;
  bookingIcal?: Maybe<TsWhereString>;
  coverJpg?: Maybe<TsWhereAssetRelationship>;
  brandColor?: Maybe<TsWhereTsColor>;
  code?: Maybe<TsWhereString>;
  lighterColor?: Maybe<TsWhereTsColor>;
  address?: Maybe<TsWhereString>;
  latitude?: Maybe<TsWhereString>;
  lightColor?: Maybe<TsWhereTsColor>;
  airbnbLink?: Maybe<TsWhereString>;
  airBnb?: Maybe<TsWhereString>;
  facebookLink?: Maybe<TsWhereString>;
  coverWebp?: Maybe<TsWhereAssetRelationship>;
  name?: Maybe<TsWhereString>;
  location?: Maybe<TsWhereString>;
  airbnbIcal?: Maybe<TsWhereString>;
  key?: Maybe<TsWhereString>;
  longitude?: Maybe<TsWhereString>;
  relationship?: Maybe<TsWhereLanguageRelationship>;
  content?: Maybe<TsWhereDraftjs>;
  apartment?: Maybe<TsWhereApartmentRelationship>;
  language?: Maybe<TsWhereLanguageRelationship>;
  question?: Maybe<TsWhereString>;
  answer?: Maybe<TsWhereDraftjs>;
  linkVideo?: Maybe<TsWhereString>;
  asset?: Maybe<TsWhereAssetRelationship>;
  guests?: Maybe<TsWhereRegistrationsGuests>;
  registrationStatus?: Maybe<TsWhereString>;
  apartmentKey?: Maybe<TsWhereString>;
  email?: Maybe<TsWhereString>;
};

/** NOT takes a single condition that must not appear in the matching results. */
export type TsNotOperator = {
  sourceUrl?: Maybe<TsWhereString>;
  path?: Maybe<TsWhereString>;
  filename?: Maybe<TsWhereString>;
  description?: Maybe<TsWhereString>;
  caption?: Maybe<TsWhereDraftjs>;
  uploadStatus?: Maybe<TsWhereString>;
  mimeType?: Maybe<TsWhereString>;
  title?: Maybe<TsWhereString>;
  credit?: Maybe<TsWhereDraftjs>;
  _id?: Maybe<TsWhereId>;
  _version?: Maybe<TsWhereInteger>;
  _shapeId?: Maybe<TsWhereId>;
  _shapeName?: Maybe<TsWhereString>;
  _createdAt?: Maybe<TsWhereDate>;
  _updatedAt?: Maybe<TsWhereDate>;
  _schemaVersion?: Maybe<TsWhereNumber>;
  _status?: Maybe<TsWhereWorkflow>;
  _contentTypeId?: Maybe<TsWhereId>;
  _contentTypeName?: Maybe<TsWhereString>;
  s3Key?: Maybe<TsWhereString>;
  AND?: Maybe<Array<Maybe<TsLanguageAndOperator>>>;
  OR?: Maybe<Array<Maybe<TsLanguageOrOperator>>>;
  NOT?: Maybe<TsLanguageNotOperator>;
  baseUrl?: Maybe<TsWhereString>;
  provider?: Maybe<TsWhereString>;
  idKey?: Maybe<TsWhereString>;
  destination?: Maybe<TsWhereString>;
  privateAcl?: Maybe<TsWhereBoolean>;
  environmentVariables?: Maybe<TsWhereTsStaticSiteEnvironmentVariables>;
  triggers?: Maybe<TsWhereTsStaticSiteTriggers>;
  templateHash?: Maybe<TsWhereString>;
  sponsor?: Maybe<TsWhereApartmentRelationship>;
  bookingIcal?: Maybe<TsWhereString>;
  coverJpg?: Maybe<TsWhereAssetRelationship>;
  brandColor?: Maybe<TsWhereTsColor>;
  code?: Maybe<TsWhereString>;
  lighterColor?: Maybe<TsWhereTsColor>;
  address?: Maybe<TsWhereString>;
  latitude?: Maybe<TsWhereString>;
  lightColor?: Maybe<TsWhereTsColor>;
  airbnbLink?: Maybe<TsWhereString>;
  airBnb?: Maybe<TsWhereString>;
  facebookLink?: Maybe<TsWhereString>;
  coverWebp?: Maybe<TsWhereAssetRelationship>;
  name?: Maybe<TsWhereString>;
  location?: Maybe<TsWhereString>;
  airbnbIcal?: Maybe<TsWhereString>;
  key?: Maybe<TsWhereString>;
  longitude?: Maybe<TsWhereString>;
  relationship?: Maybe<TsWhereLanguageRelationship>;
  content?: Maybe<TsWhereDraftjs>;
  apartment?: Maybe<TsWhereApartmentRelationship>;
  language?: Maybe<TsWhereLanguageRelationship>;
  question?: Maybe<TsWhereString>;
  answer?: Maybe<TsWhereDraftjs>;
  linkVideo?: Maybe<TsWhereString>;
  asset?: Maybe<TsWhereAssetRelationship>;
  guests?: Maybe<TsWhereRegistrationsGuests>;
  registrationStatus?: Maybe<TsWhereString>;
  apartmentKey?: Maybe<TsWhereString>;
  email?: Maybe<TsWhereString>;
};

/** AND takes an array of conditions that must appear in the matching results. Nested boolean operators can be used to create complex filters. */
export type TsLanguageAndOperator = {
  code?: Maybe<TsWhereString>;
  _id?: Maybe<TsWhereId>;
  _version?: Maybe<TsWhereInteger>;
  _shapeId?: Maybe<TsWhereId>;
  _shapeName?: Maybe<TsWhereString>;
  _createdAt?: Maybe<TsWhereDate>;
  _updatedAt?: Maybe<TsWhereDate>;
  _schemaVersion?: Maybe<TsWhereNumber>;
  _status?: Maybe<TsWhereWorkflow>;
  _contentTypeId?: Maybe<TsWhereId>;
  _contentTypeName?: Maybe<TsWhereString>;
  AND?: Maybe<Array<Maybe<TsLanguageAndOperator>>>;
  OR?: Maybe<Array<Maybe<TsLanguageOrOperator>>>;
  NOT?: Maybe<TsLanguageNotOperator>;
};

/** OR takes an array of conditions that should appear in the matching results. Nested boolean operators can be used to create complex filters. */
export type TsLanguageOrOperator = {
  code?: Maybe<TsWhereString>;
  _id?: Maybe<TsWhereId>;
  _version?: Maybe<TsWhereInteger>;
  _shapeId?: Maybe<TsWhereId>;
  _shapeName?: Maybe<TsWhereString>;
  _createdAt?: Maybe<TsWhereDate>;
  _updatedAt?: Maybe<TsWhereDate>;
  _schemaVersion?: Maybe<TsWhereNumber>;
  _status?: Maybe<TsWhereWorkflow>;
  _contentTypeId?: Maybe<TsWhereId>;
  _contentTypeName?: Maybe<TsWhereString>;
  AND?: Maybe<Array<Maybe<TsLanguageAndOperator>>>;
  OR?: Maybe<Array<Maybe<TsLanguageOrOperator>>>;
  NOT?: Maybe<TsLanguageNotOperator>;
};

/** NOT takes a single condition that must not appear in the matching results. */
export type TsLanguageNotOperator = {
  code?: Maybe<TsWhereString>;
  _id?: Maybe<TsWhereId>;
  _version?: Maybe<TsWhereInteger>;
  _shapeId?: Maybe<TsWhereId>;
  _shapeName?: Maybe<TsWhereString>;
  _createdAt?: Maybe<TsWhereDate>;
  _updatedAt?: Maybe<TsWhereDate>;
  _schemaVersion?: Maybe<TsWhereNumber>;
  _status?: Maybe<TsWhereWorkflow>;
  _contentTypeId?: Maybe<TsWhereId>;
  _contentTypeName?: Maybe<TsWhereString>;
};

export type TsWhereBoolean = {
  /** Exact match */
  eq?: Maybe<Scalars['Boolean']>;
};

export type TsWhereTsStaticSiteEnvironmentVariables = {
  name?: Maybe<TsWhereString>;
  value?: Maybe<TsWhereString>;
};

export type TsWhereTsStaticSiteTriggers = {
  contentTypeId?: Maybe<TsWhereString>;
  status?: Maybe<TsWhereString>;
};

export type TsWhereApartmentRelationship = {
  bookingIcal?: Maybe<TsWhereString>;
  brandColor?: Maybe<TsShallowWhereTsColor>;
  code?: Maybe<TsWhereString>;
  lighterColor?: Maybe<TsShallowWhereTsColor>;
  address?: Maybe<TsWhereString>;
  latitude?: Maybe<TsWhereString>;
  lightColor?: Maybe<TsShallowWhereTsColor>;
  airbnbLink?: Maybe<TsWhereString>;
  airBnb?: Maybe<TsWhereString>;
  facebookLink?: Maybe<TsWhereString>;
  name?: Maybe<TsWhereString>;
  location?: Maybe<TsWhereString>;
  airbnbIcal?: Maybe<TsWhereString>;
  key?: Maybe<TsWhereString>;
  longitude?: Maybe<TsWhereString>;
  _id?: Maybe<TsWhereId>;
  _version?: Maybe<TsWhereInteger>;
  _shapeId?: Maybe<TsWhereId>;
  _shapeName?: Maybe<TsWhereString>;
  _createdAt?: Maybe<TsWhereDate>;
  _updatedAt?: Maybe<TsWhereDate>;
  _schemaVersion?: Maybe<TsWhereNumber>;
  _status?: Maybe<TsWhereWorkflow>;
  _contentTypeId?: Maybe<TsWhereId>;
  _contentTypeName?: Maybe<TsWhereString>;
};

export type TsShallowWhereTsColor = {
  hex?: Maybe<TsWhereString>;
  hsl?: Maybe<TsShallowWhereTsColorHsl>;
  hsv?: Maybe<TsShallowWhereTsColorHsv>;
  rgb?: Maybe<TsShallowWhereTsColorRgb>;
};

export type TsShallowWhereTsColorHsl = {
  h?: Maybe<TsWhereNumber>;
  a?: Maybe<TsWhereNumber>;
  s?: Maybe<TsWhereNumber>;
  l?: Maybe<TsWhereNumber>;
};

export type TsShallowWhereTsColorHsv = {
  h?: Maybe<TsWhereNumber>;
  a?: Maybe<TsWhereNumber>;
  s?: Maybe<TsWhereNumber>;
  v?: Maybe<TsWhereNumber>;
};

export type TsShallowWhereTsColorRgb = {
  a?: Maybe<TsWhereNumber>;
  b?: Maybe<TsWhereNumber>;
  r?: Maybe<TsWhereNumber>;
  g?: Maybe<TsWhereNumber>;
};

export type TsWhereAssetRelationship = {
  sourceUrl?: Maybe<TsWhereString>;
  path?: Maybe<TsWhereString>;
  filename?: Maybe<TsWhereString>;
  description?: Maybe<TsWhereString>;
  caption?: Maybe<TsWhereDraftjs>;
  uploadStatus?: Maybe<TsWhereString>;
  mimeType?: Maybe<TsWhereString>;
  title?: Maybe<TsWhereString>;
  credit?: Maybe<TsWhereDraftjs>;
  _id?: Maybe<TsWhereId>;
  _version?: Maybe<TsWhereInteger>;
  _shapeId?: Maybe<TsWhereId>;
  _shapeName?: Maybe<TsWhereString>;
  _createdAt?: Maybe<TsWhereDate>;
  _updatedAt?: Maybe<TsWhereDate>;
  _schemaVersion?: Maybe<TsWhereNumber>;
  _status?: Maybe<TsWhereWorkflow>;
  _contentTypeId?: Maybe<TsWhereId>;
  _contentTypeName?: Maybe<TsWhereString>;
  s3Key?: Maybe<TsWhereString>;
};

export type TsWhereTsColor = {
  hex?: Maybe<TsWhereString>;
  hsl?: Maybe<TsWhereTsColorHsl>;
  hsv?: Maybe<TsWhereTsColorHsv>;
  rgb?: Maybe<TsWhereTsColorRgb>;
};

export type TsWhereTsColorHsl = {
  h?: Maybe<TsWhereNumber>;
  a?: Maybe<TsWhereNumber>;
  s?: Maybe<TsWhereNumber>;
  l?: Maybe<TsWhereNumber>;
};

export type TsWhereTsColorHsv = {
  h?: Maybe<TsWhereNumber>;
  a?: Maybe<TsWhereNumber>;
  s?: Maybe<TsWhereNumber>;
  v?: Maybe<TsWhereNumber>;
};

export type TsWhereTsColorRgb = {
  a?: Maybe<TsWhereNumber>;
  b?: Maybe<TsWhereNumber>;
  r?: Maybe<TsWhereNumber>;
  g?: Maybe<TsWhereNumber>;
};

export type TsWhereLanguageRelationship = {
  code?: Maybe<TsWhereString>;
  _id?: Maybe<TsWhereId>;
  _version?: Maybe<TsWhereInteger>;
  _shapeId?: Maybe<TsWhereId>;
  _shapeName?: Maybe<TsWhereString>;
  _createdAt?: Maybe<TsWhereDate>;
  _updatedAt?: Maybe<TsWhereDate>;
  _schemaVersion?: Maybe<TsWhereNumber>;
  _status?: Maybe<TsWhereWorkflow>;
  _contentTypeId?: Maybe<TsWhereId>;
  _contentTypeName?: Maybe<TsWhereString>;
};

export type TsWhereRegistrationsGuests = {
  lastName?: Maybe<TsWhereString>;
  firstName?: Maybe<TsWhereString>;
  placeOfBirth?: Maybe<TsWhereString>;
  nationality?: Maybe<TsWhereString>;
  documentType?: Maybe<TsWhereString>;
  documentNumber?: Maybe<TsWhereString>;
  birthDate?: Maybe<TsWhereString>;
};

/** TS search results */
export type TsSearchResults = {
  __typename?: 'TSSearchResults';
  results?: Maybe<Array<Maybe<TsSearchable>>>;
  total?: Maybe<Scalars['Int']>;
};

export type TsSuggestionPaginatedList = {
  __typename?: 'TSSuggestionPaginatedList';
  items?: Maybe<Array<Maybe<TsSuggestion>>>;
  total?: Maybe<Scalars['Int']>;
};

export type TsSuggestion = {
  __typename?: 'TSSuggestion';
  _id?: Maybe<Scalars['ID']>;
  _shapeId?: Maybe<Scalars['ID']>;
  _shapeName?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
};

export type TsVersionResponse = {
  __typename?: 'TSVersionResponse';
  content?: Maybe<Scalars['JSONObject']>;
  schema?: Maybe<Scalars['JSONObject']>;
};

export type TsVersionsPaginatedList = {
  __typename?: 'TSVersionsPaginatedList';
  items?: Maybe<Array<Maybe<TsVersion>>>;
  total?: Maybe<Scalars['Int']>;
  from?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
};

export type TsVersion = {
  __typename?: 'TSVersion';
  id?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<TsUser>;
  item?: Maybe<TsVersionResponse>;
};


export type TsVersionItemArgs = {
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
};

export type TsWhereAssetInput = {
  sourceUrl?: Maybe<TsWhereString>;
  path?: Maybe<TsWhereString>;
  filename?: Maybe<TsWhereString>;
  description?: Maybe<TsWhereString>;
  caption?: Maybe<TsWhereDraftjs>;
  uploadStatus?: Maybe<TsWhereString>;
  mimeType?: Maybe<TsWhereString>;
  title?: Maybe<TsWhereString>;
  credit?: Maybe<TsWhereDraftjs>;
  _id?: Maybe<TsWhereId>;
  _version?: Maybe<TsWhereInteger>;
  _shapeId?: Maybe<TsWhereId>;
  _shapeName?: Maybe<TsWhereString>;
  _createdAt?: Maybe<TsWhereDate>;
  _updatedAt?: Maybe<TsWhereDate>;
  _schemaVersion?: Maybe<TsWhereNumber>;
  _status?: Maybe<TsWhereWorkflow>;
  _contentTypeId?: Maybe<TsWhereId>;
  _contentTypeName?: Maybe<TsWhereString>;
  s3Key?: Maybe<TsWhereString>;
  AND?: Maybe<Array<Maybe<TsAssetAndOperator>>>;
  OR?: Maybe<Array<Maybe<TsAssetOrOperator>>>;
  NOT?: Maybe<TsAssetNotOperator>;
};

/** AND takes an array of conditions that must appear in the matching results. Nested boolean operators can be used to create complex filters. */
export type TsAssetAndOperator = {
  sourceUrl?: Maybe<TsWhereString>;
  path?: Maybe<TsWhereString>;
  filename?: Maybe<TsWhereString>;
  description?: Maybe<TsWhereString>;
  caption?: Maybe<TsWhereDraftjs>;
  uploadStatus?: Maybe<TsWhereString>;
  mimeType?: Maybe<TsWhereString>;
  title?: Maybe<TsWhereString>;
  credit?: Maybe<TsWhereDraftjs>;
  _id?: Maybe<TsWhereId>;
  _version?: Maybe<TsWhereInteger>;
  _shapeId?: Maybe<TsWhereId>;
  _shapeName?: Maybe<TsWhereString>;
  _createdAt?: Maybe<TsWhereDate>;
  _updatedAt?: Maybe<TsWhereDate>;
  _schemaVersion?: Maybe<TsWhereNumber>;
  _status?: Maybe<TsWhereWorkflow>;
  _contentTypeId?: Maybe<TsWhereId>;
  _contentTypeName?: Maybe<TsWhereString>;
  s3Key?: Maybe<TsWhereString>;
  AND?: Maybe<Array<Maybe<TsAssetAndOperator>>>;
  OR?: Maybe<Array<Maybe<TsAssetOrOperator>>>;
  NOT?: Maybe<TsAssetNotOperator>;
};

/** OR takes an array of conditions that should appear in the matching results. Nested boolean operators can be used to create complex filters. */
export type TsAssetOrOperator = {
  sourceUrl?: Maybe<TsWhereString>;
  path?: Maybe<TsWhereString>;
  filename?: Maybe<TsWhereString>;
  description?: Maybe<TsWhereString>;
  caption?: Maybe<TsWhereDraftjs>;
  uploadStatus?: Maybe<TsWhereString>;
  mimeType?: Maybe<TsWhereString>;
  title?: Maybe<TsWhereString>;
  credit?: Maybe<TsWhereDraftjs>;
  _id?: Maybe<TsWhereId>;
  _version?: Maybe<TsWhereInteger>;
  _shapeId?: Maybe<TsWhereId>;
  _shapeName?: Maybe<TsWhereString>;
  _createdAt?: Maybe<TsWhereDate>;
  _updatedAt?: Maybe<TsWhereDate>;
  _schemaVersion?: Maybe<TsWhereNumber>;
  _status?: Maybe<TsWhereWorkflow>;
  _contentTypeId?: Maybe<TsWhereId>;
  _contentTypeName?: Maybe<TsWhereString>;
  s3Key?: Maybe<TsWhereString>;
  AND?: Maybe<Array<Maybe<TsAssetAndOperator>>>;
  OR?: Maybe<Array<Maybe<TsAssetOrOperator>>>;
  NOT?: Maybe<TsAssetNotOperator>;
};

/** NOT takes a single condition that must not appear in the matching results. */
export type TsAssetNotOperator = {
  sourceUrl?: Maybe<TsWhereString>;
  path?: Maybe<TsWhereString>;
  filename?: Maybe<TsWhereString>;
  description?: Maybe<TsWhereString>;
  caption?: Maybe<TsWhereDraftjs>;
  uploadStatus?: Maybe<TsWhereString>;
  mimeType?: Maybe<TsWhereString>;
  title?: Maybe<TsWhereString>;
  credit?: Maybe<TsWhereDraftjs>;
  _id?: Maybe<TsWhereId>;
  _version?: Maybe<TsWhereInteger>;
  _shapeId?: Maybe<TsWhereId>;
  _shapeName?: Maybe<TsWhereString>;
  _createdAt?: Maybe<TsWhereDate>;
  _updatedAt?: Maybe<TsWhereDate>;
  _schemaVersion?: Maybe<TsWhereNumber>;
  _status?: Maybe<TsWhereWorkflow>;
  _contentTypeId?: Maybe<TsWhereId>;
  _contentTypeName?: Maybe<TsWhereString>;
  s3Key?: Maybe<TsWhereString>;
};

/** Asset search results */
export type AssetSearchResults = {
  __typename?: 'AssetSearchResults';
  results?: Maybe<Array<Maybe<TsSearchable>>>;
  total?: Maybe<Scalars['Int']>;
};

export type TsWhereTsStaticSiteInput = {
  title?: Maybe<TsWhereString>;
  baseUrl?: Maybe<TsWhereString>;
  provider?: Maybe<TsWhereString>;
  idKey?: Maybe<TsWhereString>;
  destination?: Maybe<TsWhereString>;
  privateAcl?: Maybe<TsWhereBoolean>;
  environmentVariables?: Maybe<TsWhereTsStaticSiteEnvironmentVariables>;
  triggers?: Maybe<TsWhereTsStaticSiteTriggers>;
  templateHash?: Maybe<TsWhereString>;
  _id?: Maybe<TsWhereId>;
  _version?: Maybe<TsWhereInteger>;
  _shapeId?: Maybe<TsWhereId>;
  _shapeName?: Maybe<TsWhereString>;
  _createdAt?: Maybe<TsWhereDate>;
  _updatedAt?: Maybe<TsWhereDate>;
  _schemaVersion?: Maybe<TsWhereNumber>;
  _status?: Maybe<TsWhereWorkflow>;
  _contentTypeId?: Maybe<TsWhereId>;
  _contentTypeName?: Maybe<TsWhereString>;
  AND?: Maybe<Array<Maybe<TsTsStaticSiteAndOperator>>>;
  OR?: Maybe<Array<Maybe<TsTsStaticSiteOrOperator>>>;
  NOT?: Maybe<TsTsStaticSiteNotOperator>;
};

/** AND takes an array of conditions that must appear in the matching results. Nested boolean operators can be used to create complex filters. */
export type TsTsStaticSiteAndOperator = {
  title?: Maybe<TsWhereString>;
  baseUrl?: Maybe<TsWhereString>;
  provider?: Maybe<TsWhereString>;
  idKey?: Maybe<TsWhereString>;
  destination?: Maybe<TsWhereString>;
  privateAcl?: Maybe<TsWhereBoolean>;
  environmentVariables?: Maybe<TsWhereTsStaticSiteEnvironmentVariables>;
  triggers?: Maybe<TsWhereTsStaticSiteTriggers>;
  templateHash?: Maybe<TsWhereString>;
  _id?: Maybe<TsWhereId>;
  _version?: Maybe<TsWhereInteger>;
  _shapeId?: Maybe<TsWhereId>;
  _shapeName?: Maybe<TsWhereString>;
  _createdAt?: Maybe<TsWhereDate>;
  _updatedAt?: Maybe<TsWhereDate>;
  _schemaVersion?: Maybe<TsWhereNumber>;
  _status?: Maybe<TsWhereWorkflow>;
  _contentTypeId?: Maybe<TsWhereId>;
  _contentTypeName?: Maybe<TsWhereString>;
  AND?: Maybe<Array<Maybe<TsTsStaticSiteAndOperator>>>;
  OR?: Maybe<Array<Maybe<TsTsStaticSiteOrOperator>>>;
  NOT?: Maybe<TsTsStaticSiteNotOperator>;
};

/** OR takes an array of conditions that should appear in the matching results. Nested boolean operators can be used to create complex filters. */
export type TsTsStaticSiteOrOperator = {
  title?: Maybe<TsWhereString>;
  baseUrl?: Maybe<TsWhereString>;
  provider?: Maybe<TsWhereString>;
  idKey?: Maybe<TsWhereString>;
  destination?: Maybe<TsWhereString>;
  privateAcl?: Maybe<TsWhereBoolean>;
  environmentVariables?: Maybe<TsWhereTsStaticSiteEnvironmentVariables>;
  triggers?: Maybe<TsWhereTsStaticSiteTriggers>;
  templateHash?: Maybe<TsWhereString>;
  _id?: Maybe<TsWhereId>;
  _version?: Maybe<TsWhereInteger>;
  _shapeId?: Maybe<TsWhereId>;
  _shapeName?: Maybe<TsWhereString>;
  _createdAt?: Maybe<TsWhereDate>;
  _updatedAt?: Maybe<TsWhereDate>;
  _schemaVersion?: Maybe<TsWhereNumber>;
  _status?: Maybe<TsWhereWorkflow>;
  _contentTypeId?: Maybe<TsWhereId>;
  _contentTypeName?: Maybe<TsWhereString>;
  AND?: Maybe<Array<Maybe<TsTsStaticSiteAndOperator>>>;
  OR?: Maybe<Array<Maybe<TsTsStaticSiteOrOperator>>>;
  NOT?: Maybe<TsTsStaticSiteNotOperator>;
};

/** NOT takes a single condition that must not appear in the matching results. */
export type TsTsStaticSiteNotOperator = {
  title?: Maybe<TsWhereString>;
  baseUrl?: Maybe<TsWhereString>;
  provider?: Maybe<TsWhereString>;
  idKey?: Maybe<TsWhereString>;
  destination?: Maybe<TsWhereString>;
  privateAcl?: Maybe<TsWhereBoolean>;
  environmentVariables?: Maybe<TsWhereTsStaticSiteEnvironmentVariables>;
  triggers?: Maybe<TsWhereTsStaticSiteTriggers>;
  templateHash?: Maybe<TsWhereString>;
  _id?: Maybe<TsWhereId>;
  _version?: Maybe<TsWhereInteger>;
  _shapeId?: Maybe<TsWhereId>;
  _shapeName?: Maybe<TsWhereString>;
  _createdAt?: Maybe<TsWhereDate>;
  _updatedAt?: Maybe<TsWhereDate>;
  _schemaVersion?: Maybe<TsWhereNumber>;
  _status?: Maybe<TsWhereWorkflow>;
  _contentTypeId?: Maybe<TsWhereId>;
  _contentTypeName?: Maybe<TsWhereString>;
};

/** TsStaticSite search results */
export type TsStaticSiteSearchResults = {
  __typename?: 'TsStaticSiteSearchResults';
  results?: Maybe<Array<Maybe<TsSearchable>>>;
  total?: Maybe<Scalars['Int']>;
};

export type TsWhereApartmentInput = {
  sponsor?: Maybe<TsWhereApartmentRelationship>;
  bookingIcal?: Maybe<TsWhereString>;
  coverJpg?: Maybe<TsWhereAssetRelationship>;
  brandColor?: Maybe<TsWhereTsColor>;
  code?: Maybe<TsWhereString>;
  lighterColor?: Maybe<TsWhereTsColor>;
  address?: Maybe<TsWhereString>;
  latitude?: Maybe<TsWhereString>;
  lightColor?: Maybe<TsWhereTsColor>;
  airbnbLink?: Maybe<TsWhereString>;
  airBnb?: Maybe<TsWhereString>;
  facebookLink?: Maybe<TsWhereString>;
  coverWebp?: Maybe<TsWhereAssetRelationship>;
  name?: Maybe<TsWhereString>;
  location?: Maybe<TsWhereString>;
  airbnbIcal?: Maybe<TsWhereString>;
  key?: Maybe<TsWhereString>;
  longitude?: Maybe<TsWhereString>;
  _id?: Maybe<TsWhereId>;
  _version?: Maybe<TsWhereInteger>;
  _shapeId?: Maybe<TsWhereId>;
  _shapeName?: Maybe<TsWhereString>;
  _createdAt?: Maybe<TsWhereDate>;
  _updatedAt?: Maybe<TsWhereDate>;
  _schemaVersion?: Maybe<TsWhereNumber>;
  _status?: Maybe<TsWhereWorkflow>;
  _contentTypeId?: Maybe<TsWhereId>;
  _contentTypeName?: Maybe<TsWhereString>;
  AND?: Maybe<Array<Maybe<TsApartmentAndOperator>>>;
  OR?: Maybe<Array<Maybe<TsApartmentOrOperator>>>;
  NOT?: Maybe<TsApartmentNotOperator>;
};

/** AND takes an array of conditions that must appear in the matching results. Nested boolean operators can be used to create complex filters. */
export type TsApartmentAndOperator = {
  sponsor?: Maybe<TsWhereApartmentRelationship>;
  bookingIcal?: Maybe<TsWhereString>;
  coverJpg?: Maybe<TsWhereAssetRelationship>;
  brandColor?: Maybe<TsWhereTsColor>;
  code?: Maybe<TsWhereString>;
  lighterColor?: Maybe<TsWhereTsColor>;
  address?: Maybe<TsWhereString>;
  latitude?: Maybe<TsWhereString>;
  lightColor?: Maybe<TsWhereTsColor>;
  airbnbLink?: Maybe<TsWhereString>;
  airBnb?: Maybe<TsWhereString>;
  facebookLink?: Maybe<TsWhereString>;
  coverWebp?: Maybe<TsWhereAssetRelationship>;
  name?: Maybe<TsWhereString>;
  location?: Maybe<TsWhereString>;
  airbnbIcal?: Maybe<TsWhereString>;
  key?: Maybe<TsWhereString>;
  longitude?: Maybe<TsWhereString>;
  _id?: Maybe<TsWhereId>;
  _version?: Maybe<TsWhereInteger>;
  _shapeId?: Maybe<TsWhereId>;
  _shapeName?: Maybe<TsWhereString>;
  _createdAt?: Maybe<TsWhereDate>;
  _updatedAt?: Maybe<TsWhereDate>;
  _schemaVersion?: Maybe<TsWhereNumber>;
  _status?: Maybe<TsWhereWorkflow>;
  _contentTypeId?: Maybe<TsWhereId>;
  _contentTypeName?: Maybe<TsWhereString>;
  AND?: Maybe<Array<Maybe<TsApartmentAndOperator>>>;
  OR?: Maybe<Array<Maybe<TsApartmentOrOperator>>>;
  NOT?: Maybe<TsApartmentNotOperator>;
};

/** OR takes an array of conditions that should appear in the matching results. Nested boolean operators can be used to create complex filters. */
export type TsApartmentOrOperator = {
  sponsor?: Maybe<TsWhereApartmentRelationship>;
  bookingIcal?: Maybe<TsWhereString>;
  coverJpg?: Maybe<TsWhereAssetRelationship>;
  brandColor?: Maybe<TsWhereTsColor>;
  code?: Maybe<TsWhereString>;
  lighterColor?: Maybe<TsWhereTsColor>;
  address?: Maybe<TsWhereString>;
  latitude?: Maybe<TsWhereString>;
  lightColor?: Maybe<TsWhereTsColor>;
  airbnbLink?: Maybe<TsWhereString>;
  airBnb?: Maybe<TsWhereString>;
  facebookLink?: Maybe<TsWhereString>;
  coverWebp?: Maybe<TsWhereAssetRelationship>;
  name?: Maybe<TsWhereString>;
  location?: Maybe<TsWhereString>;
  airbnbIcal?: Maybe<TsWhereString>;
  key?: Maybe<TsWhereString>;
  longitude?: Maybe<TsWhereString>;
  _id?: Maybe<TsWhereId>;
  _version?: Maybe<TsWhereInteger>;
  _shapeId?: Maybe<TsWhereId>;
  _shapeName?: Maybe<TsWhereString>;
  _createdAt?: Maybe<TsWhereDate>;
  _updatedAt?: Maybe<TsWhereDate>;
  _schemaVersion?: Maybe<TsWhereNumber>;
  _status?: Maybe<TsWhereWorkflow>;
  _contentTypeId?: Maybe<TsWhereId>;
  _contentTypeName?: Maybe<TsWhereString>;
  AND?: Maybe<Array<Maybe<TsApartmentAndOperator>>>;
  OR?: Maybe<Array<Maybe<TsApartmentOrOperator>>>;
  NOT?: Maybe<TsApartmentNotOperator>;
};

/** NOT takes a single condition that must not appear in the matching results. */
export type TsApartmentNotOperator = {
  sponsor?: Maybe<TsWhereApartmentRelationship>;
  bookingIcal?: Maybe<TsWhereString>;
  coverJpg?: Maybe<TsWhereAssetRelationship>;
  brandColor?: Maybe<TsWhereTsColor>;
  code?: Maybe<TsWhereString>;
  lighterColor?: Maybe<TsWhereTsColor>;
  address?: Maybe<TsWhereString>;
  latitude?: Maybe<TsWhereString>;
  lightColor?: Maybe<TsWhereTsColor>;
  airbnbLink?: Maybe<TsWhereString>;
  airBnb?: Maybe<TsWhereString>;
  facebookLink?: Maybe<TsWhereString>;
  coverWebp?: Maybe<TsWhereAssetRelationship>;
  name?: Maybe<TsWhereString>;
  location?: Maybe<TsWhereString>;
  airbnbIcal?: Maybe<TsWhereString>;
  key?: Maybe<TsWhereString>;
  longitude?: Maybe<TsWhereString>;
  _id?: Maybe<TsWhereId>;
  _version?: Maybe<TsWhereInteger>;
  _shapeId?: Maybe<TsWhereId>;
  _shapeName?: Maybe<TsWhereString>;
  _createdAt?: Maybe<TsWhereDate>;
  _updatedAt?: Maybe<TsWhereDate>;
  _schemaVersion?: Maybe<TsWhereNumber>;
  _status?: Maybe<TsWhereWorkflow>;
  _contentTypeId?: Maybe<TsWhereId>;
  _contentTypeName?: Maybe<TsWhereString>;
};

/** Apartment search results */
export type ApartmentSearchResults = {
  __typename?: 'ApartmentSearchResults';
  results?: Maybe<Array<Maybe<TsSearchable>>>;
  total?: Maybe<Scalars['Int']>;
};

export type TsWhereArticleInput = {
  path?: Maybe<TsWhereString>;
  title?: Maybe<TsWhereString>;
  relationship?: Maybe<TsWhereLanguageRelationship>;
  content?: Maybe<TsWhereDraftjs>;
  _id?: Maybe<TsWhereId>;
  _version?: Maybe<TsWhereInteger>;
  _shapeId?: Maybe<TsWhereId>;
  _shapeName?: Maybe<TsWhereString>;
  _createdAt?: Maybe<TsWhereDate>;
  _updatedAt?: Maybe<TsWhereDate>;
  _schemaVersion?: Maybe<TsWhereNumber>;
  _status?: Maybe<TsWhereWorkflow>;
  _contentTypeId?: Maybe<TsWhereId>;
  _contentTypeName?: Maybe<TsWhereString>;
  AND?: Maybe<Array<Maybe<TsArticleAndOperator>>>;
  OR?: Maybe<Array<Maybe<TsArticleOrOperator>>>;
  NOT?: Maybe<TsArticleNotOperator>;
};

/** AND takes an array of conditions that must appear in the matching results. Nested boolean operators can be used to create complex filters. */
export type TsArticleAndOperator = {
  path?: Maybe<TsWhereString>;
  title?: Maybe<TsWhereString>;
  relationship?: Maybe<TsWhereLanguageRelationship>;
  content?: Maybe<TsWhereDraftjs>;
  _id?: Maybe<TsWhereId>;
  _version?: Maybe<TsWhereInteger>;
  _shapeId?: Maybe<TsWhereId>;
  _shapeName?: Maybe<TsWhereString>;
  _createdAt?: Maybe<TsWhereDate>;
  _updatedAt?: Maybe<TsWhereDate>;
  _schemaVersion?: Maybe<TsWhereNumber>;
  _status?: Maybe<TsWhereWorkflow>;
  _contentTypeId?: Maybe<TsWhereId>;
  _contentTypeName?: Maybe<TsWhereString>;
  AND?: Maybe<Array<Maybe<TsArticleAndOperator>>>;
  OR?: Maybe<Array<Maybe<TsArticleOrOperator>>>;
  NOT?: Maybe<TsArticleNotOperator>;
};

/** OR takes an array of conditions that should appear in the matching results. Nested boolean operators can be used to create complex filters. */
export type TsArticleOrOperator = {
  path?: Maybe<TsWhereString>;
  title?: Maybe<TsWhereString>;
  relationship?: Maybe<TsWhereLanguageRelationship>;
  content?: Maybe<TsWhereDraftjs>;
  _id?: Maybe<TsWhereId>;
  _version?: Maybe<TsWhereInteger>;
  _shapeId?: Maybe<TsWhereId>;
  _shapeName?: Maybe<TsWhereString>;
  _createdAt?: Maybe<TsWhereDate>;
  _updatedAt?: Maybe<TsWhereDate>;
  _schemaVersion?: Maybe<TsWhereNumber>;
  _status?: Maybe<TsWhereWorkflow>;
  _contentTypeId?: Maybe<TsWhereId>;
  _contentTypeName?: Maybe<TsWhereString>;
  AND?: Maybe<Array<Maybe<TsArticleAndOperator>>>;
  OR?: Maybe<Array<Maybe<TsArticleOrOperator>>>;
  NOT?: Maybe<TsArticleNotOperator>;
};

/** NOT takes a single condition that must not appear in the matching results. */
export type TsArticleNotOperator = {
  path?: Maybe<TsWhereString>;
  title?: Maybe<TsWhereString>;
  relationship?: Maybe<TsWhereLanguageRelationship>;
  content?: Maybe<TsWhereDraftjs>;
  _id?: Maybe<TsWhereId>;
  _version?: Maybe<TsWhereInteger>;
  _shapeId?: Maybe<TsWhereId>;
  _shapeName?: Maybe<TsWhereString>;
  _createdAt?: Maybe<TsWhereDate>;
  _updatedAt?: Maybe<TsWhereDate>;
  _schemaVersion?: Maybe<TsWhereNumber>;
  _status?: Maybe<TsWhereWorkflow>;
  _contentTypeId?: Maybe<TsWhereId>;
  _contentTypeName?: Maybe<TsWhereString>;
};

/** Article search results */
export type ArticleSearchResults = {
  __typename?: 'ArticleSearchResults';
  results?: Maybe<Array<Maybe<TsSearchable>>>;
  total?: Maybe<Scalars['Int']>;
};

export type TsWhereFaqInput = {
  apartment?: Maybe<TsWhereApartmentRelationship>;
  language?: Maybe<TsWhereLanguageRelationship>;
  question?: Maybe<TsWhereString>;
  answer?: Maybe<TsWhereDraftjs>;
  linkVideo?: Maybe<TsWhereString>;
  asset?: Maybe<TsWhereAssetRelationship>;
  _id?: Maybe<TsWhereId>;
  _version?: Maybe<TsWhereInteger>;
  _shapeId?: Maybe<TsWhereId>;
  _shapeName?: Maybe<TsWhereString>;
  _createdAt?: Maybe<TsWhereDate>;
  _updatedAt?: Maybe<TsWhereDate>;
  _schemaVersion?: Maybe<TsWhereNumber>;
  _status?: Maybe<TsWhereWorkflow>;
  _contentTypeId?: Maybe<TsWhereId>;
  _contentTypeName?: Maybe<TsWhereString>;
  AND?: Maybe<Array<Maybe<TsFaqAndOperator>>>;
  OR?: Maybe<Array<Maybe<TsFaqOrOperator>>>;
  NOT?: Maybe<TsFaqNotOperator>;
};

/** AND takes an array of conditions that must appear in the matching results. Nested boolean operators can be used to create complex filters. */
export type TsFaqAndOperator = {
  apartment?: Maybe<TsWhereApartmentRelationship>;
  language?: Maybe<TsWhereLanguageRelationship>;
  question?: Maybe<TsWhereString>;
  answer?: Maybe<TsWhereDraftjs>;
  linkVideo?: Maybe<TsWhereString>;
  asset?: Maybe<TsWhereAssetRelationship>;
  _id?: Maybe<TsWhereId>;
  _version?: Maybe<TsWhereInteger>;
  _shapeId?: Maybe<TsWhereId>;
  _shapeName?: Maybe<TsWhereString>;
  _createdAt?: Maybe<TsWhereDate>;
  _updatedAt?: Maybe<TsWhereDate>;
  _schemaVersion?: Maybe<TsWhereNumber>;
  _status?: Maybe<TsWhereWorkflow>;
  _contentTypeId?: Maybe<TsWhereId>;
  _contentTypeName?: Maybe<TsWhereString>;
  AND?: Maybe<Array<Maybe<TsFaqAndOperator>>>;
  OR?: Maybe<Array<Maybe<TsFaqOrOperator>>>;
  NOT?: Maybe<TsFaqNotOperator>;
};

/** OR takes an array of conditions that should appear in the matching results. Nested boolean operators can be used to create complex filters. */
export type TsFaqOrOperator = {
  apartment?: Maybe<TsWhereApartmentRelationship>;
  language?: Maybe<TsWhereLanguageRelationship>;
  question?: Maybe<TsWhereString>;
  answer?: Maybe<TsWhereDraftjs>;
  linkVideo?: Maybe<TsWhereString>;
  asset?: Maybe<TsWhereAssetRelationship>;
  _id?: Maybe<TsWhereId>;
  _version?: Maybe<TsWhereInteger>;
  _shapeId?: Maybe<TsWhereId>;
  _shapeName?: Maybe<TsWhereString>;
  _createdAt?: Maybe<TsWhereDate>;
  _updatedAt?: Maybe<TsWhereDate>;
  _schemaVersion?: Maybe<TsWhereNumber>;
  _status?: Maybe<TsWhereWorkflow>;
  _contentTypeId?: Maybe<TsWhereId>;
  _contentTypeName?: Maybe<TsWhereString>;
  AND?: Maybe<Array<Maybe<TsFaqAndOperator>>>;
  OR?: Maybe<Array<Maybe<TsFaqOrOperator>>>;
  NOT?: Maybe<TsFaqNotOperator>;
};

/** NOT takes a single condition that must not appear in the matching results. */
export type TsFaqNotOperator = {
  apartment?: Maybe<TsWhereApartmentRelationship>;
  language?: Maybe<TsWhereLanguageRelationship>;
  question?: Maybe<TsWhereString>;
  answer?: Maybe<TsWhereDraftjs>;
  linkVideo?: Maybe<TsWhereString>;
  asset?: Maybe<TsWhereAssetRelationship>;
  _id?: Maybe<TsWhereId>;
  _version?: Maybe<TsWhereInteger>;
  _shapeId?: Maybe<TsWhereId>;
  _shapeName?: Maybe<TsWhereString>;
  _createdAt?: Maybe<TsWhereDate>;
  _updatedAt?: Maybe<TsWhereDate>;
  _schemaVersion?: Maybe<TsWhereNumber>;
  _status?: Maybe<TsWhereWorkflow>;
  _contentTypeId?: Maybe<TsWhereId>;
  _contentTypeName?: Maybe<TsWhereString>;
};

/** Faq search results */
export type FaqSearchResults = {
  __typename?: 'FaqSearchResults';
  results?: Maybe<Array<Maybe<TsSearchable>>>;
  total?: Maybe<Scalars['Int']>;
};

export type TsWhereRegistrationsInput = {
  guests?: Maybe<TsWhereRegistrationsGuests>;
  registrationStatus?: Maybe<TsWhereString>;
  apartmentKey?: Maybe<TsWhereString>;
  email?: Maybe<TsWhereString>;
  _id?: Maybe<TsWhereId>;
  _version?: Maybe<TsWhereInteger>;
  _shapeId?: Maybe<TsWhereId>;
  _shapeName?: Maybe<TsWhereString>;
  _createdAt?: Maybe<TsWhereDate>;
  _updatedAt?: Maybe<TsWhereDate>;
  _schemaVersion?: Maybe<TsWhereNumber>;
  _status?: Maybe<TsWhereWorkflow>;
  _contentTypeId?: Maybe<TsWhereId>;
  _contentTypeName?: Maybe<TsWhereString>;
  AND?: Maybe<Array<Maybe<TsRegistrationsAndOperator>>>;
  OR?: Maybe<Array<Maybe<TsRegistrationsOrOperator>>>;
  NOT?: Maybe<TsRegistrationsNotOperator>;
};

/** AND takes an array of conditions that must appear in the matching results. Nested boolean operators can be used to create complex filters. */
export type TsRegistrationsAndOperator = {
  guests?: Maybe<TsWhereRegistrationsGuests>;
  registrationStatus?: Maybe<TsWhereString>;
  apartmentKey?: Maybe<TsWhereString>;
  email?: Maybe<TsWhereString>;
  _id?: Maybe<TsWhereId>;
  _version?: Maybe<TsWhereInteger>;
  _shapeId?: Maybe<TsWhereId>;
  _shapeName?: Maybe<TsWhereString>;
  _createdAt?: Maybe<TsWhereDate>;
  _updatedAt?: Maybe<TsWhereDate>;
  _schemaVersion?: Maybe<TsWhereNumber>;
  _status?: Maybe<TsWhereWorkflow>;
  _contentTypeId?: Maybe<TsWhereId>;
  _contentTypeName?: Maybe<TsWhereString>;
  AND?: Maybe<Array<Maybe<TsRegistrationsAndOperator>>>;
  OR?: Maybe<Array<Maybe<TsRegistrationsOrOperator>>>;
  NOT?: Maybe<TsRegistrationsNotOperator>;
};

/** OR takes an array of conditions that should appear in the matching results. Nested boolean operators can be used to create complex filters. */
export type TsRegistrationsOrOperator = {
  guests?: Maybe<TsWhereRegistrationsGuests>;
  registrationStatus?: Maybe<TsWhereString>;
  apartmentKey?: Maybe<TsWhereString>;
  email?: Maybe<TsWhereString>;
  _id?: Maybe<TsWhereId>;
  _version?: Maybe<TsWhereInteger>;
  _shapeId?: Maybe<TsWhereId>;
  _shapeName?: Maybe<TsWhereString>;
  _createdAt?: Maybe<TsWhereDate>;
  _updatedAt?: Maybe<TsWhereDate>;
  _schemaVersion?: Maybe<TsWhereNumber>;
  _status?: Maybe<TsWhereWorkflow>;
  _contentTypeId?: Maybe<TsWhereId>;
  _contentTypeName?: Maybe<TsWhereString>;
  AND?: Maybe<Array<Maybe<TsRegistrationsAndOperator>>>;
  OR?: Maybe<Array<Maybe<TsRegistrationsOrOperator>>>;
  NOT?: Maybe<TsRegistrationsNotOperator>;
};

/** NOT takes a single condition that must not appear in the matching results. */
export type TsRegistrationsNotOperator = {
  guests?: Maybe<TsWhereRegistrationsGuests>;
  registrationStatus?: Maybe<TsWhereString>;
  apartmentKey?: Maybe<TsWhereString>;
  email?: Maybe<TsWhereString>;
  _id?: Maybe<TsWhereId>;
  _version?: Maybe<TsWhereInteger>;
  _shapeId?: Maybe<TsWhereId>;
  _shapeName?: Maybe<TsWhereString>;
  _createdAt?: Maybe<TsWhereDate>;
  _updatedAt?: Maybe<TsWhereDate>;
  _schemaVersion?: Maybe<TsWhereNumber>;
  _status?: Maybe<TsWhereWorkflow>;
  _contentTypeId?: Maybe<TsWhereId>;
  _contentTypeName?: Maybe<TsWhereString>;
};

/** Registrations search results */
export type RegistrationsSearchResults = {
  __typename?: 'RegistrationsSearchResults';
  results?: Maybe<Array<Maybe<TsSearchable>>>;
  total?: Maybe<Scalars['Int']>;
};

export type TsWhereLanguageInput = {
  code?: Maybe<TsWhereString>;
  _id?: Maybe<TsWhereId>;
  _version?: Maybe<TsWhereInteger>;
  _shapeId?: Maybe<TsWhereId>;
  _shapeName?: Maybe<TsWhereString>;
  _createdAt?: Maybe<TsWhereDate>;
  _updatedAt?: Maybe<TsWhereDate>;
  _schemaVersion?: Maybe<TsWhereNumber>;
  _status?: Maybe<TsWhereWorkflow>;
  _contentTypeId?: Maybe<TsWhereId>;
  _contentTypeName?: Maybe<TsWhereString>;
  AND?: Maybe<Array<Maybe<TsLanguageAndOperator>>>;
  OR?: Maybe<Array<Maybe<TsLanguageOrOperator>>>;
  NOT?: Maybe<TsLanguageNotOperator>;
};

/** Language search results */
export type LanguageSearchResults = {
  __typename?: 'LanguageSearchResults';
  results?: Maybe<Array<Maybe<TsSearchable>>>;
  total?: Maybe<Scalars['Int']>;
};

export type Asset = TsSearchable & {
  __typename?: 'Asset';
  sourceUrl?: Maybe<Scalars['String']>;
  path: Scalars['String'];
  filename: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['JSON']>;
  captionHtml?: Maybe<Scalars['String']>;
  uploadStatus?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  credit?: Maybe<Scalars['JSON']>;
  creditHtml?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ID']>;
  _version?: Maybe<Scalars['Int']>;
  _shapeId?: Maybe<Scalars['String']>;
  _shapeName?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['String']>;
  _createdBy?: Maybe<TsUser>;
  _updatedAt?: Maybe<Scalars['String']>;
  _updatedBy?: Maybe<TsUser>;
  _schemaVersion?: Maybe<Scalars['Float']>;
  /** @deprecated Use _status instead */
  _enabled?: Maybe<Scalars['Boolean']>;
  /** @deprecated Use a custom date field instead */
  _enabledAt?: Maybe<Scalars['String']>;
  _status?: Maybe<DefaultWorkflow>;
  _contentTypeId?: Maybe<Scalars['String']>;
  _contentTypeName?: Maybe<Scalars['String']>;
  /** @deprecated Use path instead */
  s3Key?: Maybe<Scalars['String']>;
  searchSummary?: Maybe<Scalars['String']>;
  _references?: Maybe<AssetReferencePaginatedList>;
  apartmentSet?: Maybe<ApartmentPaginatedList>;
  faqSet?: Maybe<FaqPaginatedList>;
};


export type AssetCaptionHtmlArgs = {
  imageConfig?: Maybe<Scalars['JSON']>;
  images?: Maybe<TsImagesConfig>;
  classPrefix?: Maybe<Scalars['String']>;
};


export type AssetCreditHtmlArgs = {
  imageConfig?: Maybe<Scalars['JSON']>;
  images?: Maybe<TsImagesConfig>;
  classPrefix?: Maybe<Scalars['String']>;
};


export type Asset_ReferencesArgs = {
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
  terms?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  filter?: Maybe<Scalars['JSON']>;
  sort?: Maybe<Array<Maybe<TsSearchSort>>>;
};


export type AssetApartmentSetArgs = {
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
  terms?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  filter?: Maybe<Scalars['JSON']>;
  sort?: Maybe<Array<Maybe<TsSearchSort>>>;
};


export type AssetFaqSetArgs = {
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
  terms?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  filter?: Maybe<Scalars['JSON']>;
  sort?: Maybe<Array<Maybe<TsSearchSort>>>;
};

export type AssetReferencePaginatedList = {
  __typename?: 'AssetReferencePaginatedList';
  items?: Maybe<Array<Maybe<AssetReference>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AssetReference = Apartment | Faq;

export type Apartment = TsSearchable & {
  __typename?: 'Apartment';
  sponsor?: Maybe<Array<Maybe<Apartment>>>;
  bookingIcal?: Maybe<Scalars['String']>;
  coverJpg?: Maybe<Asset>;
  brandColor?: Maybe<TsColor>;
  code?: Maybe<Scalars['String']>;
  lighterColor?: Maybe<TsColor>;
  address?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['String']>;
  lightColor?: Maybe<TsColor>;
  airbnbLink?: Maybe<Scalars['String']>;
  airBnb?: Maybe<Scalars['String']>;
  facebookLink?: Maybe<Scalars['String']>;
  coverWebp?: Maybe<Asset>;
  name?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  airbnbIcal?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ID']>;
  _version?: Maybe<Scalars['Int']>;
  _shapeId?: Maybe<Scalars['String']>;
  _shapeName?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['String']>;
  _createdBy?: Maybe<TsUser>;
  _updatedAt?: Maybe<Scalars['String']>;
  _updatedBy?: Maybe<TsUser>;
  _schemaVersion?: Maybe<Scalars['Float']>;
  /** @deprecated Use _status instead */
  _enabled?: Maybe<Scalars['Boolean']>;
  /** @deprecated Use a custom date field instead */
  _enabledAt?: Maybe<Scalars['String']>;
  _status?: Maybe<DefaultWorkflow>;
  _contentTypeId?: Maybe<Scalars['String']>;
  _contentTypeName?: Maybe<Scalars['String']>;
  searchSummary?: Maybe<Scalars['String']>;
  _references?: Maybe<ApartmentReferencePaginatedList>;
  apartmentSet?: Maybe<ApartmentPaginatedList>;
  faqSet?: Maybe<FaqPaginatedList>;
};


export type ApartmentSponsorArgs = {
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
};


export type ApartmentCoverJpgArgs = {
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
};


export type ApartmentCoverWebpArgs = {
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
};


export type Apartment_ReferencesArgs = {
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
  terms?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  filter?: Maybe<Scalars['JSON']>;
  sort?: Maybe<Array<Maybe<TsSearchSort>>>;
};


export type ApartmentApartmentSetArgs = {
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
  terms?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  filter?: Maybe<Scalars['JSON']>;
  sort?: Maybe<Array<Maybe<TsSearchSort>>>;
};


export type ApartmentFaqSetArgs = {
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
  terms?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  filter?: Maybe<Scalars['JSON']>;
  sort?: Maybe<Array<Maybe<TsSearchSort>>>;
};

export type TsColor = {
  __typename?: 'TSColor';
  hex?: Maybe<Scalars['String']>;
  hsl?: Maybe<TsColorHsl>;
  hsv?: Maybe<TsColorHsv>;
  rgb?: Maybe<TsColorRgb>;
};

export type TsColorHsl = {
  __typename?: 'TSColorHsl';
  h?: Maybe<Scalars['Float']>;
  a?: Maybe<Scalars['Float']>;
  s?: Maybe<Scalars['Float']>;
  l?: Maybe<Scalars['Float']>;
};

export type TsColorHsv = {
  __typename?: 'TSColorHsv';
  h?: Maybe<Scalars['Float']>;
  a?: Maybe<Scalars['Float']>;
  s?: Maybe<Scalars['Float']>;
  v?: Maybe<Scalars['Float']>;
};

export type TsColorRgb = {
  __typename?: 'TSColorRgb';
  a?: Maybe<Scalars['Float']>;
  b?: Maybe<Scalars['Float']>;
  r?: Maybe<Scalars['Float']>;
  g?: Maybe<Scalars['Float']>;
};

export type ApartmentReferencePaginatedList = {
  __typename?: 'ApartmentReferencePaginatedList';
  items?: Maybe<Array<Maybe<ApartmentReference>>>;
  total?: Maybe<Scalars['Int']>;
};

export type ApartmentReference = Apartment | Faq;

export type Faq = TsSearchable & {
  __typename?: 'Faq';
  apartment?: Maybe<Apartment>;
  language?: Maybe<Language>;
  question: Scalars['String'];
  answer: Scalars['JSON'];
  answerHtml?: Maybe<Scalars['String']>;
  linkVideo?: Maybe<Scalars['String']>;
  asset?: Maybe<Asset>;
  _id?: Maybe<Scalars['ID']>;
  _version?: Maybe<Scalars['Int']>;
  _shapeId?: Maybe<Scalars['String']>;
  _shapeName?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['String']>;
  _createdBy?: Maybe<TsUser>;
  _updatedAt?: Maybe<Scalars['String']>;
  _updatedBy?: Maybe<TsUser>;
  _schemaVersion?: Maybe<Scalars['Float']>;
  /** @deprecated Use _status instead */
  _enabled?: Maybe<Scalars['Boolean']>;
  /** @deprecated Use a custom date field instead */
  _enabledAt?: Maybe<Scalars['String']>;
  _status?: Maybe<DefaultWorkflow>;
  _contentTypeId?: Maybe<Scalars['String']>;
  _contentTypeName?: Maybe<Scalars['String']>;
  searchSummary?: Maybe<Scalars['String']>;
};


export type FaqApartmentArgs = {
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
};


export type FaqLanguageArgs = {
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
};


export type FaqAnswerHtmlArgs = {
  imageConfig?: Maybe<Scalars['JSON']>;
  images?: Maybe<TsImagesConfig>;
  classPrefix?: Maybe<Scalars['String']>;
};


export type FaqAssetArgs = {
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
};

export type Language = TsSearchable & {
  __typename?: 'Language';
  code?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ID']>;
  _version?: Maybe<Scalars['Int']>;
  _shapeId?: Maybe<Scalars['String']>;
  _shapeName?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['String']>;
  _createdBy?: Maybe<TsUser>;
  _updatedAt?: Maybe<Scalars['String']>;
  _updatedBy?: Maybe<TsUser>;
  _schemaVersion?: Maybe<Scalars['Float']>;
  /** @deprecated Use _status instead */
  _enabled?: Maybe<Scalars['Boolean']>;
  /** @deprecated Use a custom date field instead */
  _enabledAt?: Maybe<Scalars['String']>;
  _status?: Maybe<DefaultWorkflow>;
  _contentTypeId?: Maybe<Scalars['String']>;
  _contentTypeName?: Maybe<Scalars['String']>;
  searchSummary?: Maybe<Scalars['String']>;
  _references?: Maybe<LanguageReferencePaginatedList>;
  articleSet?: Maybe<ArticlePaginatedList>;
  faqSet?: Maybe<FaqPaginatedList>;
};


export type Language_ReferencesArgs = {
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
  terms?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  filter?: Maybe<Scalars['JSON']>;
  sort?: Maybe<Array<Maybe<TsSearchSort>>>;
};


export type LanguageArticleSetArgs = {
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
  terms?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  filter?: Maybe<Scalars['JSON']>;
  sort?: Maybe<Array<Maybe<TsSearchSort>>>;
};


export type LanguageFaqSetArgs = {
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
  terms?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  filter?: Maybe<Scalars['JSON']>;
  sort?: Maybe<Array<Maybe<TsSearchSort>>>;
};

export type LanguageReferencePaginatedList = {
  __typename?: 'LanguageReferencePaginatedList';
  items?: Maybe<Array<Maybe<LanguageReference>>>;
  total?: Maybe<Scalars['Int']>;
};

export type LanguageReference = Article | Faq;

export type Article = TsSearchable & {
  __typename?: 'Article';
  path?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  relationship?: Maybe<Language>;
  content?: Maybe<Scalars['JSON']>;
  contentHtml?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ID']>;
  _version?: Maybe<Scalars['Int']>;
  _shapeId?: Maybe<Scalars['String']>;
  _shapeName?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['String']>;
  _createdBy?: Maybe<TsUser>;
  _updatedAt?: Maybe<Scalars['String']>;
  _updatedBy?: Maybe<TsUser>;
  _schemaVersion?: Maybe<Scalars['Float']>;
  /** @deprecated Use _status instead */
  _enabled?: Maybe<Scalars['Boolean']>;
  /** @deprecated Use a custom date field instead */
  _enabledAt?: Maybe<Scalars['String']>;
  _status?: Maybe<DefaultWorkflow>;
  _contentTypeId?: Maybe<Scalars['String']>;
  _contentTypeName?: Maybe<Scalars['String']>;
  searchSummary?: Maybe<Scalars['String']>;
};


export type ArticleRelationshipArgs = {
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
};


export type ArticleContentHtmlArgs = {
  imageConfig?: Maybe<Scalars['JSON']>;
  images?: Maybe<TsImagesConfig>;
  classPrefix?: Maybe<Scalars['String']>;
};

/** Returns a Article list in natural order. */
export type ArticlePaginatedList = {
  __typename?: 'ArticlePaginatedList';
  items?: Maybe<Array<Maybe<Article>>>;
  total?: Maybe<Scalars['Int']>;
};

/** Returns a Faq list in natural order. */
export type FaqPaginatedList = {
  __typename?: 'FaqPaginatedList';
  items?: Maybe<Array<Maybe<Faq>>>;
  total?: Maybe<Scalars['Int']>;
};

/** Returns a Apartment list in natural order. */
export type ApartmentPaginatedList = {
  __typename?: 'ApartmentPaginatedList';
  items?: Maybe<Array<Maybe<Apartment>>>;
  total?: Maybe<Scalars['Int']>;
};

/** Returns a Asset list in natural order. */
export type AssetPaginatedList = {
  __typename?: 'AssetPaginatedList';
  items?: Maybe<Array<Maybe<Asset>>>;
  total?: Maybe<Scalars['Int']>;
};

export type TsStaticSite = TsSearchable & {
  __typename?: 'TsStaticSite';
  title: Scalars['String'];
  baseUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  idKey?: Maybe<Scalars['String']>;
  secretKey?: Maybe<Scalars['String']>;
  destination: Scalars['String'];
  privateAcl?: Maybe<Scalars['Boolean']>;
  environmentVariables?: Maybe<Array<Maybe<TsStaticSiteEnvironmentVariables>>>;
  triggers?: Maybe<Array<Maybe<TsStaticSiteTriggers>>>;
  templateHash?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ID']>;
  _version?: Maybe<Scalars['Int']>;
  _shapeId?: Maybe<Scalars['String']>;
  _shapeName?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['String']>;
  _createdBy?: Maybe<TsUser>;
  _updatedAt?: Maybe<Scalars['String']>;
  _updatedBy?: Maybe<TsUser>;
  _schemaVersion?: Maybe<Scalars['Float']>;
  /** @deprecated Use _status instead */
  _enabled?: Maybe<Scalars['Boolean']>;
  /** @deprecated Use a custom date field instead */
  _enabledAt?: Maybe<Scalars['String']>;
  _status?: Maybe<DefaultWorkflow>;
  _contentTypeId?: Maybe<Scalars['String']>;
  _contentTypeName?: Maybe<Scalars['String']>;
  searchSummary?: Maybe<Scalars['String']>;
};

export type TsStaticSiteEnvironmentVariables = {
  __typename?: 'TsStaticSiteEnvironmentVariables';
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type TsStaticSiteTriggers = {
  __typename?: 'TsStaticSiteTriggers';
  contentTypeId?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

/** Returns a TsStaticSite list in natural order. */
export type TsStaticSitePaginatedList = {
  __typename?: 'TsStaticSitePaginatedList';
  items?: Maybe<Array<Maybe<TsStaticSite>>>;
  total?: Maybe<Scalars['Int']>;
};

export type Registrations = TsSearchable & {
  __typename?: 'Registrations';
  guests?: Maybe<Array<Maybe<RegistrationsGuests>>>;
  registrationStatus?: Maybe<Scalars['String']>;
  apartmentKey: Scalars['String'];
  email: Scalars['String'];
  _id?: Maybe<Scalars['ID']>;
  _version?: Maybe<Scalars['Int']>;
  _shapeId?: Maybe<Scalars['String']>;
  _shapeName?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['String']>;
  _createdBy?: Maybe<TsUser>;
  _updatedAt?: Maybe<Scalars['String']>;
  _updatedBy?: Maybe<TsUser>;
  _schemaVersion?: Maybe<Scalars['Float']>;
  /** @deprecated Use _status instead */
  _enabled?: Maybe<Scalars['Boolean']>;
  /** @deprecated Use a custom date field instead */
  _enabledAt?: Maybe<Scalars['String']>;
  _status?: Maybe<DefaultWorkflow>;
  _contentTypeId?: Maybe<Scalars['String']>;
  _contentTypeName?: Maybe<Scalars['String']>;
  searchSummary?: Maybe<Scalars['String']>;
};

export type RegistrationsGuests = {
  __typename?: 'RegistrationsGuests';
  lastName: Scalars['String'];
  firstName: Scalars['String'];
  placeOfBirth: Scalars['String'];
  nationality: Scalars['String'];
  documentType: Scalars['String'];
  documentNumber: Scalars['String'];
  birthDate: Scalars['String'];
};

/** Returns a Registrations list in natural order. */
export type RegistrationsPaginatedList = {
  __typename?: 'RegistrationsPaginatedList';
  items?: Maybe<Array<Maybe<Registrations>>>;
  total?: Maybe<Scalars['Int']>;
};

/** Returns a Language list in natural order. */
export type LanguagePaginatedList = {
  __typename?: 'LanguagePaginatedList';
  items?: Maybe<Array<Maybe<Language>>>;
  total?: Maybe<Scalars['Int']>;
};

/** This query allow you to pass context to your queries */
export type WithContext = {
  __typename?: 'WithContext';
  search?: Maybe<TsSearchResults>;
  taxonomySuggest?: Maybe<TsSuggestionPaginatedList>;
  /** List Versions for a piece of content */
  getContentVersion?: Maybe<TsVersionResponse>;
  /** List Versions for a piece of content */
  getContentVersionList?: Maybe<TsVersionsPaginatedList>;
  searchAssetIndex?: Maybe<AssetSearchResults>;
  searchTsStaticSiteIndex?: Maybe<TsStaticSiteSearchResults>;
  searchApartmentIndex?: Maybe<ApartmentSearchResults>;
  searchArticleIndex?: Maybe<ArticleSearchResults>;
  searchFaqIndex?: Maybe<FaqSearchResults>;
  searchRegistrationsIndex?: Maybe<RegistrationsSearchResults>;
  searchLanguageIndex?: Maybe<LanguageSearchResults>;
  /** Get a Asset by ID */
  getAsset?: Maybe<Asset>;
  /** Returns a list Asset in natural order. */
  getAssetList?: Maybe<AssetPaginatedList>;
  /** Get a TsStaticSite by ID */
  getTsStaticSite?: Maybe<TsStaticSite>;
  /** Returns a list TsStaticSite in natural order. */
  getTsStaticSiteList?: Maybe<TsStaticSitePaginatedList>;
  /** Get a Apartment by ID */
  getApartment?: Maybe<Apartment>;
  /** Returns a list Apartment in natural order. */
  getApartmentList?: Maybe<ApartmentPaginatedList>;
  /** Get a Article by ID */
  getArticle?: Maybe<Article>;
  /** Returns a list Article in natural order. */
  getArticleList?: Maybe<ArticlePaginatedList>;
  /** Get a Faq by ID */
  getFaq?: Maybe<Faq>;
  /** Returns a list Faq in natural order. */
  getFaqList?: Maybe<FaqPaginatedList>;
  /** Get a Registrations by ID */
  getRegistrations?: Maybe<Registrations>;
  /** Returns a list Registrations in natural order. */
  getRegistrationsList?: Maybe<RegistrationsPaginatedList>;
  /** Get a Language by ID */
  getLanguage?: Maybe<Language>;
  /** Returns a list Language in natural order. */
  getLanguageList?: Maybe<LanguagePaginatedList>;
};


/** This query allow you to pass context to your queries */
export type WithContextSearchArgs = {
  shapeNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  shapeIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  contentTypeNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  contentTypeIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
  terms?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  filter?: Maybe<Scalars['JSON']>;
  sort?: Maybe<Array<Maybe<TsSearchSort>>>;
  where?: Maybe<TsWhereInput>;
};


/** This query allow you to pass context to your queries */
export type WithContextTaxonomySuggestArgs = {
  shapeNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  shapeIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  contentTypeNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  contentTypeIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  terms?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
  from?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  filter?: Maybe<Scalars['JSON']>;
  sort?: Maybe<Array<Maybe<TsSearchSort>>>;
};


/** This query allow you to pass context to your queries */
export type WithContextGetContentVersionArgs = {
  id: Scalars['ID'];
  version: Scalars['Int'];
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
};


/** This query allow you to pass context to your queries */
export type WithContextGetContentVersionListArgs = {
  id: Scalars['ID'];
  from?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
};


/** This query allow you to pass context to your queries */
export type WithContextSearchAssetIndexArgs = {
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
  terms?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  filter?: Maybe<Scalars['JSON']>;
  sort?: Maybe<Array<Maybe<TsSearchSort>>>;
  where?: Maybe<TsWhereAssetInput>;
};


/** This query allow you to pass context to your queries */
export type WithContextSearchTsStaticSiteIndexArgs = {
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
  terms?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  filter?: Maybe<Scalars['JSON']>;
  sort?: Maybe<Array<Maybe<TsSearchSort>>>;
  where?: Maybe<TsWhereTsStaticSiteInput>;
};


/** This query allow you to pass context to your queries */
export type WithContextSearchApartmentIndexArgs = {
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
  terms?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  filter?: Maybe<Scalars['JSON']>;
  sort?: Maybe<Array<Maybe<TsSearchSort>>>;
  where?: Maybe<TsWhereApartmentInput>;
};


/** This query allow you to pass context to your queries */
export type WithContextSearchArticleIndexArgs = {
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
  terms?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  filter?: Maybe<Scalars['JSON']>;
  sort?: Maybe<Array<Maybe<TsSearchSort>>>;
  where?: Maybe<TsWhereArticleInput>;
};


/** This query allow you to pass context to your queries */
export type WithContextSearchFaqIndexArgs = {
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
  terms?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  filter?: Maybe<Scalars['JSON']>;
  sort?: Maybe<Array<Maybe<TsSearchSort>>>;
  where?: Maybe<TsWhereFaqInput>;
};


/** This query allow you to pass context to your queries */
export type WithContextSearchRegistrationsIndexArgs = {
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
  terms?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  filter?: Maybe<Scalars['JSON']>;
  sort?: Maybe<Array<Maybe<TsSearchSort>>>;
  where?: Maybe<TsWhereRegistrationsInput>;
};


/** This query allow you to pass context to your queries */
export type WithContextSearchLanguageIndexArgs = {
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
  terms?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  filter?: Maybe<Scalars['JSON']>;
  sort?: Maybe<Array<Maybe<TsSearchSort>>>;
  where?: Maybe<TsWhereLanguageInput>;
};


/** This query allow you to pass context to your queries */
export type WithContextGetAssetArgs = {
  _id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
};


/** This query allow you to pass context to your queries */
export type WithContextGetAssetListArgs = {
  onlyEnabled?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
  terms?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  filter?: Maybe<Scalars['JSON']>;
  sort?: Maybe<Array<Maybe<TsSearchSort>>>;
  where?: Maybe<TsWhereAssetInput>;
};


/** This query allow you to pass context to your queries */
export type WithContextGetTsStaticSiteArgs = {
  _id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
};


/** This query allow you to pass context to your queries */
export type WithContextGetTsStaticSiteListArgs = {
  onlyEnabled?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
  terms?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  filter?: Maybe<Scalars['JSON']>;
  sort?: Maybe<Array<Maybe<TsSearchSort>>>;
  where?: Maybe<TsWhereTsStaticSiteInput>;
};


/** This query allow you to pass context to your queries */
export type WithContextGetApartmentArgs = {
  _id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
};


/** This query allow you to pass context to your queries */
export type WithContextGetApartmentListArgs = {
  onlyEnabled?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
  terms?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  filter?: Maybe<Scalars['JSON']>;
  sort?: Maybe<Array<Maybe<TsSearchSort>>>;
  where?: Maybe<TsWhereApartmentInput>;
};


/** This query allow you to pass context to your queries */
export type WithContextGetArticleArgs = {
  _id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
};


/** This query allow you to pass context to your queries */
export type WithContextGetArticleListArgs = {
  onlyEnabled?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
  terms?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  filter?: Maybe<Scalars['JSON']>;
  sort?: Maybe<Array<Maybe<TsSearchSort>>>;
  where?: Maybe<TsWhereArticleInput>;
};


/** This query allow you to pass context to your queries */
export type WithContextGetFaqArgs = {
  _id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
};


/** This query allow you to pass context to your queries */
export type WithContextGetFaqListArgs = {
  onlyEnabled?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
  terms?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  filter?: Maybe<Scalars['JSON']>;
  sort?: Maybe<Array<Maybe<TsSearchSort>>>;
  where?: Maybe<TsWhereFaqInput>;
};


/** This query allow you to pass context to your queries */
export type WithContextGetRegistrationsArgs = {
  _id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
};


/** This query allow you to pass context to your queries */
export type WithContextGetRegistrationsListArgs = {
  onlyEnabled?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
  terms?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  filter?: Maybe<Scalars['JSON']>;
  sort?: Maybe<Array<Maybe<TsSearchSort>>>;
  where?: Maybe<TsWhereRegistrationsInput>;
};


/** This query allow you to pass context to your queries */
export type WithContextGetLanguageArgs = {
  _id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
};


/** This query allow you to pass context to your queries */
export type WithContextGetLanguageListArgs = {
  onlyEnabled?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
  terms?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  filter?: Maybe<Scalars['JSON']>;
  sort?: Maybe<Array<Maybe<TsSearchSort>>>;
  where?: Maybe<TsWhereLanguageInput>;
};

export type Mutations = {
  __typename?: 'Mutations';
  /** Create Project */
  tsCreateProject?: Maybe<TsProjectListItem>;
  /** Imports a project from a specified URI. */
  tsImportProject?: Maybe<Scalars['String']>;
  /** Get a URI to upload a project for import. */
  tsUploadProject?: Maybe<UploadProjectResult>;
  /** Create a Lock */
  tsCreateLock?: Maybe<TsLock>;
  /** Extend a lock Project */
  tsExtendLock?: Maybe<TsLock>;
  /** Remove a Lock */
  tsRemoveLock?: Maybe<Scalars['Boolean']>;
  /** Remove a Lock */
  tsBreakLock?: Maybe<Scalars['Boolean']>;
  /** Create an API Key */
  tsCreateApiKey?: Maybe<TsApiKey>;
  /** Delete an API Key */
  tsDeleteApiKey?: Maybe<Scalars['Boolean']>;
  /** Create role */
  tsCreateRole?: Maybe<TsRole>;
  /** Update role */
  tsUpdateRole?: Maybe<TsRole>;
  /** Delete role */
  tsDeleteRole?: Maybe<Scalars['Boolean']>;
  /** Update webhooks */
  tsUpdateWebhooks?: Maybe<TsWebhooks>;
  /** Update Default Locale for Project */
  tsUpdateDefaultLocale?: Maybe<Scalars['JSONObject']>;
  /** Add Locale to Project */
  tsAddLocale?: Maybe<Scalars['JSONObject']>;
  /** Remove Locale from Project */
  tsRemoveLocale?: Maybe<Scalars['JSONObject']>;
  /** Update the current project schema */
  tsUpdateSchema?: Maybe<Scalars['JSONObject']>;
  /** Create or update a service in the current project schema */
  tsSaveService?: Maybe<Scalars['JSONObject']>;
  /** Remove a service from the current project schema */
  tsRemoveService?: Maybe<Scalars['JSONObject']>;
  /** Create Workflow */
  tsAddWorkflow?: Maybe<TsSaveWorkflowResponse>;
  /** Update Workflow */
  tsUpdateWorkflow?: Maybe<TsSaveWorkflowResponse>;
  /** Delete Workflow */
  tsDeleteWorkflow?: Maybe<TsRemoveWorkflowResponse>;
  /** Schedule content status update */
  tsScheduleStatusUpdate?: Maybe<TsStatusUpdate>;
  /** Cancel scheduled content status update */
  tsCancelStatusUpdate?: Maybe<Scalars['Boolean']>;
  /** Exports your project to a ZIP file, which you can then download */
  tsExportProject?: Maybe<Scalars['String']>;
  /** Update Project */
  tsUpdateProject?: Maybe<TsProject>;
  /** Update Project Billing */
  tsUpdateProjectBilling?: Maybe<TsBilling>;
  /** Update Project Permissions */
  tsUpdateProjectPermissions?: Maybe<TsPermissions>;
  /** Update Invite Role */
  tsUpdateInviteRole?: Maybe<TsInvite>;
  /** Cancel Project Invite */
  tsCancelProjectInvite?: Maybe<TsInvite>;
  /** Remove Project Member */
  tsRemoveProjectMember?: Maybe<TsPermissions>;
  /** Deactivate project */
  tsDeleteProject?: Maybe<Scalars['Boolean']>;
  /** Register a setup step as completed */
  tsCompleteSetupStep?: Maybe<Scalars['Boolean']>;
  /** Update a token for a integration provider */
  tsUpdateIntegrationToken?: Maybe<TsIntegrationToken>;
  /** Update service information */
  tsUpdateService?: Maybe<Scalars['String']>;
  /** Initiate upload process for asset(s) */
  uploadAssets?: Maybe<Array<Maybe<Upload>>>;
  /** Replace an asset file */
  replaceAsset?: Maybe<Upload>;
  /** Update Asset */
  updateAsset?: Maybe<UpdateAssetResult>;
  /** Create Asset */
  createAsset?: Maybe<CreateAssetResult>;
  /** Duplicate Asset */
  duplicateAsset?: Maybe<DuplicateAssetResult>;
  /** Delete Asset */
  deleteAsset?: Maybe<DeleteAssetResult>;
  /** Update TsStaticSite */
  updateTsStaticSite?: Maybe<UpdateTsStaticSiteResult>;
  /** Create TsStaticSite */
  createTsStaticSite?: Maybe<CreateTsStaticSiteResult>;
  /** Duplicate TsStaticSite */
  duplicateTsStaticSite?: Maybe<DuplicateTsStaticSiteResult>;
  /** Delete TsStaticSite */
  deleteTsStaticSite?: Maybe<DeleteTsStaticSiteResult>;
  /** Update Apartment */
  updateApartment?: Maybe<UpdateApartmentResult>;
  /** Create Apartment */
  createApartment?: Maybe<CreateApartmentResult>;
  /** Duplicate Apartment */
  duplicateApartment?: Maybe<DuplicateApartmentResult>;
  /** Delete Apartment */
  deleteApartment?: Maybe<DeleteApartmentResult>;
  /** Update Article */
  updateArticle?: Maybe<UpdateArticleResult>;
  /** Create Article */
  createArticle?: Maybe<CreateArticleResult>;
  /** Duplicate Article */
  duplicateArticle?: Maybe<DuplicateArticleResult>;
  /** Delete Article */
  deleteArticle?: Maybe<DeleteArticleResult>;
  /** Update Faq */
  updateFaq?: Maybe<UpdateFaqResult>;
  /** Create Faq */
  createFaq?: Maybe<CreateFaqResult>;
  /** Duplicate Faq */
  duplicateFaq?: Maybe<DuplicateFaqResult>;
  /** Delete Faq */
  deleteFaq?: Maybe<DeleteFaqResult>;
  /** Update Registrations */
  updateRegistrations?: Maybe<UpdateRegistrationsResult>;
  /** Create Registrations */
  createRegistrations?: Maybe<CreateRegistrationsResult>;
  /** Duplicate Registrations */
  duplicateRegistrations?: Maybe<DuplicateRegistrationsResult>;
  /** Delete Registrations */
  deleteRegistrations?: Maybe<DeleteRegistrationsResult>;
  /** Update Language */
  updateLanguage?: Maybe<UpdateLanguageResult>;
  /** Create Language */
  createLanguage?: Maybe<CreateLanguageResult>;
  /** Duplicate Language */
  duplicateLanguage?: Maybe<DuplicateLanguageResult>;
  /** Delete Language */
  deleteLanguage?: Maybe<DeleteLanguageResult>;
};


export type MutationsTsCreateProjectArgs = {
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  defaultTimezone: Scalars['String'];
};


export type MutationsTsImportProjectArgs = {
  uri: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  origin?: Maybe<Scalars['String']>;
};


export type MutationsTsUploadProjectArgs = {
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  origin?: Maybe<Scalars['String']>;
};


export type MutationsTsCreateLockArgs = {
  shapeId?: Maybe<Scalars['ID']>;
  id?: Maybe<Scalars['ID']>;
};


export type MutationsTsExtendLockArgs = {
  shapeId?: Maybe<Scalars['ID']>;
  id?: Maybe<Scalars['ID']>;
};


export type MutationsTsRemoveLockArgs = {
  shapeId?: Maybe<Scalars['ID']>;
  id?: Maybe<Scalars['ID']>;
};


export type MutationsTsBreakLockArgs = {
  shapeId?: Maybe<Scalars['ID']>;
  id?: Maybe<Scalars['ID']>;
};


export type MutationsTsCreateApiKeyArgs = {
  name?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
};


export type MutationsTsDeleteApiKeyArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type MutationsTsCreateRoleArgs = {
  input: TsRoleInput;
};


export type MutationsTsUpdateRoleArgs = {
  input: TsRoleInput;
};


export type MutationsTsDeleteRoleArgs = {
  name: Scalars['String'];
};


export type MutationsTsUpdateWebhooksArgs = {
  input: TsWebhooksInput;
};


export type MutationsTsUpdateDefaultLocaleArgs = {
  defaultLocale: Scalars['String'];
  version: Scalars['Int'];
};


export type MutationsTsAddLocaleArgs = {
  locale: Scalars['String'];
  version: Scalars['Int'];
};


export type MutationsTsRemoveLocaleArgs = {
  locale: Scalars['String'];
  version: Scalars['Int'];
};


export type MutationsTsUpdateSchemaArgs = {
  input: TsUpdateSchemaInput;
};


export type MutationsTsSaveServiceArgs = {
  input: TsUpdateSchemaServiceInput;
};


export type MutationsTsRemoveServiceArgs = {
  serviceId: Scalars['String'];
};


export type MutationsTsAddWorkflowArgs = {
  input: TsSaveWorkflowInput;
};


export type MutationsTsUpdateWorkflowArgs = {
  input: TsUpdateWorkflowInput;
};


export type MutationsTsDeleteWorkflowArgs = {
  input?: Maybe<TsDeleteWorkflowInput>;
};


export type MutationsTsScheduleStatusUpdateArgs = {
  input: TsScheduleStatusUpdateInput;
};


export type MutationsTsCancelStatusUpdateArgs = {
  input: TsCancelStatusUpdateInput;
};


export type MutationsTsExportProjectArgs = {
  empty?: Maybe<Scalars['Boolean']>;
  origin?: Maybe<Scalars['String']>;
};


export type MutationsTsUpdateProjectArgs = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  avatarId?: Maybe<Scalars['ID']>;
  defaultTimezone?: Maybe<Scalars['String']>;
};


export type MutationsTsUpdateProjectBillingArgs = {
  id?: Maybe<Scalars['ID']>;
  token?: Maybe<Scalars['String']>;
  planId?: Maybe<Scalars['String']>;
  coupon?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};


export type MutationsTsUpdateProjectPermissionsArgs = {
  userId?: Maybe<Scalars['ID']>;
  role: Scalars['String'];
};


export type MutationsTsUpdateInviteRoleArgs = {
  email: Scalars['String'];
  role: Scalars['String'];
};


export type MutationsTsCancelProjectInviteArgs = {
  email: Scalars['String'];
};


export type MutationsTsRemoveProjectMemberArgs = {
  userId?: Maybe<Scalars['ID']>;
};


export type MutationsTsDeleteProjectArgs = {
  id: Scalars['ID'];
};


export type MutationsTsCompleteSetupStepArgs = {
  stepKey: Scalars['String'];
};


export type MutationsTsUpdateIntegrationTokenArgs = {
  provider: Scalars['String'];
  token?: Maybe<Scalars['String']>;
};


export type MutationsTsUpdateServiceArgs = {
  service?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};


export type MutationsUploadAssetsArgs = {
  projectId?: Maybe<Scalars['ID']>;
  files: Array<Maybe<TsFile>>;
};


export type MutationsReplaceAssetArgs = {
  projectId?: Maybe<Scalars['ID']>;
  _id: Scalars['ID'];
  _version: Scalars['Int'];
  file: TsFile;
};


export type MutationsUpdateAssetArgs = {
  input: UpdateAssetInput;
  structure?: Maybe<Array<Maybe<ContentStructureInput>>>;
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
};


export type MutationsCreateAssetArgs = {
  input: CreateAssetInput;
};


export type MutationsDuplicateAssetArgs = {
  input: DuplicateAssetInput;
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
};


export type MutationsDeleteAssetArgs = {
  input: DeleteAssetInput;
};


export type MutationsUpdateTsStaticSiteArgs = {
  input: UpdateTsStaticSiteInput;
  structure?: Maybe<Array<Maybe<ContentStructureInput>>>;
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
};


export type MutationsCreateTsStaticSiteArgs = {
  input: CreateTsStaticSiteInput;
};


export type MutationsDuplicateTsStaticSiteArgs = {
  input: DuplicateTsStaticSiteInput;
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
};


export type MutationsDeleteTsStaticSiteArgs = {
  input: DeleteTsStaticSiteInput;
};


export type MutationsUpdateApartmentArgs = {
  input: UpdateApartmentInput;
  structure?: Maybe<Array<Maybe<ContentStructureInput>>>;
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
};


export type MutationsCreateApartmentArgs = {
  input: CreateApartmentInput;
};


export type MutationsDuplicateApartmentArgs = {
  input: DuplicateApartmentInput;
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
};


export type MutationsDeleteApartmentArgs = {
  input: DeleteApartmentInput;
};


export type MutationsUpdateArticleArgs = {
  input: UpdateArticleInput;
  structure?: Maybe<Array<Maybe<ContentStructureInput>>>;
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
};


export type MutationsCreateArticleArgs = {
  input: CreateArticleInput;
};


export type MutationsDuplicateArticleArgs = {
  input: DuplicateArticleInput;
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
};


export type MutationsDeleteArticleArgs = {
  input: DeleteArticleInput;
};


export type MutationsUpdateFaqArgs = {
  input: UpdateFaqInput;
  structure?: Maybe<Array<Maybe<ContentStructureInput>>>;
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
};


export type MutationsCreateFaqArgs = {
  input: CreateFaqInput;
};


export type MutationsDuplicateFaqArgs = {
  input: DuplicateFaqInput;
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
};


export type MutationsDeleteFaqArgs = {
  input: DeleteFaqInput;
};


export type MutationsUpdateRegistrationsArgs = {
  input: UpdateRegistrationsInput;
  structure?: Maybe<Array<Maybe<ContentStructureInput>>>;
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
};


export type MutationsCreateRegistrationsArgs = {
  input: CreateRegistrationsInput;
};


export type MutationsDuplicateRegistrationsArgs = {
  input: DuplicateRegistrationsInput;
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
};


export type MutationsDeleteRegistrationsArgs = {
  input: DeleteRegistrationsInput;
};


export type MutationsUpdateLanguageArgs = {
  input: UpdateLanguageInput;
  structure?: Maybe<Array<Maybe<ContentStructureInput>>>;
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
};


export type MutationsCreateLanguageArgs = {
  input: CreateLanguageInput;
};


export type MutationsDuplicateLanguageArgs = {
  input: DuplicateLanguageInput;
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
};


export type MutationsDeleteLanguageArgs = {
  input: DeleteLanguageInput;
};

export type UploadProjectResult = {
  __typename?: 'UploadProjectResult';
  uri?: Maybe<Scalars['String']>;
  importId?: Maybe<Scalars['String']>;
};

export type TsRoleInput = {
  name: Scalars['String'];
  permissions: Scalars['JSONObject'];
  created?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['String']>;
};

export type TsWebhooksInput = {
  resetSecret?: Maybe<Scalars['Boolean']>;
  webhooks?: Maybe<Array<Maybe<TsWebhookInput>>>;
};

export type TsWebhookInput = {
  webhookUrl: Scalars['String'];
  headers?: Maybe<Array<Maybe<HttpHeaderInput>>>;
  resourceActions?: Maybe<Array<Maybe<TsResourceActionsInput>>>;
};

export type HttpHeaderInput = {
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type TsResourceActionsInput = {
  resource: Scalars['String'];
  actions?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type TsUpdateSchemaInput = {
  version: Scalars['Int'];
  schemaVersion: Scalars['String'];
  queries?: Maybe<Scalars['JSONObject']>;
  mutations?: Maybe<Scalars['JSONObject']>;
  shapes?: Maybe<Scalars['JSONObject']>;
  forms?: Maybe<Scalars['JSONObject']>;
};

export type TsUpdateSchemaServiceInput = {
  serviceId: Scalars['String'];
  auth?: Maybe<TsServiceAuthInput>;
  params?: Maybe<TsServiceParams>;
};

export type TsServiceAuthInput = {
  accessToken: Scalars['String'];
  refreshtoken?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
};

export type TsServiceParams = {
  type?: Maybe<Scalars['String']>;
  authHeader?: Maybe<Scalars['String']>;
  namespace?: Maybe<Scalars['String']>;
  endpoint?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type TsSaveWorkflowInput = {
  version: Scalars['Int'];
  workflow: TsWorkflowInput;
};

export type TsWorkflowInput = {
  name: Scalars['String'];
  title: Scalars['String'];
  steps?: Maybe<Array<Maybe<TsWorkflowStepInput>>>;
};

export type TsWorkflowStepInput = {
  name: Scalars['String'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  color: Scalars['String'];
  live: Scalars['Boolean'];
  key: Scalars['String'];
  canEdit?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type TsSaveWorkflowResponse = {
  __typename?: 'TSSaveWorkflowResponse';
  projectId?: Maybe<Scalars['String']>;
  schemaVersion?: Maybe<Scalars['Int']>;
  workflow?: Maybe<TsWorkflow>;
  shapes?: Maybe<Scalars['JSONObject']>;
};

export type TsWorkflow = {
  __typename?: 'TSWorkflow';
  name: Scalars['String'];
  title: Scalars['String'];
  steps?: Maybe<Array<Maybe<TsWorkflowStep>>>;
};

export type TsWorkflowStep = {
  __typename?: 'TSWorkflowStep';
  name: Scalars['String'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  color: Scalars['String'];
  live: Scalars['Boolean'];
  key: Scalars['String'];
  canEdit?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type TsUpdateWorkflowInput = {
  version: Scalars['Int'];
  name: Scalars['String'];
  workflow: TsWorkflowInput;
};

export type TsDeleteWorkflowInput = {
  version: Scalars['Int'];
  name: Scalars['String'];
};

export type TsRemoveWorkflowResponse = {
  __typename?: 'TSRemoveWorkflowResponse';
  name?: Maybe<Scalars['String']>;
  schemaVersion?: Maybe<Scalars['Int']>;
  removed?: Maybe<Scalars['Boolean']>;
  shapes?: Maybe<Scalars['JSONObject']>;
};

export type TsScheduleStatusUpdateInput = {
  timestamp: Scalars['String'];
  contentId: Scalars['String'];
  status: Scalars['String'];
  shapeName?: Maybe<Scalars['String']>;
  contentTypeName?: Maybe<Scalars['String']>;
};

export type TsCancelStatusUpdateInput = {
  contentId: Scalars['String'];
  shapeName?: Maybe<Scalars['String']>;
  contentTypeName?: Maybe<Scalars['String']>;
  timestamp: Scalars['String'];
};

export type TsPermissions = {
  __typename?: 'TSPermissions';
  userId?: Maybe<Scalars['ID']>;
  projectId?: Maybe<Scalars['ID']>;
  role?: Maybe<Scalars['String']>;
};

export type TsInvite = {
  __typename?: 'TSInvite';
  inviteCode?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['ID']>;
  role?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['ID']>;
  inviterUserId?: Maybe<Scalars['ID']>;
  status?: Maybe<Scalars['String']>;
};

export type TsFile = {
  name: Scalars['String'];
  type: Scalars['String'];
};

/** A project file stored on s3 */
export type Upload = {
  __typename?: 'Upload';
  uploadUrl?: Maybe<Scalars['ID']>;
  asset?: Maybe<Asset>;
};

/** update Asset input */
export type UpdateAssetInput = {
  _id?: Maybe<Scalars['ID']>;
  sourceUrl?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['JSON']>;
  uploadStatus?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  credit?: Maybe<Scalars['JSON']>;
  _version?: Maybe<Scalars['Int']>;
  _shapeId?: Maybe<Scalars['String']>;
  _shapeName?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['String']>;
  _createdBy?: Maybe<Scalars['String']>;
  _updatedAt?: Maybe<Scalars['String']>;
  _updatedBy?: Maybe<Scalars['String']>;
  _schemaVersion?: Maybe<Scalars['Float']>;
  _enabled?: Maybe<Scalars['Boolean']>;
  _enabledAt?: Maybe<Scalars['String']>;
  _status?: Maybe<DefaultWorkflow>;
  _contentTypeId?: Maybe<Scalars['String']>;
  _contentTypeName?: Maybe<Scalars['String']>;
  s3Key?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Describes a structural update to an array of data. */
export type ContentStructureInput = {
  /** A deep path to the array being updated (e.g. a.b[1].c). */
  path: Scalars['String'];
  /** An array where the indices represent the to index, and the values represent the from index.For example to transform ["a","b","c","d"] into ["c","a"], this value would be [2,0]. */
  structure?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type UpdateAssetResult = {
  __typename?: 'UpdateAssetResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Asset>;
};

/** create Asset input */
export type CreateAssetInput = {
  sourceUrl?: Maybe<Scalars['String']>;
  path: Scalars['String'];
  filename: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['JSON']>;
  uploadStatus?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  credit?: Maybe<Scalars['JSON']>;
  _id?: Maybe<Scalars['ID']>;
  _version?: Maybe<Scalars['Int']>;
  _shapeId?: Maybe<Scalars['String']>;
  _shapeName?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['String']>;
  _createdBy?: Maybe<Scalars['String']>;
  _updatedAt?: Maybe<Scalars['String']>;
  _updatedBy?: Maybe<Scalars['String']>;
  _schemaVersion?: Maybe<Scalars['Float']>;
  _enabled?: Maybe<Scalars['Boolean']>;
  _enabledAt?: Maybe<Scalars['String']>;
  _status?: Maybe<DefaultWorkflow>;
  _contentTypeId?: Maybe<Scalars['String']>;
  _contentTypeName?: Maybe<Scalars['String']>;
  s3Key?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateAssetResult = {
  __typename?: 'CreateAssetResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Asset>;
};

/** duplicate Asset input */
export type DuplicateAssetInput = {
  _id?: Maybe<Scalars['ID']>;
  sourceUrl?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['JSON']>;
  uploadStatus?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  credit?: Maybe<Scalars['JSON']>;
  _version?: Maybe<Scalars['Int']>;
  _shapeId?: Maybe<Scalars['String']>;
  _shapeName?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['String']>;
  _createdBy?: Maybe<Scalars['String']>;
  _updatedAt?: Maybe<Scalars['String']>;
  _updatedBy?: Maybe<Scalars['String']>;
  _schemaVersion?: Maybe<Scalars['Float']>;
  _enabled?: Maybe<Scalars['Boolean']>;
  _enabledAt?: Maybe<Scalars['String']>;
  _status?: Maybe<DefaultWorkflow>;
  _contentTypeId?: Maybe<Scalars['String']>;
  _contentTypeName?: Maybe<Scalars['String']>;
  s3Key?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DuplicateAssetResult = {
  __typename?: 'DuplicateAssetResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Asset>;
};

/** delete Asset input */
export type DeleteAssetInput = {
  _id: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteAssetResult = {
  __typename?: 'DeleteAssetResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Scalars['Boolean']>;
};

/** update TsStaticSite input */
export type UpdateTsStaticSiteInput = {
  _id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  baseUrl?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  idKey?: Maybe<Scalars['String']>;
  secretKey?: Maybe<Scalars['String']>;
  destination?: Maybe<Scalars['String']>;
  privateAcl?: Maybe<Scalars['Boolean']>;
  environmentVariables?: Maybe<Array<Maybe<TsStaticSiteEnvironmentVariablesInput>>>;
  triggers?: Maybe<Array<Maybe<TsStaticSiteTriggersInput>>>;
  templateHash?: Maybe<Scalars['String']>;
  _version?: Maybe<Scalars['Int']>;
  _shapeId?: Maybe<Scalars['String']>;
  _shapeName?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['String']>;
  _createdBy?: Maybe<Scalars['String']>;
  _updatedAt?: Maybe<Scalars['String']>;
  _updatedBy?: Maybe<Scalars['String']>;
  _schemaVersion?: Maybe<Scalars['Float']>;
  _enabled?: Maybe<Scalars['Boolean']>;
  _enabledAt?: Maybe<Scalars['String']>;
  _status?: Maybe<DefaultWorkflow>;
  _contentTypeId?: Maybe<Scalars['String']>;
  _contentTypeName?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type TsStaticSiteEnvironmentVariablesInput = {
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type TsStaticSiteTriggersInput = {
  contentTypeId?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type UpdateTsStaticSiteResult = {
  __typename?: 'UpdateTsStaticSiteResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<TsStaticSite>;
};

/** create TsStaticSite input */
export type CreateTsStaticSiteInput = {
  title: Scalars['String'];
  baseUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  idKey?: Maybe<Scalars['String']>;
  secretKey?: Maybe<Scalars['String']>;
  destination: Scalars['String'];
  privateAcl?: Maybe<Scalars['Boolean']>;
  environmentVariables?: Maybe<Array<Maybe<TsStaticSiteEnvironmentVariablesInput>>>;
  triggers?: Maybe<Array<Maybe<TsStaticSiteTriggersInput>>>;
  templateHash?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ID']>;
  _version?: Maybe<Scalars['Int']>;
  _shapeId?: Maybe<Scalars['String']>;
  _shapeName?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['String']>;
  _createdBy?: Maybe<Scalars['String']>;
  _updatedAt?: Maybe<Scalars['String']>;
  _updatedBy?: Maybe<Scalars['String']>;
  _schemaVersion?: Maybe<Scalars['Float']>;
  _enabled?: Maybe<Scalars['Boolean']>;
  _enabledAt?: Maybe<Scalars['String']>;
  _status?: Maybe<DefaultWorkflow>;
  _contentTypeId?: Maybe<Scalars['String']>;
  _contentTypeName?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateTsStaticSiteResult = {
  __typename?: 'CreateTsStaticSiteResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<TsStaticSite>;
};

/** duplicate TsStaticSite input */
export type DuplicateTsStaticSiteInput = {
  _id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  baseUrl?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  idKey?: Maybe<Scalars['String']>;
  secretKey?: Maybe<Scalars['String']>;
  destination?: Maybe<Scalars['String']>;
  privateAcl?: Maybe<Scalars['Boolean']>;
  environmentVariables?: Maybe<Array<Maybe<TsStaticSiteEnvironmentVariablesInput>>>;
  triggers?: Maybe<Array<Maybe<TsStaticSiteTriggersInput>>>;
  templateHash?: Maybe<Scalars['String']>;
  _version?: Maybe<Scalars['Int']>;
  _shapeId?: Maybe<Scalars['String']>;
  _shapeName?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['String']>;
  _createdBy?: Maybe<Scalars['String']>;
  _updatedAt?: Maybe<Scalars['String']>;
  _updatedBy?: Maybe<Scalars['String']>;
  _schemaVersion?: Maybe<Scalars['Float']>;
  _enabled?: Maybe<Scalars['Boolean']>;
  _enabledAt?: Maybe<Scalars['String']>;
  _status?: Maybe<DefaultWorkflow>;
  _contentTypeId?: Maybe<Scalars['String']>;
  _contentTypeName?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DuplicateTsStaticSiteResult = {
  __typename?: 'DuplicateTsStaticSiteResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<TsStaticSite>;
};

/** delete TsStaticSite input */
export type DeleteTsStaticSiteInput = {
  _id: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteTsStaticSiteResult = {
  __typename?: 'DeleteTsStaticSiteResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Scalars['Boolean']>;
};

/** update Apartment input */
export type UpdateApartmentInput = {
  _id?: Maybe<Scalars['ID']>;
  sponsor?: Maybe<Array<Maybe<TsRelationshipInput>>>;
  bookingIcal?: Maybe<Scalars['String']>;
  coverJpg?: Maybe<TsRelationshipInput>;
  brandColor?: Maybe<TsColorInput>;
  code?: Maybe<Scalars['String']>;
  lighterColor?: Maybe<TsColorInput>;
  address?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['String']>;
  lightColor?: Maybe<TsColorInput>;
  airbnbLink?: Maybe<Scalars['String']>;
  airBnb?: Maybe<Scalars['String']>;
  facebookLink?: Maybe<Scalars['String']>;
  coverWebp?: Maybe<TsRelationshipInput>;
  name?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  airbnbIcal?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  _version?: Maybe<Scalars['Int']>;
  _shapeId?: Maybe<Scalars['String']>;
  _shapeName?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['String']>;
  _createdBy?: Maybe<Scalars['String']>;
  _updatedAt?: Maybe<Scalars['String']>;
  _updatedBy?: Maybe<Scalars['String']>;
  _schemaVersion?: Maybe<Scalars['Float']>;
  _enabled?: Maybe<Scalars['Boolean']>;
  _enabledAt?: Maybe<Scalars['String']>;
  _status?: Maybe<DefaultWorkflow>;
  _contentTypeId?: Maybe<Scalars['String']>;
  _contentTypeName?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type TsRelationshipInput = {
  shapeId?: Maybe<Scalars['String']>;
  contentTypeId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type TsColorInput = {
  hex?: Maybe<Scalars['String']>;
  hsl?: Maybe<TsColorHslInput>;
  hsv?: Maybe<TsColorHsvInput>;
  rgb?: Maybe<TsColorRgbInput>;
};

export type TsColorHslInput = {
  h?: Maybe<Scalars['Float']>;
  a?: Maybe<Scalars['Float']>;
  s?: Maybe<Scalars['Float']>;
  l?: Maybe<Scalars['Float']>;
};

export type TsColorHsvInput = {
  h?: Maybe<Scalars['Float']>;
  a?: Maybe<Scalars['Float']>;
  s?: Maybe<Scalars['Float']>;
  v?: Maybe<Scalars['Float']>;
};

export type TsColorRgbInput = {
  a?: Maybe<Scalars['Float']>;
  b?: Maybe<Scalars['Float']>;
  r?: Maybe<Scalars['Float']>;
  g?: Maybe<Scalars['Float']>;
};

export type UpdateApartmentResult = {
  __typename?: 'UpdateApartmentResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Apartment>;
};

/** create Apartment input */
export type CreateApartmentInput = {
  sponsor?: Maybe<Array<Maybe<TsRelationshipInput>>>;
  bookingIcal?: Maybe<Scalars['String']>;
  coverJpg?: Maybe<TsRelationshipInput>;
  brandColor?: Maybe<TsColorInput>;
  code?: Maybe<Scalars['String']>;
  lighterColor?: Maybe<TsColorInput>;
  address?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['String']>;
  lightColor?: Maybe<TsColorInput>;
  airbnbLink?: Maybe<Scalars['String']>;
  airBnb?: Maybe<Scalars['String']>;
  facebookLink?: Maybe<Scalars['String']>;
  coverWebp?: Maybe<TsRelationshipInput>;
  name?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  airbnbIcal?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ID']>;
  _version?: Maybe<Scalars['Int']>;
  _shapeId?: Maybe<Scalars['String']>;
  _shapeName?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['String']>;
  _createdBy?: Maybe<Scalars['String']>;
  _updatedAt?: Maybe<Scalars['String']>;
  _updatedBy?: Maybe<Scalars['String']>;
  _schemaVersion?: Maybe<Scalars['Float']>;
  _enabled?: Maybe<Scalars['Boolean']>;
  _enabledAt?: Maybe<Scalars['String']>;
  _status?: Maybe<DefaultWorkflow>;
  _contentTypeId?: Maybe<Scalars['String']>;
  _contentTypeName?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateApartmentResult = {
  __typename?: 'CreateApartmentResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Apartment>;
};

/** duplicate Apartment input */
export type DuplicateApartmentInput = {
  _id?: Maybe<Scalars['ID']>;
  sponsor?: Maybe<Array<Maybe<TsRelationshipInput>>>;
  bookingIcal?: Maybe<Scalars['String']>;
  coverJpg?: Maybe<TsRelationshipInput>;
  brandColor?: Maybe<TsColorInput>;
  code?: Maybe<Scalars['String']>;
  lighterColor?: Maybe<TsColorInput>;
  address?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['String']>;
  lightColor?: Maybe<TsColorInput>;
  airbnbLink?: Maybe<Scalars['String']>;
  airBnb?: Maybe<Scalars['String']>;
  facebookLink?: Maybe<Scalars['String']>;
  coverWebp?: Maybe<TsRelationshipInput>;
  name?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  airbnbIcal?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  _version?: Maybe<Scalars['Int']>;
  _shapeId?: Maybe<Scalars['String']>;
  _shapeName?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['String']>;
  _createdBy?: Maybe<Scalars['String']>;
  _updatedAt?: Maybe<Scalars['String']>;
  _updatedBy?: Maybe<Scalars['String']>;
  _schemaVersion?: Maybe<Scalars['Float']>;
  _enabled?: Maybe<Scalars['Boolean']>;
  _enabledAt?: Maybe<Scalars['String']>;
  _status?: Maybe<DefaultWorkflow>;
  _contentTypeId?: Maybe<Scalars['String']>;
  _contentTypeName?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DuplicateApartmentResult = {
  __typename?: 'DuplicateApartmentResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Apartment>;
};

/** delete Apartment input */
export type DeleteApartmentInput = {
  _id: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteApartmentResult = {
  __typename?: 'DeleteApartmentResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Scalars['Boolean']>;
};

/** update Article input */
export type UpdateArticleInput = {
  _id?: Maybe<Scalars['ID']>;
  path?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  relationship?: Maybe<TsRelationshipInput>;
  content?: Maybe<Scalars['JSON']>;
  _version?: Maybe<Scalars['Int']>;
  _shapeId?: Maybe<Scalars['String']>;
  _shapeName?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['String']>;
  _createdBy?: Maybe<Scalars['String']>;
  _updatedAt?: Maybe<Scalars['String']>;
  _updatedBy?: Maybe<Scalars['String']>;
  _schemaVersion?: Maybe<Scalars['Float']>;
  _enabled?: Maybe<Scalars['Boolean']>;
  _enabledAt?: Maybe<Scalars['String']>;
  _status?: Maybe<DefaultWorkflow>;
  _contentTypeId?: Maybe<Scalars['String']>;
  _contentTypeName?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateArticleResult = {
  __typename?: 'UpdateArticleResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Article>;
};

/** create Article input */
export type CreateArticleInput = {
  path?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  relationship: TsRelationshipInput;
  content?: Maybe<Scalars['JSON']>;
  _id?: Maybe<Scalars['ID']>;
  _version?: Maybe<Scalars['Int']>;
  _shapeId?: Maybe<Scalars['String']>;
  _shapeName?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['String']>;
  _createdBy?: Maybe<Scalars['String']>;
  _updatedAt?: Maybe<Scalars['String']>;
  _updatedBy?: Maybe<Scalars['String']>;
  _schemaVersion?: Maybe<Scalars['Float']>;
  _enabled?: Maybe<Scalars['Boolean']>;
  _enabledAt?: Maybe<Scalars['String']>;
  _status?: Maybe<DefaultWorkflow>;
  _contentTypeId?: Maybe<Scalars['String']>;
  _contentTypeName?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateArticleResult = {
  __typename?: 'CreateArticleResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Article>;
};

/** duplicate Article input */
export type DuplicateArticleInput = {
  _id?: Maybe<Scalars['ID']>;
  path?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  relationship?: Maybe<TsRelationshipInput>;
  content?: Maybe<Scalars['JSON']>;
  _version?: Maybe<Scalars['Int']>;
  _shapeId?: Maybe<Scalars['String']>;
  _shapeName?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['String']>;
  _createdBy?: Maybe<Scalars['String']>;
  _updatedAt?: Maybe<Scalars['String']>;
  _updatedBy?: Maybe<Scalars['String']>;
  _schemaVersion?: Maybe<Scalars['Float']>;
  _enabled?: Maybe<Scalars['Boolean']>;
  _enabledAt?: Maybe<Scalars['String']>;
  _status?: Maybe<DefaultWorkflow>;
  _contentTypeId?: Maybe<Scalars['String']>;
  _contentTypeName?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DuplicateArticleResult = {
  __typename?: 'DuplicateArticleResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Article>;
};

/** delete Article input */
export type DeleteArticleInput = {
  _id: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteArticleResult = {
  __typename?: 'DeleteArticleResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Scalars['Boolean']>;
};

/** update Faq input */
export type UpdateFaqInput = {
  _id?: Maybe<Scalars['ID']>;
  apartment?: Maybe<TsRelationshipInput>;
  language?: Maybe<TsRelationshipInput>;
  question?: Maybe<Scalars['String']>;
  answer?: Maybe<Scalars['JSON']>;
  linkVideo?: Maybe<Scalars['String']>;
  asset?: Maybe<TsRelationshipInput>;
  _version?: Maybe<Scalars['Int']>;
  _shapeId?: Maybe<Scalars['String']>;
  _shapeName?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['String']>;
  _createdBy?: Maybe<Scalars['String']>;
  _updatedAt?: Maybe<Scalars['String']>;
  _updatedBy?: Maybe<Scalars['String']>;
  _schemaVersion?: Maybe<Scalars['Float']>;
  _enabled?: Maybe<Scalars['Boolean']>;
  _enabledAt?: Maybe<Scalars['String']>;
  _status?: Maybe<DefaultWorkflow>;
  _contentTypeId?: Maybe<Scalars['String']>;
  _contentTypeName?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateFaqResult = {
  __typename?: 'UpdateFaqResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Faq>;
};

/** create Faq input */
export type CreateFaqInput = {
  apartment: TsRelationshipInput;
  language: TsRelationshipInput;
  question: Scalars['String'];
  answer: Scalars['JSON'];
  linkVideo?: Maybe<Scalars['String']>;
  asset?: Maybe<TsRelationshipInput>;
  _id?: Maybe<Scalars['ID']>;
  _version?: Maybe<Scalars['Int']>;
  _shapeId?: Maybe<Scalars['String']>;
  _shapeName?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['String']>;
  _createdBy?: Maybe<Scalars['String']>;
  _updatedAt?: Maybe<Scalars['String']>;
  _updatedBy?: Maybe<Scalars['String']>;
  _schemaVersion?: Maybe<Scalars['Float']>;
  _enabled?: Maybe<Scalars['Boolean']>;
  _enabledAt?: Maybe<Scalars['String']>;
  _status?: Maybe<DefaultWorkflow>;
  _contentTypeId?: Maybe<Scalars['String']>;
  _contentTypeName?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateFaqResult = {
  __typename?: 'CreateFaqResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Faq>;
};

/** duplicate Faq input */
export type DuplicateFaqInput = {
  _id?: Maybe<Scalars['ID']>;
  apartment?: Maybe<TsRelationshipInput>;
  language?: Maybe<TsRelationshipInput>;
  question?: Maybe<Scalars['String']>;
  answer?: Maybe<Scalars['JSON']>;
  linkVideo?: Maybe<Scalars['String']>;
  asset?: Maybe<TsRelationshipInput>;
  _version?: Maybe<Scalars['Int']>;
  _shapeId?: Maybe<Scalars['String']>;
  _shapeName?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['String']>;
  _createdBy?: Maybe<Scalars['String']>;
  _updatedAt?: Maybe<Scalars['String']>;
  _updatedBy?: Maybe<Scalars['String']>;
  _schemaVersion?: Maybe<Scalars['Float']>;
  _enabled?: Maybe<Scalars['Boolean']>;
  _enabledAt?: Maybe<Scalars['String']>;
  _status?: Maybe<DefaultWorkflow>;
  _contentTypeId?: Maybe<Scalars['String']>;
  _contentTypeName?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DuplicateFaqResult = {
  __typename?: 'DuplicateFaqResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Faq>;
};

/** delete Faq input */
export type DeleteFaqInput = {
  _id: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteFaqResult = {
  __typename?: 'DeleteFaqResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Scalars['Boolean']>;
};

/** update Registrations input */
export type UpdateRegistrationsInput = {
  _id?: Maybe<Scalars['ID']>;
  guests?: Maybe<Array<Maybe<RegistrationsGuestsInput>>>;
  registrationStatus?: Maybe<Scalars['String']>;
  apartmentKey?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  _version?: Maybe<Scalars['Int']>;
  _shapeId?: Maybe<Scalars['String']>;
  _shapeName?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['String']>;
  _createdBy?: Maybe<Scalars['String']>;
  _updatedAt?: Maybe<Scalars['String']>;
  _updatedBy?: Maybe<Scalars['String']>;
  _schemaVersion?: Maybe<Scalars['Float']>;
  _enabled?: Maybe<Scalars['Boolean']>;
  _enabledAt?: Maybe<Scalars['String']>;
  _status?: Maybe<DefaultWorkflow>;
  _contentTypeId?: Maybe<Scalars['String']>;
  _contentTypeName?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type RegistrationsGuestsInput = {
  lastName?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  placeOfBirth?: Maybe<Scalars['String']>;
  nationality?: Maybe<Scalars['String']>;
  documentType?: Maybe<Scalars['String']>;
  documentNumber?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['String']>;
};

export type UpdateRegistrationsResult = {
  __typename?: 'UpdateRegistrationsResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Registrations>;
};

/** create Registrations input */
export type CreateRegistrationsInput = {
  guests?: Maybe<Array<Maybe<RegistrationsGuestsInput>>>;
  registrationStatus?: Maybe<Scalars['String']>;
  apartmentKey: Scalars['String'];
  email: Scalars['String'];
  _id?: Maybe<Scalars['ID']>;
  _version?: Maybe<Scalars['Int']>;
  _shapeId?: Maybe<Scalars['String']>;
  _shapeName?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['String']>;
  _createdBy?: Maybe<Scalars['String']>;
  _updatedAt?: Maybe<Scalars['String']>;
  _updatedBy?: Maybe<Scalars['String']>;
  _schemaVersion?: Maybe<Scalars['Float']>;
  _enabled?: Maybe<Scalars['Boolean']>;
  _enabledAt?: Maybe<Scalars['String']>;
  _status?: Maybe<DefaultWorkflow>;
  _contentTypeId?: Maybe<Scalars['String']>;
  _contentTypeName?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateRegistrationsResult = {
  __typename?: 'CreateRegistrationsResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Registrations>;
};

/** duplicate Registrations input */
export type DuplicateRegistrationsInput = {
  _id?: Maybe<Scalars['ID']>;
  guests?: Maybe<Array<Maybe<RegistrationsGuestsInput>>>;
  registrationStatus?: Maybe<Scalars['String']>;
  apartmentKey?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  _version?: Maybe<Scalars['Int']>;
  _shapeId?: Maybe<Scalars['String']>;
  _shapeName?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['String']>;
  _createdBy?: Maybe<Scalars['String']>;
  _updatedAt?: Maybe<Scalars['String']>;
  _updatedBy?: Maybe<Scalars['String']>;
  _schemaVersion?: Maybe<Scalars['Float']>;
  _enabled?: Maybe<Scalars['Boolean']>;
  _enabledAt?: Maybe<Scalars['String']>;
  _status?: Maybe<DefaultWorkflow>;
  _contentTypeId?: Maybe<Scalars['String']>;
  _contentTypeName?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DuplicateRegistrationsResult = {
  __typename?: 'DuplicateRegistrationsResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Registrations>;
};

/** delete Registrations input */
export type DeleteRegistrationsInput = {
  _id: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteRegistrationsResult = {
  __typename?: 'DeleteRegistrationsResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Scalars['Boolean']>;
};

/** update Language input */
export type UpdateLanguageInput = {
  _id?: Maybe<Scalars['ID']>;
  code?: Maybe<Scalars['String']>;
  _version?: Maybe<Scalars['Int']>;
  _shapeId?: Maybe<Scalars['String']>;
  _shapeName?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['String']>;
  _createdBy?: Maybe<Scalars['String']>;
  _updatedAt?: Maybe<Scalars['String']>;
  _updatedBy?: Maybe<Scalars['String']>;
  _schemaVersion?: Maybe<Scalars['Float']>;
  _enabled?: Maybe<Scalars['Boolean']>;
  _enabledAt?: Maybe<Scalars['String']>;
  _status?: Maybe<DefaultWorkflow>;
  _contentTypeId?: Maybe<Scalars['String']>;
  _contentTypeName?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateLanguageResult = {
  __typename?: 'UpdateLanguageResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Language>;
};

/** create Language input */
export type CreateLanguageInput = {
  code?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ID']>;
  _version?: Maybe<Scalars['Int']>;
  _shapeId?: Maybe<Scalars['String']>;
  _shapeName?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['String']>;
  _createdBy?: Maybe<Scalars['String']>;
  _updatedAt?: Maybe<Scalars['String']>;
  _updatedBy?: Maybe<Scalars['String']>;
  _schemaVersion?: Maybe<Scalars['Float']>;
  _enabled?: Maybe<Scalars['Boolean']>;
  _enabledAt?: Maybe<Scalars['String']>;
  _status?: Maybe<DefaultWorkflow>;
  _contentTypeId?: Maybe<Scalars['String']>;
  _contentTypeName?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateLanguageResult = {
  __typename?: 'CreateLanguageResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Language>;
};

/** duplicate Language input */
export type DuplicateLanguageInput = {
  _id?: Maybe<Scalars['ID']>;
  code?: Maybe<Scalars['String']>;
  _version?: Maybe<Scalars['Int']>;
  _shapeId?: Maybe<Scalars['String']>;
  _shapeName?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['String']>;
  _createdBy?: Maybe<Scalars['String']>;
  _updatedAt?: Maybe<Scalars['String']>;
  _updatedBy?: Maybe<Scalars['String']>;
  _schemaVersion?: Maybe<Scalars['Float']>;
  _enabled?: Maybe<Scalars['Boolean']>;
  _enabledAt?: Maybe<Scalars['String']>;
  _status?: Maybe<DefaultWorkflow>;
  _contentTypeId?: Maybe<Scalars['String']>;
  _contentTypeName?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DuplicateLanguageResult = {
  __typename?: 'DuplicateLanguageResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Language>;
};

/** delete Language input */
export type DeleteLanguageInput = {
  _id: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteLanguageResult = {
  __typename?: 'DeleteLanguageResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Scalars['Boolean']>;
};

export type ApartmentQueryVariables = Exact<{
  key: Scalars['String'];
}>;


export type ApartmentQuery = (
  { __typename?: 'Root' }
  & { getApartmentList?: Maybe<(
    { __typename?: 'ApartmentPaginatedList' }
    & { items?: Maybe<Array<Maybe<(
      { __typename?: 'Apartment' }
      & Pick<Apartment, 'airBnb' | 'latitude' | 'longitude' | 'name' | 'address' | 'airbnbLink' | 'facebookLink'>
      & { brandColor?: Maybe<(
        { __typename?: 'TSColor' }
        & Pick<TsColor, 'hex'>
      )>, lightColor?: Maybe<(
        { __typename?: 'TSColor' }
        & { rgb?: Maybe<(
          { __typename?: 'TSColorRgb' }
          & Pick<TsColorRgb, 'a' | 'b' | 'g' | 'r'>
        )> }
      )>, lighterColor?: Maybe<(
        { __typename?: 'TSColor' }
        & { rgb?: Maybe<(
          { __typename?: 'TSColorRgb' }
          & Pick<TsColorRgb, 'a' | 'b' | 'g' | 'r'>
        )> }
      )>, coverJpg?: Maybe<(
        { __typename?: 'Asset' }
        & Pick<Asset, 'path'>
      )>, coverWebp?: Maybe<(
        { __typename?: 'Asset' }
        & Pick<Asset, 'path'>
      )>, sponsor?: Maybe<Array<Maybe<(
        { __typename?: 'Apartment' }
        & Pick<Apartment, 'location' | 'key'>
        & { brandColor?: Maybe<(
          { __typename?: 'TSColor' }
          & Pick<TsColor, 'hex'>
        )> }
      )>>> }
    )>>> }
  )> }
);

export type GetApartmentsKeyQueryVariables = Exact<{ [key: string]: never; }>;


export type GetApartmentsKeyQuery = (
  { __typename?: 'Root' }
  & { getApartmentList?: Maybe<(
    { __typename?: 'ApartmentPaginatedList' }
    & { items?: Maybe<Array<Maybe<(
      { __typename?: 'Apartment' }
      & Pick<Apartment, 'key'>
    )>>> }
  )> }
);

export type ApartmentCodeQueryVariables = Exact<{
  key: Scalars['String'];
}>;


export type ApartmentCodeQuery = (
  { __typename?: 'Root' }
  & { getApartmentList?: Maybe<(
    { __typename?: 'ApartmentPaginatedList' }
    & { items?: Maybe<Array<Maybe<(
      { __typename?: 'Apartment' }
      & Pick<Apartment, 'code'>
    )>>> }
  )> }
);

export type ApartmentCodeByIdQueryVariables = Exact<{
  key: Scalars['String'];
}>;


export type ApartmentCodeByIdQuery = (
  { __typename?: 'Root' }
  & { getApartmentList?: Maybe<(
    { __typename?: 'ApartmentPaginatedList' }
    & { items?: Maybe<Array<Maybe<(
      { __typename?: 'Apartment' }
      & Pick<Apartment, 'code' | 'key'>
    )>>> }
  )> }
);

export type ApartmentSecretQueryVariables = Exact<{
  key: Scalars['String'];
}>;


export type ApartmentSecretQuery = (
  { __typename?: 'Root' }
  & { getApartmentList?: Maybe<(
    { __typename?: 'ApartmentPaginatedList' }
    & { items?: Maybe<Array<Maybe<(
      { __typename?: 'Apartment' }
      & Pick<Apartment, 'airbnbIcal' | 'bookingIcal'>
    )>>> }
  )> }
);

export type GetArticleByPathQueryVariables = Exact<{
  path: Scalars['String'];
}>;


export type GetArticleByPathQuery = (
  { __typename?: 'Root' }
  & { getArticleList?: Maybe<(
    { __typename?: 'ArticlePaginatedList' }
    & { items?: Maybe<Array<Maybe<(
      { __typename?: 'Article' }
      & Pick<Article, 'contentHtml' | 'title'>
    )>>> }
  )> }
);

export type FaqsQueryVariables = Exact<{
  apartment: Scalars['String'];
  lang: Scalars['String'];
}>;


export type FaqsQuery = (
  { __typename?: 'Root' }
  & { getFaqList?: Maybe<(
    { __typename?: 'FaqPaginatedList' }
    & { items?: Maybe<Array<Maybe<(
      { __typename?: 'Faq' }
      & Pick<Faq, 'answerHtml' | 'question' | 'linkVideo'>
      & { asset?: Maybe<(
        { __typename?: 'Asset' }
        & Pick<Asset, 'path' | 'mimeType'>
      )> }
    )>>> }
  )> }
);

export type GetLangsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLangsQuery = (
  { __typename?: 'Root' }
  & { getLanguageList?: Maybe<(
    { __typename?: 'LanguagePaginatedList' }
    & { items?: Maybe<Array<Maybe<(
      { __typename?: 'Language' }
      & Pick<Language, 'code'>
    )>>> }
  )> }
);

export type SendRegistrationMutationVariables = Exact<{
  input: CreateRegistrationsInput;
}>;


export type SendRegistrationMutation = (
  { __typename?: 'Mutations' }
  & { createRegistrations?: Maybe<(
    { __typename?: 'CreateRegistrationsResult' }
    & { result?: Maybe<(
      { __typename?: 'Registrations' }
      & Pick<Registrations, 'email' | '_id' | 'registrationStatus'>
      & { guests?: Maybe<Array<Maybe<(
        { __typename?: 'RegistrationsGuests' }
        & Pick<RegistrationsGuests, 'firstName' | 'lastName'>
      )>>> }
    )> }
  )> }
);

export type UpdateRegistrationsMutationVariables = Exact<{
  input: UpdateRegistrationsInput;
}>;


export type UpdateRegistrationsMutation = (
  { __typename?: 'Mutations' }
  & { updateRegistrations?: Maybe<(
    { __typename?: 'UpdateRegistrationsResult' }
    & { result?: Maybe<(
      { __typename?: 'Registrations' }
      & Pick<Registrations, 'email' | '_id' | 'registrationStatus'>
      & { guests?: Maybe<Array<Maybe<(
        { __typename?: 'RegistrationsGuests' }
        & Pick<RegistrationsGuests, 'firstName' | 'lastName'>
      )>>> }
    )> }
  )> }
);

export type GetRegistrationQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetRegistrationQuery = (
  { __typename?: 'Root' }
  & { getRegistrations?: Maybe<(
    { __typename?: 'Registrations' }
    & Pick<Registrations, '_id' | 'apartmentKey' | 'email' | 'registrationStatus'>
    & { guests?: Maybe<Array<Maybe<(
      { __typename?: 'RegistrationsGuests' }
      & Pick<RegistrationsGuests, 'birthDate' | 'documentNumber' | 'documentType' | 'firstName' | 'lastName' | 'nationality' | 'placeOfBirth'>
    )>>> }
  )> }
);

export type GetRegistrationsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRegistrationsQuery = (
  { __typename?: 'Root' }
  & { getRegistrationsList?: Maybe<(
    { __typename?: 'RegistrationsPaginatedList' }
    & { items?: Maybe<Array<Maybe<(
      { __typename?: 'Registrations' }
      & Pick<Registrations, '_id' | 'apartmentKey' | 'email' | 'registrationStatus'>
      & { guests?: Maybe<Array<Maybe<(
        { __typename?: 'RegistrationsGuests' }
        & Pick<RegistrationsGuests, 'birthDate' | 'documentNumber' | 'documentType' | 'firstName' | 'lastName' | 'nationality' | 'placeOfBirth'>
      )>>> }
    )>>> }
  )> }
);


export const ApartmentDocument = gql`
    query Apartment($key: String!) {
  getApartmentList(where: {key: {eq: $key}}) {
    items {
      airBnb
      latitude
      longitude
      name
      brandColor {
        hex
      }
      lightColor {
        rgb {
          a
          b
          g
          r
        }
      }
      lighterColor {
        rgb {
          a
          b
          g
          r
        }
      }
      coverJpg {
        path
      }
      coverWebp {
        path
      }
      address
      airbnbLink
      facebookLink
      sponsor {
        brandColor {
          hex
        }
        location
        key
      }
    }
  }
}
    `;
export const GetApartmentsKeyDocument = gql`
    query getApartmentsKey {
  getApartmentList {
    items {
      key
    }
  }
}
    `;
export const ApartmentCodeDocument = gql`
    query ApartmentCode($key: String!) {
  getApartmentList(where: {key: {eq: $key}}) {
    items {
      code
    }
  }
}
    `;
export const ApartmentCodeByIdDocument = gql`
    query ApartmentCodeById($key: String!) {
  getApartmentList(where: {airBnb: {eq: $key}}) {
    items {
      code
      key
    }
  }
}
    `;
export const ApartmentSecretDocument = gql`
    query ApartmentSecret($key: String!) {
  getApartmentList(where: {key: {eq: $key}}) {
    items {
      airbnbIcal
      bookingIcal
    }
  }
}
    `;
export const GetArticleByPathDocument = gql`
    query getArticleByPath($path: String!) {
  getArticleList(where: {path: {eq: $path}}) {
    items {
      contentHtml
      title
    }
  }
}
    `;
export const FaqsDocument = gql`
    query Faqs($apartment: String!, $lang: String!) {
  getFaqList(
    where: {AND: [{apartment: {key: {match: $apartment}}}, {language: {code: {match: $lang}}}]}
  ) {
    items {
      answerHtml
      question
      asset {
        path
        mimeType
      }
      linkVideo
    }
  }
}
    `;
export const GetLangsDocument = gql`
    query getLangs {
  getLanguageList {
    items {
      code
    }
  }
}
    `;
export const SendRegistrationDocument = gql`
    mutation sendRegistration($input: CreateRegistrationsInput!) {
  createRegistrations(input: $input) {
    result {
      email
      guests {
        firstName
        lastName
      }
      _id
      registrationStatus
    }
  }
}
    `;
export const UpdateRegistrationsDocument = gql`
    mutation updateRegistrations($input: UpdateRegistrationsInput!) {
  updateRegistrations(input: $input) {
    result {
      email
      guests {
        firstName
        lastName
      }
      _id
      registrationStatus
    }
  }
}
    `;
export const GetRegistrationDocument = gql`
    query getRegistration($id: ID!) {
  getRegistrations(_id: $id) {
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
    `;
export const GetRegistrationsDocument = gql`
    query getRegistrations {
  getRegistrationsList(onlyEnabled: false) {
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

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction();
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    Apartment(variables: ApartmentQueryVariables, requestHeaders?: Headers): Promise<ApartmentQuery> {
      return withWrapper(() => client.request<ApartmentQuery>(print(ApartmentDocument), variables, requestHeaders));
    },
    getApartmentsKey(variables?: GetApartmentsKeyQueryVariables, requestHeaders?: Headers): Promise<GetApartmentsKeyQuery> {
      return withWrapper(() => client.request<GetApartmentsKeyQuery>(print(GetApartmentsKeyDocument), variables, requestHeaders));
    },
    ApartmentCode(variables: ApartmentCodeQueryVariables, requestHeaders?: Headers): Promise<ApartmentCodeQuery> {
      return withWrapper(() => client.request<ApartmentCodeQuery>(print(ApartmentCodeDocument), variables, requestHeaders));
    },
    ApartmentCodeById(variables: ApartmentCodeByIdQueryVariables, requestHeaders?: Headers): Promise<ApartmentCodeByIdQuery> {
      return withWrapper(() => client.request<ApartmentCodeByIdQuery>(print(ApartmentCodeByIdDocument), variables, requestHeaders));
    },
    ApartmentSecret(variables: ApartmentSecretQueryVariables, requestHeaders?: Headers): Promise<ApartmentSecretQuery> {
      return withWrapper(() => client.request<ApartmentSecretQuery>(print(ApartmentSecretDocument), variables, requestHeaders));
    },
    getArticleByPath(variables: GetArticleByPathQueryVariables, requestHeaders?: Headers): Promise<GetArticleByPathQuery> {
      return withWrapper(() => client.request<GetArticleByPathQuery>(print(GetArticleByPathDocument), variables, requestHeaders));
    },
    Faqs(variables: FaqsQueryVariables, requestHeaders?: Headers): Promise<FaqsQuery> {
      return withWrapper(() => client.request<FaqsQuery>(print(FaqsDocument), variables, requestHeaders));
    },
    getLangs(variables?: GetLangsQueryVariables, requestHeaders?: Headers): Promise<GetLangsQuery> {
      return withWrapper(() => client.request<GetLangsQuery>(print(GetLangsDocument), variables, requestHeaders));
    },
    sendRegistration(variables: SendRegistrationMutationVariables, requestHeaders?: Headers): Promise<SendRegistrationMutation> {
      return withWrapper(() => client.request<SendRegistrationMutation>(print(SendRegistrationDocument), variables, requestHeaders));
    },
    updateRegistrations(variables: UpdateRegistrationsMutationVariables, requestHeaders?: Headers): Promise<UpdateRegistrationsMutation> {
      return withWrapper(() => client.request<UpdateRegistrationsMutation>(print(UpdateRegistrationsDocument), variables, requestHeaders));
    },
    getRegistration(variables: GetRegistrationQueryVariables, requestHeaders?: Headers): Promise<GetRegistrationQuery> {
      return withWrapper(() => client.request<GetRegistrationQuery>(print(GetRegistrationDocument), variables, requestHeaders));
    },
    getRegistrations(variables?: GetRegistrationsQueryVariables, requestHeaders?: Headers): Promise<GetRegistrationsQuery> {
      return withWrapper(() => client.request<GetRegistrationsQuery>(print(GetRegistrationsDocument), variables, requestHeaders));
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;