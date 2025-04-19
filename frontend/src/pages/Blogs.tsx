import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { BlogCardSkeleton } from "../components/BlogCardSkeleton";
import { useBlogs } from "../hooks"

interface Blog {
    title: string;
    content: string;
    id: string;
    createdAt:Date;
    author: {
      name: string;
    };
  }
  
export const Blogs = () =>{
    const {loading, blogs} = useBlogs()
    return <div>
        <Appbar authorName="shivamkonkar"/>
        {!loading?<div className="flex justify-center">
            <div className=" max-w-xl w-full ">
                {blogs.map((blog:Blog)=> <BlogCard id={blog.id}authorName={blog.author.name} title={blog.title} content={blog.content} publishedAt={new Date(blog.createdAt)} />)}
            </div>
        </div>:
        <div className="flex justify-center">
        <div className=" max-w-xl w-full ">
            <BlogCardSkeleton />
            <BlogCardSkeleton />
            <BlogCardSkeleton />
        </div>
        </div>}
        
    </div>
}