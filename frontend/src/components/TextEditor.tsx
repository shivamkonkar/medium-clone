import axios from "axios";
import { useState } from "react";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export function TextEditor() {
    const [title,setTitle] =  useState("")
    const [content, setContent] = useState("");
    const navigate = useNavigate()
  const handlePublish = () => {
    axios.post(`${BACKEND_URL}api/v1/blog`,
        {
            title,
            content,
        },
        {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }
    ).then(response => {
        if(response.status == 200){
            navigate(`/api/v1/blog/${response.data.blog.id}`)
        }
    })
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <input
        onChange={(e)=> setTitle(e.target.value)}
        type= {"text"}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5"
        placeholder={"Write yor title"}
        required
        />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="bg-gray-50 mt-3 w-full h-40 p-3 border border-gray-300 rounded-lg outline-none resize-none"
        placeholder="Write your content here..."
      />
      <button
        onClick={handlePublish}
        className="mt-4 px-5 py-2.5 text-white bg-blue-600 hover:bg-blue-700 rounded-full font-medium text-sm focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        Publish Post
      </button>
    </div>
  );
}
