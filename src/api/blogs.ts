export type Blog = {
  id: number
  title: string
  category: string[]
  description: string
  date: string
  coverImage: string
  content: string
}

export const getBlogs = async (): Promise<Blog[]> => {
  const res = await fetch("http://localhost:3001/blogs")

  if (!res.ok) {
    throw new Error("Failed to fetch blogs")
  }

  return res.json()
}
export const getBlogById = async (id: number) => {
  const res = await fetch(`http://localhost:3001/blogs/${id}`)

  if (!res.ok) {
    throw new Error("Failed to fetch blog")
  }

  return res.json()
}
export const createBlog = async (blog: Omit<Blog, "id">) => {
  const res = await fetch("http://localhost:3001/blogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blog),
  })

  if (!res.ok) {
    throw new Error("Failed to create blog")
  }

  return res.json()
}