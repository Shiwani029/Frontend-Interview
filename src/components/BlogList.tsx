import { useBlogs } from "../hooks/useBlogs"

type Props = {
  onSelect: (id: number) => void
}

export default function BlogList({ onSelect }: Props) {
  const { data, isLoading, isError } = useBlogs()

  if (isLoading) return <div className="p-4">Loading blogs...</div>
  if (isError) return <div className="p-4 text-red-500">Error loading blogs</div>

  return (
    <div className="p-6 bg-gray-50 h-full overflow-y-auto">
      <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>

      <div className="space-y-4">
        {data?.map((blog) => (
          <div
            key={blog.id}
            onClick={() => onSelect(blog.id)}
            className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            <p className="text-xs uppercase tracking-wide text-blue-600 mb-1">
              {blog.category.join(", ")}
            </p>

            <h3 className="text-lg font-semibold text-gray-800">
              {blog.title}
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              {blog.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}