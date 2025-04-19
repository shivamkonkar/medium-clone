import { useParams } from "react-router-dom"
import { useBlog } from "../hooks"
import { BlogComponent } from "../components/BlogComponent";
import { Appbar } from "../components/Appbar";
import { BlogComponentSkeleton } from "../components/BlogComponentSkeleton";

export const BlogPage = () =>{
    const { id } = useParams(); 
    const { blog , loading} = useBlog(id || ""); 
    console.log(blog);
    

    return <div>
    <Appbar authorName="shivam" />
    {!loading && blog ? (
      <BlogComponent
        id={id || ""}
        title={blog.title}
        content={blog.content}
        publishedAt={new Date(blog.createdAt)}
        authorName={blog.author.name}
      />
    ) : (
      <BlogComponentSkeleton />
    )}
  </div>
}