import { Hono } from "hono";
import { PrismaClient } from '../generated/prisma/edge'
import Env from "../types/env";
import { sign } from "hono/jwt";
import { createHash } from "hono/utils/crypto";
import Algorithm from "../types/algorithm";
import authmiddleware from '../middleware/auth'

const blogRouter = new Hono<Env>()

blogRouter.use('/*',authmiddleware)

blogRouter.post("/" , async (c)=>{
    const body = await c.req.json()
    const prisma : PrismaClient = c.get('prisma')
    const blog = await prisma.post.create({
        data:{
            title: body.title,
            content: body.content,
            author_id:c.get('id')
        }
    })
    return c.json({blog})
})

blogRouter.put("/", async (c)=>{
    const body = await c.req.json()
    const prisma : PrismaClient = c.get('prisma')
    const blog = await prisma.post.update({
        where:{
            author_id:c.get('id'),
            id:body.id
        },
        data:{
            title: body.title,
            content: body.content
        }
    })
    return c.json({blog})
})


blogRouter.get("/bulk", async (c)=>{
    const prisma: PrismaClient = c.get('prisma')
    const blogs = await prisma.post.findMany({
        select: {
            title:true,
            content:true,
            id:true,
            createdAt:true,
            author: {
                select: {
                    name : true
                }
            }
        }
    });
    return c.json({blogs:blogs})
})


blogRouter.get("/:id", async (c)=>{
    const id = c.req.param("id")
    if(id === undefined){
        c.status(404)
        return c.json({error:"Undefined id"})
    }
    const prisma : PrismaClient = c.get('prisma')
    const blog = await prisma.post.findUnique({
        where:{
            id:String(id)
        },
        select:{
            title:true,
            content:true,
            id:true,
            createdAt:true,
            author: {
                select: {
                    name : true
                }
            }
        }
    })

    if(!blog){
        c.status(404)
        return c.json({error:blog})
    }

    return c.json({blog})
})



export default blogRouter