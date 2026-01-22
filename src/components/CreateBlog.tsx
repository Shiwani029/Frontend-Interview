import { useState } from "react"
import { useCreateBlog } from "../hooks/useCreateBlog"

export default function CreateBlog() {
  const { mutate, isLoading } = useCreateBlog()

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [content, setContent] = useState("")
  const [category, setCategory] = useState("")
  const [coverImage, setCoverImage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    mutate({
      title,
      description,
      content,
      coverImage,
      category: category.split(","),
      date: new Date().toISOString(),
    })

    setTitle("")
    setDescription("")
    setContent("")
    setCategory("")
    setCoverImage("")
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border-t p-4 space-y-3"
    >
      <h2 className="font-semibold">Create New Blog</h2>

      <input
        className="w-full border p-2"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <input
        className="w-full border p-2"
        placeholder="Category (comma separated)"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />

      <input
        className="w-full border p-2"
        placeholder="Cover Image URL"
        value={coverImage}
        onChange={(e) => setCoverImage(e.target.value)}
        required
      />

      <textarea
        className="w-full border p-2"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <textarea
        className="w-full border p-2 h-24"
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />

      <button
        disabled={isLoading}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {isLoading ? "Creating..." : "Create Blog"}
      </button>
    </form>
  )
}