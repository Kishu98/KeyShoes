import { Form, Link, useNavigate } from "react-router-dom";
import "./blogView.css";
import { MdDelete } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";

export function BlogView({ blog }) {
  const navigate = useNavigate();

  return (
    <>
      <li>
        <div className='dashBlogListItem'>
          <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
          <section className='dashActionBtns'>
            <Form method='delete' action={`${blog.id}`}>
              <button className='deleteBtn' type='submit' aria-label='Delete Blog'>
                <MdDelete className='deleteIcon' />
              </button>
            </Form>
            <button
              className='updateBtn'
              onClick={() => navigate(`${blog.id}/update`)}
              aria-label='Update Blog'
            >
              <RxUpdate className='updateIcon' />
            </button>
          </section>
        </div>
      </li>
    </>
  );
}
