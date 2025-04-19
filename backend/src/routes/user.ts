import { Hono } from "hono";
import { PrismaClient } from '../generated/prisma/edge'
import Env from "../types/env";
import { sign } from "hono/jwt";
import { createHash } from "hono/utils/crypto";
import Algorithm from "../types/algorithm";
import {signupInput , signinInput} from '@shivamkonkar/medium-common/dist'

const userRouter = new Hono<Env>()

userRouter.post("/signup", async (c)=>{
    const body = await c.req.json()
    const { success } = signupInput.safeParse(body)
    if(success){
        const prisma:PrismaClient = c.get('prisma')
        const algorithm: Algorithm = { name: 'SHA-256', alias: 'sha256' }
        const hashedPassword = await createHash(body.password, algorithm )
        if(hashedPassword == null){
            c.status(404)
            return c.json({error : "Not valid password"})
        }
        const user = await prisma.user.create({
            data: {
                name:body.name||null,
                email: body.email,
                password: hashedPassword
            }
        })
        const token = await sign({id: user.id}, c.env.JWT_SECRET)
        return c.json({
            jwt:token
        })
    }
    else{
        c.status(404)
        return c.json({error: "Invalid inputs"})
    }

})

userRouter.post("/signin", async (c)=>{
    const body = await c.req.json()
    const { success } = signinInput.safeParse(body)
    if(success){
        const prisma:PrismaClient = c.get('prisma')
        const algorithm: Algorithm = { name: 'SHA-256', alias: 'sha256' }
        const user = await prisma.user.findUnique({
            where: {
                email : body.email
            }
        })
        
        if(!user){
            c.status(403)
            return c.json({error:"Email doesnt exist"})
        }
        else{
            const hashedPassword = await createHash(body.password,algorithm)
            if(hashedPassword != user.password){
                c.status(403)
                return c.json({error:"Incorrect password"})
            }
            const token = await sign({id: user.id}, c.env.JWT_SECRET)
            return c.json({
                jwt:token
             })
        }
    }
})



export default userRouter