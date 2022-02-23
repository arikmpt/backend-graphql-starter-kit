import { genSalt, hash } from 'bcrypt'
import { GraphQLMutationResolvers } from '../../graphql'
import UserModel from '../../../model/User'
import { InvalidInput, isDuplicateErrorOnFields } from '../../../utils'

const cryptPassword = async (password: string) => {
  const salt = await genSalt(10)

  return hash(password, salt)
}

const mutation: GraphQLMutationResolvers['registerUser'] = async (
  root,
  { req }
) => {
  try {
    const store = await UserModel.create({ ...req, password: await cryptPassword(req.confirmPassword) })

    return store
  } catch (error: any) {
    if (isDuplicateErrorOnFields(error, 'username', 'email')) {
      throw new InvalidInput({ message: 'email or username already exists' })
    }

    // throw it back
    throw error
  }
}

export default mutation
