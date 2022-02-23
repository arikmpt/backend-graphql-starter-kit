import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { User } from '../document';
import { Context, RootDocument } from './context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  JSON: any;
  JSONObject: any;
  ObjectID: any;
};

export type GraphQLCheckHealthResponse = {
  code: Scalars['Int'];
  message: Scalars['String'];
  status: Scalars['String'];
};

export type GraphQLLoginResponse = {
  token: Scalars['String'];
};

export type GraphQLMutation = {
  login: GraphQLLoginResponse;
  registerUser: GraphQLUser;
};


export type GraphQLMutationLoginArgs = {
  req: GraphQLUserLoginInput;
};


export type GraphQLMutationRegisterUserArgs = {
  req: GraphQLUserRegisterInput;
};

export type GraphQLQuery = {
  checkHealth: GraphQLCheckHealthResponse;
  getUser: GraphQLUser;
};

export type GraphQLUser = {
  createdAt: Scalars['Date'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  fullName: Scalars['String'];
  id: Scalars['ObjectID'];
  lastName: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  updatedAt: Scalars['Date'];
  username: Scalars['String'];
};

export type GraphQLUserLoginInput = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type GraphQLUserRegisterInput = {
  confirmPassword: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  username: Scalars['String'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

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
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

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
export type GraphQLResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CheckHealthResponse: ResolverTypeWrapper<GraphQLCheckHealthResponse>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  JSONObject: ResolverTypeWrapper<Scalars['JSONObject']>;
  LoginResponse: ResolverTypeWrapper<GraphQLLoginResponse>;
  Mutation: ResolverTypeWrapper<RootDocument>;
  ObjectID: ResolverTypeWrapper<Scalars['ObjectID']>;
  Query: ResolverTypeWrapper<RootDocument>;
  String: ResolverTypeWrapper<Scalars['String']>;
  User: ResolverTypeWrapper<User>;
  UserLoginInput: GraphQLUserLoginInput;
  UserRegisterInput: GraphQLUserRegisterInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type GraphQLResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  CheckHealthResponse: GraphQLCheckHealthResponse;
  Date: Scalars['Date'];
  Int: Scalars['Int'];
  JSON: Scalars['JSON'];
  JSONObject: Scalars['JSONObject'];
  LoginResponse: GraphQLLoginResponse;
  Mutation: RootDocument;
  ObjectID: Scalars['ObjectID'];
  Query: RootDocument;
  String: Scalars['String'];
  User: User;
  UserLoginInput: GraphQLUserLoginInput;
  UserRegisterInput: GraphQLUserRegisterInput;
};

export type GraphQLCheckHealthResponseResolvers<ContextType = Context, ParentType extends GraphQLResolversParentTypes['CheckHealthResponse'] = GraphQLResolversParentTypes['CheckHealthResponse']> = {
  code?: Resolver<GraphQLResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<GraphQLResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<GraphQLResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface GraphQLDateScalarConfig extends GraphQLScalarTypeConfig<GraphQLResolversTypes['Date'], any> {
  name: 'Date';
}

export interface GraphQLJsonScalarConfig extends GraphQLScalarTypeConfig<GraphQLResolversTypes['JSON'], any> {
  name: 'JSON';
}

export interface GraphQLJsonObjectScalarConfig extends GraphQLScalarTypeConfig<GraphQLResolversTypes['JSONObject'], any> {
  name: 'JSONObject';
}

export type GraphQLLoginResponseResolvers<ContextType = Context, ParentType extends GraphQLResolversParentTypes['LoginResponse'] = GraphQLResolversParentTypes['LoginResponse']> = {
  token?: Resolver<GraphQLResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GraphQLMutationResolvers<ContextType = Context, ParentType extends GraphQLResolversParentTypes['Mutation'] = GraphQLResolversParentTypes['Mutation']> = {
  login?: Resolver<GraphQLResolversTypes['LoginResponse'], ParentType, ContextType, RequireFields<GraphQLMutationLoginArgs, 'req'>>;
  registerUser?: Resolver<GraphQLResolversTypes['User'], ParentType, ContextType, RequireFields<GraphQLMutationRegisterUserArgs, 'req'>>;
};

export interface GraphQLObjectIdScalarConfig extends GraphQLScalarTypeConfig<GraphQLResolversTypes['ObjectID'], any> {
  name: 'ObjectID';
}

export type GraphQLQueryResolvers<ContextType = Context, ParentType extends GraphQLResolversParentTypes['Query'] = GraphQLResolversParentTypes['Query']> = {
  checkHealth?: Resolver<GraphQLResolversTypes['CheckHealthResponse'], ParentType, ContextType>;
  getUser?: Resolver<GraphQLResolversTypes['User'], ParentType, ContextType>;
};

export type GraphQLUserResolvers<ContextType = Context, ParentType extends GraphQLResolversParentTypes['User'] = GraphQLResolversParentTypes['User']> = {
  createdAt?: Resolver<GraphQLResolversTypes['Date'], ParentType, ContextType>;
  email?: Resolver<GraphQLResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<GraphQLResolversTypes['String'], ParentType, ContextType>;
  fullName?: Resolver<GraphQLResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<GraphQLResolversTypes['ObjectID'], ParentType, ContextType>;
  lastName?: Resolver<GraphQLResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<Maybe<GraphQLResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<GraphQLResolversTypes['Date'], ParentType, ContextType>;
  username?: Resolver<GraphQLResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GraphQLResolvers<ContextType = Context> = {
  CheckHealthResponse?: GraphQLCheckHealthResponseResolvers<ContextType>;
  Date?: GraphQLScalarType;
  JSON?: GraphQLScalarType;
  JSONObject?: GraphQLScalarType;
  LoginResponse?: GraphQLLoginResponseResolvers<ContextType>;
  Mutation?: GraphQLMutationResolvers<ContextType>;
  ObjectID?: GraphQLScalarType;
  Query?: GraphQLQueryResolvers<ContextType>;
  User?: GraphQLUserResolvers<ContextType>;
};

