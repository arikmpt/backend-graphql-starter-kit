
import { GraphQLMutationResolvers } from '../../graphql'
import UserModel from '../../../model/User'
import { InvalidInput } from '../../../utils'
import * as jwt from 'jsonwebtoken'
import { compareSync } from 'bcrypt'

const mutation: GraphQLMutationResolvers['login'] = async (
  root,
  { req }
) => {
  const { username, email, password } = req
  const user = await UserModel.findOne({ $or: [{ username: username }, { email: email }] })

  const reject = async (msg : string): Promise<never> => {
    throw new InvalidInput({ message: msg })
  }

  if (!user) {
    return reject('User not found')
  }

  if (compareSync(password || '', user.password)) {
    const token = jwt.sign(
      { id: user._id, username: user.username },
      'JWTK#Y',
      { expiresIn: '4h' }
    )

    return { token }
  }

  return reject('invalid credentials')
}

export default mutation
