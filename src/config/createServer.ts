import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { ApolloServer } from 'apollo-server-express'
import schema from '../graphql'
import createContext, { Context, RootDocument } from '../graphql/context'

const createServer = async (): Promise<Application> => {
  const app = express()
  const server = new ApolloServer({
    schema,
    // provide a custom context
    context: ({ req, res }: { req: Request; res: Response }): Promise<Context> => createContext(req, res),

    // provide a custom root document
    rootValue: (): RootDocument => null
  })
  await server.start()
  server.applyMiddleware({ app, path: '/graphql' })

  app.use(express.urlencoded({ extended: true }))
  app.use(bodyParser.json())
  app.use(cors())

  app.get('/check-health', (req: Request, res: Response) => {
    res.status(200).send('Application Up')
  })

  // handle 404
  app.get('*', (req: Request, res: Response) => {
    res.status(404).send('Opps! not found...')
  })

  return app
}

export { createServer }
