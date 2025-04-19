export function BlogComponentSkeleton() {
    return (
      <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 w-full max-w-screen-2xl pt-12 animate-pulse">
          {/* Blog Content Section */}
          <div className="col-span-8">
            <div className="text-5xl font-extrabold h-10 bg-gray-200 rounded w-3/4 mb-2" />
            <div className="text-slate-400 text-sm flex flex-col justify-center font-thin h-4 bg-gray-200 rounded w-1/4 mb-6" />
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded w-full" />
              <div className="h-4 bg-gray-200 rounded w-11/12" />
              <div className="h-4 bg-gray-200 rounded w-2/3" />
              <div className="h-4 bg-gray-200 rounded w-3/4" />
            </div>
          </div>
  
          {/* Author Section */}
          <div className="col-span-4">
            <div className="h-6 bg-gray-200 rounded w-24 mb-4" />
            <div className="flex items-start space-x-3">
              <div className="h-10 w-10 bg-gray-200 rounded-full" />
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gray-200 rounded w-1/2" />
                <div className="h-3 bg-gray-200 rounded w-full" />
                <div className="h-3 bg-gray-200 rounded w-5/6" />
                <div className="h-3 bg-gray-200 rounded w-4/6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  