import { redirect, useLocation } from "react-router-dom";

export async function action({ request, params }) {
  let formData = await request.formData();
  let title = formData.get("title");
  let body = formData.get("body");
  console.log(title);
  console.log(body);

  switch (request.method) {
    case "POST": {
      await fetch(`http://localhost:8080/blog`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, body }),
      });

      return redirect("/blogs");
    }
    case "PUT": {
      await fetch(`http://localhost:8080/blog/${params.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "appication/json",
        },
        body: JSON.stringify({ title, body }),
      });

      return redirect(`/blogs/${params.id}`);
    }

    case "DELETE": {
      await fetch(`http://localhost:8080/blog/${params.id}`, {
        method: "DELETE",
      });

      return redirect("/blogs", { replace: true });
    }
  }
}
