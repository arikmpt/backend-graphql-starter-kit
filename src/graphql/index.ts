import 'graphql-import-node'
import { makeExecutableSchema } from '@graphql-tools/schema'
import resolvers from './resolvers'
import * as typeDefs from '../../schema/schema.graphql'

const schema = makeExecutableSchema({ typeDefs: [typeDefs], resolvers })

export default schema
