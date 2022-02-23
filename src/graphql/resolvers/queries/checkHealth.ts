import { GraphQLQueryResolvers } from '../../graphql'

const query: GraphQLQueryResolvers['checkHealth'] = async (_) => {
  return {
    code: 200,
    message: 'Application Up',
    status: 'running'
  }
}

export default query
