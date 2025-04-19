import { BlogTemp } from "../hooks"
import { Avatar } from "./Avatar";

const shortMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const BlogComponent = (blog: BlogTemp) =>{
    return <div className="flex justify-center">
    <div className="grid grid-cols-12 px-10 w-full max-w-screen-2xl pt-12">
        <div className="col-span-8 ">
            <div className="text-5xl font-extrabold">
                {blog.title}
                <div className="text-slate-400 text-sm flex flex-col justify-center font-thin ">
                    {shortMonths[blog.publishedAt.getMonth()]} {blog.publishedAt.getDate()}, {blog.publishedAt.getFullYear()}
                </div>
            </div>
            <div>
                {blog.content}
            </div>
        </div>
        <div className="col-span-4">
            <div className="">Author</div>
            <div className="flex justify-between w-full">
                <div className="mr-3">
                <Avatar authorName={blog.authorName} size={20} />
                </div>
                
                <div className="m">
                    <div className="text-xl font-bold">{blog.authorName}</div>
                    <div className="text-slate-500">Writing psychiatrist | Mental health | Relationship building | Self Improvement | Contact: falessia179@gmail.com</div>
                </div>
            </div>
            
        </div>
    </div>
    </div>
}