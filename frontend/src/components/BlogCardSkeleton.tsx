


export const BlogCardSkeleton = () =>{
    return     <div className="p-2 animate-pulse">
    <div className="font-thin flex">
      <div className="flex flex-col justify-center">
        <div className="h-10 w-10 bg-gray-200 rounded-full" />
      </div>
      <div className="text-sm flex flex-col justify-center h-4 bg-gray-200 rounded w-1/4 ml-2" />
      <div className="flex flex-col justify-center px-2">
        <div className="h-4 w-4 bg-gray-200 rounded" />
      </div>
      <div className="text-slate-400 text-sm flex flex-col justify-center h-4 bg-gray-200 rounded w-1/3 ml-2" />
    </div>
    <div className="text-xl font-bold pt-2 h-6 bg-gray-200 rounded mt-2" />
    <div className="text-md font-thin h-8 bg-gray-200 rounded mt-2" />
    <div className="text-slate-400 text-sm font-thin pb-4 pt-2 h-4 bg-gray-200 rounded mt-2" />
    <div className="border border-slate-200 h-2 mt-2 rounded" />
  </div>
}