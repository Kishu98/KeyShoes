export async function getBlogLoader({ params }) {
  const backend = import.meta.env.VITE_BACKEND;
  const res = await fetch(`${backend}/blog/${params.id}`);
  if (res.ok) {
    const blog = await res.json();
    return blog;
  }
}
