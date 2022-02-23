import { ObjectId } from 'mongodb'
import { User } from '../document'
import UserModel from '../model/User'

export type GetLoggedUser = () => Promise<User | null>;

export const getUser = async (userId: ObjectId) => {
  const user = await UserModel.findOne({ _id: userId })

  return user
}

export const getLazyLoggedUser = (userId: ObjectId | null): GetLoggedUser => {
  if (!userId) {
    return () => Promise.resolve(null)
  }

  let instance : any
  let promise : any

  return async (): Promise<User | null> => {
    if (instance) {
      return instance
    }

    if (promise) {
      return promise
    }

    promise = getUser(userId)

    instance = await promise

    return instance
  }
}
