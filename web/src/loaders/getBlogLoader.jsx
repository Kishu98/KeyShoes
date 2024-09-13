export async function getBlogLoader({ params }) {
  const res = await fetch(`http://localhost:8080/blog/${params.id}`);
  if (res.ok) {
    const blog = await res.json();
    return blog;
  }
}
