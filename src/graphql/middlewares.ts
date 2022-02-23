import { GraphQLFieldResolver } from 'graphql'
import { Context } from './context'
import { AuthenticationError } from 'apollo-server'
import * as jwt from 'jsonwebtoken'

export type GraphQLMiddleware = <TSource, TContext = Context, TArgs = { [argName: string]: any }>(
    resolver: GraphQLFieldResolver<TSource, TContext, TArgs>
) => GraphQLFieldResolver<TSource, TContext, TArgs>;

export const requiresLoggedUser =
    <TSource = any, TArgs = { [argName: string]: any }>(
    resolver: GraphQLFieldResolver<TSource, Context, TArgs>
  ): GraphQLFieldResolver<TSource, Context, TArgs> =>
    async (root, args, context, info) => {
      let token = context.token

      if (!token) {
        throw new AuthenticationError('Please provide a token')
      }

      // if provided with Bearer then remove it
      if (token.toLowerCase().startsWith('bearer')) {
        token = token.slice('bearer'.length).trim()
      }
      const jwtPayload = <any>jwt.verify(token, 'JWTK#Y')

      if (!jwtPayload) { throw new AuthenticationError('Not authenticated') }

      return resolver(root, args, context, info)
    }
