import { Avatar } from "./Avatar"

interface AvatarProps {
    authorName:string
}
export const Appbar = ({authorName}:AvatarProps)=>{
    return <div className="border border-slate-300 flex justify-between px-10">
        <div className="flex flex-col justify-center py-2">
            Medium
        </div>
        <div className="flex ">
        <div className="flex flex-col justify-center py-2">
            <button
                type="button"
                className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 "
                >
                New
            </button>
            </div>
            <div className="flex flex-col justify-center py-2">
            <Avatar authorName={authorName} size={40}/>
            </div>
        </div>
    </div>
}