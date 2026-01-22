import { useState } from "react"
import BlogList from "./components/BlogList"
import BlogDetail from "./components/BlogDetail"
import CreateBlog from "./components/CreateBlog"

function App() {
  const [selectedBlogId, setSelectedBlogId] = useState<number | null>(null)

  return (
    <div className="flex h-screen">
      <div className="flex flex-col w-1/3">
        <BlogList onSelect={setSelectedBlogId} />
        <CreateBlog />
      </div>

      <div className="flex-1 overflow-y-auto">
        <BlogDetail blogId={selectedBlogId} />
      </div>
    </div>
  )
}

export default App