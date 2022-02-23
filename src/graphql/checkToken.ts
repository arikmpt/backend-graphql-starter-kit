import * as jwt from 'jsonwebtoken'

const checkToken = (token: string) => {
  if (token.toLowerCase().startsWith('bearer')) {
    token = token.slice('bearer'.length).trim()
  }

  const jwtPayload = <any>jwt.verify(token, 'JWTK#Y')

  return jwtPayload.id
}

export default checkToken
