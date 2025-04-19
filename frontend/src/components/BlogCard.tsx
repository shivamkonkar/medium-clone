import { Link } from "react-router-dom";
import { Avatar } from "./Avatar"


interface BlogCardProps {
    authorName : string,
    title : string,
    content : string,
    publishedAt : Date,
    id:string
}



const shortMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


export const BlogCard = ({
    authorName,
    title,
    content,
    publishedAt,
    id
}:BlogCardProps) => {
    return <Link to={`/blog/${id}`}>
    <div className="p-2">
        
        <div className="font-thin flex">
            <div className="flex flex-col justify-center ">
                <Avatar authorName={authorName} size={20}/>
            </div>
            <div className="text-sm flex flex-col justify-center">
                {authorName}  
            </div>
            <div className="flex flex-col justify-center px-2">
                <Circle />
            </div>
            <div className="text-slate-400 text-sm flex flex-col justify-center ">
                {shortMonths[publishedAt.getMonth()]} {publishedAt.getDate()}, {publishedAt.getFullYear()}
            </div>
            
        </div>
        <div className="text-xl font-bold pt-2">
            {title}
        </div>
        <div className="text-md font-thin">
            {content.slice(0,100)+"..."}
        </div>
        <div className="text-slate-400 text-sm font-thin pb-4 pt-2"> 
            {`${Math.ceil(content.length/100)} minute(s) read`}
        </div>
        <div className="border border-slate-200">
            
        </div>
    </div>
    </Link>
}



function Circle(){
    return <div className="h-1.5 w-1.5 rounded-full bg-slate-500"></div>
}