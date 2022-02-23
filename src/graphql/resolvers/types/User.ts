
import { GraphQLUserResolvers } from '../../graphql'

const UserGraphQL: GraphQLUserResolvers = {
  id: root => root._id,
  fullName: root => `${root.firstName} ${root.lastName}`
}

export default UserGraphQL
