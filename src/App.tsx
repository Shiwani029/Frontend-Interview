import { useState } from "react"
import BlogList from "./components/BlogList"
import BlogDetail from "./components/BlogDetail"
import CreateBlog from "./components/CreateBlog"

function App() {
  const [selectedBlogId, setSelectedBlogId] = useState<number | null>(null)

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      
      {/* Header */}
      <header className="border-b bg-white p-4">
       <h1 className="text-3xl font-extrabold tracking-tight text-center">
        <p className="text-center text-gray-500 text-sm mt-1"></p>
          CA Monk Blog
        </h1>
        <p className="text-center text-gray-500 text-sm">
          Stay updated with finance, accounting, and career growth
        </p>
      </header>

      {/* Main Content */}
      <div className="flex flex-1">
        
        {/* Left Panel */}
        <div className="flex flex-col w-1/3 border-r bg-gray-50">
          <BlogList onSelect={setSelectedBlogId} />
          <CreateBlog />
        </div>

        {/* Right Panel */}
        <div className="flex-1 overflow-y-auto bg-white">
          <BlogDetail blogId={selectedBlogId} />
        </div>

      </div>
    </div>
  )
}

export default App