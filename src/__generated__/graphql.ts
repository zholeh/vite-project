/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type Mutation = {
  __typename?: 'Mutation';
  reserve: ReserveMutation;
  room: RoomMutation;
};

export type Query = {
  __typename?: 'Query';
  reserve: ReserveQuery;
  room: RoomQuery;
};

export type ReserveCreate = {
  endDate: Scalars['DateTime']['input'];
  roomId: Scalars['Float']['input'];
  startDate: Scalars['DateTime']['input'];
  state: Scalars['Boolean']['input'];
};

export type ReserveModel = {
  __typename?: 'ReserveModel';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  endDate: Scalars['DateTime']['output'];
  id: Scalars['Float']['output'];
  roomId: Scalars['Float']['output'];
  startDate: Scalars['DateTime']['output'];
  state: Scalars['Boolean']['output'];
  stateResolver: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ReserveMutation = {
  __typename?: 'ReserveMutation';
  create: Scalars['Boolean']['output'];
  delete: Scalars['Boolean']['output'];
  partialUpdate: Scalars['Boolean']['output'];
  update: Scalars['Boolean']['output'];
};


export type ReserveMutationCreateArgs = {
  input: ReserveCreate;
};


export type ReserveMutationDeleteArgs = {
  id: Scalars['Float']['input'];
};


export type ReserveMutationPartialUpdateArgs = {
  input: ReserveUpdate;
};


export type ReserveMutationUpdateArgs = {
  input: ReserveUpdate;
};

export type ReserveQuery = {
  __typename?: 'ReserveQuery';
  findMany: Array<ReserveModel>;
  findOne: ReserveModel;
};


export type ReserveQueryFindOneArgs = {
  id: Scalars['Int']['input'];
};

export type ReserveUpdate = {
  endDate: Scalars['DateTime']['input'];
  id: Scalars['Float']['input'];
  roomId: Scalars['Float']['input'];
  startDate: Scalars['DateTime']['input'];
  state: Scalars['Boolean']['input'];
};

export type RoomCreate = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type RoomModel = {
  __typename?: 'RoomModel';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  description1: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type RoomMutation = {
  __typename?: 'RoomMutation';
  create: Scalars['Boolean']['output'];
  delete: Scalars['Boolean']['output'];
  partialUpdate: Scalars['Boolean']['output'];
  update: Scalars['Boolean']['output'];
};


export type RoomMutationCreateArgs = {
  input: RoomCreate;
};


export type RoomMutationDeleteArgs = {
  id: Scalars['Float']['input'];
};


export type RoomMutationPartialUpdateArgs = {
  input: RoomUpdate;
};


export type RoomMutationUpdateArgs = {
  input: RoomUpdate;
};

export type RoomQuery = {
  __typename?: 'RoomQuery';
  findMany: Array<RoomModel>;
  findOne: RoomModel;
};


export type RoomQueryFindOneArgs = {
  id: Scalars['Int']['input'];
};

export type RoomUpdate = {
  description: Scalars['String']['input'];
  id: Scalars['Float']['input'];
  name: Scalars['String']['input'];
};

export type GetRoomsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRoomsQuery = { __typename?: 'Query', room: { __typename?: 'RoomQuery', findMany: Array<{ __typename?: 'RoomModel', createdAt: any, id: number, deletedAt?: any | null, name: string, updatedAt?: any | null, description: string }> } };


export const GetRoomsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRooms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"room"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findMany"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]} as unknown as DocumentNode<GetRoomsQuery, GetRoomsQueryVariables>;