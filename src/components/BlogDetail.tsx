import { useBlogById } from "../hooks/useBlogById"

type Props = {
  blogId: number | null
}

export default function BlogDetail({ blogId }: Props) {
  const { data, isLoading, isError } = useBlogById(blogId)

  if (!blogId) {
    return (
      <div className="p-6 text-gray-500">
        Select a blog to view details
      </div>
    )
  }

  if (isLoading) {
    return <div className="p-6">Loading blog...</div>
  }

  if (isError) {
    return <div className="p-6 text-red-500">Error loading blog</div>
  }

  return (
    <div className="p-6 space-y-4">
      <img
        src={data.coverImage}
        alt={data.title}
        className="w-full h-64 object-cover rounded"
      />

      <h1 className="text-2xl font-bold">{data.title}</h1>

      <p className="text-sm text-blue-600">
        {data.category.join(", ")} |{" "}
        {new Date(data.date).toDateString()}
      </p>

      <p className="text-gray-700">{data.description}</p>

      <div className="text-gray-800 whitespace-pre-line">
        {data.content}
      </div>
    </div>
  )
}