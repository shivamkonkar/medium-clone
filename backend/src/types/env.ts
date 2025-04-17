import { PrismaClient } from "@prisma/client/edge"

type Env = {
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  },
  Variables: {
    prisma: PrismaClient,
    id: string
  }
}


export default Env