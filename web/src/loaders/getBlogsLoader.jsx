export async function getBlogsLoader() {
  const res = await fetch(`http://localhost:8080/blog`);
  if (res.ok) {
    const blogs = await res.json();
    return blogs;
  }
}
