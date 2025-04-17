import { createMiddleware } from 'hono/factory'
import { verify } from 'hono/jwt'
import Env from '../types/env'

const authmiddleware = createMiddleware<Env>( async (c,next)=>{
    const authToken = c.req.header("Authorization") || "  "
    if(!authToken){
        return c.json({error:"No token"})
    }
    const res = await verify(authToken.split(" ")[1],c.env.JWT_SECRET)
    if(res.id){
        c.set("id",String(res.id))
        await next()
    }
    c.status(403)
    return c.json({error:"Unauthorized"})
})

export default authmiddleware