import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";

export interface BlogTemp{
    id: string;
    title: string;
    content: string;
    publishedAt: Date;
    authorName:string
}


interface Blog {
    id: string;
    title: string;
    content: string;
    createdAt: string;
    author: {
      name: string;
    };
  }


export const useBlogs = () =>{
    const [loading,setLoading] = useState(true)
    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        axios.get(`${BACKEND_URL}api/v1/blog/bulk`, {
            headers:{
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(response=>{
            setBlogs(response.data.blogs)
            setLoading(false)
        })
    },[])

    return{
        loading,
        blogs
    }
}


export const useBlog = (id: string) => {
    const [loading,setLoading] = useState(true)
    const [blog, setBlog] = useState<Blog>()

    useEffect(()=>{
        axios.get(`${BACKEND_URL}api/v1/blog/${id}`, {
            headers:{
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(response=>{
            setBlog(response.data.blog)
            setLoading(false)
        })
    },[id])

    return{
        loading,
        blog
    }
}