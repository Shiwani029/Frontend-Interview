import { useBlogs } from "../hooks/useBlogs"

type Props = {
  onSelect: (id: number) => void
}

export default function BlogList({ onSelect }: Props) {
  const { data, isLoading, isError } = useBlogs()

  if (isLoading) return <div className="p-4">Loading blogs...</div>
  if (isError) return <div className="p-4 text-red-500">Error loading blogs</div>

  return (
    <div className="w-1/3 border-r h-screen overflow-y-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Latest Articles</h2>

      <div className="space-y-4">
        {data?.map((blog) => (
          <div
            key={blog.id}
            onClick={() => onSelect(blog.id)}
            className="border rounded-lg p-3 hover:bg-gray-100 cursor-pointer"
          >
            <p className="text-sm text-blue-600">
              {blog.category.join(", ")}
            </p>
            <h3 className="font-medium">{blog.title}</h3>
            <p className="text-sm text-gray-600">
              {blog.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}