export default function Time({ blog }) {
  const formattedDate = new Date(blog.created_at).toLocaleDateString("en-UK", {
    timeZone: "ASIA/kolkata",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  return (
    <>
      <time dateTime={blog.created_at}>{formattedDate}</time>
    </>
  );
}
