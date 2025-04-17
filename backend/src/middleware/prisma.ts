import { createMiddleware } from 'hono/factory'
import { PrismaClient } from '../generated/prisma/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import Env from '../types/env'


const prismamiddleware = createMiddleware<Env>(async (c,next)=>{
  
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    c.set('prisma', prisma)
    await next()
})

export default prismamiddleware 