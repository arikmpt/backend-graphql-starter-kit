import UserModel from '../../../model/User'
import { InvalidInput } from '../../../utils'
import checkToken from '../../checkToken'
import { GraphQLQueryResolvers } from '../../graphql'
import { requiresLoggedUser } from '../../middlewares'

const query: GraphQLQueryResolvers['getUser'] = async (root, args, { token }) => {
  const userId = checkToken(token)

  const user = await UserModel.findOne({ _id: userId })

  if (!user) {
    throw new InvalidInput({ message: 'user not found' })
  }

  return user
}

export default requiresLoggedUser(query)
