import { GraphQLClient } from 'graphql-request';
import { print } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  JSON: any;
  JSONObject: any;
};

export type Asset = TsSearchable & {
   __typename?: 'Asset';
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
  _contentTypeId?: Maybe<Scalars['String']>;
  _contentTypeName?: Maybe<Scalars['String']>;
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
  searchSummary?: Maybe<Scalars['String']>;
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

export type AssetPaginatedList = {
   __typename?: 'AssetPaginatedList';
  /** @deprecated Use items instead */
  results?: Maybe<Array<Maybe<Asset>>>;
  items?: Maybe<Array<Maybe<Asset>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AssetSearchResult = {
   __typename?: 'AssetSearchResult';
  searchSummary?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
  sourceUrl?: Maybe<Scalars['String']>;
  uploadStatus?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['String']>;
  _version?: Maybe<Scalars['Int']>;
  _contentTypeId?: Maybe<Scalars['String']>;
  _contentTypeName?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['String']>;
  _createdBy?: Maybe<Scalars['String']>;
  _updatedAt?: Maybe<Scalars['String']>;
  _updatedBy?: Maybe<Scalars['String']>;
  _schemaVersion?: Maybe<Scalars['Float']>;
  _enabled?: Maybe<Scalars['Boolean']>;
  _enabledAt?: Maybe<Scalars['String']>;
  _status?: Maybe<Scalars['String']>;
};

export type AssetSearchResults = {
   __typename?: 'AssetSearchResults';
  results?: Maybe<Array<Maybe<AssetSearchResult>>>;
  total?: Maybe<Scalars['Int']>;
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
  _contentTypeId?: Maybe<Scalars['String']>;
  _contentTypeName?: Maybe<Scalars['String']>;
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

export type ContentStructureInput = {
  path: Scalars['String'];
  structure?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type CreateAssetInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  filename: Scalars['String'];
  caption?: Maybe<Scalars['JSON']>;
  credit?: Maybe<Scalars['JSON']>;
  path: Scalars['String'];
  mimeType?: Maybe<Scalars['String']>;
  sourceUrl?: Maybe<Scalars['String']>;
  uploadStatus?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ID']>;
  _version?: Maybe<Scalars['Int']>;
  _contentTypeId?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['String']>;
  _createdBy?: Maybe<Scalars['String']>;
  _updatedAt?: Maybe<Scalars['String']>;
  _updatedBy?: Maybe<Scalars['String']>;
  _schemaVersion?: Maybe<Scalars['Float']>;
  _enabled?: Maybe<Scalars['Boolean']>;
  _enabledAt?: Maybe<Scalars['String']>;
  _status?: Maybe<DefaultWorkflow>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateAssetResult = {
   __typename?: 'CreateAssetResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Asset>;
};

export type CreateFaqInput = {
  repeater?: Maybe<Array<Maybe<FaqRepeaterInput>>>;
  _id?: Maybe<Scalars['ID']>;
  _version?: Maybe<Scalars['Int']>;
  _contentTypeId?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['String']>;
  _createdBy?: Maybe<Scalars['String']>;
  _updatedAt?: Maybe<Scalars['String']>;
  _updatedBy?: Maybe<Scalars['String']>;
  _schemaVersion?: Maybe<Scalars['Float']>;
  _enabled?: Maybe<Scalars['Boolean']>;
  _enabledAt?: Maybe<Scalars['String']>;
  _status?: Maybe<DefaultWorkflow>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateFaqResult = {
   __typename?: 'CreateFaqResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Faq>;
};

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
  _contentTypeId?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['String']>;
  _createdBy?: Maybe<Scalars['String']>;
  _updatedAt?: Maybe<Scalars['String']>;
  _updatedBy?: Maybe<Scalars['String']>;
  _schemaVersion?: Maybe<Scalars['Float']>;
  _enabled?: Maybe<Scalars['Boolean']>;
  _enabledAt?: Maybe<Scalars['String']>;
  _status?: Maybe<DefaultWorkflow>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateTsStaticSiteResult = {
   __typename?: 'CreateTsStaticSiteResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<TsStaticSite>;
};

export enum DefaultWorkflow {
  Disabled = 'disabled',
  Enabled = 'enabled'
}

export type DeleteAssetInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  _id: Scalars['ID'];
};

export type DeleteAssetResult = {
   __typename?: 'DeleteAssetResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Scalars['Boolean']>;
};

export type DeleteFaqInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  _id: Scalars['ID'];
};

export type DeleteFaqResult = {
   __typename?: 'DeleteFaqResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Scalars['Boolean']>;
};

export type DeleteTsStaticSiteInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  _id: Scalars['ID'];
};

export type DeleteTsStaticSiteResult = {
   __typename?: 'DeleteTsStaticSiteResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Scalars['Boolean']>;
};

export type DuplicateAssetInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['JSON']>;
  credit?: Maybe<Scalars['JSON']>;
  path?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
  sourceUrl?: Maybe<Scalars['String']>;
  uploadStatus?: Maybe<Scalars['String']>;
  _id: Scalars['ID'];
  _version?: Maybe<Scalars['Int']>;
  _contentTypeId?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['String']>;
  _createdBy?: Maybe<Scalars['String']>;
  _updatedAt?: Maybe<Scalars['String']>;
  _updatedBy?: Maybe<Scalars['String']>;
  _schemaVersion?: Maybe<Scalars['Float']>;
  _enabled?: Maybe<Scalars['Boolean']>;
  _enabledAt?: Maybe<Scalars['String']>;
  _status?: Maybe<DefaultWorkflow>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DuplicateAssetResult = {
   __typename?: 'DuplicateAssetResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Asset>;
};

export type DuplicateFaqInput = {
  repeater?: Maybe<Array<Maybe<FaqRepeaterInput>>>;
  _id: Scalars['ID'];
  _version?: Maybe<Scalars['Int']>;
  _contentTypeId?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['String']>;
  _createdBy?: Maybe<Scalars['String']>;
  _updatedAt?: Maybe<Scalars['String']>;
  _updatedBy?: Maybe<Scalars['String']>;
  _schemaVersion?: Maybe<Scalars['Float']>;
  _enabled?: Maybe<Scalars['Boolean']>;
  _enabledAt?: Maybe<Scalars['String']>;
  _status?: Maybe<DefaultWorkflow>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DuplicateFaqResult = {
   __typename?: 'DuplicateFaqResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Faq>;
};

export type DuplicateTsStaticSiteInput = {
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
  _id: Scalars['ID'];
  _version?: Maybe<Scalars['Int']>;
  _contentTypeId?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['String']>;
  _createdBy?: Maybe<Scalars['String']>;
  _updatedAt?: Maybe<Scalars['String']>;
  _updatedBy?: Maybe<Scalars['String']>;
  _schemaVersion?: Maybe<Scalars['Float']>;
  _enabled?: Maybe<Scalars['Boolean']>;
  _enabledAt?: Maybe<Scalars['String']>;
  _status?: Maybe<DefaultWorkflow>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DuplicateTsStaticSiteResult = {
   __typename?: 'DuplicateTsStaticSiteResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<TsStaticSite>;
};

export type Faq = TsSearchable & {
   __typename?: 'Faq';
  repeater?: Maybe<Array<Maybe<FaqRepeater>>>;
  _id?: Maybe<Scalars['ID']>;
  _version?: Maybe<Scalars['Int']>;
  _contentTypeId?: Maybe<Scalars['String']>;
  _contentTypeName?: Maybe<Scalars['String']>;
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
  searchSummary?: Maybe<Scalars['String']>;
};

export type FaqPaginatedList = {
   __typename?: 'FaqPaginatedList';
  /** @deprecated Use items instead */
  results?: Maybe<Array<Maybe<Faq>>>;
  items?: Maybe<Array<Maybe<Faq>>>;
  total?: Maybe<Scalars['Int']>;
};

export type FaqRepeater = {
   __typename?: 'FaqRepeater';
  answerIt?: Maybe<Scalars['String']>;
  linkVideo?: Maybe<Scalars['String']>;
  questionIt?: Maybe<Scalars['String']>;
  questionEn?: Maybe<Scalars['String']>;
  answerEn?: Maybe<Scalars['String']>;
};

export type FaqRepeaterInput = {
  answerIt?: Maybe<Scalars['String']>;
  linkVideo?: Maybe<Scalars['String']>;
  questionIt?: Maybe<Scalars['String']>;
  questionEn?: Maybe<Scalars['String']>;
  answerEn?: Maybe<Scalars['String']>;
};

export type FaqSearchResult = {
   __typename?: 'FaqSearchResult';
  searchSummary?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['String']>;
  _version?: Maybe<Scalars['Int']>;
  _contentTypeId?: Maybe<Scalars['String']>;
  _contentTypeName?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['String']>;
  _createdBy?: Maybe<Scalars['String']>;
  _updatedAt?: Maybe<Scalars['String']>;
  _updatedBy?: Maybe<Scalars['String']>;
  _schemaVersion?: Maybe<Scalars['Float']>;
  _enabled?: Maybe<Scalars['Boolean']>;
  _enabledAt?: Maybe<Scalars['String']>;
  _status?: Maybe<Scalars['String']>;
};

export type FaqSearchResults = {
   __typename?: 'FaqSearchResults';
  results?: Maybe<Array<Maybe<FaqSearchResult>>>;
  total?: Maybe<Scalars['Int']>;
};

export type HttpHeader = {
   __typename?: 'HttpHeader';
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type HttpHeaderInput = {
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type ImportResultType = {
   __typename?: 'ImportResultType';
  countImported?: Maybe<Scalars['Int']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  rejectedItems?: Maybe<Array<Maybe<RejectedImportItem>>>;
};



export type Mutations = {
   __typename?: 'Mutations';
  tsCreateProject?: Maybe<TsProjectListItem>;
  tsCreateLock?: Maybe<TsLock>;
  tsExtendLock?: Maybe<TsLock>;
  tsRemoveLock?: Maybe<Scalars['Boolean']>;
  tsBreakLock?: Maybe<Scalars['Boolean']>;
  tsCreateApiKey?: Maybe<TsApiKey>;
  tsDeleteApiKey?: Maybe<Scalars['Boolean']>;
  tsCreateRole?: Maybe<TsRole>;
  tsUpdateRole?: Maybe<TsRole>;
  tsDeleteRole?: Maybe<Scalars['Boolean']>;
  tsUpdateWebhooks?: Maybe<TsWebhooks>;
  tsUpdateDefaultLocale?: Maybe<Scalars['JSON']>;
  tsAddLocale?: Maybe<Scalars['JSON']>;
  tsRemoveLocale?: Maybe<Scalars['JSON']>;
  tsAddContentType?: Maybe<Scalars['JSON']>;
  tsRemoveContentType?: Maybe<Scalars['JSON']>;
  tsUpdateContentType?: Maybe<Scalars['JSON']>;
  tsAddWorkflow?: Maybe<TsSaveWorkflowResponse>;
  tsUpdateWorkflow?: Maybe<TsSaveWorkflowResponse>;
  tsDeleteWorkflow?: Maybe<TsRemoveWorkflowResponse>;
  tsScheduleStatusUpdate?: Maybe<TsStatusUpdate>;
  tsCancelStatusUpdate?: Maybe<Scalars['Boolean']>;
  tsExportProject?: Maybe<Scalars['String']>;
  tsUpdateProject?: Maybe<TsProject>;
  tsUpdateProjectBilling?: Maybe<TsBilling>;
  tsUpdateProjectPermissions?: Maybe<TsPermissions>;
  tsUpdateInviteRole?: Maybe<TsInvite>;
  tsCancelProjectInvite?: Maybe<TsInvite>;
  tsRemoveProjectMember?: Maybe<TsPermissions>;
  tsDeleteProject?: Maybe<Scalars['Boolean']>;
  tsCompleteSetupStep?: Maybe<Scalars['Boolean']>;
  tsUpdateIntegrationToken?: Maybe<TsIntegrationToken>;
  uploadAssets?: Maybe<Array<Maybe<Upload>>>;
  replaceAsset?: Maybe<Upload>;
  createAsset?: Maybe<CreateAssetResult>;
  updateAsset?: Maybe<UpdateAssetResult>;
  deleteAsset?: Maybe<DeleteAssetResult>;
  duplicateAsset?: Maybe<DuplicateAssetResult>;
  importAssetListFromCSV?: Maybe<ImportResultType>;
  createTsStaticSite?: Maybe<CreateTsStaticSiteResult>;
  updateTsStaticSite?: Maybe<UpdateTsStaticSiteResult>;
  deleteTsStaticSite?: Maybe<DeleteTsStaticSiteResult>;
  duplicateTsStaticSite?: Maybe<DuplicateTsStaticSiteResult>;
  createFaq?: Maybe<CreateFaqResult>;
  updateFaq?: Maybe<UpdateFaqResult>;
  deleteFaq?: Maybe<DeleteFaqResult>;
  duplicateFaq?: Maybe<DuplicateFaqResult>;
  importFaqListFromCSV?: Maybe<ImportResultType>;
};


export type MutationsTsCreateProjectArgs = {
  name: Scalars['String'];
  template?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  defaultTimezone: Scalars['String'];
};


export type MutationsTsCreateLockArgs = {
  contentTypeId?: Maybe<Scalars['ID']>;
  id?: Maybe<Scalars['ID']>;
};


export type MutationsTsExtendLockArgs = {
  contentTypeId?: Maybe<Scalars['ID']>;
  id?: Maybe<Scalars['ID']>;
};


export type MutationsTsRemoveLockArgs = {
  contentTypeId?: Maybe<Scalars['ID']>;
  id?: Maybe<Scalars['ID']>;
};


export type MutationsTsBreakLockArgs = {
  contentTypeId?: Maybe<Scalars['ID']>;
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


export type MutationsTsAddContentTypeArgs = {
  projectId?: Maybe<Scalars['ID']>;
  version: Scalars['Int'];
  contentType: Scalars['JSON'];
};


export type MutationsTsRemoveContentTypeArgs = {
  projectId?: Maybe<Scalars['ID']>;
  version: Scalars['Int'];
  contentTypeId: Scalars['ID'];
};


export type MutationsTsUpdateContentTypeArgs = {
  projectId?: Maybe<Scalars['ID']>;
  version: Scalars['Int'];
  contentTypeId: Scalars['ID'];
  contentType: Scalars['JSON'];
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


export type MutationsCreateAssetArgs = {
  input: CreateAssetInput;
};


export type MutationsUpdateAssetArgs = {
  input: UpdateAssetInput;
  structure?: Maybe<Array<Maybe<ContentStructureInput>>>;
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
};


export type MutationsDeleteAssetArgs = {
  input: DeleteAssetInput;
};


export type MutationsDuplicateAssetArgs = {
  input: DuplicateAssetInput;
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
};


export type MutationsImportAssetListFromCsvArgs = {
  assetId: Scalars['ID'];
  importColumns?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type MutationsCreateTsStaticSiteArgs = {
  input: CreateTsStaticSiteInput;
};


export type MutationsUpdateTsStaticSiteArgs = {
  input: UpdateTsStaticSiteInput;
  structure?: Maybe<Array<Maybe<ContentStructureInput>>>;
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
};


export type MutationsDeleteTsStaticSiteArgs = {
  input: DeleteTsStaticSiteInput;
};


export type MutationsDuplicateTsStaticSiteArgs = {
  input: DuplicateTsStaticSiteInput;
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
};


export type MutationsCreateFaqArgs = {
  input: CreateFaqInput;
};


export type MutationsUpdateFaqArgs = {
  input: UpdateFaqInput;
  structure?: Maybe<Array<Maybe<ContentStructureInput>>>;
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
};


export type MutationsDeleteFaqArgs = {
  input: DeleteFaqInput;
};


export type MutationsDuplicateFaqArgs = {
  input: DuplicateFaqInput;
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
};


export type MutationsImportFaqListFromCsvArgs = {
  assetId: Scalars['ID'];
  importColumns?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type RejectedImportItem = {
   __typename?: 'RejectedImportItem';
  itemNumber: Scalars['Int'];
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  rawErrors?: Maybe<Array<Maybe<Scalars['JSON']>>>;
};

export type Root = {
   __typename?: 'Root';
  tsGetActivityLog?: Maybe<Array<Maybe<TsActivityLogItem>>>;
  tsGetLatestSiteDeploys?: Maybe<Array<Maybe<TsActivityLogItem>>>;
  tsGetProjectList?: Maybe<Array<Maybe<TsProjectListItem>>>;
  tsGetProjectMembersLocationList?: Maybe<Array<Maybe<TsMemberLocation>>>;
  tsGetProjectTemplateList?: Maybe<Array<Maybe<TsProjectTemplate>>>;
  tsSiteDeployStatus?: Maybe<TsSite>;
  tsGetContentUsage?: Maybe<Array<Maybe<TsContentUsage>>>;
  tsGetPreviewPathList?: Maybe<Array<Maybe<TsContentTypePreviewPaths>>>;
  tsGetSitePreviewToken?: Maybe<Scalars['String']>;
  tsIsLocked?: Maybe<TsLock>;
  tsGetApiKey?: Maybe<TsApiKey>;
  tsGetApiKeysByProject?: Maybe<Array<Maybe<TsApiKey>>>;
  tsGetRole?: Maybe<TsRole>;
  tsGetRoleList?: Maybe<TsRolePaginatedList>;
  tsGetWebhooks?: Maybe<TsWebhooks>;
  tsGetWebhookHistoryItem?: Maybe<TsWebhookHistory>;
  tsGetWebhookHistory?: Maybe<Array<Maybe<TsWebhookHistory>>>;
  tsGetLocales?: Maybe<TsLocales>;
  tsGetStatusUpdateList?: Maybe<TsStatusUpdateList>;
  tsGetUsage?: Maybe<TsUsageType>;
  tsGetProjectExport?: Maybe<TsProjectExport>;
  tsGetProject?: Maybe<TsProject>;
  tsGetProjectMembers?: Maybe<Array<Maybe<TsUser>>>;
  tsGetProjectAdmins?: Maybe<Array<Maybe<TsUser>>>;
  tsGetPlanList?: Maybe<Array<Maybe<TsBillingPlan>>>;
  tsGetPaymentList?: Maybe<TsBillingPaymentCursorPaginatedList>;
  search?: Maybe<TsSearchResults>;
  taxonomySuggest?: Maybe<TsSuggestionPaginatedList>;
  getContentVersion?: Maybe<TsVersionResponse>;
  getContentVersionList?: Maybe<TsVersionsPaginatedList>;
  getAssetList?: Maybe<AssetPaginatedList>;
  getAsset?: Maybe<Asset>;
  searchAssetIndex?: Maybe<AssetSearchResults>;
  getTsStaticSiteList?: Maybe<TsStaticSitePaginatedList>;
  getTsStaticSite?: Maybe<TsStaticSite>;
  searchTsStaticSiteIndex?: Maybe<TsStaticSiteSearchResults>;
  getFaqList?: Maybe<FaqPaginatedList>;
  getFaq?: Maybe<Faq>;
  searchFaqIndex?: Maybe<FaqSearchResults>;
  withContext?: Maybe<WithContext>;
};


export type RootTsGetActivityLogArgs = {
  filters?: Maybe<Scalars['JSON']>;
};


export type RootTsSiteDeployStatusArgs = {
  siteId?: Maybe<Scalars['ID']>;
};


export type RootTsGetContentUsageArgs = {
  id: Scalars['ID'];
};


export type RootTsGetSitePreviewTokenArgs = {
  siteId: Scalars['String'];
};


export type RootTsIsLockedArgs = {
  contentTypeId?: Maybe<Scalars['ID']>;
  id?: Maybe<Scalars['ID']>;
};


export type RootTsGetApiKeyArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type RootTsGetRoleArgs = {
  name: Scalars['String'];
};


export type RootTsGetWebhookHistoryItemArgs = {
  webhookUrl: Scalars['String'];
  invocationTime?: Maybe<Scalars['String']>;
};


export type RootTsGetWebhookHistoryArgs = {
  webhookUrl: Scalars['String'];
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
};


export type RootTsGetStatusUpdateListArgs = {
  contentId: Scalars['String'];
  contentTypeName: Scalars['String'];
};


export type RootTsGetProjectExportArgs = {
  id: Scalars['String'];
};


export type RootTsGetProjectArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type RootTsGetProjectMembersArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type RootTsGetPaymentListArgs = {
  cursor?: Maybe<Scalars['ID']>;
};


export type RootSearchArgs = {
  terms?: Maybe<Scalars['String']>;
  contentTypeNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  contentTypeIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
  from?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  filter?: Maybe<Scalars['JSON']>;
  sort?: Maybe<Array<Maybe<TsSearchSort>>>;
  where?: Maybe<TsWhereInput>;
};


export type RootTaxonomySuggestArgs = {
  terms?: Maybe<Scalars['String']>;
  contentTypeNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  contentTypeIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
  from?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  filter?: Maybe<Scalars['JSON']>;
  sort?: Maybe<Array<Maybe<TsSearchSort>>>;
};


export type RootGetContentVersionArgs = {
  id: Scalars['ID'];
  version: Scalars['Int'];
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
};


export type RootGetContentVersionListArgs = {
  id: Scalars['ID'];
  from?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
};


export type RootGetAssetListArgs = {
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
  onlyEnabled?: Maybe<Scalars['Boolean']>;
  terms?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  filter?: Maybe<Scalars['JSON']>;
  sort?: Maybe<Array<Maybe<TsSearchSort>>>;
  where?: Maybe<TsWhereAssetInput>;
};


export type RootGetAssetArgs = {
  _id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
};


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


export type RootGetTsStaticSiteListArgs = {
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
  onlyEnabled?: Maybe<Scalars['Boolean']>;
  terms?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  filter?: Maybe<Scalars['JSON']>;
  sort?: Maybe<Array<Maybe<TsSearchSort>>>;
  where?: Maybe<TsWhereTsStaticSiteInput>;
};


export type RootGetTsStaticSiteArgs = {
  _id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
};


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


export type RootGetFaqListArgs = {
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
  onlyEnabled?: Maybe<Scalars['Boolean']>;
  terms?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  filter?: Maybe<Scalars['JSON']>;
  sort?: Maybe<Array<Maybe<TsSearchSort>>>;
  where?: Maybe<TsWhereFaqInput>;
};


export type RootGetFaqArgs = {
  _id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
};


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


export type RootWithContextArgs = {
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
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

export type TsAndOperator = {
  title?: Maybe<TsWhereString>;
  description?: Maybe<TsWhereString>;
  filename?: Maybe<TsWhereString>;
  caption?: Maybe<TsWhereDraftjs>;
  credit?: Maybe<TsWhereDraftjs>;
  path?: Maybe<TsWhereString>;
  mimeType?: Maybe<TsWhereString>;
  sourceUrl?: Maybe<TsWhereString>;
  uploadStatus?: Maybe<TsWhereString>;
  _id?: Maybe<TsWhereId>;
  _version?: Maybe<TsWhereInteger>;
  _contentTypeId?: Maybe<TsWhereId>;
  _contentTypeName?: Maybe<TsWhereString>;
  _createdAt?: Maybe<TsWhereDate>;
  _updatedAt?: Maybe<TsWhereDate>;
  _schemaVersion?: Maybe<TsWhereNumber>;
  _status?: Maybe<TsWhereWorkflow>;
  AND?: Maybe<Array<Maybe<TsAndOperator>>>;
  OR?: Maybe<Array<Maybe<TsOrOperator>>>;
  NOT?: Maybe<TsNotOperator>;
  baseUrl?: Maybe<TsWhereString>;
  provider?: Maybe<TsWhereString>;
  idKey?: Maybe<TsWhereString>;
  destination?: Maybe<TsWhereString>;
  privateAcl?: Maybe<TsWhereBoolean>;
  environmentVariables?: Maybe<TsWhereEnvironmentVariables>;
  triggers?: Maybe<TsWhereTriggers>;
  templateHash?: Maybe<TsWhereString>;
  repeater?: Maybe<TsWhereRepeater>;
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

export type TsAssetAndOperator = {
  title?: Maybe<TsWhereString>;
  description?: Maybe<TsWhereString>;
  filename?: Maybe<TsWhereString>;
  caption?: Maybe<TsWhereDraftjs>;
  credit?: Maybe<TsWhereDraftjs>;
  path?: Maybe<TsWhereString>;
  mimeType?: Maybe<TsWhereString>;
  sourceUrl?: Maybe<TsWhereString>;
  uploadStatus?: Maybe<TsWhereString>;
  _id?: Maybe<TsWhereId>;
  _version?: Maybe<TsWhereInteger>;
  _contentTypeId?: Maybe<TsWhereId>;
  _contentTypeName?: Maybe<TsWhereString>;
  _createdAt?: Maybe<TsWhereDate>;
  _updatedAt?: Maybe<TsWhereDate>;
  _schemaVersion?: Maybe<TsWhereNumber>;
  _status?: Maybe<TsWhereWorkflow>;
  AND?: Maybe<Array<Maybe<TsAssetAndOperator>>>;
  OR?: Maybe<Array<Maybe<TsAssetOrOperator>>>;
  NOT?: Maybe<TsAssetNotOperator>;
};

export type TsAssetNotOperator = {
  title?: Maybe<TsWhereString>;
  description?: Maybe<TsWhereString>;
  filename?: Maybe<TsWhereString>;
  caption?: Maybe<TsWhereDraftjs>;
  credit?: Maybe<TsWhereDraftjs>;
  path?: Maybe<TsWhereString>;
  mimeType?: Maybe<TsWhereString>;
  sourceUrl?: Maybe<TsWhereString>;
  uploadStatus?: Maybe<TsWhereString>;
  _id?: Maybe<TsWhereId>;
  _version?: Maybe<TsWhereInteger>;
  _contentTypeId?: Maybe<TsWhereId>;
  _contentTypeName?: Maybe<TsWhereString>;
  _createdAt?: Maybe<TsWhereDate>;
  _updatedAt?: Maybe<TsWhereDate>;
  _schemaVersion?: Maybe<TsWhereNumber>;
  _status?: Maybe<TsWhereWorkflow>;
};

export type TsAssetOrOperator = {
  title?: Maybe<TsWhereString>;
  description?: Maybe<TsWhereString>;
  filename?: Maybe<TsWhereString>;
  caption?: Maybe<TsWhereDraftjs>;
  credit?: Maybe<TsWhereDraftjs>;
  path?: Maybe<TsWhereString>;
  mimeType?: Maybe<TsWhereString>;
  sourceUrl?: Maybe<TsWhereString>;
  uploadStatus?: Maybe<TsWhereString>;
  _id?: Maybe<TsWhereId>;
  _version?: Maybe<TsWhereInteger>;
  _contentTypeId?: Maybe<TsWhereId>;
  _contentTypeName?: Maybe<TsWhereString>;
  _createdAt?: Maybe<TsWhereDate>;
  _updatedAt?: Maybe<TsWhereDate>;
  _schemaVersion?: Maybe<TsWhereNumber>;
  _status?: Maybe<TsWhereWorkflow>;
  AND?: Maybe<Array<Maybe<TsAssetAndOperator>>>;
  OR?: Maybe<Array<Maybe<TsAssetOrOperator>>>;
  NOT?: Maybe<TsAssetNotOperator>;
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

export type TsBillingAmount = {
   __typename?: 'TSBillingAmount';
  total?: Maybe<Scalars['Int']>;
  subtotal?: Maybe<Scalars['Int']>;
  refund?: Maybe<Scalars['Int']>;
  discount?: Maybe<TsBillingDiscount>;
};

export type TsBillingCardDetails = {
   __typename?: 'TSBillingCardDetails';
  brand?: Maybe<Scalars['String']>;
  cvcCheck?: Maybe<Scalars['String']>;
  expMonth?: Maybe<Scalars['Int']>;
  expYear?: Maybe<Scalars['Int']>;
  last4?: Maybe<Scalars['String']>;
};

export type TsBillingDiscount = {
   __typename?: 'TSBillingDiscount';
  percentOff?: Maybe<Scalars['Int']>;
  amountOff?: Maybe<Scalars['Int']>;
  duration?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
};

export type TsBillingEntitlements = {
   __typename?: 'TSBillingEntitlements';
  users?: Maybe<Scalars['Int']>;
  apiRequests?: Maybe<Scalars['Int']>;
  apiRateLimit?: Maybe<Scalars['Int']>;
  contentEntries?: Maybe<Scalars['Int']>;
  deployTargets?: Maybe<Scalars['Int']>;
  webhooks?: Maybe<Scalars['Boolean']>;
  locales?: Maybe<Scalars['Int']>;
  roles?: Maybe<Scalars['Int']>;
  workflows?: Maybe<Scalars['Int']>;
};

export type TsBillingPayment = {
   __typename?: 'TSBillingPayment';
  date?: Maybe<Scalars['String']>;
  plan?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  amount?: Maybe<TsBillingAmount>;
  method?: Maybe<Scalars['String']>;
};

export type TsBillingPaymentCursorPaginatedList = {
   __typename?: 'TSBillingPaymentCursorPaginatedList';
  items?: Maybe<Array<Maybe<TsBillingPayment>>>;
  cursor?: Maybe<Scalars['ID']>;
  hasMore?: Maybe<Scalars['Boolean']>;
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

export type TsCancelStatusUpdateInput = {
  contentId: Scalars['String'];
  contentTypeName: Scalars['String'];
  timestamp: Scalars['String'];
};

export type TsContentLocation = {
   __typename?: 'TSContentLocation';
  contentId?: Maybe<Scalars['String']>;
  contentTypeId?: Maybe<Scalars['String']>;
  hasLock?: Maybe<Scalars['Boolean']>;
};

export type TsContentTypePreviewPaths = {
   __typename?: 'TSContentTypePreviewPaths';
  contentTypeId: Scalars['String'];
  contentTypeName: Scalars['String'];
  sites: Array<Maybe<TsSitePreviewPaths>>;
};

export type TsContentUsage = {
   __typename?: 'TSContentUsage';
  siteId?: Maybe<Scalars['ID']>;
  siteTitle?: Maybe<Scalars['String']>;
  deployedAt?: Maybe<Scalars['String']>;
  baseUrl?: Maybe<Scalars['String']>;
  usages?: Maybe<Array<Maybe<TsPathUsage>>>;
};

export type TsDeleteWorkflowInput = {
  version: Scalars['Int'];
  name: Scalars['String'];
};

export type TsFaqAndOperator = {
  repeater?: Maybe<TsWhereRepeater>;
  _id?: Maybe<TsWhereId>;
  _version?: Maybe<TsWhereInteger>;
  _contentTypeId?: Maybe<TsWhereId>;
  _contentTypeName?: Maybe<TsWhereString>;
  _createdAt?: Maybe<TsWhereDate>;
  _updatedAt?: Maybe<TsWhereDate>;
  _schemaVersion?: Maybe<TsWhereNumber>;
  _status?: Maybe<TsWhereWorkflow>;
  AND?: Maybe<Array<Maybe<TsFaqAndOperator>>>;
  OR?: Maybe<Array<Maybe<TsFaqOrOperator>>>;
  NOT?: Maybe<TsFaqNotOperator>;
};

export type TsFaqNotOperator = {
  repeater?: Maybe<TsWhereRepeater>;
  _id?: Maybe<TsWhereId>;
  _version?: Maybe<TsWhereInteger>;
  _contentTypeId?: Maybe<TsWhereId>;
  _contentTypeName?: Maybe<TsWhereString>;
  _createdAt?: Maybe<TsWhereDate>;
  _updatedAt?: Maybe<TsWhereDate>;
  _schemaVersion?: Maybe<TsWhereNumber>;
  _status?: Maybe<TsWhereWorkflow>;
};

export type TsFaqOrOperator = {
  repeater?: Maybe<TsWhereRepeater>;
  _id?: Maybe<TsWhereId>;
  _version?: Maybe<TsWhereInteger>;
  _contentTypeId?: Maybe<TsWhereId>;
  _contentTypeName?: Maybe<TsWhereString>;
  _createdAt?: Maybe<TsWhereDate>;
  _updatedAt?: Maybe<TsWhereDate>;
  _schemaVersion?: Maybe<TsWhereNumber>;
  _status?: Maybe<TsWhereWorkflow>;
  AND?: Maybe<Array<Maybe<TsFaqAndOperator>>>;
  OR?: Maybe<Array<Maybe<TsFaqOrOperator>>>;
  NOT?: Maybe<TsFaqNotOperator>;
};

export type TsFile = {
  name: Scalars['String'];
  type: Scalars['String'];
};

export type TsImagesConfig = {
  default?: Maybe<Scalars['JSON']>;
  small?: Maybe<Scalars['JSON']>;
  medium?: Maybe<Scalars['JSON']>;
  large?: Maybe<Scalars['JSON']>;
};

export type TsIntegrationToken = {
   __typename?: 'TSIntegrationToken';
  provider: Scalars['String'];
  token?: Maybe<Scalars['String']>;
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

export type TsLocales = {
   __typename?: 'TSLocales';
  defaultLocale: Scalars['String'];
  locales?: Maybe<Array<Maybe<Scalars['String']>>>;
  version: Scalars['Int'];
};

export type TsLock = {
   __typename?: 'TSLock';
  user?: Maybe<TsUser>;
  expires?: Maybe<Scalars['String']>;
};

export type TsMemberLocation = {
   __typename?: 'TSMemberLocation';
  userId: Scalars['String'];
  contentList?: Maybe<Array<Maybe<TsContentLocation>>>;
};

export type TsNotOperator = {
  title?: Maybe<TsWhereString>;
  description?: Maybe<TsWhereString>;
  filename?: Maybe<TsWhereString>;
  caption?: Maybe<TsWhereDraftjs>;
  credit?: Maybe<TsWhereDraftjs>;
  path?: Maybe<TsWhereString>;
  mimeType?: Maybe<TsWhereString>;
  sourceUrl?: Maybe<TsWhereString>;
  uploadStatus?: Maybe<TsWhereString>;
  _id?: Maybe<TsWhereId>;
  _version?: Maybe<TsWhereInteger>;
  _contentTypeId?: Maybe<TsWhereId>;
  _contentTypeName?: Maybe<TsWhereString>;
  _createdAt?: Maybe<TsWhereDate>;
  _updatedAt?: Maybe<TsWhereDate>;
  _schemaVersion?: Maybe<TsWhereNumber>;
  _status?: Maybe<TsWhereWorkflow>;
  AND?: Maybe<Array<Maybe<TsFaqAndOperator>>>;
  OR?: Maybe<Array<Maybe<TsFaqOrOperator>>>;
  NOT?: Maybe<TsFaqNotOperator>;
  baseUrl?: Maybe<TsWhereString>;
  provider?: Maybe<TsWhereString>;
  idKey?: Maybe<TsWhereString>;
  destination?: Maybe<TsWhereString>;
  privateAcl?: Maybe<TsWhereBoolean>;
  environmentVariables?: Maybe<TsWhereEnvironmentVariables>;
  triggers?: Maybe<TsWhereTriggers>;
  templateHash?: Maybe<TsWhereString>;
  repeater?: Maybe<TsWhereRepeater>;
};

export type TsOrOperator = {
  title?: Maybe<TsWhereString>;
  description?: Maybe<TsWhereString>;
  filename?: Maybe<TsWhereString>;
  caption?: Maybe<TsWhereDraftjs>;
  credit?: Maybe<TsWhereDraftjs>;
  path?: Maybe<TsWhereString>;
  mimeType?: Maybe<TsWhereString>;
  sourceUrl?: Maybe<TsWhereString>;
  uploadStatus?: Maybe<TsWhereString>;
  _id?: Maybe<TsWhereId>;
  _version?: Maybe<TsWhereInteger>;
  _contentTypeId?: Maybe<TsWhereId>;
  _contentTypeName?: Maybe<TsWhereString>;
  _createdAt?: Maybe<TsWhereDate>;
  _updatedAt?: Maybe<TsWhereDate>;
  _schemaVersion?: Maybe<TsWhereNumber>;
  _status?: Maybe<TsWhereWorkflow>;
  AND?: Maybe<Array<Maybe<TsAndOperator>>>;
  OR?: Maybe<Array<Maybe<TsOrOperator>>>;
  NOT?: Maybe<TsNotOperator>;
  baseUrl?: Maybe<TsWhereString>;
  provider?: Maybe<TsWhereString>;
  idKey?: Maybe<TsWhereString>;
  destination?: Maybe<TsWhereString>;
  privateAcl?: Maybe<TsWhereBoolean>;
  environmentVariables?: Maybe<TsWhereEnvironmentVariables>;
  triggers?: Maybe<TsWhereTriggers>;
  templateHash?: Maybe<TsWhereString>;
  repeater?: Maybe<TsWhereRepeater>;
};

export type TsPathUsage = {
   __typename?: 'TSPathUsage';
  path?: Maybe<Scalars['String']>;
  depth?: Maybe<Scalars['Int']>;
};

export type TsPermissions = {
   __typename?: 'TSPermissions';
  userId?: Maybe<Scalars['ID']>;
  projectId?: Maybe<Scalars['ID']>;
  role?: Maybe<Scalars['String']>;
};

export type TsPreviewRoute = {
   __typename?: 'TSPreviewRoute';
  routeName: Scalars['String'];
  isPaginated?: Maybe<Scalars['Boolean']>;
  path: Scalars['String'];
};

export type TsProject = {
   __typename?: 'TSProject';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  template?: Maybe<TsProjectTemplate>;
  invite?: Maybe<Scalars['String']>;
  users?: Maybe<Array<Maybe<TsUser>>>;
  schema?: Maybe<Scalars['JSON']>;
  billing?: Maybe<TsBilling>;
  status?: Maybe<Scalars['JSON']>;
  avatar?: Maybe<BaseAsset>;
  defaultTimezone: Scalars['String'];
  integrationTokens?: Maybe<Array<Maybe<TsIntegrationToken>>>;
};

export type TsProjectExport = {
   __typename?: 'TSProjectExport';
  id?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  file?: Maybe<Scalars['String']>;
};

export type TsProjectListItem = {
   __typename?: 'TSProjectListItem';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  invite?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['JSON']>;
  avatar?: Maybe<BaseAsset>;
  defaultTimezone: Scalars['String'];
};

export type TsProjectTemplate = {
   __typename?: 'TSProjectTemplate';
  id: Scalars['String'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  avatarPath?: Maybe<Scalars['String']>;
  glitchProjectName?: Maybe<Scalars['String']>;
  sourcePath: Scalars['String'];
};

export type TsRemoveWorkflowResponse = {
   __typename?: 'TSRemoveWorkflowResponse';
  name?: Maybe<Scalars['String']>;
  schemaVersion?: Maybe<Scalars['Int']>;
  removed?: Maybe<Scalars['Boolean']>;
};

export type TsResourceActions = {
   __typename?: 'TSResourceActions';
  resource: Scalars['String'];
  actions?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type TsResourceActionsInput = {
  resource: Scalars['String'];
  actions?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type TsRole = {
   __typename?: 'TSRole';
  name: Scalars['String'];
  permissions: Scalars['JSONObject'];
  created?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['String']>;
  builtIn?: Maybe<Scalars['Boolean']>;
};

export type TsRoleInput = {
  name: Scalars['String'];
  permissions: Scalars['JSONObject'];
  created?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['String']>;
};

export type TsRolePaginatedList = {
   __typename?: 'TSRolePaginatedList';
  items?: Maybe<Array<Maybe<TsRole>>>;
  total?: Maybe<Scalars['Int']>;
  from?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
};

export type TsSaveWorkflowInput = {
  version: Scalars['Int'];
  workflow: TsWorkflowInput;
};

export type TsSaveWorkflowResponse = {
   __typename?: 'TSSaveWorkflowResponse';
  projectId?: Maybe<Scalars['String']>;
  schemaVersion?: Maybe<Scalars['Int']>;
  workflow?: Maybe<TsWorkflow>;
};

export type TsScheduleStatusUpdateInput = {
  timestamp: Scalars['String'];
  contentId: Scalars['String'];
  status: Scalars['String'];
  contentTypeName: Scalars['String'];
};

export type TsSearchable = {
  _id?: Maybe<Scalars['ID']>;
  _contentTypeId?: Maybe<Scalars['String']>;
  searchSummary?: Maybe<Scalars['String']>;
};

export type TsSearchResults = {
   __typename?: 'TSSearchResults';
  results?: Maybe<Array<Maybe<TsSearchable>>>;
  total?: Maybe<Scalars['Int']>;
};

export type TsSearchSort = {
  field: Scalars['String'];
  order: Scalars['String'];
};

export type TsSite = {
   __typename?: 'TSSite';
  siteId?: Maybe<Scalars['ID']>;
  status?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export type TsSitePreviewPaths = {
   __typename?: 'TSSitePreviewPaths';
  siteTitle: Scalars['String'];
  siteId: Scalars['String'];
  token?: Maybe<Scalars['String']>;
  routes: Array<Maybe<TsPreviewRoute>>;
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
  _contentTypeId?: Maybe<Scalars['String']>;
  _contentTypeName?: Maybe<Scalars['String']>;
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
  searchSummary?: Maybe<Scalars['String']>;
};

export type TsStaticSiteEnvironmentVariables = {
   __typename?: 'TsStaticSiteEnvironmentVariables';
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type TsStaticSiteEnvironmentVariablesInput = {
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type TsStaticSitePaginatedList = {
   __typename?: 'TsStaticSitePaginatedList';
  /** @deprecated Use items instead */
  results?: Maybe<Array<Maybe<TsStaticSite>>>;
  items?: Maybe<Array<Maybe<TsStaticSite>>>;
  total?: Maybe<Scalars['Int']>;
};

export type TsStaticSiteSearchResult = {
   __typename?: 'TsStaticSiteSearchResult';
  searchSummary?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  baseUrl?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  idKey?: Maybe<Scalars['String']>;
  destination?: Maybe<Scalars['String']>;
  privateAcl?: Maybe<Scalars['Boolean']>;
  templateHash?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['String']>;
  _version?: Maybe<Scalars['Int']>;
  _contentTypeId?: Maybe<Scalars['String']>;
  _contentTypeName?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['String']>;
  _createdBy?: Maybe<Scalars['String']>;
  _updatedAt?: Maybe<Scalars['String']>;
  _updatedBy?: Maybe<Scalars['String']>;
  _schemaVersion?: Maybe<Scalars['Float']>;
  _enabled?: Maybe<Scalars['Boolean']>;
  _enabledAt?: Maybe<Scalars['String']>;
  _status?: Maybe<Scalars['String']>;
};

export type TsStaticSiteSearchResults = {
   __typename?: 'TsStaticSiteSearchResults';
  results?: Maybe<Array<Maybe<TsStaticSiteSearchResult>>>;
  total?: Maybe<Scalars['Int']>;
};

export type TsStaticSiteTriggers = {
   __typename?: 'TsStaticSiteTriggers';
  contentTypeId?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type TsStaticSiteTriggersInput = {
  contentTypeId?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type TsStatusUpdate = {
   __typename?: 'TSStatusUpdate';
  id: Scalars['String'];
  timestamp: Scalars['String'];
  type: Scalars['String'];
  payload?: Maybe<Scalars['JSONObject']>;
};

export type TsStatusUpdateList = {
   __typename?: 'TSStatusUpdateList';
  items?: Maybe<Array<Maybe<TsStatusUpdate>>>;
  total?: Maybe<Scalars['Int']>;
};

export type TsSuggestion = {
   __typename?: 'TSSuggestion';
  _id?: Maybe<Scalars['ID']>;
  _contentTypeId?: Maybe<Scalars['ID']>;
  _contentTypeName?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
};

export type TsSuggestionPaginatedList = {
   __typename?: 'TSSuggestionPaginatedList';
  /** @deprecated Use items instead */
  results?: Maybe<Array<Maybe<TsSuggestion>>>;
  items?: Maybe<Array<Maybe<TsSuggestion>>>;
  total?: Maybe<Scalars['Int']>;
};

export type TsTsStaticSiteAndOperator = {
  title?: Maybe<TsWhereString>;
  baseUrl?: Maybe<TsWhereString>;
  provider?: Maybe<TsWhereString>;
  idKey?: Maybe<TsWhereString>;
  destination?: Maybe<TsWhereString>;
  privateAcl?: Maybe<TsWhereBoolean>;
  environmentVariables?: Maybe<TsWhereEnvironmentVariables>;
  triggers?: Maybe<TsWhereTriggers>;
  templateHash?: Maybe<TsWhereString>;
  _id?: Maybe<TsWhereId>;
  _version?: Maybe<TsWhereInteger>;
  _contentTypeId?: Maybe<TsWhereId>;
  _contentTypeName?: Maybe<TsWhereString>;
  _createdAt?: Maybe<TsWhereDate>;
  _updatedAt?: Maybe<TsWhereDate>;
  _schemaVersion?: Maybe<TsWhereNumber>;
  _status?: Maybe<TsWhereWorkflow>;
  AND?: Maybe<Array<Maybe<TsTsStaticSiteAndOperator>>>;
  OR?: Maybe<Array<Maybe<TsTsStaticSiteOrOperator>>>;
  NOT?: Maybe<TsTsStaticSiteNotOperator>;
};

export type TsTsStaticSiteNotOperator = {
  title?: Maybe<TsWhereString>;
  baseUrl?: Maybe<TsWhereString>;
  provider?: Maybe<TsWhereString>;
  idKey?: Maybe<TsWhereString>;
  destination?: Maybe<TsWhereString>;
  privateAcl?: Maybe<TsWhereBoolean>;
  environmentVariables?: Maybe<TsWhereEnvironmentVariables>;
  triggers?: Maybe<TsWhereTriggers>;
  templateHash?: Maybe<TsWhereString>;
  _id?: Maybe<TsWhereId>;
  _version?: Maybe<TsWhereInteger>;
  _contentTypeId?: Maybe<TsWhereId>;
  _contentTypeName?: Maybe<TsWhereString>;
  _createdAt?: Maybe<TsWhereDate>;
  _updatedAt?: Maybe<TsWhereDate>;
  _schemaVersion?: Maybe<TsWhereNumber>;
  _status?: Maybe<TsWhereWorkflow>;
};

export type TsTsStaticSiteOrOperator = {
  title?: Maybe<TsWhereString>;
  baseUrl?: Maybe<TsWhereString>;
  provider?: Maybe<TsWhereString>;
  idKey?: Maybe<TsWhereString>;
  destination?: Maybe<TsWhereString>;
  privateAcl?: Maybe<TsWhereBoolean>;
  environmentVariables?: Maybe<TsWhereEnvironmentVariables>;
  triggers?: Maybe<TsWhereTriggers>;
  templateHash?: Maybe<TsWhereString>;
  _id?: Maybe<TsWhereId>;
  _version?: Maybe<TsWhereInteger>;
  _contentTypeId?: Maybe<TsWhereId>;
  _contentTypeName?: Maybe<TsWhereString>;
  _createdAt?: Maybe<TsWhereDate>;
  _updatedAt?: Maybe<TsWhereDate>;
  _schemaVersion?: Maybe<TsWhereNumber>;
  _status?: Maybe<TsWhereWorkflow>;
  AND?: Maybe<Array<Maybe<TsTsStaticSiteAndOperator>>>;
  OR?: Maybe<Array<Maybe<TsTsStaticSiteOrOperator>>>;
  NOT?: Maybe<TsTsStaticSiteNotOperator>;
};

export type TsUpdateWorkflowInput = {
  version: Scalars['Int'];
  name: Scalars['String'];
  workflow: TsWorkflowInput;
};

export type TsUsageType = {
   __typename?: 'TSUsageType';
  members?: Maybe<Scalars['Int']>;
  bandwidth?: Maybe<Scalars['Int']>;
  roles?: Maybe<Scalars['Int']>;
  workflows?: Maybe<Scalars['Int']>;
  sites?: Maybe<Scalars['Int']>;
  locales?: Maybe<Scalars['Int']>;
  apiCalls?: Maybe<Scalars['Int']>;
  contentEntries?: Maybe<Scalars['Int']>;
};

export type TsUser = {
   __typename?: 'TSUser';
  id?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  avatarPath?: Maybe<Scalars['String']>;
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

export type TsWebhook = {
   __typename?: 'TSWebhook';
  webhookUrl: Scalars['String'];
  headers?: Maybe<Array<Maybe<HttpHeader>>>;
  resourceActions?: Maybe<Array<Maybe<TsResourceActions>>>;
};

export type TsWebhookHistory = {
   __typename?: 'TSWebhookHistory';
  _invocationTime: Scalars['String'];
  projectId: Scalars['ID'];
  webhookUrl: Scalars['String'];
  stats: TsWebhookHistoryStats;
};

export type TsWebhookHistoryError = {
   __typename?: 'TSWebhookHistoryError';
  name?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
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

export type TsWebhookInput = {
  webhookUrl: Scalars['String'];
  headers?: Maybe<Array<Maybe<HttpHeaderInput>>>;
  resourceActions?: Maybe<Array<Maybe<TsResourceActionsInput>>>;
};

export type TsWebhooks = {
   __typename?: 'TSWebhooks';
  secret?: Maybe<Scalars['String']>;
  webhooks?: Maybe<Array<Maybe<TsWebhook>>>;
};

export type TsWebhooksInput = {
  resetSecret?: Maybe<Scalars['Boolean']>;
  webhooks?: Maybe<Array<Maybe<TsWebhookInput>>>;
};

export type TsWhereAssetInput = {
  title?: Maybe<TsWhereString>;
  description?: Maybe<TsWhereString>;
  filename?: Maybe<TsWhereString>;
  caption?: Maybe<TsWhereDraftjs>;
  credit?: Maybe<TsWhereDraftjs>;
  path?: Maybe<TsWhereString>;
  mimeType?: Maybe<TsWhereString>;
  sourceUrl?: Maybe<TsWhereString>;
  uploadStatus?: Maybe<TsWhereString>;
  _id?: Maybe<TsWhereId>;
  _version?: Maybe<TsWhereInteger>;
  _contentTypeId?: Maybe<TsWhereId>;
  _contentTypeName?: Maybe<TsWhereString>;
  _createdAt?: Maybe<TsWhereDate>;
  _updatedAt?: Maybe<TsWhereDate>;
  _schemaVersion?: Maybe<TsWhereNumber>;
  _status?: Maybe<TsWhereWorkflow>;
  AND?: Maybe<Array<Maybe<TsAssetAndOperator>>>;
  OR?: Maybe<Array<Maybe<TsAssetOrOperator>>>;
  NOT?: Maybe<TsAssetNotOperator>;
};

export type TsWhereBoolean = {
  eq?: Maybe<Scalars['Boolean']>;
};

export type TsWhereDate = {
  eq?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
};

export type TsWhereDraftjs = {
  match?: Maybe<Scalars['String']>;
};

export type TsWhereEnvironmentVariables = {
  name?: Maybe<TsWhereString>;
  value?: Maybe<TsWhereString>;
};

export type TsWhereFaqInput = {
  repeater?: Maybe<TsWhereRepeater>;
  _id?: Maybe<TsWhereId>;
  _version?: Maybe<TsWhereInteger>;
  _contentTypeId?: Maybe<TsWhereId>;
  _contentTypeName?: Maybe<TsWhereString>;
  _createdAt?: Maybe<TsWhereDate>;
  _updatedAt?: Maybe<TsWhereDate>;
  _schemaVersion?: Maybe<TsWhereNumber>;
  _status?: Maybe<TsWhereWorkflow>;
  AND?: Maybe<Array<Maybe<TsFaqAndOperator>>>;
  OR?: Maybe<Array<Maybe<TsFaqOrOperator>>>;
  NOT?: Maybe<TsFaqNotOperator>;
};

export type TsWhereId = {
  eq?: Maybe<Scalars['ID']>;
};

export type TsWhereInput = {
  title?: Maybe<TsWhereString>;
  description?: Maybe<TsWhereString>;
  filename?: Maybe<TsWhereString>;
  caption?: Maybe<TsWhereDraftjs>;
  credit?: Maybe<TsWhereDraftjs>;
  path?: Maybe<TsWhereString>;
  mimeType?: Maybe<TsWhereString>;
  sourceUrl?: Maybe<TsWhereString>;
  uploadStatus?: Maybe<TsWhereString>;
  _id?: Maybe<TsWhereId>;
  _version?: Maybe<TsWhereInteger>;
  _contentTypeId?: Maybe<TsWhereId>;
  _contentTypeName?: Maybe<TsWhereString>;
  _createdAt?: Maybe<TsWhereDate>;
  _updatedAt?: Maybe<TsWhereDate>;
  _schemaVersion?: Maybe<TsWhereNumber>;
  _status?: Maybe<TsWhereWorkflow>;
  AND?: Maybe<Array<Maybe<TsAndOperator>>>;
  OR?: Maybe<Array<Maybe<TsOrOperator>>>;
  NOT?: Maybe<TsNotOperator>;
  baseUrl?: Maybe<TsWhereString>;
  provider?: Maybe<TsWhereString>;
  idKey?: Maybe<TsWhereString>;
  destination?: Maybe<TsWhereString>;
  privateAcl?: Maybe<TsWhereBoolean>;
  environmentVariables?: Maybe<TsWhereEnvironmentVariables>;
  triggers?: Maybe<TsWhereTriggers>;
  templateHash?: Maybe<TsWhereString>;
  repeater?: Maybe<TsWhereRepeater>;
};

export type TsWhereInteger = {
  eq?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type TsWhereNumber = {
  eq?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type TsWhereRepeater = {
  answerIt?: Maybe<TsWhereString>;
  linkVideo?: Maybe<TsWhereString>;
  questionIt?: Maybe<TsWhereString>;
  questionEn?: Maybe<TsWhereString>;
  answerEn?: Maybe<TsWhereString>;
};

export type TsWhereString = {
  eq?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  match?: Maybe<Scalars['String']>;
  regexp?: Maybe<Scalars['String']>;
};

export type TsWhereTriggers = {
  contentTypeId?: Maybe<TsWhereString>;
  status?: Maybe<TsWhereString>;
};

export type TsWhereTsStaticSiteInput = {
  title?: Maybe<TsWhereString>;
  baseUrl?: Maybe<TsWhereString>;
  provider?: Maybe<TsWhereString>;
  idKey?: Maybe<TsWhereString>;
  destination?: Maybe<TsWhereString>;
  privateAcl?: Maybe<TsWhereBoolean>;
  environmentVariables?: Maybe<TsWhereEnvironmentVariables>;
  triggers?: Maybe<TsWhereTriggers>;
  templateHash?: Maybe<TsWhereString>;
  _id?: Maybe<TsWhereId>;
  _version?: Maybe<TsWhereInteger>;
  _contentTypeId?: Maybe<TsWhereId>;
  _contentTypeName?: Maybe<TsWhereString>;
  _createdAt?: Maybe<TsWhereDate>;
  _updatedAt?: Maybe<TsWhereDate>;
  _schemaVersion?: Maybe<TsWhereNumber>;
  _status?: Maybe<TsWhereWorkflow>;
  AND?: Maybe<Array<Maybe<TsTsStaticSiteAndOperator>>>;
  OR?: Maybe<Array<Maybe<TsTsStaticSiteOrOperator>>>;
  NOT?: Maybe<TsTsStaticSiteNotOperator>;
};

export type TsWhereWorkflow = {
  eq?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type TsWorkflow = {
   __typename?: 'TSWorkflow';
  name: Scalars['String'];
  title: Scalars['String'];
  steps?: Maybe<Array<Maybe<TsWorkflowStep>>>;
};

export type TsWorkflowInput = {
  name: Scalars['String'];
  title: Scalars['String'];
  steps?: Maybe<Array<Maybe<TsWorkflowStepInput>>>;
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

export type TsWorkflowStepInput = {
  name: Scalars['String'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  color: Scalars['String'];
  live: Scalars['Boolean'];
  key: Scalars['String'];
  canEdit?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type UpdateAssetInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['JSON']>;
  credit?: Maybe<Scalars['JSON']>;
  path?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
  sourceUrl?: Maybe<Scalars['String']>;
  uploadStatus?: Maybe<Scalars['String']>;
  _id: Scalars['ID'];
  _version?: Maybe<Scalars['Int']>;
  _contentTypeId?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['String']>;
  _createdBy?: Maybe<Scalars['String']>;
  _updatedAt?: Maybe<Scalars['String']>;
  _updatedBy?: Maybe<Scalars['String']>;
  _schemaVersion?: Maybe<Scalars['Float']>;
  _enabled?: Maybe<Scalars['Boolean']>;
  _enabledAt?: Maybe<Scalars['String']>;
  _status?: Maybe<DefaultWorkflow>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateAssetResult = {
   __typename?: 'UpdateAssetResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Asset>;
};

export type UpdateFaqInput = {
  repeater?: Maybe<Array<Maybe<FaqRepeaterInput>>>;
  _id: Scalars['ID'];
  _version?: Maybe<Scalars['Int']>;
  _contentTypeId?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['String']>;
  _createdBy?: Maybe<Scalars['String']>;
  _updatedAt?: Maybe<Scalars['String']>;
  _updatedBy?: Maybe<Scalars['String']>;
  _schemaVersion?: Maybe<Scalars['Float']>;
  _enabled?: Maybe<Scalars['Boolean']>;
  _enabledAt?: Maybe<Scalars['String']>;
  _status?: Maybe<DefaultWorkflow>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateFaqResult = {
   __typename?: 'UpdateFaqResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Faq>;
};

export type UpdateTsStaticSiteInput = {
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
  _id: Scalars['ID'];
  _version?: Maybe<Scalars['Int']>;
  _contentTypeId?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['String']>;
  _createdBy?: Maybe<Scalars['String']>;
  _updatedAt?: Maybe<Scalars['String']>;
  _updatedBy?: Maybe<Scalars['String']>;
  _schemaVersion?: Maybe<Scalars['Float']>;
  _enabled?: Maybe<Scalars['Boolean']>;
  _enabledAt?: Maybe<Scalars['String']>;
  _status?: Maybe<DefaultWorkflow>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateTsStaticSiteResult = {
   __typename?: 'UpdateTsStaticSiteResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<TsStaticSite>;
};

export type Upload = {
   __typename?: 'Upload';
  uploadUrl?: Maybe<Scalars['ID']>;
  asset?: Maybe<Asset>;
};

export type WithContext = {
   __typename?: 'WithContext';
  search?: Maybe<TsSearchResults>;
  taxonomySuggest?: Maybe<TsSuggestionPaginatedList>;
  getContentVersion?: Maybe<TsVersionResponse>;
  getContentVersionList?: Maybe<TsVersionsPaginatedList>;
  getAssetList?: Maybe<AssetPaginatedList>;
  getAsset?: Maybe<Asset>;
  searchAssetIndex?: Maybe<AssetSearchResults>;
  getTsStaticSiteList?: Maybe<TsStaticSitePaginatedList>;
  getTsStaticSite?: Maybe<TsStaticSite>;
  searchTsStaticSiteIndex?: Maybe<TsStaticSiteSearchResults>;
  getFaqList?: Maybe<FaqPaginatedList>;
  getFaq?: Maybe<Faq>;
  searchFaqIndex?: Maybe<FaqSearchResults>;
};


export type WithContextSearchArgs = {
  terms?: Maybe<Scalars['String']>;
  contentTypeNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  contentTypeIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
  from?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  filter?: Maybe<Scalars['JSON']>;
  sort?: Maybe<Array<Maybe<TsSearchSort>>>;
  where?: Maybe<TsWhereInput>;
};


export type WithContextTaxonomySuggestArgs = {
  terms?: Maybe<Scalars['String']>;
  contentTypeNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  contentTypeIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
  from?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  filter?: Maybe<Scalars['JSON']>;
  sort?: Maybe<Array<Maybe<TsSearchSort>>>;
};


export type WithContextGetContentVersionArgs = {
  id: Scalars['ID'];
  version: Scalars['Int'];
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
};


export type WithContextGetContentVersionListArgs = {
  id: Scalars['ID'];
  from?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
};


export type WithContextGetAssetListArgs = {
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
  onlyEnabled?: Maybe<Scalars['Boolean']>;
  terms?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  filter?: Maybe<Scalars['JSON']>;
  sort?: Maybe<Array<Maybe<TsSearchSort>>>;
  where?: Maybe<TsWhereAssetInput>;
};


export type WithContextGetAssetArgs = {
  _id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
};


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


export type WithContextGetTsStaticSiteListArgs = {
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
  onlyEnabled?: Maybe<Scalars['Boolean']>;
  terms?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  filter?: Maybe<Scalars['JSON']>;
  sort?: Maybe<Array<Maybe<TsSearchSort>>>;
  where?: Maybe<TsWhereTsStaticSiteInput>;
};


export type WithContextGetTsStaticSiteArgs = {
  _id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
};


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


export type WithContextGetFaqListArgs = {
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
  onlyEnabled?: Maybe<Scalars['Boolean']>;
  terms?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  filter?: Maybe<Scalars['JSON']>;
  sort?: Maybe<Array<Maybe<TsSearchSort>>>;
  where?: Maybe<TsWhereFaqInput>;
};


export type WithContextGetFaqArgs = {
  _id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
  enableLocaleFallback?: Maybe<Scalars['Boolean']>;
};


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

export type FaqsQueryVariables = {};


export type FaqsQuery = (
  { __typename?: 'Root' }
  & { getFaqList?: Maybe<(
    { __typename?: 'FaqPaginatedList' }
    & { items?: Maybe<Array<Maybe<(
      { __typename?: 'Faq' }
      & { repeater?: Maybe<Array<Maybe<(
        { __typename?: 'FaqRepeater' }
        & Pick<FaqRepeater, 'answerEn' | 'questionEn'>
      )>>> }
    )>>> }
  )> }
);


export const FaqsDocument = gql`
    query Faqs {
  getFaqList {
    items {
      repeater {
        answerEn
        questionEn
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction();
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    Faqs(variables?: FaqsQueryVariables): Promise<FaqsQuery> {
      return withWrapper(() => client.request<FaqsQuery>(print(FaqsDocument), variables));
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;