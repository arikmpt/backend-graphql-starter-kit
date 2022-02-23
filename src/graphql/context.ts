import { GraphQLFieldResolver } from 'graphql'
import { IncomingMessage, OutgoingMessage } from 'http'

export type Context = {
    token: string
};

export type RootDocument = null;

export type RootResolver<TArgs = { [argName: string]: any }> = GraphQLFieldResolver<RootDocument, Context, TArgs>;

const createContext = async (req: IncomingMessage, res: OutgoingMessage): Promise<Context> => {
  return {
    token: req.headers.authorization as string
  }
}

export default createContext
